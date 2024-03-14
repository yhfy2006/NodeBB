<div class="account w-100 mx-auto">
	<div data-widget-area="header">
		{{{each widgets.header}}}
		{{widgets.header.html}}
		{{{end}}}
	</div>

	<div class="cover position-absolute start-0 top-0 w-100" component="account/cover" style="background-image: url({cover:url}); background-position: {cover:position};">
		<div class="container">
			{{{ if allowCoverPicture }}}
			{{{ if canEdit }}}
			<div class="controls text-center">
				<span class="upload p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-upload"></i></span>
				<span class="resize p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-arrows"></i></span>
				<span class="remove p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-times"></i></span>
			</div>
			<div class="save text-bg-primary">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
			<div class="indicator text-bg-primary">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
			{{{ end }}}
			{{{ end }}}
		</div>
	</div>

	<div class="d-flex flex-column flex-md-row gap-2 w-100 pb-4 mb-4 mt-2 border-bottom">
		<div {{{ if (allowProfilePicture && isSelfOrAdminOrGlobalModerator)}}}component="profile/change/picture"{{{ end }}} class="avatar-wrapper border border-white border-4 rounded-circle position-relative align-self-center align-self-md-start hover-parent" style="margin-top: -75px;">
			{buildAvatar(@value, "142px", true)}
			{{{ if (allowProfilePicture && isSelfOrAdminOrGlobalModerator)}}}
			<div component="profile/change/picture" class="d-none d-md-block pointer p-2 rounded-1 opacity-75 text-bg-light position-absolute top-50 start-50 translate-middle hover-visible">
				<span class="upload"><i class="fa fa-fw fa-upload"></i></span>
			</div>
			{{{ end }}}
		</div>

		<div class="d-flex flex-column flex-md-row mt-1 justify-content-between w-100 gap-2">
			<div class="d-flex flex-grow-1 flex-row gap-2">
				<div class="d-flex flex-column gap-1">
					<h2 class="fullname fw-semibold fs-2 tracking-tight mb-0">{{{ if fullname }}}{fullname}{{{ else }}}{username}{{{ end }}}</h2>
					<div class="d-flex flex-wrap gap-1 text-sm align-items-center">
						<span class="username fw-bold">{{{ if !banned }}}@{username}{{{ else }}}[[user:banned]]{{{ end }}}</span>
						<div class="d-flex align-items-center gap-1 p-1">
							{{{ if selectedGroup.length }}}
							{{{ each selectedGroup }}}
							{{{ if ./slug }}}
							<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
							{{{ end }}}
							{{{ end }}}
							{{{ end }}}
						</div>
					</div>
					<div class="d-flex gap-2" component="user/badges"></div>
					{{{ if isAdminOrGlobalModeratorOrModerator }}}
					{{{ if banned }}}
					<div class="text-xm text-muted">
						{{{ if banned_until }}}
						[[user:info.banned-until, {banned_until_readable}]]
						{{{ else }}}
						[[user:info.banned-permanently]]
						{{{ end }}}
					</div>
					{{{ end }}}
					{{{ end }}}
				</div>
			</div>

			<div class="flex-shrink-0 d-flex gap-1 align-self-stretch align-self-md-start justify-content-end">
				{{{ if loggedIn }}}
				{{{ if !isSelf }}}
				<a component="account/unfollow" href="#" class="btn btn-info flex-fill{{{ if !isFollowing }}} hide{{{ end }}}">[[user:unfollow]]</a>
				<a component="account/follow" href="#" class="btn btn-primary flex-fill{{{ if isFollowing }}} hide{{{ end }}}">[[user:follow]]</a>
				{{{ end }}}
				{{{ end }}}

				{{{ if (canChat && !banned) }}}
				<div class="btn-group flex-fill">
					<a {{{ if hasPrivateChat }}}component="account/chat"{{{ else }}}component="account/new-chat"{{{ end }}} href="#" class="btn btn-light" role="button">[[user:chat]]</a>
					{{{ if hasPrivateChat}}}
					<button type="button" class="btn btn-light dropdown-toggle flex-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<i class="fa fa-caret-down"></i>
					</button>
					<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
						<li><a class="dropdown-item rounded-1" href="#" component="account/new-chat" role="menuitem"s>[[user:new-chat-with, {username}]]</a></li>
					</ul>
					{{{ end }}}
				</div>
				{{{ end }}}
				{{{ if !isSelf }}}
				{{{ if (isAdmin || (canBan || canMute ))}}}
				<div class="btn-group bottom-sheet">
	<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		<i class="fa fa-gear fa-fw"></i>
	</button>
	<ul class="dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links" role="menu">
		<li>
			<a class="dropdown-item rounded-1" href="{config.relative_path}/user/{userslug}/info" role="menuitem">[[user:account-info]]</a>
		</li>
		{{{ if (canBan || canMute) }}}
		<li role="separator" class="dropdown-divider"></li>
		{{{ end }}}
		{{{ if canBan }}}
		<li class="{{{ if banned }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/ban" href="#" role="menuitem">[[user:ban-account]]</a>
		</li>
		<li class="{{{ if !banned }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/unban" href="#" role="menuitem">[[user:unban-account]]</a>
		</li>
		{{{ end }}}
		{{{ if canMute }}}
		<li class="{{{ if muted }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/mute" href="#" role="menuitem">[[user:mute-account]]</a>
		</li>
		<li class="{{{ if !muted }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/unmute" href="#" role="menuitem">[[user:unmute-account]]</a>
		</li>
		{{{ end }}}
		{{{ if isAdmin }}}
		<li>
			<a component="account/delete-account" href="#" class="dropdown-item rounded-1" role="menuitem">[[user:delete-account-as-admin]]</a>
			<a component="account/delete-content" href="#" class="dropdown-item rounded-1" role="menuitem">[[user:delete-content]]</a>
			<a component="account/delete-all" href="#" class="dropdown-item rounded-1" role="menuitem">[[user:delete-all]]</a>
		</li>
		{{{ end }}}
	</ul>
