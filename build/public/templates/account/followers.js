
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
    return "<div class=\"account w-100 mx-auto\">\n\t<div data-widget-area=\"header\">\n\t\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\n\t<div class=\"cover position-absolute start-0 top-0 w-100\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n\t\t<div class=\"container\">\n\t\t\t" + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n\t\t\t" + 
          (guard((context != null) ? context['canEdit'] : null) ?
            "\n\t\t\t<div class=\"controls text-center\">\n\t\t\t\t<span class=\"upload p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-upload\"></i></span>\n\t\t\t\t<span class=\"resize p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-arrows\"></i></span>\n\t\t\t\t<span class=\"remove p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-times\"></i></span>\n\t\t\t</div>\n\t\t\t<div class=\"save text-bg-primary\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n\t\t\t<div class=\"indicator text-bg-primary\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n\t\t\t" :
            "") + 
          "\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\n\t<div class=\"d-flex flex-column flex-md-row gap-2 w-100 pb-4 mb-4 mt-2 border-bottom\">\n\t\t<div " + 
      ((guard((context != null) ? context['allowProfilePicture'] : null) && guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null)) ?
        "component=\"profile/change/picture\"" :
        "") + 
      " class=\"avatar-wrapper border border-white border-4 rounded-circle position-relative align-self-center align-self-md-start hover-parent\" style=\"margin-top: -75px;\">\n\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(value), "142px", guard((context != null) ? context['true'] : null)])) + 
      "\n\t\t\t" + 
      ((guard((context != null) ? context['allowProfilePicture'] : null) && guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null)) ?
        "\n\t\t\t<div component=\"profile/change/picture\" class=\"d-none d-md-block pointer p-2 rounded-1 opacity-75 text-bg-light position-absolute top-50 start-50 translate-middle hover-visible\">\n\t\t\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-upload\"></i></span>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\n\t\t<div class=\"d-flex flex-column flex-md-row mt-1 justify-content-between w-100 gap-2\">\n\t\t\t<div class=\"d-flex flex-grow-1 flex-row gap-2\">\n\t\t\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t\t\t<h2 class=\"fullname fw-semibold fs-2 tracking-tight mb-0\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</h2>\n\t\t\t\t\t<div class=\"d-flex flex-wrap gap-1 text-sm align-items-center\">\n\t\t\t\t\t\t<span class=\"username fw-bold\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</span>\n\t\t\t\t\t\t<div class=\"d-flex align-items-center gap-1 p-1\">\n\t\t\t\t\t\t\t" + 
      (guard((context != null && context['selectedGroup'] != null) ? context['selectedGroup']['length'] : null) ?
        "\n\t\t\t\t\t\t\t" + 
          compiled.blocks['selectedGroup'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex gap-2\" component=\"user/badges\"></div>\n\t\t\t\t\t" + 
      (guard((context != null) ? context['isAdminOrGlobalModeratorOrModerator'] : null) ?
        "\n\t\t\t\t\t" + 
          (guard((context != null) ? context['banned'] : null) ?
            "\n\t\t\t\t\t<div class=\"text-xm text-muted\">\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['banned_until'] : null) ?
                "\n\t\t\t\t\t\t[[user:info.banned-until, " + 
                  __escape(guard((context != null) ? context['banned_until_readable'] : null)) + 
                  "]]\n\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t[[user:info.banned-permanently]]\n\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"flex-shrink-0 d-flex gap-1 align-self-stretch align-self-md-start justify-content-end\">\n\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n\t\t\t\t<a component=\"account/unfollow\" href=\"#\" class=\"btn btn-info flex-fill" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "" :
                " hide") + 
              "\">[[user:unfollow]]</a>\n\t\t\t\t<a component=\"account/follow\" href=\"#\" class=\"btn btn-primary flex-fill" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                " hide" :
                "") + 
              "\">[[user:follow]]</a>\n\t\t\t\t") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      ((guard((context != null) ? context['canChat'] : null) && !guard((context != null) ? context['banned'] : null)) ?
        "\n\t\t\t\t<div class=\"btn-group flex-fill\">\n\t\t\t\t\t<a " + 
          (guard((context != null) ? context['hasPrivateChat'] : null) ?
            "component=\"account/chat\"" :
            "component=\"account/new-chat\"") + 
          " href=\"#\" class=\"btn btn-light\" role=\"button\">[[user:chat]]</a>\n\t\t\t\t\t" + 
          (guard((context != null) ? context['hasPrivateChat'] : null) ?
            "\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-light dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"account/new-chat\" role=\"menuitem\"s>[[user:new-chat-with, " + 
              __escape(guard((context != null) ? context['username'] : null)) + 
              "]]</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n\t\t\t\t" + 
          ((guard((context != null) ? context['isAdmin'] : null) || (guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null))) ?
            "\n\t\t\t\t<div class=\"btn-group bottom-sheet\">\n\t<button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t<i class=\"fa fa-gear fa-fw\"></i>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links\" role=\"menu\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/info\" role=\"menuitem\">[[user:account-info]]</a>\n\t\t</li>\n\t\t" + 
              ((guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null)) ?
                "\n\t\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t\t" :
                "") + 
              "\n\t\t" + 
              (guard((context != null) ? context['canBan'] : null) ?
                "\n\t\t<li class=\"" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "hide" :
                    "") + 
                  "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/ban\" href=\"#\" role=\"menuitem\">[[user:ban-account]]</a>\n\t\t</li>\n\t\t<li class=\"" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "" :
                    "hide") + 
                  "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/unban\" href=\"#\" role=\"menuitem\">[[user:unban-account]]</a>\n\t\t</li>\n\t\t" :
                "") + 
              "\n\t\t" + 
              (guard((context != null) ? context['canMute'] : null) ?
                "\n\t\t<li class=\"" + 
                  (guard((context != null) ? context['muted'] : null) ?
                    "hide" :
                    "") + 
                  "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/mute\" href=\"#\" role=\"menuitem\">[[user:mute-account]]</a>\n\t\t</li>\n\t\t<li class=\"" + 
                  (guard((context != null) ? context['muted'] : null) ?
                    "" :
                    "hide") + 
                  "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/unmute\" href=\"#\" role=\"menuitem\">[[user:unmute-account]]</a>\n\t\t</li>\n\t\t" :
                "") + 
              "\n\t\t" + 
              (guard((context != null) ? context['isAdmin'] : null) ?
                "\n\t\t<li>\n\t\t\t<a component=\"account/delete-account\" href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[user:delete-account-as-admin]]</a>\n\t\t\t<a component=\"account/delete-content\" href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[user:delete-content]]</a>\n\t\t\t<a component=\"account/delete-all\" href=\"#\" class=\"dropdown-item rounded-1\" role=\"menuitem\">[[user:delete-all]]</a>\n\t\t</li>\n\t\t" :
                "") + 
              "\n\t</ul>\n</div>\n\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"d-flex flex-column flex-md-row\">\n\t\t<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n\t<div class=\"sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem;z-index: 1;\">\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"btn-ghost ff-secondary fw-semibold " + 
      (guard((context != null && context['template'] != null) ? context['template']['account/profile'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:about]]</div>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\"class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/posts'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/best'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/controversial'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/upvoted'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/downvoted'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/bookmarks'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:posts]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)])) + 
      "</span>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/topics'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/watched'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/ignored'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:topics]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)])) + 
      "</span>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/groups'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:header.groups]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/followers'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:followers]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/following'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:following]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/categories\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:watched-categories]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "</span>\n\t\t</a>\n\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/tags\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
              (guard((context != null && context['template'] != null) ? context['template']['account/tags'] : null) ?
                "active" :
                "") + 
              "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:watched-tags]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['tagsWatched'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['tagsWatched'] : null)) + 
              "</span>\n\t\t</a>\n\t\t" :
            "") + 
          "\n\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/blocks'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:blocked-users]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)])) + 
          "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\" class=\"btn-ghost ff-secondary fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/uploads'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:uploads]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)])) + 
          "</span>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      ((guard((context != null) ? context['loggedIn'] : null) && (!guard((context != null) ? context['isSelf'] : null) && !guard((context != null) ? context['banned'] : null))) ?
        "\n\t\t<hr class=\"w-100 my-2\"/>\n\t\t<a href=\"#\" component=\"account/flag\" class=\"btn-ghost-sm ff-secondary\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-flag text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:flag-profile]]</div>\n\t\t</a>\n\t\t<a href=\"#\" component=\"account/block\" class=\"btn-ghost-sm ff-secondary " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "hidden" :
            "") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:block-user]]</div>\n\t\t</a>\n\t\t<a href=\"#\" component=\"account/unblock\" class=\"btn-ghost-sm ff-secondary " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:unblock-user]]</div>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<hr class=\"w-100 my-2\"/>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\" class=\"btn-ghost-sm ff-secondary text-xs\n\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/edit'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:edit-profile]]</div>\n\t\t</a>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\" class=\"btn-ghost-sm ff-secondary text-xs\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/settings'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:settings]]</div>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n\n\t\t<div class=\"account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4\" style=\"min-width: 0;\">\n\n\n<h3 class=\"fw-semibold fs-5\">[[pages:" + 
      __escape(guard((context != null && context['template'] != null) ? context['template']['name'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "]]</h3>\n\n" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "" :
        "\n<div class=\"alert alert-warning text-center\">[[user:has-no-follower]]</div>\n") + 
      "\n\n<div class=\"row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-4\">\n" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n<nav component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\n</nav>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'selectedGroup': function selectedGroup(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedGroup'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null) ?
            "\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null)) + 
              "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['labelColor'] : null)) + 
              ";\"><i class=\"fa " + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null)) + 
                  (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                    " me-1" :
                    "") :
                "hidden") + 
              "\"></i><span class=\"badge-text align-text-bottom\">" + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null)) :
                "") + 
              "</span></a>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\" class=\"btn-ghost-sm ff-secondary text-xs plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          " " + 
          ((guard((context != null) ? context['url'] : null) == guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['url'] : null)) ?
            "active" :
            "") + 
          "\" id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</div>\n\t\t</a>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\" class=\"btn-ghost ff-secondary align-items-start justify-content-start p-2 ff-base\">\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
          "\n\t<div class=\"d-flex flex-column text-truncate\">\n\t\t<div class=\"fw-semibold text-truncate\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "</div>\n\t\t<div class=\"text-xs text-muted text-truncate\">@" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</div>\n\n\t\t" + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t</div>\n</a>\n";
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
