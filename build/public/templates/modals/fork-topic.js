
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
    return "<div class=\"card tool-modal shadow\">\n\t<h5 class=\"card-header\">\n\t\t[[topic:fork-topic]]\n\t</h5>\n\t<div class=\"card-body\">\n\t\t<p>\n\t\t\t[[topic:fork-topic-instruction]]\n\t\t</p>\n\t\t<div class=\"mb-3\">\n\t\t\t<label class=\"form-label\" for=\"fork-title\"><strong>[[topic:title]]</strong></label>\n\t\t\t<input id=\"fork-title\" type=\"text\" class=\"form-control\" placeholder=\"[[topic:enter-new-topic-title]]\">\n\t\t</div>\n\t\t<div class=\"mb-3\">\n\t\t\t<label class=\"form-label\"><strong>[[category:category]]</strong></label>\n\t\t\t<div>\n\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n\t<button type=\"button\" class=\"btn-ghost-sm ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <span component=\"category-selector-selected\">\n        " + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\n        <span class=\"category-item d-inline-flex align-items-center gap-1\">\n            " + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\n            <span class=\"fw-semibold\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>\n        </span>\n        " :
        "\n        <i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          " text-primary\"></i>\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread-tools.select-category]]") + 
          "</span>\n        ") + 
      "\n    </span>\n</button>\n\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n\n<div class=\"dropdown-menu p-1\">\n    <ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n        <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n            <a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[search:no-matches]]</a>\n        </li>\n        " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n    </ul>\n</div>\n</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<strong id=\"fork-pids\"></strong>\n\t</div>\n\t<div class=\"card-footer text-end\">\n\t\t<button class=\"btn btn-link btn-sm\" id=\"fork_thread_cancel\">[[global:buttons.close]]</button>\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"fork_thread_commit\" disabled>[[topic:fork-topic]]</button>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n            <a class=\"dropdown-item rounded-1 " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" role=\"menuitem\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n                <span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n                    <div class=\"category-item d-inline-flex align-items-center gap-1\">\n                        " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n                        " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n                        " :
            "") + 
          "\n                        " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n                    </div>\n                </span>\n            </a>\n        </li>\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
