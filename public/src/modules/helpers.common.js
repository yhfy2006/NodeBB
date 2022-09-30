'use strict';

module.exports = function (utils, Benchpress, relative_path) {
	Benchpress.setGlobal('true', true);
	Benchpress.setGlobal('false', false);

	const helpers = {
		displayMenuItem,
		buildMetaTag,
		buildLinkTag,
		stringify,
		escape,
		stripTags,
		buildCategoryIcon,
		generateCategoryBackground,
		generateChildrenCategories,
		generateTopicClass,
		membershipBtn,
		spawnPrivilegeStates,
		localeToHTML,
		renderTopicImage,
		renderDigestAvatar,
		userAgentIcons,
		buildAvatar,
		register,
		__escape: identity,
	};

	function identity(str) {
		return str;
	}

	function displayMenuItem(data, index) {
		const item = data.navigation[index];
		if (!item) {
			return false;
		}

		if (item.route.match('/users') && data.user && !data.user.privileges['view:users']) {
			return false;
		}

		if (item.route.match('/tags') && data.user && !data.user.privileges['view:tags']) {
			return false;
		}

		if (item.route.match('/groups') && data.user && !data.user.privileges['view:groups']) {
			return false;
		}

		return true;
	}

	function buildMetaTag(tag) {
		const name = tag.name ? 'name="' + tag.name + '" ' : '';
		const property = tag.property ? 'property="' + tag.property + '" ' : '';
		const content = tag.content ? 'content="' + tag.content.replace(/\n/g, ' ') + '" ' : '';

		return '<meta ' + name + property + content + '/>\n\t';
	}

	function buildLinkTag(tag) {
		const attributes = ['link', 'rel', 'as', 'type', 'href', 'sizes', 'title', 'crossorigin'];
		const [link, rel, as, type, href, sizes, title, crossorigin] = attributes.map(attr => (tag[attr] ? `${attr}="${tag[attr]}" ` : ''));

		return '<link ' + link + rel + as + type + sizes + title + href + crossorigin + '/>\n\t';
	}

	function stringify(obj) {
		// Turns the incoming object into a JSON string
		return JSON.stringify(obj).replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function escape(str) {
		return utils.escapeHTML(str);
	}

	function stripTags(str) {
		return utils.stripHTMLTags(str);
	}

	function buildCategoryIcon(category, size, rounded) {
		if (!category) {
			return '';
		}

		return `<span class="icon d-inline-flex justify-content-center align-items-center align-middle ${rounded}" style="${generateCategoryBackground(category)} width:${size}; height: ${size};">${category.icon ? `<i class="fa fa-fw ${category.icon}"></i>` : ''}</span>`;
	}

	function generateCategoryBackground(category) {
		if (!category) {
			return '';
		}
		const style = [];

		if (category.bgColor) {
			style.push('background-color: ' + category.bgColor);
		}

		if (category.color) {
			style.push('color: ' + category.color);
		}

		if (category.backgroundImage) {
			style.push('background-image: url(' + category.backgroundImage + ')');
			if (category.imageClass) {
				style.push('background-size: ' + category.imageClass);
			}
		}

		return style.join('; ') + ';';
	}

	function generateChildrenCategories(category) {
		let html = '';
		if (!category || !category.children || !category.children.length) {
			return html;
		}
		category.children.forEach(function (child) {
			if (child && !child.isSection) {
				const link = child.link ? child.link : (relative_path + '/category/' + child.slug);
				html += '<span class="category-children-item float-start">' +
					'<div role="presentation" class="icon float-start" style="' + generateCategoryBackground(child) + '">' +
					'<i class="fa fa-fw ' + child.icon + '"></i>' +
					'</div>' +
					'<a href="' + link + '"><small>' + child.name + '</small></a></span>';
			}
		});
		html = html ? ('<span class="category-children">' + html + '</span>') : html;
		return html;
	}

	function generateTopicClass(topic) {
		const fields = ['locked', 'pinned', 'deleted', 'unread', 'scheduled'];
		return fields.filter(field => !!topic[field]).join(' ');
	}

	// Groups helpers
	function membershipBtn(groupObj, btnClass = '') {
		if (groupObj.isMember && groupObj.name !== 'administrators') {
			return `<button class="btn btn-danger ${btnClass}" data-action="leave" data-group="${groupObj.displayName}" ${(groupObj.disableLeave ? ' disabled' : '')}><i class="fa fa-times"></i> [[groups:membership.leave-group]]</button>`;
		}

		if (groupObj.isPending && groupObj.name !== 'administrators') {
			return `<button class="btn btn-warning ${btnClass} disabled"><i class="fa fa-clock-o"></i> [[groups:membership.invitation-pending]]</button>`;
		} else if (groupObj.isInvited) {
			return `<button class="btn btn-link" data-action="rejectInvite" data-group="${groupObj.displayName}">[[groups:membership.reject]]</button><button class="btn btn-success" data-action="acceptInvite" data-group="${groupObj.name}"><i class="fa fa-plus"></i> [[groups:membership.accept-invitation]]</button>`;
		} else if (!groupObj.disableJoinRequests && groupObj.name !== 'administrators') {
			return `<button class="btn btn-success" data-action="join" data-group="${groupObj.displayName}"><i class="fa fa-plus"></i> [[groups:membership.join-group]]</button>`;
		}
		return '';
	}

	function spawnPrivilegeStates(member, privileges) {
		const states = [];
		for (const priv in privileges) {
			if (privileges.hasOwnProperty(priv)) {
				states.push({
					name: priv,
					state: privileges[priv],
				});
			}
		}
		return states.map(function (priv) {
			const guestDisabled = ['groups:moderate', 'groups:posts:upvote', 'groups:posts:downvote', 'groups:local:login', 'groups:group:create'];
			const spidersEnabled = ['groups:find', 'groups:read', 'groups:topics:read', 'groups:view:users', 'groups:view:tags', 'groups:view:groups'];
			const globalModDisabled = ['groups:moderate'];
			const disabled =
				(member === 'guests' && (guestDisabled.includes(priv.name) || priv.name.startsWith('groups:admin:'))) ||
				(member === 'spiders' && !spidersEnabled.includes(priv.name)) ||
				(member === 'Global Moderators' && globalModDisabled.includes(priv.name));

			return '<td class="text-center" data-privilege="' + priv.name + '" data-value="' + priv.state + '"><input autocomplete="off" type="checkbox"' + (priv.state ? ' checked' : '') + (disabled ? ' disabled="disabled"' : '') + ' /></td>';
		}).join('');
	}

	function localeToHTML(locale, fallback) {
		locale = locale || fallback || 'en-GB';
		return locale.replace('_', '-');
	}

	function renderTopicImage(topicObj) {
		if (topicObj.thumb) {
			return '<img src="' + topicObj.thumb + '" class="img-circle user-img" title="' + topicObj.user.username + '" />';
		}
		return '<img component="user/picture" data-uid="' + topicObj.user.uid + '" src="' + topicObj.user.picture + '" class="user-img" title="' + topicObj.user.username + '" />';
	}

	function renderDigestAvatar(block) {
		if (block.teaser) {
			if (block.teaser.user.picture) {
				return '<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%;" src="' + block.teaser.user.picture + '" title="' + block.teaser.user.username + '" />';
			}
			return '<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: ' + block.teaser.user['icon:bgColor'] + '; color: white; text-align: center; display: inline-block; border-radius: 50%;">' + block.teaser.user['icon:text'] + '</div>';
		}
		if (block.user.picture) {
			return '<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%;" src="' + block.user.picture + '" title="' + block.user.username + '" />';
		}
		return '<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: ' + block.user['icon:bgColor'] + '; color: white; text-align: center; display: inline-block; border-radius: 50%;">' + block.user['icon:text'] + '</div>';
	}

	function userAgentIcons(data) {
		let icons = '';

		switch (data.platform) {
			case 'Linux':
				icons += '<i class="fa fa-fw fa-linux"></i>';
				break;
			case 'Microsoft Windows':
				icons += '<i class="fa fa-fw fa-windows"></i>';
				break;
			case 'Apple Mac':
				icons += '<i class="fa fa-fw fa-apple"></i>';
				break;
			case 'Android':
				icons += '<i class="fa fa-fw fa-android"></i>';
				break;
			case 'iPad':
				icons += '<i class="fa fa-fw fa-tablet"></i>';
				break;
			case 'iPod': // intentional fall-through
			case 'iPhone':
				icons += '<i class="fa fa-fw fa-mobile"></i>';
				break;
			default:
				icons += '<i class="fa fa-fw fa-question-circle"></i>';
				break;
		}

		switch (data.browser) {
			case 'Chrome':
				icons += '<i class="fa fa-fw fa-chrome"></i>';
				break;
			case 'Firefox':
				icons += '<i class="fa fa-fw fa-firefox"></i>';
				break;
			case 'Safari':
				icons += '<i class="fa fa-fw fa-safari"></i>';
				break;
			case 'IE':
				icons += '<i class="fa fa-fw fa-internet-explorer"></i>';
				break;
			case 'Edge':
				icons += '<i class="fa fa-fw fa-edge"></i>';
				break;
			default:
				icons += '<i class="fa fa-fw fa-question-circle"></i>';
				break;
		}

		return icons;
	}

	function buildAvatar(userObj, size, rounded, classNames, component) {
		/**
		 * userObj requires:
		 *   - uid, picture, icon:bgColor, icon:text (getUserField w/ "picture" should return all 4), username
		 * size: a picture size in the form of a value with units (e.g. 64px, 4rem, etc.)
		 * rounded: true or false (optional, default false)
		 * classNames: additional class names to prepend (optional, default none)
		 * component: overrides the default component (optional, default none)
		 */

		// Try to use root context if passed-in userObj is undefined
		if (!userObj) {
			userObj = this;
		}

		const attributes = new Map([
			['alt', userObj.username],
			['title', userObj.username],
			['data-uid', userObj.uid],
			['loading', 'lazy'],
		]);
		const styles = [`--avatar-size: ${size};`];
		const attr2String = attributes => Array.from(attributes).reduce((output, [prop, value]) => {
			output += ` ${prop}="${value}"`;
			return output;
		}, '');
		classNames = classNames || '';

		attributes.set('class', `avatar ${classNames}${rounded ? ' avatar-rounded' : ''}`);

		let output = '';

		if (userObj.picture) {
			attributes.set('component', component || 'avatar/picture');
			output += '<img ' + attr2String(attributes) + ' src="' + userObj.picture + '" style="' + styles.join(' ') + '" onError="this.remove();" />';
		}

		attributes.set('component', component || 'avatar/icon');
		styles.push('background-color: ' + userObj['icon:bgColor'] + ';');
		output += '<span ' + attr2String(attributes) + ' style="' + styles.join(' ') + '">' + userObj['icon:text'] + '</span>';

		return output;
	}

	function register() {
		Object.keys(helpers).forEach(function (helperName) {
			Benchpress.registerHelper(helperName, helpers[helperName]);
		});
	}

	return helpers;
};
