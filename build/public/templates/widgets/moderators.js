
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
    return "<div class=\"d-flex flex-wrap gap-1 mb-2\">\n\t" + 
      compiled.blocks['moderators'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'moderators': function moderators(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['moderators'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a class=\"text-decoration-none\" data-uid=\"" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['uid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['moderators'] != null) ? context['moderators'][key0] : null), "24px", guard((context != null) ? context['true'] : null), "avatar-tooltip not-responsive"])) + 
          "</a>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
