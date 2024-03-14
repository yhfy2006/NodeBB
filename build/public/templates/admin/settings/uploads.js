
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
      "</h4>\n\t</div>\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t</div>\n</div>\n\n\t<div class=\"row settings m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<div id=\"posts\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:posts]]</h5>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"stripEXIFData\" data-field=\"stripEXIFData\">\n\t\t\t\t\t<label for=\"stripEXIFData\" class=\"form-check-label\">[[admin/settings/uploads:strip-exif-data]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"privateUploads\" data-field=\"privateUploads\">\n\t\t\t\t\t<label for=\"privateUploads\" class=\"form-check-label\">[[admin/settings/uploads:private]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"privateUploadsExtensions\">[[admin/settings/uploads:private-extensions]]</label>\n\t\t\t\t\t<input id=\"privateUploadsExtensions\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"privateUploadsExtensions\" placeholder=\"\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:private-uploads-extensions-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"resizeImageWidthThreshold\">[[admin/settings/uploads:resize-image-width-threshold]]</label>\n\t\t\t\t\t\t\t<input id=\"resizeImageWidthThreshold\" type=\"text\" class=\"form-control\" value=\"2000\" data-field=\"resizeImageWidthThreshold\" placeholder=\"2000\">\n\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-threshold-help]]\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"resizeImageWidth\">[[admin/settings/uploads:resize-image-width]]</label>\n\t\t\t\t\t\t\t<input id=\"resizeImageWidth\" type=\"text\" class=\"form-control\" value=\"760\" data-field=\"resizeImageWidth\" placeholder=\"760\">\n\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-help]]\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"resizeImageQuality\">[[admin/settings/uploads:resize-image-quality]]</label>\n\t\t\t\t\t<input id=\"resizeImageQuality\" type=\"text\" class=\"form-control\" value=\"60\" data-field=\"resizeImageQuality\" placeholder=\"60\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:resize-image-quality-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"maximumFileSize\">[[admin/settings/uploads:max-file-size]]</label>\n\t\t\t\t\t<input id=\"maximumFileSize\" type=\"text\" class=\"form-control\" value=\"2048\" data-field=\"maximumFileSize\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:max-file-size-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"rejectImageWidth\">[[admin/settings/uploads:reject-image-width]]</label>\n\t\t\t\t\t<input id=\"rejectImageWidth\" type=\"text\" class=\"form-control\" value=\"5000\" data-field=\"rejectImageWidth\" placeholder=\"5000\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:reject-image-width-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"rejectImageHeight\">[[admin/settings/uploads:reject-image-height]]</label>\n\t\t\t\t\t<input id=\"rejectImageHeight\" type=\"text\" class=\"form-control\" value=\"5000\" data-field=\"rejectImageHeight\" placeholder=\"5000\">\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:reject-image-height-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"allowTopicsThumbnail\" data-field=\"allowTopicsThumbnail\">\n\t\t\t\t\t<label for=\"allowTopicsThumbnail\" class=\"form-check-label\">[[admin/settings/uploads:allow-topic-thumbnails]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"topicThumbSize\">[[admin/settings/uploads:topic-thumb-size]]</label>\n\t\t\t\t\t<input id=\"topicThumbSize\" type=\"text\" class=\"form-control\" value=\"120\" data-field=\"topicThumbSize\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"allowedFileExtensions\">[[admin/settings/uploads:allowed-file-extensions]]</label>\n\t\t\t\t\t<input id=\"allowedFileExtensions\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"allowedFileExtensions\" data-field-type=\"tagsinput\" />\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:allowed-file-extensions-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"uploadRateLimitThreshold\">[[admin/settings/uploads:upload-limit-threshold]]</label>\n\t\t\t\t\t<div id=\"uploadRateLimitThreshold\" class=\"row\">\n\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-field=\"uploadRateLimitThreshold\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t<select class=\"form-select\" data-field=\"uploadRateLimitCooldown\">\n\t\t\t\t\t\t\t\t<option value=\"60\">[[admin/settings/uploads:upload-limit-threshold-per-minute, 1]]</option>\n\t\t\t\t\t\t\t\t<option value=\"300\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 5]]</option>\n\t\t\t\t\t\t\t\t<option value=\"900\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 15]]</option>\n\t\t\t\t\t\t\t\t<option value=\"3600\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 60]]</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"orphaned-files\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:orphans]]</h5>\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"preserveOrphanedUploads\" data-field=\"preserveOrphanedUploads\">\n\t\t\t\t\t<label for=\"preserveOrphanedUploads\" class=\"form-check-label\">[[admin/settings/uploads:preserve-orphaned-uploads]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"orphanExpiryDays\">[[admin/settings/uploads:orphanExpiryDays]]</label>\n\t\t\t\t\t\t<input id=\"orphanExpiryDays\" type=\"number\" min=\"0\" placeholder=\"0\" class=\"form-control\" data-field=\"orphanExpiryDays\" />\n\t\t\t\t\t\t<p class=\"form-text\">[[admin/settings/uploads:orphanExpiryDays-help]]</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"profile-avatars\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:profile-avatars]]</h5>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"allowProfileImageUploads\" data-field=\"allowProfileImageUploads\">\n\t\t\t\t\t<label for=\"allowProfileImageUploads\" class=\"form-check-label\">[[admin/settings/uploads:allow-profile-image-uploads]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"profile:convertProfileImageToPNG\" data-field=\"profile:convertProfileImageToPNG\">\n\t\t\t\t\t<label for=\"profile:convertProfileImageToPNG\" class=\"form-check-label\">[[admin/settings/uploads:convert-profile-image-png]]</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label>[[admin/settings/uploads:default-avatar]]</label>\n\t\t\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t\t\t<input id=\"defaultAvatar\" type=\"text\" class=\"form-control\" placeholder=\"A custom image to use instead of user icons\" data-field=\"defaultAvatar\" />\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"defaultAvatar\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadDefaultAvatar\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/uploads:upload]]\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"profileImageDimension\">[[admin/settings/uploads:profile-image-dimension]]</label>\n\t\t\t\t\t<input id=\"profileImageDimension\" type=\"text\" class=\"form-control\" data-field=\"profileImageDimension\" placeholder=\"200\" />\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:profile-image-dimension-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"maximumProfileImageSize\">[[admin/settings/uploads:max-profile-image-size]]</label>\n\t\t\t\t\t<input id=\"maximumProfileImageSize\" type=\"text\" class=\"form-control\" placeholder=\"Maximum size of uploaded user images in kibibytes\" data-field=\"maximumProfileImageSize\" />\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:max-profile-image-size-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"maximumCoverImageSize\">[[admin/settings/uploads:max-cover-image-size]]</label>\n\t\t\t\t\t<input id=\"maximumCoverImageSize\" type=\"text\" class=\"form-control\" placeholder=\"Maximum size of uploaded cover images in kibibytes\" data-field=\"maximumCoverImageSize\" />\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[admin/settings/uploads:max-cover-image-size-help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"profile:keepAllUserImages\" data-field=\"profile:keepAllUserImages\">\n\t\t\t\t\t<label for=\"profile:keepAllUserImages\" class=\"form-check-label\">[[admin/settings/uploads:keep-all-user-images]]</label>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<hr/>\n\n\t\t\t<div id=\"profile-covers\" class=\"mb-4\">\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:profile-covers]]</h5>\n\t\t\t\t<label class=\"form-label\" for=\"profile:defaultCovers\"><strong>[[admin/settings/uploads:default-covers]]</strong></label>\n\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t[[admin/settings/uploads:default-covers-help]]\n\t\t\t\t</p>\n\t\t\t\t<input type=\"text\" class=\"form-control form-control-lg\" id=\"profile:defaultCovers\" data-field=\"profile:defaultCovers\" data-field-type=\"tagsinput\" value=\"/assets/images/cover-default.png\" />\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n\t\t\t</nav>\n\t\t</nav>\n\t</div>\n</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
