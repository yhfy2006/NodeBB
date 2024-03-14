
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
    return "<div class=\"popular-tags d-flex flex-column gap-2 mb-3\">\n" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<script>\n'use strict';\n/* globals app, socket*/\n(function() {\n\tfunction onLoad() {\n\t\tsetTimeout(function () {\n\t\t\t$('.popular-tags-bar').each(function () {\n\t\t\t\tconst bar = $(this);\n\t\t\t\tbar.css({ width: bar.attr('data-width') + '%' });\n\t\t\t});\n\t\t}, 100);\n\t}\n\n\tif (document.readyState === 'loading') {\n\t\tdocument.addEventListener('DOMContentLoaded', onLoad);\n\t} else {\n\t\tonLoad();\n\t}\n})();\n</script>\n";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"d-flex align-items-center gap-2\">\n\t\t<div class=\"w-75 p-1 border position-relative\">\n\t\t\t<div class=\"position-absolute bg-info opacity-25 start-0 top-0\" style=\"width: 100%; height:100%; z-index: 0;\"></div>\n\n\t\t\t<div data-width=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['widthPercent'] : null)) + 
          "\" class=\"popular-tags-bar position-absolute bg-info opacity-50 start-0 top-0\" style=\"transition: width 750ms ease-out; width: 0%; height:100%; z-index: 0;\"></div>\n\n\t\t\t<a style=\"background-color: transparent!important; z-index: 1;\" class=\"d-inline-block w-100 text-decoration-none text-bg-info position-relative\" href=\"" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "?tag=" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null))) + 
          "\"><span class=\"text-nowrap tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span></a>\n\t\t</div>\n\n\t\t<div class=\"text-center fw-bold p-1 text-end w-25 tag-topic-count border rounded\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</div>\n\t</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
