
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
    return "<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\n\t\t<div class=\"d-flex flex-wrap gap-3 align-items-center\">\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-1\">[[admin/appearance/customise:customise]]</h4>\n\t\t\t<ul class=\"nav nav-pills d-flex gap-1 text-sm\">\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link active px-2 py-1\" href=\"#custom-css\" data-bs-toggle=\"tab\">[[admin/appearance/customise:custom-css]]</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link px-2 py-1\" href=\"#custom-js\" data-bs-toggle=\"tab\">[[admin/appearance/customise:custom-js]]</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link px-2 py-1\" href=\"#custom-header\" data-bs-toggle=\"tab\">[[admin/appearance/customise:custom-header]]</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link px-2 py-1\" href=\"#bsvariables\" data-bs-toggle=\"tab\">[[admin/appearance/customise:bsvariables]]</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"d-flex align-items-center gap-1\">\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n\t\t</div>\n\t</div>\n\n\t<div id=\"customise\" class=\"customise px-2\">\n\t\t<div class=\"tab-content\">\n\t\t\t<div class=\"tab-pane fade show active\" id=\"custom-css\">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/appearance/customise:custom-css.description]]\n\t\t\t\t</p>\n\t\t\t\t<div id=\"customCSS\"></div>\n\t\t\t\t<input type=\"hidden\" id=\"customCSS-holder\" value=\"\" data-field=\"customCSS\" />\n\n\t\t\t\t<br />\n\t\t\t\t<form class=\"form\">\n\t\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"useCustomCSS\" type=\"checkbox\" data-field=\"useCustomCSS\" />\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"useCustomCSS\">[[admin/appearance/customise:custom-css.enable]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<div class=\"tab-pane fade\" id=\"custom-js\">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/appearance/customise:custom-js.description]]\n\t\t\t\t</p>\n\t\t\t\t<div id=\"customJS\"></div>\n\t\t\t\t<input type=\"hidden\" id=\"customJS-holder\" value=\"\" data-field=\"customJS\" />\n\n\t\t\t\t<br />\n\t\t\t\t<form class=\"form\">\n\t\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"useCustomJS\" type=\"checkbox\" data-field=\"useCustomJS\" />\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"useCustomJS\">[[admin/appearance/customise:custom-js.enable]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<div class=\"tab-pane fade\" id=\"custom-header\">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/appearance/customise:custom-header.description]]\n\t\t\t\t</p>\n\n\t\t\t\t<div id=\"customHTML\"></div>\n\t\t\t\t<input type=\"hidden\" id=\"customHTML-holder\" value=\"\" data-field=\"customHTML\" />\n\n\t\t\t\t<br/>\n\n\t\t\t\t<form class=\"form\">\n\t\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"useCustomHTML\" type=\"checkbox\" data-field=\"useCustomHTML\" />\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"useCustomHTML\">[[admin/appearance/customise:custom-header.enable]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t\t<div class=\"tab-pane fade\" id=\"bsvariables\">\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/appearance/customise:bsvariables.description]]\n\t\t\t\t</p>\n\n\t\t\t\t<div id=\"customVariables\"></div>\n\t\t\t\t<input type=\"hidden\" id=\"customVariables-holder\" value=\"\" data-field=\"bsVariables\" />\n\n\t\t\t\t<br/>\n\n\t\t\t\t<form class=\"form\">\n\t\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"useBSVariables\" type=\"checkbox\" data-field=\"useBSVariables\" />\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"useBSVariables\">[[admin/appearance/customise:bsvariables.enable]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\n\t\t\t<form class=\"form\">\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input class=\"form-check-input\" id=\"enableLiveReload\" type=\"checkbox\" data-field=\"enableLiveReload\" checked />\n\t\t\t\t\t<label class=\"form-check-label\" for=\"enableLiveReload\">[[admin/appearance/customise:custom-css.livereload]]</label>\n\t\t\t\t\t<div class=\"form-text\">[[admin/appearance/customise:custom-css.livereload.description]]</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