</div>

				{{{ end }}}
				{{{ end }}}
			</div>
		</div>
	</div>

	<div class="d-flex flex-column flex-md-row">
		<div class="flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200">
	<div class="sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1" style="top: 1rem;z-index: 1;">
		<a href="{config.relative_path}/user/{userslug}" class="btn-ghost ff-secondary fw-semibold {{{ if template.account/profile }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:about]]</div>
		</a>
		<a href="{config.relative_path}/user/{userslug}/posts"class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/posts }}}active{{{ end }}}
			{{{ if template.account/best }}}active{{{ end }}}
			{{{ if template.account/controversial }}}active{{{ end }}}
			{{{ if template.account/upvoted }}}active{{{ end }}}
			{{{ if template.account/downvoted }}}active{{{ end }}}
			{{{ if template.account/bookmarks }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:posts]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.posts}">{humanReadableNumber(counts.posts)}</span>
		</a>
		<a href="{config.relative_path}/user/{userslug}/topics" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/topics }}}active{{{ end }}}
			{{{ if template.account/watched }}}active{{{ end }}}
			{{{ if template.account/ignored }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:topics]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.topics}">{humanReadableNumber(counts.topics)}</span>
		</a>
		<a href="{config.relative_path}/user/{userslug}/groups" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/groups }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:header.groups]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.groups}">{humanReadableNumber(counts.groups)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/followers" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/followers }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:followers]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.followers}">{humanReadableNumber(counts.followers)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/following" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/following }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:following]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.following}">{humanReadableNumber(counts.following)}</span>
		</a>

		{{{ if canEdit }}}
		<a href="{config.relative_path}/user/{userslug}/categories" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/categories }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:watched-categories]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.categoriesWatched}">{counts.categoriesWatched}</span>
		</a>
		{{{ if isSelf }}}
		<a href="{config.relative_path}/user/{userslug}/tags" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/tags }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:watched-tags]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.tagsWatched}">{counts.tagsWatched}</span>
		</a>
		{{{ end }}}

		<a href="{config.relative_path}/user/{userslug}/blocks" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/blocks }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:blocked-users]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.blocks}">{humanReadableNumber(counts.blocks)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/uploads" class="btn-ghost ff-secondary fw-semibold
			{{{ if template.account/uploads }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:uploads]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.uploaded}">{humanReadableNumber(counts.uploaded)}</span>
		</a>
		{{{ end }}}

		{{{ if (loggedIn && (!isSelf && !banned)) }}}
		<hr class="w-100 my-2"/>
		<a href="#" component="account/flag" class="btn-ghost-sm ff-secondary">
			<i class="flex-shrink-0 fa-solid fa-flag text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:flag-profile]]</div>
		</a>
		<a href="#" component="account/block" class="btn-ghost-sm ff-secondary {{{ if isBlocked }}}hidden{{{ end }}}">
			<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:block-user]]</div>
		</a>
		<a href="#" component="account/unblock" class="btn-ghost-sm ff-secondary {{{ if !isBlocked }}}hidden{{{ end }}}">
			<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:unblock-user]]</div>
		</a>
		{{{ end }}}

		{{{ if canEdit }}}
		<hr class="w-100 my-2"/>
		<a href="{config.relative_path}/user/{userslug}/edit" class="btn-ghost-sm ff-secondary text-xs
		{{{ if template.account/edit }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:edit-profile]]</div>
		</a>
		<a href="{config.relative_path}/user/{userslug}/settings" class="btn-ghost-sm ff-secondary text-xs
			{{{ if template.account/settings }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:settings]]</div>
		</a>
		{{{ end }}}

		{{{ each profile_links }}}
		<a href="{config.relative_path}/user/{userslug}/{./route}" class="btn-ghost-sm ff-secondary text-xs plugin-link {{{ if ./public }}}public{{{ else }}}private{{{ end }}} {{{ if (url == ./url) }}}active{{{ end }}}" id="{./id}">
			<div class="flex-grow-1">{./name}</div>
		</a>
		{{{end}}}
	</div>
