
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
    return "<div component=\"composer\" class=\"composer pb-3 h-100 " + 
      (guard((context != null) ? context['resizable'] : null) ?
        " resizable" :
        "") + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "" :
        " reply") + 
      "\"" + 
      (guard((context != null) ? context['disabled'] : null) ?
        "" :
        " style=\"visibility: inherit;\"") + 
      ">\n\t<div class=\"composer-container d-flex flex-column gap-1 h-100\">\n\t\t<form id=\"compose-form\" method=\"post\">\n\t\t\t" + 
      (guard((context != null) ? context['pid'] : null) ?
        "\n\t\t\t<input type=\"hidden\" name=\"pid\" value=\"" + 
          __escape(guard((context != null) ? context['pid'] : null)) + 
          "\" />\n\t\t\t<input type=\"hidden\" name=\"thumb\" value=\"" + 
          __escape(guard((context != null) ? context['thumb'] : null)) + 
          "\" />\n\t\t\t" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null) ? context['tid'] : null) ?
        "\n\t\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
          __escape(guard((context != null) ? context['tid'] : null)) + 
          "\" />\n\t\t\t" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null) ? context['cid'] : null) ?
        "\n\t\t\t<input type=\"hidden\" name=\"cid\" value=\"" + 
          __escape(guard((context != null) ? context['cid'] : null)) + 
          "\" />\n\t\t\t" :
        "") + 
      "\n\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\n\t\t</form>\n\n\t\t<div class=\"title-container align-items-center gap-2 d-flex\">\n\t" + 
      (guard((context != null) ? context['isTopic'] : null) ?
        "\n\t<div class=\"category-list-container " + 
          (guard((context != null && context['template'] != null) ? context['template']['compose'] : null) ?
            "" :
            "d-none d-md-block") + 
          " align-self-center\">\n\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n\t<button type=\"button\" class=\"btn-ghost-sm ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <span component=\"category-selector-selected\">\n        " + 
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
          "\n    </ul>\n</div>\n</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null) ? context['showHandleInput'] : null) ?
        "\n\t<div data-component=\"composer/handle\">\n\t\t<input class=\"handle form-control h-100 border-0 shadow-none\" type=\"text\" placeholder=\"[[topic:composer.handle-placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['handle'] : null)) + 
          "\" />\n\t</div>\n\t" :
        "") + 
      "\n\n\t<div data-component=\"composer/title\" class=\"position-relative flex-1\" style=\"min-width: 0;\">\n\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "\n\t\t<input class=\"title form-control h-100 rounded-1 shadow-none\" type=\"text\" placeholder=\"[[topic:composer.title-placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['topicTitle'] : null)) + 
          "\" />\n\t\t" :
        "\n\t\t<span class=\"" + 
          (guard((context != null && context['template'] != null) ? context['template']['compose'] : null) ?
            "d-block" :
            "d-none d-md-block") + 
          " title h-100 text-truncate\">" + 
          (guard((context != null) ? context['isEditing'] : null) ?
            "[[topic:composer.editing-in, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]" :
            "[[topic:composer.replying-to, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]") + 
          "</span>\n\t\t") + 
      "\n\t\t<div id=\"quick-search-container\" class=\"quick-search-container mt-2 dropdown-menu d-block p-2 hidden\">\n\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"" + 
      (guard((context != null && context['template'] != null) ? context['template']['compose'] : null) ?
        "d-flex" :
        "d-none d-md-flex") + 
      " action-bar gap-1 align-items-center\">\n\t\t<button class=\"btn btn-sm btn-link text-body fw-semibold composer-minimize\" data-action=\"hide\"><i class=\"fa fa-angle-down\"></i> <span class=\"d-none d-md-inline\">[[topic:composer.hide]]</span></button>\n\t\t<button class=\"btn btn-sm btn-link composer-discard text-body fw-semibold\" data-action=\"discard\"><i class=\"fa fa-trash\"></i> <span class=\"d-none d-md-inline\">[[topic:composer.discard]]</button>\n\t\t<div class=\"btn-group btn-group-sm\" component=\"composer/submit/container\">\n\t\t\t<button class=\"btn btn-primary composer-submit fw-bold " + 
      ((guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null) || guard((context != null) ? context['canSchedule'] : null)) ?
        "" :
        "rounded-1") + 
      "\" data-action=\"post\" data-text-variant=\" [[topic:composer.schedule]]\"><i class=\"fa fa-check\"></i> <span class=\"d-none d-md-inline\">[[topic:composer.submit]]</span></button>\n\t\t\t<div component=\"composer/submit/options/container\" data-submit-options=\"" + 
      __escape(guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null)) + 
      "\" class=\"btn-group btn-group-sm " + 
      ((guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null) || guard((context != null) ? context['canSchedule'] : null)) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t\t\t\t<span class=\"sr-only\">[[topic:composer.additional-options]]</span>\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1\" role=\"menu\">\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1 display-scheduler " + 
      (guard((context != null) ? context['canSchedule'] : null) ?
        "" :
        "hidden") + 
      "\" role=\"menuitem\">[[topic:composer.post-later]]</a></li>\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1 cancel-scheduling hidden\" role=\"menuitem\">[[modules:composer.cancel-scheduling]]</a></li>\n\t\t\t\t\t" + 
      compiled.blocks['submitOptions'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\t\t<div class=\"d-flex justify-content-between gap-2 align-items-center formatting-bar m-0\">\n\t<ul class=\"list-unstyled mb-0 d-flex formatting-group gap-2 overflow-auto\">\n\t\t" + 
      compiled.blocks['formatting'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:image'] : null) ?
        "\n\t\t<li title=\"[[modules:composer.upload-picture]]\">\n\t\t\t<button data-format=\"picture\" class=\"img-upload-btn btn btn-sm btn-link text-reset\" aria-label=\"[[modules:composer.upload-picture]]\">\n\t\t\t\t<i class=\"fa fa-file-image-o\"></i>\n\t\t\t</button>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:file'] : null) ?
        "\n\t\t<li title=\"[[modules:composer.upload-file]]\">\n\t\t\t<button data-format=\"upload\" class=\"file-upload-btn btn btn-sm btn-link text-reset\" aria-label=\"[[modules:composer.upload-file]]\">\n\t\t\t\t<i class=\"fa fa-file-o\"></i>\n\t\t\t</button>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\n\t\t<form id=\"fileForm\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<input type=\"file\" id=\"files\" name=\"files[]\" multiple class=\"hide\"/>\n\t\t</form>\n\t</ul>\n\t<div class=\"d-flex align-items-center gap-1\">\n\t\t<div class=\"draft-icon m-2 hidden-xs hidden-sm\"></div>\n\t\t<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"preview\">\n\t\t\t<i class=\"fa fa-eye\"></i>\n\t\t\t<span class=\"d-none d-md-inline show-text\">[[modules:composer.show-preview]]</span>\n\t\t\t<span class=\"d-none d-md-inline hide-text\">[[modules:composer.hide-preview]]</span>\n\t\t</button>\n\t\t" + 
      (guard((context != null) ? context['composer:showHelpTab'] : null) ?
        "\n\t\t<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"help\">\n\t\t\t<i class=\"fa fa-question\"></i>\n\t\t\t<span class=\"d-none d-md-inline\">[[modules:composer.help]]</span>\n\t\t</button>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n\n\n\t\t<div class=\"write-preview-container d-flex gap-2 flex-grow-1 overflow-auto\">\n\t<div class=\"write-container d-flex d-md-flex w-50 position-relative\">\n\t\t<div component=\"composer/post-queue/alert\" class=\"m-2 alert alert-info fade pe-none position-absolute top-0 start-0 alert-dismissible\">[[modules:composer.post-queue-alert]]<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button></div>\n\t\t<div class=\"draft-icon position-absolute end-0 top-0 mx-2 my-1 hidden-md hidden-lg\"></div>\n\t\t<textarea class=\"write shadow-none rounded-1 w-100 form-control\" placeholder=\"[[modules:composer.textarea.placeholder]]\">" + 
      __escape(guard((context != null) ? context['body'] : null)) + 
      "</textarea>\n\t</div>\n\t<div class=\"preview-container d-none d-md-flex w-50\">\n\t\t<div class=\"preview w-100 overflow-auto\"></div>\n\t</div>\n</div>\n\n\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "\n\t\t<div class=\"tag-row\">\n\t<div class=\"tags-container d-flex align-items-center " + 
          (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
            "haswhitelist" :
            "") + 
          "\">\n\t\t<div class=\"btn-group dropup me-2 " + 
          (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
            "" :
            "hidden") + 
          "\" component=\"composer/tag/dropdown\">\n\t\t\t<button class=\"btn btn-sm btn-link text-body dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"><i class=\"fa fa-tags\"></i></span>\n\t\t\t\t[[tags:select-tags]]\n\t\t\t</button>\n\n\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t" + 
          compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t\t<input class=\"tags\" type=\"text\" class=\"\" placeholder=\"[[tags:enter-tags-here, " + 
          __escape(guard((context != null) ? context['minimumTagLength'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['maximumTagLength'] : null)) + 
          "]]\" />\n\t</div>\n</div>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n";
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
    },
    'submitOptions': function submitOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['submitOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['action'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['text'] : null)) + 
          "</a></li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'formatting': function formatting(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['formatting'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['spacer'] : null) ?
            "\n\t\t\t<li class=\"small spacer\"></li>\n\t\t\t" :
            "\n\t\t\t" + 
              ((guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['desktop'] : null) && ((guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['main'] : null)) || (!guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['reply'] : null)))) ?
                "\n\t\t\t" + 
                  (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null) ? context['formatting'][key0]['dropdownItems']['length'] : null) ?
                    "\n\t\t\t<li class=\"dropdown bottom-sheet\" title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t<button class=\"btn btn-sm btn-link text-reset\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t\t<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"dropdown-menu p-1\" role=\"menu\">\n\t\t\t\t" + 
                      iter(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['dropdownItems'] : null), function each(key1, index, length, value) {
                        var key = key1;
                        return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" data-format=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['name'] : null)) + 
                          "\" class=\"dropdown-item rounded-1 position-relative\" role=\"menuitem\">\n\t\t\t\t\t\t\t<i class=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['className'] : null)) + 
                          " text-secondary\"></i> " + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['text'] : null)) + 
                          "\n\t\t\t\t\t\t\t" + 
                          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['badge'] : null) ?
                            "\n\t\t\t\t\t\t\t<span class=\"px-1 position-absolute top-0 start-100 translate-middle badge rounded text-bg-info\"></span>\n\t\t\t\t\t\t\t" :
                            "") + 
                          "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
                    "\n\t\t\t<li title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t<button data-format=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['name'] : null)) + 
                      "\" class=\"btn btn-sm btn-link text-reset position-relative\" aria-label=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t\t<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n\t\t\t\t\t" + 
                      (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['badge'] : null) ?
                        "\n\t\t\t\t\t<span class=\"px-1 position-absolute top-0 start-100 translate-middle badge rounded text-bg-info\"></span>\n\t\t\t\t\t" :
                        "") + 
                      "\n\t\t\t\t</button>\n\t\t\t</li>\n\t\t\t") + 
                  "\n\t\t\t" :
                "") + 
              "\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li data-tag=\"" + 
          __escape(guard(value)) + 
          "\"><a class=\"dropdown-item\" href=\"#\" role=\"menuitem\">" + 
          __escape(guard(value)) + 
          "</a></li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
