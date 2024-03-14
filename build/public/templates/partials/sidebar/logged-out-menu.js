
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
    return "\n<li class=\"nav-item mx-2 order-last order-md-first\" title=\"[[global:login]]\" role=\"menuitem\">\n\t<a class=\"nav-link\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/login\" aria-label=\"[[global:login]]\">\n\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t<span class=\"position-relative\">\n\t\t\t\t<i class=\"fa fa-fw fa-sign-in\"></i>\n\t\t\t</span>\n\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:login]]</span>\n\t\t</span>\n\t</a>\n</li>\n<hr class=\"my-2 mx-2 visible-open\">\n" + 
      (guard((context != null) ? context['allowRegistration'] : null) ?
        "\n<li class=\"nav-item mx-2\" title=\"[[global:register]]\" role=\"menuitem\">\n\t<span class=\"text-xs visible-open\">[[login:dont-have-account]]</span>\n\t<a class=\"nav-link\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/register\" aria-label=\"[[global:register]]\">\n\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t<span class=\"position-relative\">\n\t\t\t\t<i class=\"fa fa-fw fa-user-plus\"></i>\n\t\t\t</span>\n\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:register]]</span>\n\t\t</span>\n\t</a>\n</li>\n<hr class=\"my-2 mx-2 visible-open\">\n" :
        "") + 
      "\n\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
        "\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['search:content'] : null) ?
            "\n<li component=\"sidebar/search\" class=\"nav-item mx-2 search dropstart position-relative\" title=\"[[global:header.search]]\" role=\"menuitem\">\n\t<a component=\"search/button\" id=\"search-button\" href=\"#\" role=\"button\" class=\"nav-link d-flex gap-2 align-items-center text-truncate\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[global:search]]\">\n\t<span>\n\t\t<i class=\"fa fa-search fa-fw\"></i>\n\t</span>\n\t<span class=\"nav-text small visible-open fw-semibold\">[[global:search]]</span>\n</a>\n<div class=\"search-dropdown dropdown-menu p-2 shadow\" role=\"menu\">\n\t<form component=\"search/form\" id=\"search-form\" class=\"d-flex justify-content-end align-items-center\" role=\"search\" method=\"GET\">\n\t\t<div component=\"search/fields\" class=\"w-100\" id=\"search-fields\">\n\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\" aria-label=\"[[search:type-to-search]]\">\n\n\t\t\t\t<a class=\"btn-ghost advanced-search-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/search\" title=\"[[search:advanced-search]]\">\n\t\t\t\t\t<i class=\"fa fa-gears fa-fw text-muted\"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container d-block mt-2 hidden\">\n\t\t\t\t<div class=\"form-check filter-category mb-2 ms-2\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" checked>\n\t\t\t\t\t<label class=\"form-check-label name text-sm\"></label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-outline-secondary hide\">[[global:search]]</button>\n\t\t</div>\n\t</form>\n</div>\n\n</li>\n" :
            "\n<li component=\"sidebar/search\" class=\"visible-open nav-item mx-2 search\">\n\t<div class=\"d-flex gap-2 py-1 px-2 align-items-center\" title=\"[[themes/harmony:login-register-to-search]]\">\n\t\t<i class=\"fa fa-fw fa-search\"></i>\n\t\t<span class=\"nav-text visible-open text-xs\">[[themes/harmony:login-register-to-search]]</span>\n\t</div>\n</li>\n") + 
          "\n" :
        "") + 
      "\n\n\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