</div>

		<div class="account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4" style="min-width: 0;">



<h3 class="fw-semibold fs-5">{{{ if isSelf }}}[[user:change-password]]{{{ else }}}[[pages:{template.name}, {username}]]{{{ end }}}</h3>
<div class="row">
	<div class="col-12 col-lg-4">
		<form class="edit-form">
			<!-- disables autocomplete on FF --><input type="password" style="display:none">

			{{{ if isSelf }}}
			<div class="mb-2">
				<label class="form-label fw-semibold text-xm" for="inputCurrentPassword">[[user:current-password]]</label>
				<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current-password]]" value="" {{{ if !hasPassword }}} disabled{{{ end }}}>
			</div>
			{{{ end }}}

			<div class="mb-2">
				<label class="form-label fw-semibold text-xm" for="inputNewPassword">[[user:new-password]]</label>
				<input class="form-control" type="password" id="inputNewPassword" placeholder="[[user:password]]" value="">
				<span class="form-feedback" id="password-notify"></span>
			</div>

			<div class="mb-2">
				<label class="form-label fw-semibold text-xm" for="inputNewPasswordAgain">[[user:confirm-password]]</label>
				<input class="form-control" type="password" id="inputNewPasswordAgain" placeholder="[[user:confirm-password]]" value="">
				<span class="form-feedback" id="password-confirm-notify"></span>
			</div>

			<div class="form-actions">
				<button id="changePasswordBtn" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change-password]]</button>
			</div>
		</form>
	</div>
</div>

		</div>
	</div>
</div>