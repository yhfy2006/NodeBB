
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
    return "<!DOCTYPE html>\n<html data-bs-theme=\"light\" lang=\"" + 
      __escape(helper(context, helpers, 'localeToHTML', [guard((context != null) ? context['acpLang'] : null), guard((context != null) ? context['defaultLang'] : null)])) + 
      "\" " + 
      (guard((context != null) ? context['languageDirection'] : null) ?
        "data-dir=\"" + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          "\" style=\"direction: " + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          ";\"" :
        "") + 
      ">\n\t<head>\n\t\t<title>" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</title>\n\n\t\t" + 
      compiled.blocks['metaTags'](helpers, context, guard, iter, helper) + 
      "\n\t\t" + 
      compiled.blocks['linkTags'](helpers, context, guard, iter, helper) + 
      "\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/admin" + 
      ((guard((context != null) ? context['languageDirection'] : null) == "rtl") ?
        "-rtl" :
        "") + 
      ".css?" + 
      __escape(guard((context != null) ? context['cache-buster'] : null)) + 
      "\" />\n\n\t\t<script>\n\t\t\tvar config = JSON.parse('" + 
      guard((context != null) ? context['configJSON'] : null) + 
      "');\n\t\t\tvar app = {\n\t\t\t\tuser: JSON.parse('" + 
      guard((context != null) ? context['userJSON'] : null) + 
      "'),\n\t\t\t\tconfig: JSON.parse(decodeURIComponent(\"" + 
      guard((context != null) ? context['adminConfigJSON'] : null) + 
      "\")),\n\t\t\t\tflags: {},\n\t\t\t\tinAdmin: true\n\t\t\t};\n\t\t\tconst theme = localStorage.getItem('data-bs-theme');\n\t\t\tif (theme && theme === 'dark') {\n\t\t\t\tdocument.documentElement.setAttribute('data-bs-theme', 'dark');\n\t\t\t}\n\t\t</script>\n\n\t\t<script type=\"text/javascript\" src=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/admin.min.js?" + 
      __escape(guard((context != null) ? context['cache-buster'] : null)) + 
      "\"></script>\n\n\t\t" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\n\t</head>\n\n\t<body class=\"admin " + 
      __escape(guard((context != null) ? context['bodyClass'] : null)) + 
      "\">\n\t\t<div class=\"offcanvas offcanvas-start gap-1\" tabindex=\"-1\" id=\"offcanvas\" aria-labelledby=\"offcanvasLabel\" style=\"width: 275px;\">\n\t<div class=\"offcanvas-body flex-0 pb-0 overflow-visible d-flex flex-column gap-1 ff-secondary\">\n\t\t<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "hidden") + 
      " mb-0 py-1 pe-2 alert-dismissible\">\n\t<div>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</div>\n\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t[[admin/menu:alerts.upgrade, " + 
      __escape(guard((context != null) ? context['latestVersion'] : null)) + 
      "]]\n\t</a>\n\t<button type=\"button\" class=\"btn-close p-2\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n</div>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\"><i class=\"fa fa-fw fa-home\"></i> [[admin/menu:view-forum]]</a>\n\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n<div component=\"acp/search\" class=\"my-1 acp-search\">\n\t<div class=\"dropdown\">\n\t\t<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\n\t\t\t<li role=\"presentation\" class=\"no-results\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.no-results]]</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\n\t\t\t<li role=\"presentation\" class=\"search-forum\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\n\t\t\t\t\t[[admin/menu:search.search-forum]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"keep-typing\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.keep-typing]]</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"start-typing\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.start-typing]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n" :
        "") + 
      "\n\t</div>\n\n\t<div class=\"offcanvas-body d-flex flex-column pt-0 overflow-hidden\">\n\t\t<div class=\"d-flex flex-column gap-1 ff-secondary flex-1 overflow-auto\">\n\t\t\t<!-- main acp navigation menu -->\n\n<div class=\"accordion overflow-auto d-flex flex-column gap-1\" component=\"acp/accordion\" id=\"accordionACP\">\n\n\t<!-- dashboard menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseDashboard\" aria-expanded=\"true\" aria-controls=\"collapseDashboard\">\n\t\t\t<i class=\"fa fa-fw fa-gauge\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-dashboard]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseDashboard\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- manage menu -->\n\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseManage\" aria-expanded=\"true\" aria-controls=\"collapseManage\">\n\t\t\t<i class=\"fa fa-fw fa-list\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-manage]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseManage\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a>\n\t\t\t\t<hr/>\n\t\t\t\t<h6 class=\"text-xs ps-4\">[[pages:moderator-tools]]</h6>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/flags\">[[admin/menu:manage/flagged-content]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t<!-- settings menu -->\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSettings\" aria-expanded=\"true\" aria-controls=\"collapseSettings\">\n\t\t\t<i class=\"fa fa-fw fa-sliders\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-settings]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseSettings\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- appearance menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAppearance\" aria-expanded=\"true\" aria-controls=\"collapseAppearance\">\n\t\t\t<i class=\"fa fa-fw fa-paintbrush\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-appearance]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseAppearance\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- extend menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseExtend\" aria-expanded=\"true\" aria-controls=\"collapseExtend\">\n\t\t\t<i class=\"fa fa-fw fa-wrench\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-extend]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseExtend\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- plugins menu -->\n\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsePlugins\" aria-expanded=\"true\" aria-controls=\"collapsePlugins\">\n\t\t\t<i class=\"fa fa-fw fa-plug\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-plugins]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapsePlugins\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t" + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\n\n\t\t\t\t" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\n\t\t\t\t<hr/>\n\t\t\t\t<div class=\"text-sm ms-4\">[[admin/menu:section-social-auth]]</div>\n\t\t\t\t" + 
                  compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
                  "\n\t\t\t\t" :
                "") + 
              "\n\t\t\t\t<hr/>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
            "") + 
          "\n\t" :
        "") + 
      "\n\n\t<!-- advanced menu -->\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAdvanced\" aria-expanded=\"true\" aria-controls=\"collapseAdvanced\">\n\t\t\t<i class=\"fa fa-fw fa-superpowers\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-advanced]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseAdvanced\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a>\n\t\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n  </div>\n\t\t</div>\n\t\t<hr class=\"my-1\"/>\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n<button component=\"rebuild-and-restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-refresh\"></i> [[admin/menu:rebuild-and-restart]]</button>\n\n<button component=\"restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-repeat\"></i> [[admin/menu:restart]]</button>\n" :
        "") + 
      "\n\n<button component=\"logout\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-sign-out\"></i> [[admin/menu:logout]]</button>\n\t</div>\n</div>\n\t\t<div class=\"d-flex\">\n\t\t\t<div id=\"sidebar-left\" style=\"width:240px;\" class=\"vh-100 sticky-top start-0 d-none d-lg-flex text-bg-light p-2 flex-column justify-content-start text-sm border-end gap-1 flex-shrink-0\">\n\t<div class=\"d-flex flex-column gap-1 ff-secondary\">\n\n\t\t<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "hidden") + 
      " mb-0 py-1 pe-2 alert-dismissible\">\n\t<div>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</div>\n\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t[[admin/menu:alerts.upgrade, " + 
      __escape(guard((context != null) ? context['latestVersion'] : null)) + 
      "]]\n\t</a>\n\t<button type=\"button\" class=\"btn-close p-2\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n</div>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\"><i class=\"fa fa-fw fa-home\"></i> [[admin/menu:view-forum]]</a>\n\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n<div component=\"acp/search\" class=\"my-1 acp-search\">\n\t<div class=\"dropdown\">\n\t\t<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\n\t\t\t<li role=\"presentation\" class=\"no-results\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.no-results]]</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\n\t\t\t<li role=\"presentation\" class=\"search-forum\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\n\t\t\t\t\t[[admin/menu:search.search-forum]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"keep-typing\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.keep-typing]]</a>\n\t\t\t</li>\n\t\t\t<li role=\"presentation\" class=\"start-typing\">\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.start-typing]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n" :
        "") + 
      "\n\t</div>\n\t<div class=\"d-flex flex-column gap-1 ff-secondary flex-1 overflow-auto\">\n\t\t<!-- main acp navigation menu -->\n\n<div class=\"accordion overflow-auto d-flex flex-column gap-1\" component=\"acp/accordion\" id=\"accordionACP\">\n\n\t<!-- dashboard menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseDashboard\" aria-expanded=\"true\" aria-controls=\"collapseDashboard\">\n\t\t\t<i class=\"fa fa-fw fa-gauge\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-dashboard]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseDashboard\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- manage menu -->\n\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseManage\" aria-expanded=\"true\" aria-controls=\"collapseManage\">\n\t\t\t<i class=\"fa fa-fw fa-list\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-manage]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseManage\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a>\n\t\t\t\t<hr/>\n\t\t\t\t<h6 class=\"text-xs ps-4\">[[pages:moderator-tools]]</h6>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/flags\">[[admin/menu:manage/flagged-content]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t<!-- settings menu -->\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSettings\" aria-expanded=\"true\" aria-controls=\"collapseSettings\">\n\t\t\t<i class=\"fa fa-fw fa-sliders\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-settings]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseSettings\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- appearance menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAppearance\" aria-expanded=\"true\" aria-controls=\"collapseAppearance\">\n\t\t\t<i class=\"fa fa-fw fa-paintbrush\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-appearance]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseAppearance\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- extend menu -->\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseExtend\" aria-expanded=\"true\" aria-controls=\"collapseExtend\">\n\t\t\t<i class=\"fa fa-fw fa-wrench\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-extend]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseExtend\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- plugins menu -->\n\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsePlugins\" aria-expanded=\"true\" aria-controls=\"collapsePlugins\">\n\t\t\t<i class=\"fa fa-fw fa-plug\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-plugins]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapsePlugins\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t" + 
              iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
                var key = key0;
                return "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/admin" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
                  "</a>\n\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\n\t\t\t\t" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\n\t\t\t\t<hr/>\n\t\t\t\t<div class=\"text-sm ms-4\">[[admin/menu:section-social-auth]]</div>\n\t\t\t\t" + 
                  iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
                    var key = key0;
                    return "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
                      __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/admin" + 
                      __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
                      "</a>\n\t\t\t\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n\t\t\t\t" :
                "") + 
              "\n\t\t\t\t<hr/>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
            "") + 
          "\n\t" :
        "") + 
      "\n\n\t<!-- advanced menu -->\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n\t<div class=\"d-flex flex-column\">\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAdvanced\" aria-expanded=\"true\" aria-controls=\"collapseAdvanced\">\n\t\t\t<i class=\"fa fa-fw fa-superpowers\"></i>\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-advanced]]</div>\n\t\t</button>\n\n\t\t<div id=\"collapseAdvanced\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n\t\t\t<div class=\"accordion-body p-0\">\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a>\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a>\n\t\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n  </div>\n\t</div>\n\n\t<div class=\"d-flex flex-column gap-1 ff-secondary\">\n\t\t<hr class=\"my-1\"/>\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n<button component=\"rebuild-and-restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-refresh\"></i> [[admin/menu:rebuild-and-restart]]</button>\n\n<button component=\"restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-repeat\"></i> [[admin/menu:restart]]</button>\n" :
        "") + 
      "\n\n<button component=\"logout\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-sign-out\"></i> [[admin/menu:logout]]</button>\n\t</div>\n</div>\n\n\t\t\t<div class=\"container flex-1 mt-4 mb-5\" id=\"content\">\n\n";
  }

  compiled.blocks = {
    'metaTags': function metaTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['metaTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildMetaTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'linkTags': function linkTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['linkTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildLinkTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['scripts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<script type=\"text/javascript\" src=\"" + 
          __escape(guard((context != null && context['scripts'] != null && context['scripts'][key0] != null) ? context['scripts'][key0]['src'] : null)) + 
          "\"></script>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
          "</a>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "</a>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
