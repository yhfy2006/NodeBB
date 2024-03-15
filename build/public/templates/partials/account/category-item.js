
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-parent-cid=\"" + 
      __escape(guard((context != null) ? context['parentCid'] : null)) + 
      "\" class=\"category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n\t<div class=\"content depth-" + 
      __escape(guard((context != null) ? context['depth'] : null)) + 
      " d-flex gap-2\">\n\t\t<div class=\"flex-grow-1 align-items-start d-flex gap-2\">\n\t\t\t<div>\n\t\t\t\t" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-1"])) + 
      "\n\t\t\t</div>\n\t\t\t<div class=\"d-grid gap-0\">\n\t\t\t\t<div class=\"title fw-semibold\">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n<a class=\"text-reset\" href=\"" + 
          (guard((context != null) ? context['link'] : null) ?
            __escape(guard((context != null) ? context['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null))) + 
          "\" itemprop=\"url\">" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</a>\n") + 
      "\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n\t\t\t\t<div class=\"description text-muted text-xs w-100\">" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"flex-shrink-0\">\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n\t<button class=\"btn-ghost-sm ff-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t<span component=\"category/watching/menu\" class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-bell-o text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:watching]]</span></span>\n\n\t\t<span component=\"category/tracking/menu\"  class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isTracked'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-inbox text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:tracking]]</span></span>\n\n\t\t<span component=\"category/notwatching/menu\"  class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-clock-o text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:not-watching]]</span></span>\n\n\t\t<span component=\"category/ignoring/menu\"  class=\"d-flex gap-2 align-items-center " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "" :
            " hidden") + 
          "\"><i class=\"fa fa-fw fa-eye-slash text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[category:ignoring]]</span></span>\n\t</button>\n\n\t<ul class=\"dropdown-menu p-1 text-sm " + 
          (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
            "dropdown-menu-end" :
            "") + 
          "\" role=\"menu\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/watching\" data-state=\"watching\" role=\"menuitem\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-o text-secondary\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[category:watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-secondary text-xs\">[[category:watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/tracking\" data-state=\"tracking\" role=\"menuitem\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-inbox text-secondary\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[category:tracking]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-secondary text-xs\">[[category:tracking.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"category/tracking/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isTracked'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\" role=\"menuitem\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-clock-o text-secondary\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[category:not-watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-secondary text-xs\">[[category:not-watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\" role=\"menuitem\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash text-secondary\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[category:ignoring]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-secondary text-xs\">[[category:ignoring.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\t<hr />\n</li>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})