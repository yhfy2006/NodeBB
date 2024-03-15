
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
    return "<div class=\"acp-page-container\">\n\t<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n\t<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n\t\t<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n\t</div>\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t</div>\n</div>\n\n\t<div class=\"row settings m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<div id=\"reputation-settings\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/reputation:reputation]]</h5>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"reputation:disabled\" data-field=\"reputation:disabled\">\n\t\t\t\t\t<label for=\"reputation:disabled\" class=\"form-check-label\">[[admin/settings/reputation:disable]]</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"downvote:disabled\" data-field=\"downvote:disabled\">\n\t\t\t\t\t<label for=\"downvote:disabled\" class=\"form-check-label\">[[admin/settings/reputation:disable-down-voting]]</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"votesArePublic\" data-field=\"votesArePublic\">\n\t\t\t\t\t<label for=\"votesArePublic\" class=\"form-check-label\">[[admin/settings/reputation:votes-are-public]]</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"activity-thresholds\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/reputation:thresholds]]</h5>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:chat\">[[admin/settings/reputation:min-rep-chat]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:chat\" id=\"min:rep:chat\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:upvote\">[[admin/settings/reputation:min-rep-upvote]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:upvote\" id=\"min:rep:upvote\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"upvotesPerDay\">[[admin/settings/reputation:upvotes-per-day]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"10\" data-field=\"upvotesPerDay\" id=\"upvotesPerDay\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"upvotesPerUserPerDay\">[[admin/settings/reputation:upvotes-per-user-per-day]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"3\" data-field=\"upvotesPerUserPerDay\" id=\"upvotesPerUserPerDay\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:downvote\">[[admin/settings/reputation:min-rep-downvote]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:downvote\" id=\"min:rep:downvote\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"downvotesPerDay\">[[admin/settings/reputation:downvotes-per-day]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"10\" data-field=\"downvotesPerDay\" id=\"downvotesPerDay\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"downvotesPerUserPerDay\">[[admin/settings/reputation:downvotes-per-user-per-day]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"3\" data-field=\"downvotesPerUserPerDay\" id=\"downvotesPerUserPerDay\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:post-links\">[[admin/settings/reputation:min-rep-post-links]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:post-links\" id=\"min:rep:post-links\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:flag\">[[admin/settings/reputation:min-rep-flag]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:flag\" id=\"min:rep:flag\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:website\">[[admin/settings/reputation:min-rep-website]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:website\" id=\"min:rep:website\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:aboutme\">[[admin/settings/reputation:min-rep-aboutme]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:aboutme\" id=\"min:rep:aboutme\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:signature\">[[admin/settings/reputation:min-rep-signature]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:signature\" id=\"min:rep:signature\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:profile-picture\">[[admin/settings/reputation:min-rep-profile-picture]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:profile-picture\" id=\"min:rep:profile-picture\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"min:rep:cover-picture\">[[admin/settings/reputation:min-rep-cover-picture]]</label>\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" placeholder=\"0\" data-field=\"min:rep:cover-picture\" id=\"min:rep:cover-picture\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"flag-settings\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/reputation:flags]]</h5>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"flags:limitPerTarget\">[[admin/settings/reputation:flags.limit-per-target]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"[[admin/settings/reputation:flags.limit-per-target-placeholder]]\" data-field=\"flags:limitPerTarget\" id=\"flags:limitPerTarget\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/reputation:flags.limit-per-target-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"flags:postFlagsPerDay\">[[admin/settings/reputation:flags.limit-post-flags-per-day]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" data-field=\"flags:postFlagsPerDay\" id=\"flags:postFlagsPerDay\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/reputation:flags.limit-post-flags-per-day-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"flags:userFlagsPerDay\">[[admin/settings/reputation:flags.limit-user-flags-per-day]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" data-field=\"flags:userFlagsPerDay\" id=\"flags:userFlagsPerDay\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/reputation:flags.limit-user-flags-per-day-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"flags:autoFlagOnDownvoteThreshold\">[[admin/settings/reputation:flags.auto-flag-on-downvote-threshold]]</label>\n\t\t\t\t\t<input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"0\" data-field=\"flags:autoFlagOnDownvoteThreshold\" id=\"flags:autoFlagOnDownvoteThreshold\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/reputation:flags.auto-flag-on-downvote-threshold-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"flags:actionOnResolve\">[[admin/settings/reputation:flags.action-on-resolve]]</label>\n\t\t\t\t\t<select class=\"form-select\" data-field=\"flags:actionOnResolve\" name=\"flags:actionOnResolve\" id=\"flags:actionOnResolve\">\n\t\t\t\t\t\t<option value=\"\">[[admin/settings/reputation:flags.action.nothing]]</option>\n\t\t\t\t\t\t<option value=\"rescind\">[[admin/settings/reputation:flags.action.rescind]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"flags:actionOnReject\">[[admin/settings/reputation:flags.action-on-reject]]</label>\n\t\t\t\t\t<select class=\"form-select\" data-field=\"flags:actionOnReject\" name=\"flags:actionOnReject\" id=\"flags:actionOnReject\">\n\t\t\t\t\t\t<option value=\"\">[[admin/settings/reputation:flags.action.nothing]]</option>\n\t\t\t\t\t\t<option value=\"rescind\">[[admin/settings/reputation:flags.action.rescind]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"flags:autoResolveOnBan\" data-field=\"flags:autoResolveOnBan\">\n\t\t\t\t\t<label for=\"flags:autoResolveOnBan\" class=\"form-check-label\">[[admin/settings/reputation:flags.auto-resolve-on-ban]]</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n\t\t\t</nav>\n\t\t</nav>\n\t</div>\n</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})