/**
 * jquery.onKey.js
 * emaniacs <noone.nu1@gmail.com
 * GPL
 */
;(function($){
    var keyCodeToChar = {
        "8":"backspace",
        "9": "tab",
        "13": "enter",
        "16": "shift",
        "17": "ctrl",
        "18": "alt",
        "19": "pause",
        "20": "capsLock",
        "27": "escape",
        "32": "space",
        "33": "pageUp",
        "34": "pageDown",
        "35": "end",
        "36": "home",
        "37": "left",
        "38": "up",
        "39": "right",
        "40": "down",
        "45": "insert",
        "46": "delete",
        "48": "0",
        "49": "1",
        "50": "2",
        "51": "3",
        "52": "4",
        "53": "5",
        "54": "6",
        "55": "7",
        "56": "8",
        "57": "9",
        "65": "a",
        "66": "b",
        "67": "c",
        "68": "d",
        "69": "e",
        "70": "f",
        "71": "g",
        "72": "h",
        "73": "i",
        "74": "j",
        "75": "k",
        "76": "l",
        "77": "m",
        "78": "n",
        "79": "o",
        "80": "p",
        "81": "q",
        "82": "r",
        "83": "s",
        "84": "t",
        "85": "u",
        "86": "v",
        "87": "w",
        "88": "x",
        "89": "y",
        "90": "z",
        "91": "winkey",
        "93": "rightClick",
        "96": "numpad0",
        "97": "numpad1",
        "98": "numpad2",
        "99": "numpad3",
        "100": "numpad4",
        "101": "numpad5",
        "102": "numpad6",
        "103": "numpad7",
        "104": "numpad8",
        "105": "numpad9",
        "106": "numpad*",
        "107": "numpad+",
        "109": "numpad-",
        "110": "numpad.",
        "111": "numpad/",
        "112": "f1",
        "113": "f2",
        "114": "f3",
        "115": "f4",
        "116": "f5",
        "117": "f6",
        "118": "f7",
        "119": "f8",
        "120": "f9",
        "121": "f10",
        "122": "f11",
        "123": "f12",
        "144": "numLock",
        "145": "scrollLock",
        "186": ";",
        "187": "=",
        "188": ",",
        "189": "-",
        "190": ".",
        "191": "/",
        "192": "`",
        "219": "[",
        "220": "\\",
        "221": "]",
        "222": "'"
    };
    
    $.fn.onKey = function(mainHandler) {
        if (typeof (mainHandler) == 'object') {
            return this.on('keydown', function(event) {
                var key = event.which || event.keyCode;
                
                if(keyCodeToChar[key]) {
                    var handler = keyCodeToChar[key];
                    var callback = mainHandler.hasOwnProperty(handler) ? 
                                    mainHandler[handler] : 
                                    mainHandler.hasOwnProperty('unknown') ?
                                        mainHandler['unknown'] :
                                        undefined;
                    if (typeof (callback) == 'function') {
                        callback.call(this, event);
                    }
                };
            });
        }
        else {
            return this;
        }
    }
})(jQuery);
