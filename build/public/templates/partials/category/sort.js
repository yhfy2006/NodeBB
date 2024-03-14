
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n\t<button class=\"btn-ghost-sm ff-secondary d-flex gap-2 align-items-center dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:topic-sort-option, " + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "]]\">\n\t\t<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n\t\t<span class=\"d-none d-md-inline fw-semibold\">" + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "</span>\n\t</button>\n\n\t<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"recently_replied\" role=\"menuitem\">\n\t\t\t\t<span class=\"flex-grow-1\">[[topic:recently-replied]]</span>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"recently_created\" role=\"menuitem\">\n\t\t\t\t<span class=\"flex-grow-1\">[[topic:recently-created]]</span>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"most_posts\" role=\"menuitem\">\n\t\t\t\t<span class=\"flex-grow-1\">[[topic:most-posts]]</span>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"most_votes\" role=\"menuitem\">\n\t\t\t\t<span class=\"flex-grow-1\">[[topic:most-votes]]</span>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-sort=\"most_views\" role=\"menuitem\">\n\t\t\t\t<span class=\"flex-grow-1\">[[topic:most-views]]</span>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-secondary\"></i>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
