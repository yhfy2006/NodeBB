
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
    return "<div component=\"settings/main/header\" class=\"d-flex flex-wrap justify-content-between border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center mb-3\">\n\t<div class=\"px-0\">\n\t\t<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n\t</div>\n\t<div class=\"px-0 px-md-3\">\n\t\t<div class=\"d-flex gap-1\">\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary text-nowrap\" data-action=\"create\">\n\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\t[[admin/settings/api:create-token]]\n\t\t\t</button>\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary text-nowrap\">[[admin/admin:save-changes]]</button>\n\t\t</div>\n\t</div>\n</div>\n\n<form role=\"form\" class=\"core-api-settings px-lg-4\">\n\t<p class=\"lead\">[[admin/settings/api:lead-text]]</p>\n\t<p>[[admin/settings/api:intro]]</p>\n\t<p class=\"text-danger\">[[admin/settings/api:warning]]</p>\n\t<div class=\"d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2 mb-3\">\n\t\t<a class=\"\" href=\"https://docs.nodebb.org/api\">\n\t\t\t<i class=\"fa fa-external-link\"></i>\n\t\t\t[[admin/settings/api:docs]]\n\t\t</a>\n\t</div>\n\n\t<div class=\"mb-3\">\n\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t<input id=\"requireHttps\" class=\"form-check-input\" type=\"checkbox\" id=\"requireHttps\" name=\"requireHttps\" />\n\t\t\t<label for=\"requireHttps\" class=\"form-check-label\">[[admin/settings/api:require-https]]</label>\n\t\t\t<p class=\"form-text\">[[admin/settings/api:require-https-caveat]]</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"table-responsive mb-3\">\n\t\t<table class=\"table table-sm text-sm\" data-component=\"acp/tokens\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>[[admin/settings/api:token]]</th>\n\t\t\t\t\t<th>[[admin/settings/api:description]]</th>\n\t\t\t\t\t<th>[[admin/settings/api:uid]]</th>\n\t\t\t\t\t<th>[[admin/settings/api:last-seen]]</th>\n\t\t\t\t\t<th>[[admin/settings/api:created]]</th>\n\t\t\t\t\t<th>[[admin/settings/api:actions]]</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t" + 
      compiled.blocks['tokens'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n\t") + 
      "\n</div>\n</form>\n";
  }

  compiled.blocks = {
    'tokens': function tokens(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tokens'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<tr data-token=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "\" class=\"\">\n\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-action=\"copy\" data-clipboard-text=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "\"><i class=\"fa fa-fw fa-clipboard\" aria-hidden=\"true\"></i></button>\n\t\t\t\t\t\t<div class=\"vr me-3\" aria-hidden=\"true\"></div>\n\t\t\t\t\t\t<span class=\"user-select-all\">" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"align-middle\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['description'] : null) ?
            "\n\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['description'] : null)) + 
              "\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t<em class=\"text-secondary\">[[admin/settings/api:no-description]]</em>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"align-middle\">\n\t\t\t\t\t\t" + 
          ((guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['uid'] : null) == "0") ?
            "\n\t\t\t\t\t\t<em>[[admin/settings/api:master-token]]</em>\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['uid'] : null)) + 
              "\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"align-middle\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['lastSeen'] : null) ?
            "\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['lastSeenISO'] : null)) + 
              "\"></span>\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t<em class=\"text-secondary\">[[admin/settings/api:last-seen-never]]</em>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"align-middle\">\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"text-nowrap\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"edit\" title=\"[[admin/settings/api:edit]]\">\n\t\t\t\t\t\t\t<i class=\"fa fa-edit text-primary\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"roll\" title=\"[[admin/settings/api:roll]]\">\n\t\t\t\t\t\t\t<i class=\"fa fa-refresh text-primary\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"delete\">\n\t\t\t\t\t\t\t<i class=\"fa fa-trash text-danger\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
