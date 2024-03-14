
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
    return "<div class=\"flex-fill\">\n\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n\t" + 
          (guard((context != null) ? context['enabled'] : null) ?
            "" :
            "\n\t<div class=\"alert alert-info\">\n\t\t[[post-queue:enabling-help, " + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/settings/post#post-queue]]\n\t</div>\n\t") + 
          "\n\t" :
        "\n\t<div>\n\t\t<p class=\"lead\">[[post-queue:public-intro]]</p>\n\t\t<p>[[post-queue:public-description]]</p>\n\t\t<hr />\n\t</div>\n\t") + 
      "\n\n\t" + 
      ((!guard((context != null) ? context['singlePost'] : null) && guard((context != null && context['posts'] != null) ? context['posts']['length'] : null)) ?
        "\n\t<div class=\"btn-toolbar justify-content-end mb-3\">\n\t\t<div class=\"me-2\">\n\t\t<div component=\"category/dropdown\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n\t<button type=\"button\" class=\"btn-ghost-sm ff-secondary d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "\n    <span class=\"category-item d-inline-flex align-items-center gap-1\">\n        " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
              "\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n    </span>\n    " :
            "\n    <i class=\"fa fa-fw fa-list text-primary\"></i>\n    <span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[unread:all-categories]]</span>") + 
          "\n</button>\n\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n\n<div class=\"dropdown-menu p-1\">\n    <ul component=\"category/list\" class=\"list-unstyled mb-0 text-sm category-dropdown-menu ghost-scrollbar\" role=\"menu\">\n        <li role=\"presentation\" class=\"category\" data-cid=\"all\">\n            <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menuitem\" href=\"" + 
          (guard((context != null) ? context['allCategoriesUrl'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/" + 
              __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
            "#") + 
          "\">\n                <div class=\"flex-grow-1\">[[unread:all-categories]]</div>\n                <i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n            </a>\n        </li>\n        " + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n</div>\n </div>\n\t\t</div>\n\n\t\t<div class=\"btn-group bottom-sheet\" component=\"post-queue/bulk-actions\">\n\t\t\t<button type=\"button\" class=\"btn-ghost-sm ff-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"fa fa-clone text-primary\"></i><span class=\"fw-semibold\"> [[post-queue:bulk-actions]]</span>\n\t\t\t</button>\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm dropdown-menu-end\" role=\"menu\">\n\t\t\t\t" + 
          (guard((context != null) ? context['canAccept'] : null) ?
            "\n\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"accept-all\" role=\"menuitem\">[[post-queue:accept-all]]</a></li>\n\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"accept-selected\" role=\"menuitem\">[[post-queue:accept-selected]]</a></li>\n\t\t\t\t<li class=\"dropdown-divider\"></li>\n\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-all\" role=\"menuitem\">[[post-queue:reject-all]]</a></li>\n\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-selected\" role=\"menuitem\">[[post-queue:reject-selected]]</a></li>\n\t\t\t\t" :
            "\n\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-all\" role=\"menuitem\">[[post-queue:remove-all]]</a></li>\n\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"reject-selected\" role=\"menuitem\">[[post-queue:remove-selected]]</a></li>\n\t\t\t\t") + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t<div class=\"post-queue posts-list\">\n\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n\t\t\t" + 
          (guard((context != null) ? context['singlePost'] : null) ?
            "\n\t\t\t<div class=\"alert alert-info d-flex align-items-md-center d-flex flex-column flex-md-row\">\n\t\t\t\t<p class=\"mb-md-0\">[[post-queue:no-single-post]]</p>\n\t\t\t\t<div class=\"d-grid ms-md-auto\">\n\t\t\t\t\t<a class=\"btn btn-sm btn-primary flex-shrink text-nowrap\" href=\".\">[[post-queue:back-to-list]]</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" :
            "\n\t\t\t<div class=\"mx-auto\">\n\t\t\t\t<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n\t\t\t\t\t<div class=\"mx-auto p-4 bg-light border rounded\">\n\t\t\t\t\t\t<i class=\"text-secondary fa fa-fw fa-4x fa-seedling\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t[[post-queue:no-queued-posts]]\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t") + 
          "\n\t\t") + 
      "\n\n\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\n\t<nav component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\" aria-label=\"[[global:pagination]]\">\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n\t\t<li class=\"page-item previous " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"page-item next " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.nextpage]]\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\" aria-label=\"[[global:pagination.firstpage]]\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link fw-secondary\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\" aria-label=\"[[global:pagination.nextpage]]\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n\t") + 
      "\n</nav>\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n            <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" role=\"menuitem\" href=\"#\">\n                " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n                <span component=\"category-markup\" class=\"flex-grow-1\" style=\"" + 
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
          "\n                    </div>\n                </span>\n                <i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n            </a>\n        </li>\n        ";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"card mb-4\" data-id=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">\n\t\t\t<div class=\"row g-0\">\n\t\t\t\t<div class=\"col-lg-3 bg-card-cap rounded-start\">\n\t\t\t\t\t<ul class=\"list-unstyled ps-0 mb-0 border-end h-100\">\n\t\t\t\t\t\t<li class=\"card-body border-bottom position-relative\">\n\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['singlePost'] : null) ?
            "" :
            "\n\t\t\t\t\t\t\t<input id=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
              "\" type=\"checkbox\" class=\"form-check-input\" autocomplete=\"off\" />\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t<label for=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" class=\"small stretched-link\">\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "[[post-queue:reply]]" :
            "[[post-queue:topic]]") + 
          "\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"card-body d-flex flex-column gap-1 border-bottom\">\n\t\t\t\t\t\t\t<div class=\"d-flex text-xs fw-semibold align-items-center\">\n\t\t\t\t\t\t\t\t[[post-queue:user]]\n\t\t\t\t\t\t\t\t" + 
          (((guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) || guard((context != null && context['privileges'] != null) ? context['privileges']['mute'] : null)) || guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null)) ?
            "\n\t\t\t\t\t\t\t\t<div class=\"ms-auto btn-group bottom-sheet\">\n\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"btn btn-ghost-sm ff-secondary border text-xs dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">[[global:actions]]</button>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['view:users:info'] : null) ?
                "\n\t\t\t\t\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
                  "/info\" role=\"menuitem\">[[user:account-info]]</a></li>\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) ?
                "\n\t\t\t\t\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                    "hidden" :
                    "") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"ban\" role=\"menuitem\">[[user:ban-account]]</a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                    "" :
                    "hidden") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"unban\" role=\"menuitem\">[[user:unban-account]]</a></li>\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['mute'] : null) ?
                "\n\t\t\t\t\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                    "hidden" :
                    "") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"mute\" role=\"menuitem\">[[user:mute-account]]</a></li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                    "" :
                    "hidden") + 
                  "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"unmute\" role=\"menuitem\">[[user:unmute-account]]</a></li>\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null) ?
                "\n\t\t\t\t\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-account\" role=\"menuitem\">[[user:delete-account-as-admin]]</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-content\" role=\"menuitem\">[[user:delete-content]]</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-all\" role=\"menuitem\">[[user:delete-all]]</a></li>\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"small\">\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            "\n\t\t\t\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              " " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "</a>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t\t\t\t\t\t\t\t\t<span title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['postcount'] : null)) + 
          "\" class=\"fw-bold\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['postcount'] : null)])) + 
          "</span>\n\t\t\t\t\t\t\t\t\t<span class=\"text-lowercase fw-normal\">[[global:posts]]</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t\t\t\t\t\t\t\t\t<span title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['reputation'] : null)) + 
          "\" class=\"fw-bold\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['reputation'] : null)])) + 
          "</span>\n\t\t\t\t\t\t\t\t\t<span class=\"text-lowercase fw-normal\">[[global:reputation]]</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t\t\t\t\t\t\t\t\t<span class=\"text-lowercase fw-normal\">[[user:joined]]</span>\n\t\t\t\t\t\t\t\t\t<span title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['joindateISO'] : null)) + 
          "\" class=\"timeago fw-bold\"></span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"card-body border-bottom\">\n\t\t\t\t\t\t\t<div class=\"text-xs fw-semibold mb-1\">[[post-queue:when]]</div>\n\t\t\t\t\t\t\t<span class=\"small timeago\" title=" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['timestampISO'] : null)) + 
          "></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"card-body border-bottom\">\n\t\t\t\t\t\t\t<div class=\"text-xs fw-semibold mb-1\">\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "[[post-queue:topic]]" :
            "[[post-queue:title]]") + 
          "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"small topic-title text-break\">\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "\n\t\t\t\t\t\t\t\t<div class=\"d-flex flex-column align-items-start gap-1\">\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
              "</a>\n\t\t\t\t\t\t\t\t\t<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text-lowercase fw-normal\">[[global:lastpost]]</span>\n\t\t\t\t\t\t\t\t\t\t<span title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['lastposttimeISO'] : null)) + 
              "\" class=\"timeago fw-bold\"></span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t\t<span class=\"title-text\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['title'] : null)) + 
          "</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "" :
            "\n\t\t\t\t\t\t\t<div class=\"topic-title-editable hidden\">\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['title'] : null)) + 
              "\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"card-body border-bottom\">\n\t\t\t\t\t\t\t<div class=\"text-xs fw-semibold mb-1\">\n\t\t\t\t\t\t\t\t[[post-queue:category]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"topic-category small\">\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t<div class=\"category-item d-inline-block\">\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "24px", "rounded-circle"])) + 
          "\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"card-body\">\n\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['canAccept'] : null) ?
            "\n\t\t\t\t\t\t\t<div class=\"row row-cols-2 g-1\">\n\t\t\t\t\t\t\t\t<div class=\"col d-grid\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-sm\" data-action=\"accept\"><i class=\"fa fa-fw fa-check\"></i> [[post-queue:accept]] </button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col d-grid\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\" data-action=\"reject\"><i class=\"fa fa-fw fa-times\"></i> [[post-queue:reject]]</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
                "" :
                "\n\t\t\t\t\t\t\t\t<div class=\"col d-grid\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm\" data-action=\"editTitle\"><i class=\"fa fa-fw fa-edit\"></i> [[post-queue:title]]</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t\t\t<div class=\"col d-grid\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm\" data-action=\"editContent\"><i class=\"fa fa-fw fa-edit\"></i> [[post-queue:content]]</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['cid'] : null) ?
                "\n\t\t\t\t\t\t\t\t<div class=\"col d-grid\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm\" data-action=\"editCategory\"><i class=\"fa fa-fw fa-edit\"></i> [[post-queue:category]]</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t<div class=\"col d-grid\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm\" data-action=\"notify\"><i class=\"fa fa-fw fa-bell-o\"></i> [[post-queue:notify]]</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\" data-action=\"reject\"><i class=\"fa fa-fw fa-times\"></i> [[post-queue:remove]]</button>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-9 d-flex flex-column\">\n\t\t\t\t\t<div class=\"post-content mb-auto text-break p-3 pb-0 h-100\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['content'] : null)) + 
          "</div>\n\t\t\t\t\t<div class=\"post-content-editable flex-grow-1 hidden\">\n\t\t\t\t\t\t<textarea class=\"form-control w-100 h-100 p-3\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['rawContent'] : null)) + 
          "</textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\" aria-label=\"[[global:pagination.page-x, " + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "]]\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
