<div class="row events px-lg-4">
	<div class="col-lg-9">
		<h5><i class="fa fa-calendar-o"></i> [[admin/advanced/events:events]]</h5>
		{{{ if !events.length }}}
		<div class="alert alert-info">[[admin/advanced/events:no-events]]</div>
		{{{ end }}}
		<div class="events-list">
			{{{ each events }}}
			<div class="card mb-3" data-eid="{events.eid}">
				<div class="card-body">
					<div class="mb-3 d-flex flex-wrap justify-content-between align-items-center gap-1">
						<div>
							<span class="badge bg-primary">#{events.eid}</span>
							<span class="badge bg-info">{events.type}</span>
							<span class="badge bg-info">uid {events.uid}</span>
							{{{ if events.ip }}}<span class="badge bg-info">{events.ip}</span>{{{ end }}}
							<a href="{config.relative_path}/user/{events.user.userslug}" target="_blank">{buildAvatar(events.user, "24px", true)}</a>
							<a href="{config.relative_path}/user/{events.user.userslug}" target="_blank">{events.user.username}</a>
							<span class="text-xs">{events.timestampISO}</span>
						</div>
						<div>
							<button class="btn btn-light btn-sm delete-event ms-2 pointer"><i class="fa fa-trash-o text-danger"></i></button>
						</div>
					</div>
					<pre class="text-bg-light p-3" style="white-space:pre-wrap;">{events.jsonString}</pre>
				</div>
			</div>
			{{{ end }}}
			<div component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}">
	<ul class="pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center">
		<li class="page-item previous float-start{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link rounded fw-secondary px-3" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			{{{ if pagination.pages.separator }}}
			<li component="pagination/select-page" class="page-item page select-page">
				<a class="page-link rounded fw-secondary px-3" href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			{{{ else }}}
			<li class="page-item page{{{ if pagination.pages.active }}} active{{{ end }}}" >
				<a class="page-link rounded fw-secondary px-3" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			{{{ end }}}
		{{{end}}}

		<li class="page-item next float-end {{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link rounded fw-secondary px-3" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	{{{ if !template.topic }}}
	<ul class="pagination pagination-sm hidden-md hidden-lg justify-content-center">
		<li class="page-item first{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="page-item previous{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page-item page select-page">
			<a class="page-link fw-secondary"  href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="page-item next{{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="page-item last{{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
	{{{ end }}}
</div>
		</div>
	</div>
	<div class="col-lg-3 acp-sidebar">
		<div class="card">
			<h5 class="card-header">[[admin/advanced/events:filters]]</h5>
			<div class="card-body">
				<form role="form" id="filters">
					<div class="mb-3">
						<label class="form-label" for="type">[[admin/advanced/events:filter-type]]</label>
						<select id="type" name="type" class="form-select">
							{{{ each types }}}
							<option value="{./value}" {{{ if ./selected }}}selected{{{ end }}}>{./name} - ({./count}) </option>
							{{{ end }}}
						</select>
					</div>
					<div class="mb-3">
						<label class="form-label" for="start">[[admin/advanced/events:filter-start]]</label>
						<input type="date" id="start" name="start" value="{query.start}" class="form-control" />
					</div>
					<div class="mb-3">
						<label class="form-label" for="end">[[admin/advanced/events:filter-end]]</label>
						<input type="date" id="end" name="end" value="{query.end}" class="form-control" />
					</div>
					<div class="mb-3">
						<label class="form-label" for="perPage">[[admin/advanced/events:filter-per-page]]</label>
						<input type="text" id="perPage" name="perPage" value="{query.perPage}" class="form-control" />
					</div>
					<div class="d-grid gap-1">
						<button type="submit" class="btn btn-sm btn-light" id="apply"><i class="fa fa-filter text-primary"></i> [[admin/advanced/events:filters-apply]]</button>
						<button class="btn btn-sm btn-light" data-action="clear">
							<i class="fa fa-trash text-danger"></i> [[admin/advanced/events:delete-events]]
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
