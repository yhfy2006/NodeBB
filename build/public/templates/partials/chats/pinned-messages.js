
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
    return "<div component=\"chat/messages/pinned/container\" class=\"d-flex flex-column expanded-chat border-start hidden\" style=\"min-width:340px; width: 340px;\">\n\t<h3 class=\"fs-6 p-1 mb-0 text-center text-secondary\">[[modules:chat.pinned-messages]]</h3>\n\n\t<div component=\"chat/messages/pinned/empty\" class=\"text-center p-4 d-flex flex-column\">\n\t\t<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n\t\t<div class=\"text-xs fw-semibold text-muted\">[[modules:chat.no-pinned-messages]]</div>\n\t</div>\n\n\t<ul component=\"chat/messages/pinned\" class=\"chat-content list-unstyled d-flex flex-column gap-1 p-1 overflow-auto\">\n\n\t</ul>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
