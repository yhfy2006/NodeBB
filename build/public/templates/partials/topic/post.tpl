{{{ if (!./index && widgets.mainpost-header.length) }}}
<div data-widget-area="mainpost-header">
	{{{ each widgets.mainpost-header }}}
	{widgets.mainpost-header.html}
	{{{ end }}}
</div>
{{{ end }}}

<div class="d-flex align-items-start gap-3">
	<div class="icon bg-body d-none d-sm-block rounded-circle" style="outline: 2px solid var(--bs-body-bg);">
		<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
			{buildAvatar(posts.user, "48px", true, "", "user/picture")}
			<span component="user/status" class="position-absolute translate-middle-y border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
		</a>
	</div>

	<div class="post-container d-flex flex-grow-1 flex-column w-100" style="min-width: 0;">
		<div class="d-flex align-items-center gap-1 flex-wrap w-100 post-header mt-1" itemprop="author" itemscope itemtype="https://schema.org/Person">
			<meta itemprop="name" content="{./user.username}">
			{{{ if ./user.userslug }}}<meta itemprop="url" content="{config.relative_path}/user/{./user.userslug}">{{{ end }}}

			<div class="icon bg-body d-sm-none">
				<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
					{buildAvatar(posts.user, "20px", true, "", "user/picture")}
					<span component="user/status" class="position-absolute translate-middle-y border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
				</a>
			</div>

			<span class="text-nowrap">
				<a class="fw-bold" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.displayname}</a>
			</span>

			{{{ each posts.user.selectedGroups }}}
			{{{ if posts.user.selectedGroups.slug }}}
			<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
			{{{ end }}}
			{{{ end }}}

			{{{ if posts.user.banned }}}
			<span class="badge bg-danger rounded-1">[[user:banned]]</span>
			{{{ end }}}

			<div class="d-flex gap-1 align-items-center">
				<span class="text-muted">
					{{{ if posts.toPid }}}
					{generateRepliedTo(@value, config.timeagoCutoff)}
					{{{ else }}}
					{generateWrote(@value, config.timeagoCutoff)}
					{{{ end }}}
				</span>

				<i component="post/edit-indicator" class="fa fa-edit text-muted{{{ if privileges.posts:history }}} pointer{{{ end }}} edit-icon {{{ if !posts.editor.username }}}hidden{{{ end }}}" title="[[global:edited-timestamp, {isoTimeToLocaleString(./editedISO, config.userLang)}]]"></i>
				<span data-editor="{posts.editor.userslug}" component="post/editor" class="visually-hidden">[[global:last-edited-by, {posts.editor.username}]] <span class="timeago" title="{isoTimeToLocaleString(posts.editedISO, config.userLang)}"></span></span>
			</div>

			<div>
				<span>
					{{{ if posts.user.custom_profile_info.length }}}
					&#124;
					{{{ each posts.user.custom_profile_info }}}
					{posts.user.custom_profile_info.content}
					{{{ end }}}
					{{{ end }}}
				</span>
			</div>
			<div class="d-flex align-items-center gap-1 flex-grow-1 justify-content-end">
				<span class="bookmarked opacity-0 text-primary"><i class="fa fa-bookmark-o"></i></span>
				<a href="{config.relative_path}/post/{./pid}" class="post-index text-muted d-none d-md-inline">#{increment(./index, "1")}</a>
			</div>
		</div>

		<div class="content mt-2 text-break" component="post/content" itemprop="text">
			{posts.content}
		</div>
	</div>
</div>

