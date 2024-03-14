
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
    return "<div component=\"chat/user/list\" class=\"border-start hidden d-flex flex-column gap-1 p-1 overflow-auto\" style=\"min-width:240px; width: 240px;\">\n\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a data-index=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['index'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" class=\"btn-ghost-sm ff-secondary d-flex justify-content-start align-items-center gap-2 " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['online'] : null) ?
            "online" :
            "") + 
          "\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\n\t\t<div>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</div>\n\t\t<div class=\"d-flex gap-1 flex-grow-1 text-nowrap text-truncate\">\n\t\t\t<span component=\"chat/user/list/username\" class=\"text-truncate\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</span>\n\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['isOwner'] : null) ?
            "<span><i class=\"fa fa-star text-warning\" data-bs-toggle=\"tooltip\" title=\"[[modules:chat.owner]]\"></i></span>" :
            "") + 
          "\n\t\t</div>\n\t</a>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
