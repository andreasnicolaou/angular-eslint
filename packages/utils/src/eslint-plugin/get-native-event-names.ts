/**
 * DO NOT EDIT THIS FILE
 *
 * In order to update this config, please run `pnpm update-native-event-names`.
 */

let nativeEventNames: ReadonlySet<string> | null = null;

/**
 * Check MDN events page for details https://developer.mozilla.org/en-US/docs/Web/Events
 *
 * Event names sourced from @mdn/browser-compat-data@5.7.6
 */
export function getNativeEventNames(): ReadonlySet<string> {
  return (
    nativeEventNames ??
    (nativeEventNames = new Set<string>([
      'abort',
      'afterprint',
      'afterscriptexecute',
      'animationcancel',
      'animationend',
      'animationiteration',
      'animationstart',
      'appinstalled',
      'auxclick',
      'beforeinput',
      'beforeinstallprompt',
      'beforematch',
      'beforeprint',
      'beforescriptexecute',
      'beforetoggle',
      'beforeunload',
      'beforexrselect',
      'beginEvent',
      'blur',
      'bounce',
      'cancel',
      'canplay',
      'canplaythrough',
      'change',
      'click',
      'close',
      'command',
      'compositionend',
      'compositionstart',
      'compositionupdate',
      'contentvisibilityautostatechange',
      'contextlost',
      'contextmenu',
      'contextrestored',
      'copy',
      'cuechange',
      'cut',
      'dblclick',
      'devicemotion',
      'deviceorientation',
      'deviceorientationabsolute',
      'DOMActivate',
      'DOMContentLoaded',
      'DOMMouseScroll',
      'drag',
      'dragend',
      'dragenter',
      'dragexit',
      'dragleave',
      'dragover',
      'dragstart',
      'drop',
      'durationchange',
      'emptied',
      'encrypted',
      'ended',
      'endEvent',
      'enterpictureinpicture',
      'error',
      'finish',
      'focus',
      'focusin',
      'focusout',
      'formdata',
      'freeze',
      'fullscreenchange',
      'fullscreenerror',
      'gamepadconnected',
      'gamepaddisconnected',
      'gesturechange',
      'gestureend',
      'gesturestart',
      'gotpointercapture',
      'hashchange',
      'input',
      'invalid',
      'keydown',
      'keypress',
      'keyup',
      'languagechange',
      'leavepictureinpicture',
      'load',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'lostpointercapture',
      'message',
      'messageerror',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseout',
      'mouseover',
      'mouseup',
      'mousewheel',
      'MozMousePixelScroll',
      'offline',
      'online',
      'orientationchange',
      'pagehide',
      'pagereveal',
      'pageshow',
      'pageswap',
      'paste',
      'pause',
      'play',
      'playing',
      'pointercancel',
      'pointerdown',
      'pointerenter',
      'pointerleave',
      'pointerlockchange',
      'pointerlockerror',
      'pointermove',
      'pointerout',
      'pointerover',
      'pointerrawupdate',
      'pointerup',
      'popstate',
      'prerenderingchange',
      'progress',
      'ratechange',
      'readystatechange',
      'rejectionhandled',
      'repeatEvent',
      'reset',
      'resize',
      'resume',
      'scroll',
      'scrollend',
      'scrollsnapchange',
      'scrollsnapchanging',
      'search',
      'securitypolicyviolation',
      'seeked',
      'seeking',
      'select',
      'selectionchange',
      'selectstart',
      'slotchange',
      'stalled',
      'start',
      'storage',
      'submit',
      'suspend',
      'timeupdate',
      'toggle',
      'touchcancel',
      'touchend',
      'touchmove',
      'touchstart',
      'transitioncancel',
      'transitionend',
      'transitionrun',
      'transitionstart',
      'unhandledrejection',
      'unload',
      'visibilitychange',
      'volumechange',
      'vrdisplayactivate',
      'vrdisplayconnect',
      'vrdisplaydeactivate',
      'vrdisplaydisconnect',
      'vrdisplaypresentchange',
      'waiting',
      'waitingforkey',
      'webglcontextcreationerror',
      'webglcontextlost',
      'webglcontextrestored',
      'webkitmouseforcechanged',
      'webkitmouseforcedown',
      'webkitmouseforceup',
      'webkitmouseforcewillbegin',
      'wheel',
    ]))
  );
}
