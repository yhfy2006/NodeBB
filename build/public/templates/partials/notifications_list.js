
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
    return (guard((context != null && context['notifications'] != null) ? context['notifications']['length'] : null) ?
        "" :
        "\n<div class=\"no-notifs text-center p-4 d-flex flex-column\">\n\t<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n\t<div class=\"text-xs fw-semibold text-muted\">[[notifications:no-notifs]]</div>\n</div>\n") + 
      "\n\n" + 
      compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notifications'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['readClass'] : null)) + 
          "\" data-nid=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['nid'] : null)) + 
          "\" data-path=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\" " + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['pid'] : null) ?
            "data-pid=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['pid'] : null)) + 
              "\"" :
            "") + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['tid'] : null) ?
            "data-tid=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['tid'] : null)) + 
              "\"" :
            "") + 
          ">\n\t<div class=\"d-flex gap-1 justify-content-between\">\n\t\t<div class=\"btn-ghost-sm d-flex gap-2 flex-grow-1 align-items-start\">\n\t\t\t<a class=\"flex-grow-0 flex-shrink-0\" href=\"" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t\t" + 
          ((guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null) && guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['from'] : null)) ?
            "\n\t\t\t\t<img class=\"avatar avatar-rounded\" style=\"--avatar-size: 32px;\" src=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null)) + 
              "\" />\n\t\t\t\t" :
            "\n\t\t\t\t" + 
              (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['icon'] : null) ?
                "\n\t\t\t\t<div class=\"avatar avatar-rounded\" style=\"--avatar-size: 32px;\"><i class=\"text-secondary fa " + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['icon'] : null)) + 
                  "\"></i></div>\n\t\t\t\t" :
                "\n\t\t\t\t<div class=\"avatar avatar-rounded\" style=\"--avatar-size: 32px; background-color: " + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:bgColor'] : null)) + 
                  ";\">" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:text'] : null)) + 
                  "</div>\n\t\t\t\t") + 
              "\n\t\t\t\t") + 
          "\n\t\t\t</a>\n\n\t\t\t<div class=\"d-flex flex-grow-1 flex-column align-items-start position-relative\">\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\" class=\"text-decoration-none d-inline-block text-reset text-break text-sm ff-sans stretched-link\" component=\"notifications/item/link\">\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['bodyShort'] : null)) + 
          "\n\t\t\t\t</a>\n\t\t\t\t<div class=\"text-xs text-muted\">" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['timeagoLong'] : null) ?
            __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['timeagoLong'] : null)) :
            "<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['datetimeISO'] : null)) + 
              "\"></span>") + 
          "</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['nid'] : null) ?
            "\n\t\t\t<button class=\"mark-read btn-ghost-sm flex-grow-0 flex-shrink-0 p-1\" style=\"width: 1.5rem; height: 1.5rem;\">\n\t\t\t\t<i class=\"unread fa fa-2xs fa-circle text-primary " + 
              (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['read'] : null) ?
                "hidden" :
                "") + 
              "\" aria-label=\"[[unread:mark-as-read]]\"></i>\n\t\t\t\t<i class=\"read fa fa-2xs fa-circle-o text-secondary " + 
              (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['read'] : null) ?
                "" :
                "hidden") + 
              "\" aria-label=\"[[unread:mark-as-unread]]\"></i>\n\t\t\t</button>\n\t\t\t" :
            "") + 
          "\n\t\t</div>\n\t</div>\n</div>\n" + 
          (index === length - 1 ?
            "" :
            "\n<hr class=\"my-1\" />\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
