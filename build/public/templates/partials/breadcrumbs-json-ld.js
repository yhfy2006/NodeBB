
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
    return "<script type=\"application/ld+json\">\n{\n\t\"@context\": \"https://schema.org\",\n\t\"@type\": \"BreadcrumbList\",\n\t\"itemListElement\": [\n\t\t{\n\t\t\t\"@type\": \"ListItem\",\n\t\t\t\"position\": 1,\n\t\t\t\"name\": \"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "\",\n\t\t\t\"item\": \"" + 
      __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs']['0'] != null) ? context['breadcrumbs']['0']['url'] : null)) + 
      "\"\n\t\t}\n\t\t" + 
      compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
      "\n\t]\n}\n</script>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          (index === 0 ?
            "" :
            "\n\t\t,{\n\t\t\t\"@type\": \"ListItem\",\n\t\t\t\"position\": " + 
              __escape(helper(context, helpers, 'increment', [index, "1"])) + 
              ",\n\t\t\t\"name\": \"" + 
              __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)])) + 
              "\"\n\t\t\t" + 
              (index === length - 1 ?
                "" :
                "\n\t\t\t,\"item\": \"" + 
                  __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
                  "\"\n\t\t\t") + 
              "\n\t\t}\n\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
