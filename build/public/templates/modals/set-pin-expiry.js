
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
    return "<div class=\"form-group\">\n\t<label class=\"form-label\" for=\"expiry\">[[topic:pin-modal-expiry]]</label>\n\t<div class=\"d-flex gap-1\">\n\t\t<input id=\"expiry-date\" type=\"date\" class=\"form-control\" />\n\t\t<input id=\"expiry-time\" type=\"time\" class=\"form-control\" />\n\t</div>\n\t<p class=\"form-text\">[[topic:pin-modal-help]]</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
