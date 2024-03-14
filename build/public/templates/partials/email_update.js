
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
    return "<div>\n\t" + 
      (guard((context != null) ? context['hasPending'] : null) ?
        "\n\t<div class=\"alert alert-info\">\n\t\t<p>[[user:emailUpdate.pending]]</p>\n\t</div>\n\t" :
        "") + 
      "\n\t<p>[[user:emailUpdate.intro]]</p>\n\t" + 
      (guard((context != null) ? context['requireEmailAddress'] : null) ?
        "\n\t<p>[[user:emailUpdate.required]]</p>\n\t" :
        "\n\t<p>[[user:emailUpdate.optional]]</p>\n\t") + 
      "\n\t<div class=\"mb-3\">\n\t\t<label class=\"form-label\" for=\"email\">[[global:email]]</label>\n\t\t<input class=\"form-control\" type=\"text\" id=\"email\" name=\"email\" placeholder=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" value=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" />\n\t\t<p class=\"form-text\">[[user:emailUpdate.change-instructions]]</p>\n\t</div>\n\n\t" + 
      (guard((context != null) ? context['issuePasswordChallenge'] : null) ?
        "\n\t<div class=\"mb-3\">\n\t\t<label class=\"form-label\" for=\"password\">[[register:password]]</label>\n\t\t<input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" />\n\t\t<p class=\"form-text\">[[user:emailUpdate.password-challenge]]</p>\n\t</div>\n\t" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
