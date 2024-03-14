
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
    return "<div class=\"mb-3\">\n\t<textarea class=\"form-control\" rows=\"6\" name=\"text\" placeholder=\"Enter Text / Markdown\"></textarea>\n</div>\n<div class=\"mb-3\">\n\t<label>\tCategory:</label>\n\t<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\n\t<p class=\"form-text\">Set the category ID you want to display this widget on.</p>\n</div>\n\n<div class=\"form-check mb-3\">\n\t<input class=\"form-check-input\" type=\"checkbox\" name=\"parseAsPost\" checked />\n\t<label class=\"form-check-label\">Parse as a Post? (Take all post-related plugins into effect)</label>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