<div component="post/footer" class="post-footer border-bottom pb-2">
	{{{ if posts.user.signature }}}
	<div component="post/signature" data-uid="{posts.user.uid}" class="text-xs text-muted mt-2">{posts.user.signature}</div>
	{{{ end }}}

	<div class="d-flex">
		{{{ if !hideReplies }}}
		<a component="post/reply-count" data-target-component="post/replies/container" href="#" class="d-flex gap-2 align-items-center mt-2 btn-ghost ff-secondary border rounded-1 p-1 threaded-replies user-select-none text-muted text-decoration-none text-xs {{{ if (!./replies || shouldHideReplyContainer(@value)) }}}hidden{{{ end }}}">
			<span component="post/reply-count/avatars" class="avatars d-inline-flex gap-1 align-items-top {{{ if posts.replies.hasMore }}}hasMore{{{ end }}}">
				{{{each posts.replies.users}}}
				<span>{buildAvatar(posts.replies.users, "20px", true, "avatar-tooltip")}</span>
				{{{end}}}
				{{{ if posts.replies.hasMore}}}
				<span><i class="fa fa-ellipsis"></i></span>
				{{{ end }}}
			</span>

			<span class="ms-2 replies-count fw-semibold" component="post/reply-count/text" data-replies="{posts.replies.count}">{posts.replies.text}</span>
			<span class="ms-2 replies-last hidden-xs fw-semibold">[[topic:last-reply-time]] <span class="timeago" title="{posts.replies.timestampISO}"></span></span>

			<i class="fa fa-fw fa-chevron-down" component="post/replies/open"></i>
			<i class="fa fa-fw fa-chevron-up hidden" component="post/replies/close"></i>
			<i class="fa fa-fw fa-spin fa-spinner hidden" component="post/replies/loading"></i>
		</a>
		{{{ end }}}
	</div>

	<div component="post/replies/container" class="my-2 col-11 border rounded-1 p-3 hidden-empty"></div>

	<div component="post/actions" class="d-flex justify-content-end gap-1 post-tools">
		<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
		<a component="post/reply" href="#" class="btn-ghost-sm user-select-none {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:reply]]"><i class="fa fa-fw fa-reply text-primary"></i></a>
		<a component="post/quote" href="#" class="btn-ghost-sm user-select-none {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:quote]]"><i class="fa fa-fw fa-quote-right text-primary"></i></a>

		{{{ if !reputation:disabled }}}
		<div class="d-flex votes align-items-center">
			<a component="post/upvote" href="#" class="btn-ghost-sm {{{ if posts.upvoted }}}upvoted{{{ end }}}" title="[[topic:upvote-post]]">
				<i class="fa fa-fw fa-chevron-up text-primary"></i>
			</a>

			<meta itemprop="upvoteCount" content="{posts.upvotes}">
			<meta itemprop="downvoteCount" content="{posts.downvotes}">
			<a href="#" class="d-inline-block px-2 mx-1 btn-ghost-sm ff-secondary" component="post/vote-count" data-votes="{posts.votes}" title="[[global:voters]]">{posts.votes}</a>

			{{{ if !downvote:disabled }}}
			<a component="post/downvote" href="#" class="btn-ghost-sm {{{ if posts.downvoted }}}downvoted{{{ end }}}" title="[[topic:downvote-post]]">
				<i class="fa fa-fw fa-chevron-down text-primary"></i>
			</a>
			{{{ end }}}
		</div>
		{{{ end }}}

		<span component="post/tools" class="dropdown moderator-tools bottom-sheet d-inline-block {{{ if !./display_post_menu }}}hidden{{{ end }}}">
	<a class="btn-ghost-sm ff-secondary dropdown-toggle d-block" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[topic:post-tools]]"><i class="fa fa-fw fa-ellipsis-v text-primary"></i></a>
	<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-3"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-5"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-9"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-7"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-10"></div>
		</li>
		<li class="dropdown-divider"></li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-10"></div>
		</li>
	</ul>
</span>

	</div>
</div>

{{{ if (!./index && widgets.mainpost-footer.length) }}}
<div data-widget-area="mainpost-footer">
	{{{ each widgets.mainpost-footer }}}
	{widgets.mainpost-footer.html}
	{{{ end }}}
</div>
{{{ end }}}