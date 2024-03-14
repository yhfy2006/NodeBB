
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
    return "<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t<i class=\"fa-regular fa-fw fa-message visible-xs-inline\" title=\"[[global:posts]]\"></i>\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"fw-bold\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postcount'] : null)])) + 
      "</span>\n\t<span class=\"hidden-xs text-lowercase fw-normal\">[[global:posts]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t<i class=\"fa fa-fw fa-user visible-xs-inline\" title=\"[[global:posters]]\"></i>\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"fw-bold\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postercount'] : null)])) + 
      "</span>\n\t<span class=\"hidden-xs text-lowercase fw-normal\">[[global:posters]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t<i class=\"fa fa-fw fa-eye visible-xs-inline\" title=\"[[global:views]]\"></i>\n\t<span class=\"fw-bold\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['viewcount'] : null)])) + 
      "</span>\n\t<span class=\"hidden-xs text-lowercase fw-normal\">[[global:views]]</span>\n</span>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
