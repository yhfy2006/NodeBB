
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
    return "<div component=\"chat/composer\" class=\"d-flex flex-column border-top pt-2 align-items-start\">\n\t<div component=\"chat/composer/replying-to\" data-tomid=\"\" class=\"text-sm px-2 mb-1 d-flex gap-2 align-items-center hidden\">\n\t\t<div component=\"chat/composer/replying-to-text\"></div> <button component=\"chat/composer/replying-to-cancel\" class=\"btn-ghost-sm px-2 py-1\"><i class=\"fa fa-times\"></i></button>\n\t</div>\n\t<div class=\"w-100 flex-grow-1 flex-nowrap position-relative d-flex rounded-2 border border-secondary p-1 align-items-end\">\n\t\t<button component=\"chat/upload/button\" class=\"btn-ghost-sm px-2\" type=\"button\" title=\"[[global:upload]]\" data-bs-toggle=\"tooltip\"><i class=\"fa fa-fw fa-upload\"></i></button>\n\t\t<div class=\"flex-grow-1 align-self-center\">\n\t\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder.mobile]]\" class=\"bg-transparent text-body form-control chat-input mousetrap rounded-0 border-0 shadow-none px-1 py-0\" style=\"min-height: 1.5rem;height:0;max-height:30vh;resize:none;\"></textarea>\n\t\t</div>\n\t\t<div class=\"d-flex gap-1\">\n\t\t\t" + 
      compiled.blocks['composerActions'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t<button class=\"btn-ghost-sm px-2\" type=\"button\" data-action=\"send\" title=\"[[modules:chat.send]]\" data-bs-toggle=\"tooltip\"><i class=\"fa fa-fw fa-paper-plane text-primary\"></i></button>\n\t\t</div>\n\t</div>\n\t<div class=\"d-flex justify-content-between align-items-center text-xs w-100 px-2 mt-1\">\n\t\t<div component=\"chat/composer/typing\" class=\"\">\n\t\t\t<div component=\"chat/composer/typing/users\" class=\"hidden\"></div>\n\t\t\t<div component=\"chat/composer/typing/text\" class=\"hidden\"></div>\n\t\t</div>\n\t\t<div component=\"chat/message/remaining\" class=\"text-xs text-muted\">" + 
      __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
      "</div>\n\t</div>\n\t<form class=\"hidden\" component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n</div>";
  }

  compiled.blocks = {
    'composerActions': function composerActions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['composerActions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<button data-action=\"" + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['action'] : null)) + 
          "\" class=\"btn-ghost-sm px-2 " + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['class'] : null)) + 
          "\" type=\"button\" title=\"" + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['title'] : null)) + 
          "\" data-bs-toggle=\"tooltip\"><i class=\"fa " + 
          __escape(guard((context != null && context['composerActions'] != null && context['composerActions'][key0] != null) ? context['composerActions'][key0]['icon'] : null)) + 
          "\"></i></button>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
