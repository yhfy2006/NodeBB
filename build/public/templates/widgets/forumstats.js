
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
    return "<div class=\"d-flex forum-stats flex-wrap mb-3 gap-4\">\n\t<div class=\"d-flex flex-1 gap-4\">\n\t\t<div class=\"flex-1\">\n\t\t\t<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['online'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['online'] : null)) + 
      "</h4>\n\t\t\t\t<span>[[global:online]]</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"flex-1\">\n\t\t\t<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['users'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['users'] : null)) + 
      "</h4>\n\t\t\t\t<span>[[global:users]]</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex flex-1 gap-4\">\n\t\t<div class=\"flex-1\">\n\t\t\t<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['topics'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['topics'] : null)) + 
      "</h4>\n\t\t\t\t<span>[[global:topics]]</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"flex-1\">\n\t\t\t<div class=\"stats-card text-center " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h4 class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['posts'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['posts'] : null)) + 
      "</h4>\n\t\t\t\t<span>[[global:posts]]</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
