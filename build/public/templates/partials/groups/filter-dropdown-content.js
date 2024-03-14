
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
    return "<div class=\"dropdown bottom-sheet\">\n\t<button type=\"button\" class=\"btn-ghost-sm ff-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t" + 
      (guard((context != null) ? context['selectedGroup'] : null) ?
        "\n\t\t<span class=\"fw-semibold\">" + 
          __escape(guard((context != null && context['selectedGroup'] != null) ? context['selectedGroup']['displayName'] : null)) + 
          "</span>\n\t\t" :
        "\n\t\t<span class=\"fw-semibold\">[[groups:all-groups]]</span>\n\t\t") + 
      " <span class=\"caret text-primary opacity-75\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n\t\t<li role=\"presentation\" class=\"user " + 
      (guard((context != null) ? context['selectedGroup'] : null) ?
        "" :
        "selected") + 
      "\">\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['allGroupsUrl'] : null)) + 
      "\">\n\t\t\t\t<div class=\"flex-grow-1\">[[groups:all-groups]]</div>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw " + 
      (guard((context != null) ? context['selectedGroup'] : null) ?
        "" :
        "fa-check") + 
      "\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li role=\"presentation\" class=\"user " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['url'] : null)) + 
          "\">\n\t\t\t\t<div class=\"flex-grow-1 d-inline-flex gap-1 align-items-center\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</div>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
