<button type="button" class="btn-ghost-sm ff-secondary d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{{ if selectedTag }}}
    <span class="d-inline-flex align-items-center gap-1">
        <i class="fa fa-fw fa-tags text-primary"></i>
        <span class="visible-md-inline visible-lg-inline fw-semibold">{selectedTag.label}</span>
    </span>
    {{{ else }}}
    <i class="fa fa-fw fa-tags text-primary"></i>
    <span class="visible-md-inline visible-lg-inline fw-semibold">[[tags:all-tags]]</span>
    {{{ end }}}
</button>

<div component="tag/filter/search" class="hidden position-absolute top-0">
    <input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>

<div class="dropdown-menu p-1">
    <ul component="tag/filter/list" class="list-unstyled mb-0 text-sm overflow-auto ghost-scrollbar" role="menu" style="max-height: 500px;" role="menu">
        <li role="presentation" data-tag="">
            <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="#">
                <span class="flex-grow-1">[[tags:all-tags]]</span>
                <i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedTag }}}invisible{{{ end }}}"></i>
            </a>
        </li>
        {{{ each tagItems }}}
        <li role="presentation" data-tag="{./valueEscaped}">
            <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menuitem" href="#">
                <span component="tag-markup" class="flex-grow-1">
                    <div class="d-inline-flex align-items-center gap-1">
                        {./valueEscaped}
                    </div>
                </span>
                <i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}invisible{{{ end }}}"></i>
            </a>
        </li>
        {{{ end }}}
    </ul>
</div>