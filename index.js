#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/cli-table3/src/debug.js
var require_debug = __commonJS({
  "node_modules/cli-table3/src/debug.js"(exports2, module2) {
    var messages = [];
    var level = 0;
    var debug = (msg, min) => {
      if (level >= min) {
        messages.push(msg);
      }
    };
    debug.WARN = 1;
    debug.INFO = 2;
    debug.DEBUG = 3;
    debug.reset = () => {
      messages = [];
    };
    debug.setDebugLevel = (v) => {
      level = v;
    };
    debug.warn = (msg) => debug(msg, debug.WARN);
    debug.info = (msg) => debug(msg, debug.INFO);
    debug.debug = (msg) => debug(msg, debug.DEBUG);
    debug.debugMessages = () => messages;
    module2.exports = debug;
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "node_modules/strip-ansi/index.js"(exports2, module2) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    module2.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
  }
});

// node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS({
  "node_modules/is-fullwidth-code-point/index.js"(exports2, module2) {
    "use strict";
    var isFullwidthCodePoint = (codePoint) => {
      if (Number.isNaN(codePoint)) {
        return false;
      }
      if (codePoint >= 4352 && (codePoint <= 4447 || // Hangul Jamo
      codePoint === 9001 || // LEFT-POINTING ANGLE BRACKET
      codePoint === 9002 || // RIGHT-POINTING ANGLE BRACKET
      // CJK Radicals Supplement .. Enclosed CJK Letters and Months
      11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
      12880 <= codePoint && codePoint <= 19903 || // CJK Unified Ideographs .. Yi Radicals
      19968 <= codePoint && codePoint <= 42182 || // Hangul Jamo Extended-A
      43360 <= codePoint && codePoint <= 43388 || // Hangul Syllables
      44032 <= codePoint && codePoint <= 55203 || // CJK Compatibility Ideographs
      63744 <= codePoint && codePoint <= 64255 || // Vertical Forms
      65040 <= codePoint && codePoint <= 65049 || // CJK Compatibility Forms .. Small Form Variants
      65072 <= codePoint && codePoint <= 65131 || // Halfwidth and Fullwidth Forms
      65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || // Kana Supplement
      110592 <= codePoint && codePoint <= 110593 || // Enclosed Ideographic Supplement
      127488 <= codePoint && codePoint <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
      131072 <= codePoint && codePoint <= 262141)) {
        return true;
      }
      return false;
    };
    module2.exports = isFullwidthCodePoint;
    module2.exports.default = isFullwidthCodePoint;
  }
});

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/emoji-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
});

// node_modules/string-width/index.js
var require_string_width = __commonJS({
  "node_modules/string-width/index.js"(exports2, module2) {
    "use strict";
    var stripAnsi = require_strip_ansi();
    var isFullwidthCodePoint = require_is_fullwidth_code_point();
    var emojiRegex = require_emoji_regex();
    var stringWidth = (string) => {
      if (typeof string !== "string" || string.length === 0) {
        return 0;
      }
      string = stripAnsi(string);
      if (string.length === 0) {
        return 0;
      }
      string = string.replace(emojiRegex(), "  ");
      let width = 0;
      for (let i = 0; i < string.length; i++) {
        const code = string.codePointAt(i);
        if (code <= 31 || code >= 127 && code <= 159) {
          continue;
        }
        if (code >= 768 && code <= 879) {
          continue;
        }
        if (code > 65535) {
          i++;
        }
        width += isFullwidthCodePoint(code) ? 2 : 1;
      }
      return width;
    };
    module2.exports = stringWidth;
    module2.exports.default = stringWidth;
  }
});

// node_modules/cli-table3/src/utils.js
var require_utils = __commonJS({
  "node_modules/cli-table3/src/utils.js"(exports2, module2) {
    var stringWidth = require_string_width();
    function codeRegex(capture) {
      return capture ? /\u001b\[((?:\d*;){0,5}\d*)m/g : /\u001b\[(?:\d*;){0,5}\d*m/g;
    }
    function strlen(str) {
      let code = codeRegex();
      let stripped = ("" + str).replace(code, "");
      let split = stripped.split("\n");
      return split.reduce(function(memo, s) {
        return stringWidth(s) > memo ? stringWidth(s) : memo;
      }, 0);
    }
    function repeat(str, times) {
      return Array(times + 1).join(str);
    }
    function pad(str, len, pad2, dir) {
      let length = strlen(str);
      if (len + 1 >= length) {
        let padlen = len - length;
        switch (dir) {
          case "right": {
            str = repeat(pad2, padlen) + str;
            break;
          }
          case "center": {
            let right = Math.ceil(padlen / 2);
            let left = padlen - right;
            str = repeat(pad2, left) + str + repeat(pad2, right);
            break;
          }
          default: {
            str = str + repeat(pad2, padlen);
            break;
          }
        }
      }
      return str;
    }
    var codeCache = {};
    function addToCodeCache(name, on, off) {
      on = "\x1B[" + on + "m";
      off = "\x1B[" + off + "m";
      codeCache[on] = { set: name, to: true };
      codeCache[off] = { set: name, to: false };
      codeCache[name] = { on, off };
    }
    addToCodeCache("bold", 1, 22);
    addToCodeCache("italics", 3, 23);
    addToCodeCache("underline", 4, 24);
    addToCodeCache("inverse", 7, 27);
    addToCodeCache("strikethrough", 9, 29);
    function updateState(state, controlChars) {
      let controlCode = controlChars[1] ? parseInt(controlChars[1].split(";")[0]) : 0;
      if (controlCode >= 30 && controlCode <= 39 || controlCode >= 90 && controlCode <= 97) {
        state.lastForegroundAdded = controlChars[0];
        return;
      }
      if (controlCode >= 40 && controlCode <= 49 || controlCode >= 100 && controlCode <= 107) {
        state.lastBackgroundAdded = controlChars[0];
        return;
      }
      if (controlCode === 0) {
        for (let i in state) {
          if (Object.prototype.hasOwnProperty.call(state, i)) {
            delete state[i];
          }
        }
        return;
      }
      let info = codeCache[controlChars[0]];
      if (info) {
        state[info.set] = info.to;
      }
    }
    function readState(line) {
      let code = codeRegex(true);
      let controlChars = code.exec(line);
      let state = {};
      while (controlChars !== null) {
        updateState(state, controlChars);
        controlChars = code.exec(line);
      }
      return state;
    }
    function unwindState(state, ret) {
      let lastBackgroundAdded = state.lastBackgroundAdded;
      let lastForegroundAdded = state.lastForegroundAdded;
      delete state.lastBackgroundAdded;
      delete state.lastForegroundAdded;
      Object.keys(state).forEach(function(key) {
        if (state[key]) {
          ret += codeCache[key].off;
        }
      });
      if (lastBackgroundAdded && lastBackgroundAdded != "\x1B[49m") {
        ret += "\x1B[49m";
      }
      if (lastForegroundAdded && lastForegroundAdded != "\x1B[39m") {
        ret += "\x1B[39m";
      }
      return ret;
    }
    function rewindState(state, ret) {
      let lastBackgroundAdded = state.lastBackgroundAdded;
      let lastForegroundAdded = state.lastForegroundAdded;
      delete state.lastBackgroundAdded;
      delete state.lastForegroundAdded;
      Object.keys(state).forEach(function(key) {
        if (state[key]) {
          ret = codeCache[key].on + ret;
        }
      });
      if (lastBackgroundAdded && lastBackgroundAdded != "\x1B[49m") {
        ret = lastBackgroundAdded + ret;
      }
      if (lastForegroundAdded && lastForegroundAdded != "\x1B[39m") {
        ret = lastForegroundAdded + ret;
      }
      return ret;
    }
    function truncateWidth(str, desiredLength) {
      if (str.length === strlen(str)) {
        return str.substr(0, desiredLength);
      }
      while (strlen(str) > desiredLength) {
        str = str.slice(0, -1);
      }
      return str;
    }
    function truncateWidthWithAnsi(str, desiredLength) {
      let code = codeRegex(true);
      let split = str.split(codeRegex());
      let splitIndex = 0;
      let retLen = 0;
      let ret = "";
      let myArray;
      let state = {};
      while (retLen < desiredLength) {
        myArray = code.exec(str);
        let toAdd = split[splitIndex];
        splitIndex++;
        if (retLen + strlen(toAdd) > desiredLength) {
          toAdd = truncateWidth(toAdd, desiredLength - retLen);
        }
        ret += toAdd;
        retLen += strlen(toAdd);
        if (retLen < desiredLength) {
          if (!myArray) {
            break;
          }
          ret += myArray[0];
          updateState(state, myArray);
        }
      }
      return unwindState(state, ret);
    }
    function truncate(str, desiredLength, truncateChar) {
      truncateChar = truncateChar || "\u2026";
      let lengthOfStr = strlen(str);
      if (lengthOfStr <= desiredLength) {
        return str;
      }
      desiredLength -= strlen(truncateChar);
      let ret = truncateWidthWithAnsi(str, desiredLength);
      return ret + truncateChar;
    }
    function defaultOptions() {
      return {
        chars: {
          top: "\u2500",
          "top-mid": "\u252C",
          "top-left": "\u250C",
          "top-right": "\u2510",
          bottom: "\u2500",
          "bottom-mid": "\u2534",
          "bottom-left": "\u2514",
          "bottom-right": "\u2518",
          left: "\u2502",
          "left-mid": "\u251C",
          mid: "\u2500",
          "mid-mid": "\u253C",
          right: "\u2502",
          "right-mid": "\u2524",
          middle: "\u2502"
        },
        truncate: "\u2026",
        colWidths: [],
        rowHeights: [],
        colAligns: [],
        rowAligns: [],
        style: {
          "padding-left": 1,
          "padding-right": 1,
          head: ["red"],
          border: ["grey"],
          compact: false
        },
        head: []
      };
    }
    function mergeOptions(options, defaults) {
      options = options || {};
      defaults = defaults || defaultOptions();
      let ret = Object.assign({}, defaults, options);
      ret.chars = Object.assign({}, defaults.chars, options.chars);
      ret.style = Object.assign({}, defaults.style, options.style);
      return ret;
    }
    function wordWrap(maxLength, input) {
      let lines = [];
      let split = input.split(/(\s+)/g);
      let line = [];
      let lineLength = 0;
      let whitespace;
      for (let i = 0; i < split.length; i += 2) {
        let word = split[i];
        let newLength = lineLength + strlen(word);
        if (lineLength > 0 && whitespace) {
          newLength += whitespace.length;
        }
        if (newLength > maxLength) {
          if (lineLength !== 0) {
            lines.push(line.join(""));
          }
          line = [word];
          lineLength = strlen(word);
        } else {
          line.push(whitespace || "", word);
          lineLength = newLength;
        }
        whitespace = split[i + 1];
      }
      if (lineLength) {
        lines.push(line.join(""));
      }
      return lines;
    }
    function textWrap(maxLength, input) {
      let lines = [];
      let line = "";
      function pushLine(str, ws) {
        if (line.length && ws)
          line += ws;
        line += str;
        while (line.length > maxLength) {
          lines.push(line.slice(0, maxLength));
          line = line.slice(maxLength);
        }
      }
      let split = input.split(/(\s+)/g);
      for (let i = 0; i < split.length; i += 2) {
        pushLine(split[i], i && split[i - 1]);
      }
      if (line.length)
        lines.push(line);
      return lines;
    }
    function multiLineWordWrap(maxLength, input, wrapOnWordBoundary = true) {
      let output = [];
      input = input.split("\n");
      const handler = wrapOnWordBoundary ? wordWrap : textWrap;
      for (let i = 0; i < input.length; i++) {
        output.push.apply(output, handler(maxLength, input[i]));
      }
      return output;
    }
    function colorizeLines(input) {
      let state = {};
      let output = [];
      for (let i = 0; i < input.length; i++) {
        let line = rewindState(state, input[i]);
        state = readState(line);
        let temp = Object.assign({}, state);
        output.push(unwindState(temp, line));
      }
      return output;
    }
    function hyperlink(url, text) {
      const OSC = "\x1B]";
      const BEL = "\x07";
      const SEP = ";";
      return [OSC, "8", SEP, SEP, url || text, BEL, text, OSC, "8", SEP, SEP, BEL].join("");
    }
    module2.exports = {
      strlen,
      repeat,
      pad,
      truncate,
      mergeOptions,
      wordWrap: multiLineWordWrap,
      colorizeLines,
      hyperlink
    };
  }
});

// node_modules/@colors/colors/lib/styles.js
var require_styles = __commonJS({
  "node_modules/@colors/colors/lib/styles.js"(exports2, module2) {
    var styles = {};
    module2["exports"] = styles;
    var codes = {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      grey: [90, 39],
      brightRed: [91, 39],
      brightGreen: [92, 39],
      brightYellow: [93, 39],
      brightBlue: [94, 39],
      brightMagenta: [95, 39],
      brightCyan: [96, 39],
      brightWhite: [97, 39],
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgBrightRed: [101, 49],
      bgBrightGreen: [102, 49],
      bgBrightYellow: [103, 49],
      bgBrightBlue: [104, 49],
      bgBrightMagenta: [105, 49],
      bgBrightCyan: [106, 49],
      bgBrightWhite: [107, 49],
      // legacy styles for colors pre v1.0.0
      blackBG: [40, 49],
      redBG: [41, 49],
      greenBG: [42, 49],
      yellowBG: [43, 49],
      blueBG: [44, 49],
      magentaBG: [45, 49],
      cyanBG: [46, 49],
      whiteBG: [47, 49]
    };
    Object.keys(codes).forEach(function(key) {
      var val = codes[key];
      var style = styles[key] = [];
      style.open = "\x1B[" + val[0] + "m";
      style.close = "\x1B[" + val[1] + "m";
    });
  }
});

// node_modules/@colors/colors/lib/system/has-flag.js
var require_has_flag = __commonJS({
  "node_modules/@colors/colors/lib/system/has-flag.js"(exports2, module2) {
    "use strict";
    module2.exports = function(flag, argv) {
      argv = argv || process.argv;
      var terminatorPos = argv.indexOf("--");
      var prefix = /^-{1,2}/.test(flag) ? "" : "--";
      var pos = argv.indexOf(prefix + flag);
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/@colors/colors/lib/system/supports-colors.js
var require_supports_colors = __commonJS({
  "node_modules/@colors/colors/lib/system/supports-colors.js"(exports2, module2) {
    "use strict";
    var os2 = require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor = void 0;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      var min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        var osRelease = os2.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
          return sign in env;
        }) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TERM_PROGRAM" in env) {
        var version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Hyper":
            return 3;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      var level = supportsColor(stream);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/@colors/colors/lib/custom/trap.js
var require_trap = __commonJS({
  "node_modules/@colors/colors/lib/custom/trap.js"(exports2, module2) {
    module2["exports"] = function runTheTrap(text, options) {
      var result = "";
      text = text || "Run the trap, drop the bass";
      text = text.split("");
      var trap = {
        a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
        b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
        c: ["\xA9", "\u023B", "\u03FE"],
        d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
        e: [
          "\xCB",
          "\u0115",
          "\u018E",
          "\u0258",
          "\u03A3",
          "\u03BE",
          "\u04BC",
          "\u0A6C"
        ],
        f: ["\u04FA"],
        g: ["\u0262"],
        h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
        i: ["\u0F0F"],
        j: ["\u0134"],
        k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
        l: ["\u0139"],
        m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
        n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
        o: [
          "\xD8",
          "\xF5",
          "\xF8",
          "\u01FE",
          "\u0298",
          "\u047A",
          "\u05DD",
          "\u06DD",
          "\u0E4F"
        ],
        p: ["\u01F7", "\u048E"],
        q: ["\u09CD"],
        r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
        s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
        t: ["\u0141", "\u0166", "\u0373"],
        u: ["\u01B1", "\u054D"],
        v: ["\u05D8"],
        w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
        x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
        y: ["\xA5", "\u04B0", "\u04CB"],
        z: ["\u01B5", "\u0240"]
      };
      text.forEach(function(c) {
        c = c.toLowerCase();
        var chars = trap[c] || [" "];
        var rand = Math.floor(Math.random() * chars.length);
        if (typeof trap[c] !== "undefined") {
          result += trap[c][rand];
        } else {
          result += c;
        }
      });
      return result;
    };
  }
});

// node_modules/@colors/colors/lib/custom/zalgo.js
var require_zalgo = __commonJS({
  "node_modules/@colors/colors/lib/custom/zalgo.js"(exports2, module2) {
    module2["exports"] = function zalgo(text, options) {
      text = text || "   he is here   ";
      var soul = {
        "up": [
          "\u030D",
          "\u030E",
          "\u0304",
          "\u0305",
          "\u033F",
          "\u0311",
          "\u0306",
          "\u0310",
          "\u0352",
          "\u0357",
          "\u0351",
          "\u0307",
          "\u0308",
          "\u030A",
          "\u0342",
          "\u0313",
          "\u0308",
          "\u034A",
          "\u034B",
          "\u034C",
          "\u0303",
          "\u0302",
          "\u030C",
          "\u0350",
          "\u0300",
          "\u0301",
          "\u030B",
          "\u030F",
          "\u0312",
          "\u0313",
          "\u0314",
          "\u033D",
          "\u0309",
          "\u0363",
          "\u0364",
          "\u0365",
          "\u0366",
          "\u0367",
          "\u0368",
          "\u0369",
          "\u036A",
          "\u036B",
          "\u036C",
          "\u036D",
          "\u036E",
          "\u036F",
          "\u033E",
          "\u035B",
          "\u0346",
          "\u031A"
        ],
        "down": [
          "\u0316",
          "\u0317",
          "\u0318",
          "\u0319",
          "\u031C",
          "\u031D",
          "\u031E",
          "\u031F",
          "\u0320",
          "\u0324",
          "\u0325",
          "\u0326",
          "\u0329",
          "\u032A",
          "\u032B",
          "\u032C",
          "\u032D",
          "\u032E",
          "\u032F",
          "\u0330",
          "\u0331",
          "\u0332",
          "\u0333",
          "\u0339",
          "\u033A",
          "\u033B",
          "\u033C",
          "\u0345",
          "\u0347",
          "\u0348",
          "\u0349",
          "\u034D",
          "\u034E",
          "\u0353",
          "\u0354",
          "\u0355",
          "\u0356",
          "\u0359",
          "\u035A",
          "\u0323"
        ],
        "mid": [
          "\u0315",
          "\u031B",
          "\u0300",
          "\u0301",
          "\u0358",
          "\u0321",
          "\u0322",
          "\u0327",
          "\u0328",
          "\u0334",
          "\u0335",
          "\u0336",
          "\u035C",
          "\u035D",
          "\u035E",
          "\u035F",
          "\u0360",
          "\u0362",
          "\u0338",
          "\u0337",
          "\u0361",
          " \u0489"
        ]
      };
      var all = [].concat(soul.up, soul.down, soul.mid);
      function randomNumber(range) {
        var r = Math.floor(Math.random() * range);
        return r;
      }
      function isChar(character) {
        var bool = false;
        all.filter(function(i) {
          bool = i === character;
        });
        return bool;
      }
      function heComes(text2, options2) {
        var result = "";
        var counts;
        var l;
        options2 = options2 || {};
        options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
        options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
        options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
        options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
        text2 = text2.split("");
        for (l in text2) {
          if (isChar(l)) {
            continue;
          }
          result = result + text2[l];
          counts = { "up": 0, "down": 0, "mid": 0 };
          switch (options2.size) {
            case "mini":
              counts.up = randomNumber(8);
              counts.mid = randomNumber(2);
              counts.down = randomNumber(8);
              break;
            case "maxi":
              counts.up = randomNumber(16) + 3;
              counts.mid = randomNumber(4) + 1;
              counts.down = randomNumber(64) + 3;
              break;
            default:
              counts.up = randomNumber(8) + 1;
              counts.mid = randomNumber(6) / 2;
              counts.down = randomNumber(8) + 1;
              break;
          }
          var arr = ["up", "mid", "down"];
          for (var d in arr) {
            var index = arr[d];
            for (var i = 0; i <= counts[index]; i++) {
              if (options2[index]) {
                result = result + soul[index][randomNumber(soul[index].length)];
              }
            }
          }
        }
        return result;
      }
      return heComes(text, options);
    };
  }
});

// node_modules/@colors/colors/lib/maps/america.js
var require_america = __commonJS({
  "node_modules/@colors/colors/lib/maps/america.js"(exports2, module2) {
    module2["exports"] = function(colors) {
      return function(letter, i, exploded) {
        if (letter === " ")
          return letter;
        switch (i % 3) {
          case 0:
            return colors.red(letter);
          case 1:
            return colors.white(letter);
          case 2:
            return colors.blue(letter);
        }
      };
    };
  }
});

// node_modules/@colors/colors/lib/maps/zebra.js
var require_zebra = __commonJS({
  "node_modules/@colors/colors/lib/maps/zebra.js"(exports2, module2) {
    module2["exports"] = function(colors) {
      return function(letter, i, exploded) {
        return i % 2 === 0 ? letter : colors.inverse(letter);
      };
    };
  }
});

// node_modules/@colors/colors/lib/maps/rainbow.js
var require_rainbow = __commonJS({
  "node_modules/@colors/colors/lib/maps/rainbow.js"(exports2, module2) {
    module2["exports"] = function(colors) {
      var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
      return function(letter, i, exploded) {
        if (letter === " ") {
          return letter;
        } else {
          return colors[rainbowColors[i++ % rainbowColors.length]](letter);
        }
      };
    };
  }
});

// node_modules/@colors/colors/lib/maps/random.js
var require_random = __commonJS({
  "node_modules/@colors/colors/lib/maps/random.js"(exports2, module2) {
    module2["exports"] = function(colors) {
      var available = [
        "underline",
        "inverse",
        "grey",
        "yellow",
        "red",
        "green",
        "blue",
        "white",
        "cyan",
        "magenta",
        "brightYellow",
        "brightRed",
        "brightGreen",
        "brightBlue",
        "brightWhite",
        "brightCyan",
        "brightMagenta"
      ];
      return function(letter, i, exploded) {
        return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
      };
    };
  }
});

// node_modules/@colors/colors/lib/colors.js
var require_colors = __commonJS({
  "node_modules/@colors/colors/lib/colors.js"(exports2, module2) {
    var colors = {};
    module2["exports"] = colors;
    colors.themes = {};
    var util = require("util");
    var ansiStyles = colors.styles = require_styles();
    var defineProps = Object.defineProperties;
    var newLineRegex = new RegExp(/[\r\n]+/g);
    colors.supportsColor = require_supports_colors().supportsColor;
    if (typeof colors.enabled === "undefined") {
      colors.enabled = colors.supportsColor() !== false;
    }
    colors.enable = function() {
      colors.enabled = true;
    };
    colors.disable = function() {
      colors.enabled = false;
    };
    colors.stripColors = colors.strip = function(str) {
      return ("" + str).replace(/\x1B\[\d+m/g, "");
    };
    var stylize = colors.stylize = function stylize2(str, style) {
      if (!colors.enabled) {
        return str + "";
      }
      var styleMap = ansiStyles[style];
      if (!styleMap && style in colors) {
        return colors[style](str);
      }
      return styleMap.open + str + styleMap.close;
    };
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    var escapeStringRegexp = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
    function build(_styles) {
      var builder = function builder2() {
        return applyStyle.apply(builder2, arguments);
      };
      builder._styles = _styles;
      builder.__proto__ = proto;
      return builder;
    }
    var styles = function() {
      var ret = {};
      ansiStyles.grey = ansiStyles.gray;
      Object.keys(ansiStyles).forEach(function(key) {
        ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
        ret[key] = {
          get: function() {
            return build(this._styles.concat(key));
          }
        };
      });
      return ret;
    }();
    var proto = defineProps(function colors2() {
    }, styles);
    function applyStyle() {
      var args = Array.prototype.slice.call(arguments);
      var str = args.map(function(arg) {
        if (arg != null && arg.constructor === String) {
          return arg;
        } else {
          return util.inspect(arg);
        }
      }).join(" ");
      if (!colors.enabled || !str) {
        return str;
      }
      var newLinesPresent = str.indexOf("\n") != -1;
      var nestedStyles = this._styles;
      var i = nestedStyles.length;
      while (i--) {
        var code = ansiStyles[nestedStyles[i]];
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        if (newLinesPresent) {
          str = str.replace(newLineRegex, function(match) {
            return code.close + match + code.open;
          });
        }
      }
      return str;
    }
    colors.setTheme = function(theme) {
      if (typeof theme === "string") {
        console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
        return;
      }
      for (var style in theme) {
        (function(style2) {
          colors[style2] = function(str) {
            if (typeof theme[style2] === "object") {
              var out = str;
              for (var i in theme[style2]) {
                out = colors[theme[style2][i]](out);
              }
              return out;
            }
            return colors[theme[style2]](str);
          };
        })(style);
      }
    };
    function init() {
      var ret = {};
      Object.keys(styles).forEach(function(name) {
        ret[name] = {
          get: function() {
            return build([name]);
          }
        };
      });
      return ret;
    }
    var sequencer = function sequencer2(map2, str) {
      var exploded = str.split("");
      exploded = exploded.map(map2);
      return exploded.join("");
    };
    colors.trap = require_trap();
    colors.zalgo = require_zalgo();
    colors.maps = {};
    colors.maps.america = require_america()(colors);
    colors.maps.zebra = require_zebra()(colors);
    colors.maps.rainbow = require_rainbow()(colors);
    colors.maps.random = require_random()(colors);
    for (map in colors.maps) {
      (function(map2) {
        colors[map2] = function(str) {
          return sequencer(colors.maps[map2], str);
        };
      })(map);
    }
    var map;
    defineProps(colors, init());
  }
});

// node_modules/@colors/colors/safe.js
var require_safe = __commonJS({
  "node_modules/@colors/colors/safe.js"(exports2, module2) {
    var colors = require_colors();
    module2["exports"] = colors;
  }
});

// node_modules/cli-table3/src/cell.js
var require_cell = __commonJS({
  "node_modules/cli-table3/src/cell.js"(exports2, module2) {
    var { info, debug } = require_debug();
    var utils = require_utils();
    var Cell = class {
      /**
       * A representation of a cell within the table.
       * Implementations must have `init` and `draw` methods,
       * as well as `colSpan`, `rowSpan`, `desiredHeight` and `desiredWidth` properties.
       * @param options
       * @constructor
       */
      constructor(options) {
        this.setOptions(options);
        this.x = null;
        this.y = null;
      }
      setOptions(options) {
        if (["boolean", "number", "string"].indexOf(typeof options) !== -1) {
          options = { content: "" + options };
        }
        options = options || {};
        this.options = options;
        let content = options.content;
        if (["boolean", "number", "string"].indexOf(typeof content) !== -1) {
          this.content = String(content);
        } else if (!content) {
          this.content = this.options.href || "";
        } else {
          throw new Error("Content needs to be a primitive, got: " + typeof content);
        }
        this.colSpan = options.colSpan || 1;
        this.rowSpan = options.rowSpan || 1;
        if (this.options.href) {
          Object.defineProperty(this, "href", {
            get() {
              return this.options.href;
            }
          });
        }
      }
      mergeTableOptions(tableOptions, cells) {
        this.cells = cells;
        let optionsChars = this.options.chars || {};
        let tableChars = tableOptions.chars;
        let chars = this.chars = {};
        CHAR_NAMES.forEach(function(name) {
          setOption(optionsChars, tableChars, name, chars);
        });
        this.truncate = this.options.truncate || tableOptions.truncate;
        let style = this.options.style = this.options.style || {};
        let tableStyle = tableOptions.style;
        setOption(style, tableStyle, "padding-left", this);
        setOption(style, tableStyle, "padding-right", this);
        this.head = style.head || tableStyle.head;
        this.border = style.border || tableStyle.border;
        this.fixedWidth = tableOptions.colWidths[this.x];
        this.lines = this.computeLines(tableOptions);
        this.desiredWidth = utils.strlen(this.content) + this.paddingLeft + this.paddingRight;
        this.desiredHeight = this.lines.length;
      }
      computeLines(tableOptions) {
        const tableWordWrap = tableOptions.wordWrap || tableOptions.textWrap;
        const { wordWrap = tableWordWrap } = this.options;
        if (this.fixedWidth && wordWrap) {
          this.fixedWidth -= this.paddingLeft + this.paddingRight;
          if (this.colSpan) {
            let i = 1;
            while (i < this.colSpan) {
              this.fixedWidth += tableOptions.colWidths[this.x + i];
              i++;
            }
          }
          const { wrapOnWordBoundary: tableWrapOnWordBoundary = true } = tableOptions;
          const { wrapOnWordBoundary = tableWrapOnWordBoundary } = this.options;
          return this.wrapLines(utils.wordWrap(this.fixedWidth, this.content, wrapOnWordBoundary));
        }
        return this.wrapLines(this.content.split("\n"));
      }
      wrapLines(computedLines) {
        const lines = utils.colorizeLines(computedLines);
        if (this.href) {
          return lines.map((line) => utils.hyperlink(this.href, line));
        }
        return lines;
      }
      /**
       * Initializes the Cells data structure.
       *
       * @param tableOptions - A fully populated set of tableOptions.
       * In addition to the standard default values, tableOptions must have fully populated the
       * `colWidths` and `rowWidths` arrays. Those arrays must have lengths equal to the number
       * of columns or rows (respectively) in this table, and each array item must be a Number.
       *
       */
      init(tableOptions) {
        let x = this.x;
        let y = this.y;
        this.widths = tableOptions.colWidths.slice(x, x + this.colSpan);
        this.heights = tableOptions.rowHeights.slice(y, y + this.rowSpan);
        this.width = this.widths.reduce(sumPlusOne, -1);
        this.height = this.heights.reduce(sumPlusOne, -1);
        this.hAlign = this.options.hAlign || tableOptions.colAligns[x];
        this.vAlign = this.options.vAlign || tableOptions.rowAligns[y];
        this.drawRight = x + this.colSpan == tableOptions.colWidths.length;
      }
      /**
       * Draws the given line of the cell.
       * This default implementation defers to methods `drawTop`, `drawBottom`, `drawLine` and `drawEmpty`.
       * @param lineNum - can be `top`, `bottom` or a numerical line number.
       * @param spanningCell - will be a number if being called from a RowSpanCell, and will represent how
       * many rows below it's being called from. Otherwise it's undefined.
       * @returns {String} The representation of this line.
       */
      draw(lineNum, spanningCell) {
        if (lineNum == "top")
          return this.drawTop(this.drawRight);
        if (lineNum == "bottom")
          return this.drawBottom(this.drawRight);
        let content = utils.truncate(this.content, 10, this.truncate);
        if (!lineNum) {
          info(`${this.y}-${this.x}: ${this.rowSpan - lineNum}x${this.colSpan} Cell ${content}`);
        } else {
        }
        let padLen = Math.max(this.height - this.lines.length, 0);
        let padTop;
        switch (this.vAlign) {
          case "center":
            padTop = Math.ceil(padLen / 2);
            break;
          case "bottom":
            padTop = padLen;
            break;
          default:
            padTop = 0;
        }
        if (lineNum < padTop || lineNum >= padTop + this.lines.length) {
          return this.drawEmpty(this.drawRight, spanningCell);
        }
        let forceTruncation = this.lines.length > this.height && lineNum + 1 >= this.height;
        return this.drawLine(lineNum - padTop, this.drawRight, forceTruncation, spanningCell);
      }
      /**
       * Renders the top line of the cell.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @returns {String}
       */
      drawTop(drawRight) {
        let content = [];
        if (this.cells) {
          this.widths.forEach(function(width, index) {
            content.push(this._topLeftChar(index));
            content.push(utils.repeat(this.chars[this.y == 0 ? "top" : "mid"], width));
          }, this);
        } else {
          content.push(this._topLeftChar(0));
          content.push(utils.repeat(this.chars[this.y == 0 ? "top" : "mid"], this.width));
        }
        if (drawRight) {
          content.push(this.chars[this.y == 0 ? "topRight" : "rightMid"]);
        }
        return this.wrapWithStyleColors("border", content.join(""));
      }
      _topLeftChar(offset) {
        let x = this.x + offset;
        let leftChar;
        if (this.y == 0) {
          leftChar = x == 0 ? "topLeft" : offset == 0 ? "topMid" : "top";
        } else {
          if (x == 0) {
            leftChar = "leftMid";
          } else {
            leftChar = offset == 0 ? "midMid" : "bottomMid";
            if (this.cells) {
              let spanAbove = this.cells[this.y - 1][x] instanceof Cell.ColSpanCell;
              if (spanAbove) {
                leftChar = offset == 0 ? "topMid" : "mid";
              }
              if (offset == 0) {
                let i = 1;
                while (this.cells[this.y][x - i] instanceof Cell.ColSpanCell) {
                  i++;
                }
                if (this.cells[this.y][x - i] instanceof Cell.RowSpanCell) {
                  leftChar = "leftMid";
                }
              }
            }
          }
        }
        return this.chars[leftChar];
      }
      wrapWithStyleColors(styleProperty, content) {
        if (this[styleProperty] && this[styleProperty].length) {
          try {
            let colors = require_safe();
            for (let i = this[styleProperty].length - 1; i >= 0; i--) {
              colors = colors[this[styleProperty][i]];
            }
            return colors(content);
          } catch (e) {
            return content;
          }
        } else {
          return content;
        }
      }
      /**
       * Renders a line of text.
       * @param lineNum - Which line of text to render. This is not necessarily the line within the cell.
       * There may be top-padding above the first line of text.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @param forceTruncationSymbol - `true` if the rendered text should end with the truncation symbol even
       * if the text fits. This is used when the cell is vertically truncated. If `false` the text should
       * only include the truncation symbol if the text will not fit horizontally within the cell width.
       * @param spanningCell - a number of if being called from a RowSpanCell. (how many rows below). otherwise undefined.
       * @returns {String}
       */
      drawLine(lineNum, drawRight, forceTruncationSymbol, spanningCell) {
        let left = this.chars[this.x == 0 ? "left" : "middle"];
        if (this.x && spanningCell && this.cells) {
          let cellLeft = this.cells[this.y + spanningCell][this.x - 1];
          while (cellLeft instanceof ColSpanCell) {
            cellLeft = this.cells[cellLeft.y][cellLeft.x - 1];
          }
          if (!(cellLeft instanceof RowSpanCell)) {
            left = this.chars["rightMid"];
          }
        }
        let leftPadding = utils.repeat(" ", this.paddingLeft);
        let right = drawRight ? this.chars["right"] : "";
        let rightPadding = utils.repeat(" ", this.paddingRight);
        let line = this.lines[lineNum];
        let len = this.width - (this.paddingLeft + this.paddingRight);
        if (forceTruncationSymbol)
          line += this.truncate || "\u2026";
        let content = utils.truncate(line, len, this.truncate);
        content = utils.pad(content, len, " ", this.hAlign);
        content = leftPadding + content + rightPadding;
        return this.stylizeLine(left, content, right);
      }
      stylizeLine(left, content, right) {
        left = this.wrapWithStyleColors("border", left);
        right = this.wrapWithStyleColors("border", right);
        if (this.y === 0) {
          content = this.wrapWithStyleColors("head", content);
        }
        return left + content + right;
      }
      /**
       * Renders the bottom line of the cell.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @returns {String}
       */
      drawBottom(drawRight) {
        let left = this.chars[this.x == 0 ? "bottomLeft" : "bottomMid"];
        let content = utils.repeat(this.chars.bottom, this.width);
        let right = drawRight ? this.chars["bottomRight"] : "";
        return this.wrapWithStyleColors("border", left + content + right);
      }
      /**
       * Renders a blank line of text within the cell. Used for top and/or bottom padding.
       * @param drawRight - true if this method should render the right edge of the cell.
       * @param spanningCell - a number of if being called from a RowSpanCell. (how many rows below). otherwise undefined.
       * @returns {String}
       */
      drawEmpty(drawRight, spanningCell) {
        let left = this.chars[this.x == 0 ? "left" : "middle"];
        if (this.x && spanningCell && this.cells) {
          let cellLeft = this.cells[this.y + spanningCell][this.x - 1];
          while (cellLeft instanceof ColSpanCell) {
            cellLeft = this.cells[cellLeft.y][cellLeft.x - 1];
          }
          if (!(cellLeft instanceof RowSpanCell)) {
            left = this.chars["rightMid"];
          }
        }
        let right = drawRight ? this.chars["right"] : "";
        let content = utils.repeat(" ", this.width);
        return this.stylizeLine(left, content, right);
      }
    };
    var ColSpanCell = class {
      /**
       * A Cell that doesn't do anything. It just draws empty lines.
       * Used as a placeholder in column spanning.
       * @constructor
       */
      constructor() {
      }
      draw(lineNum) {
        if (typeof lineNum === "number") {
          debug(`${this.y}-${this.x}: 1x1 ColSpanCell`);
        }
        return "";
      }
      init() {
      }
      mergeTableOptions() {
      }
    };
    var RowSpanCell = class {
      /**
       * A placeholder Cell for a Cell that spans multiple rows.
       * It delegates rendering to the original cell, but adds the appropriate offset.
       * @param originalCell
       * @constructor
       */
      constructor(originalCell) {
        this.originalCell = originalCell;
      }
      init(tableOptions) {
        let y = this.y;
        let originalY = this.originalCell.y;
        this.cellOffset = y - originalY;
        this.offset = findDimension(tableOptions.rowHeights, originalY, this.cellOffset);
      }
      draw(lineNum) {
        if (lineNum == "top") {
          return this.originalCell.draw(this.offset, this.cellOffset);
        }
        if (lineNum == "bottom") {
          return this.originalCell.draw("bottom");
        }
        debug(`${this.y}-${this.x}: 1x${this.colSpan} RowSpanCell for ${this.originalCell.content}`);
        return this.originalCell.draw(this.offset + 1 + lineNum);
      }
      mergeTableOptions() {
      }
    };
    function firstDefined(...args) {
      return args.filter((v) => v !== void 0 && v !== null).shift();
    }
    function setOption(objA, objB, nameB, targetObj) {
      let nameA = nameB.split("-");
      if (nameA.length > 1) {
        nameA[1] = nameA[1].charAt(0).toUpperCase() + nameA[1].substr(1);
        nameA = nameA.join("");
        targetObj[nameA] = firstDefined(objA[nameA], objA[nameB], objB[nameA], objB[nameB]);
      } else {
        targetObj[nameB] = firstDefined(objA[nameB], objB[nameB]);
      }
    }
    function findDimension(dimensionTable, startingIndex, span) {
      let ret = dimensionTable[startingIndex];
      for (let i = 1; i < span; i++) {
        ret += 1 + dimensionTable[startingIndex + i];
      }
      return ret;
    }
    function sumPlusOne(a, b) {
      return a + b + 1;
    }
    var CHAR_NAMES = [
      "top",
      "top-mid",
      "top-left",
      "top-right",
      "bottom",
      "bottom-mid",
      "bottom-left",
      "bottom-right",
      "left",
      "left-mid",
      "mid",
      "mid-mid",
      "right",
      "right-mid",
      "middle"
    ];
    module2.exports = Cell;
    module2.exports.ColSpanCell = ColSpanCell;
    module2.exports.RowSpanCell = RowSpanCell;
  }
});

// node_modules/cli-table3/src/layout-manager.js
var require_layout_manager = __commonJS({
  "node_modules/cli-table3/src/layout-manager.js"(exports2, module2) {
    var { warn, debug } = require_debug();
    var Cell = require_cell();
    var { ColSpanCell, RowSpanCell } = Cell;
    (function() {
      function next(alloc, col) {
        if (alloc[col] > 0) {
          return next(alloc, col + 1);
        }
        return col;
      }
      function layoutTable(table) {
        let alloc = {};
        table.forEach(function(row, rowIndex) {
          let col = 0;
          row.forEach(function(cell) {
            cell.y = rowIndex;
            cell.x = rowIndex ? next(alloc, col) : col;
            const rowSpan = cell.rowSpan || 1;
            const colSpan = cell.colSpan || 1;
            if (rowSpan > 1) {
              for (let cs = 0; cs < colSpan; cs++) {
                alloc[cell.x + cs] = rowSpan;
              }
            }
            col = cell.x + colSpan;
          });
          Object.keys(alloc).forEach((idx) => {
            alloc[idx]--;
            if (alloc[idx] < 1)
              delete alloc[idx];
          });
        });
      }
      function maxWidth(table) {
        let mw = 0;
        table.forEach(function(row) {
          row.forEach(function(cell) {
            mw = Math.max(mw, cell.x + (cell.colSpan || 1));
          });
        });
        return mw;
      }
      function maxHeight(table) {
        return table.length;
      }
      function cellsConflict(cell1, cell2) {
        let yMin1 = cell1.y;
        let yMax1 = cell1.y - 1 + (cell1.rowSpan || 1);
        let yMin2 = cell2.y;
        let yMax2 = cell2.y - 1 + (cell2.rowSpan || 1);
        let yConflict = !(yMin1 > yMax2 || yMin2 > yMax1);
        let xMin1 = cell1.x;
        let xMax1 = cell1.x - 1 + (cell1.colSpan || 1);
        let xMin2 = cell2.x;
        let xMax2 = cell2.x - 1 + (cell2.colSpan || 1);
        let xConflict = !(xMin1 > xMax2 || xMin2 > xMax1);
        return yConflict && xConflict;
      }
      function conflictExists(rows, x, y) {
        let i_max = Math.min(rows.length - 1, y);
        let cell = { x, y };
        for (let i = 0; i <= i_max; i++) {
          let row = rows[i];
          for (let j = 0; j < row.length; j++) {
            if (cellsConflict(cell, row[j])) {
              return true;
            }
          }
        }
        return false;
      }
      function allBlank(rows, y, xMin, xMax) {
        for (let x = xMin; x < xMax; x++) {
          if (conflictExists(rows, x, y)) {
            return false;
          }
        }
        return true;
      }
      function addRowSpanCells(table) {
        table.forEach(function(row, rowIndex) {
          row.forEach(function(cell) {
            for (let i = 1; i < cell.rowSpan; i++) {
              let rowSpanCell = new RowSpanCell(cell);
              rowSpanCell.x = cell.x;
              rowSpanCell.y = cell.y + i;
              rowSpanCell.colSpan = cell.colSpan;
              insertCell(rowSpanCell, table[rowIndex + i]);
            }
          });
        });
      }
      function addColSpanCells(cellRows) {
        for (let rowIndex = cellRows.length - 1; rowIndex >= 0; rowIndex--) {
          let cellColumns = cellRows[rowIndex];
          for (let columnIndex = 0; columnIndex < cellColumns.length; columnIndex++) {
            let cell = cellColumns[columnIndex];
            for (let k = 1; k < cell.colSpan; k++) {
              let colSpanCell = new ColSpanCell();
              colSpanCell.x = cell.x + k;
              colSpanCell.y = cell.y;
              cellColumns.splice(columnIndex + 1, 0, colSpanCell);
            }
          }
        }
      }
      function insertCell(cell, row) {
        let x = 0;
        while (x < row.length && row[x].x < cell.x) {
          x++;
        }
        row.splice(x, 0, cell);
      }
      function fillInTable(table) {
        let h_max = maxHeight(table);
        let w_max = maxWidth(table);
        debug(`Max rows: ${h_max}; Max cols: ${w_max}`);
        for (let y = 0; y < h_max; y++) {
          for (let x = 0; x < w_max; x++) {
            if (!conflictExists(table, x, y)) {
              let opts = { x, y, colSpan: 1, rowSpan: 1 };
              x++;
              while (x < w_max && !conflictExists(table, x, y)) {
                opts.colSpan++;
                x++;
              }
              let y2 = y + 1;
              while (y2 < h_max && allBlank(table, y2, opts.x, opts.x + opts.colSpan)) {
                opts.rowSpan++;
                y2++;
              }
              let cell = new Cell(opts);
              cell.x = opts.x;
              cell.y = opts.y;
              warn(`Missing cell at ${cell.y}-${cell.x}.`);
              insertCell(cell, table[y]);
            }
          }
        }
      }
      function generateCells(rows) {
        return rows.map(function(row) {
          if (!Array.isArray(row)) {
            let key = Object.keys(row)[0];
            row = row[key];
            if (Array.isArray(row)) {
              row = row.slice();
              row.unshift(key);
            } else {
              row = [key, row];
            }
          }
          return row.map(function(cell) {
            return new Cell(cell);
          });
        });
      }
      function makeTableLayout(rows) {
        let cellRows = generateCells(rows);
        layoutTable(cellRows);
        fillInTable(cellRows);
        addRowSpanCells(cellRows);
        addColSpanCells(cellRows);
        return cellRows;
      }
      module2.exports = {
        makeTableLayout,
        layoutTable,
        addRowSpanCells,
        maxWidth,
        fillInTable,
        computeWidths: makeComputeWidths("colSpan", "desiredWidth", "x", 1),
        computeHeights: makeComputeWidths("rowSpan", "desiredHeight", "y", 1)
      };
    })();
    function makeComputeWidths(colSpan, desiredWidth, x, forcedMin) {
      return function(vals, table) {
        let result = [];
        let spanners = [];
        let auto = {};
        table.forEach(function(row) {
          row.forEach(function(cell) {
            if ((cell[colSpan] || 1) > 1) {
              spanners.push(cell);
            } else {
              result[cell[x]] = Math.max(result[cell[x]] || 0, cell[desiredWidth] || 0, forcedMin);
            }
          });
        });
        vals.forEach(function(val, index) {
          if (typeof val === "number") {
            result[index] = val;
          }
        });
        for (let k = spanners.length - 1; k >= 0; k--) {
          let cell = spanners[k];
          let span = cell[colSpan];
          let col = cell[x];
          let existingWidth = result[col];
          let editableCols = typeof vals[col] === "number" ? 0 : 1;
          if (typeof existingWidth === "number") {
            for (let i = 1; i < span; i++) {
              existingWidth += 1 + result[col + i];
              if (typeof vals[col + i] !== "number") {
                editableCols++;
              }
            }
          } else {
            existingWidth = desiredWidth === "desiredWidth" ? cell.desiredWidth - 1 : 1;
            if (!auto[col] || auto[col] < existingWidth) {
              auto[col] = existingWidth;
            }
          }
          if (cell[desiredWidth] > existingWidth) {
            let i = 0;
            while (editableCols > 0 && cell[desiredWidth] > existingWidth) {
              if (typeof vals[col + i] !== "number") {
                let dif = Math.round((cell[desiredWidth] - existingWidth) / editableCols);
                existingWidth += dif;
                result[col + i] += dif;
                editableCols--;
              }
              i++;
            }
          }
        }
        Object.assign(vals, result, auto);
        for (let j = 0; j < vals.length; j++) {
          vals[j] = Math.max(forcedMin, vals[j] || 0);
        }
      };
    }
  }
});

// node_modules/cli-table3/src/table.js
var require_table = __commonJS({
  "node_modules/cli-table3/src/table.js"(exports2, module2) {
    var debug = require_debug();
    var utils = require_utils();
    var tableLayout = require_layout_manager();
    var Table = class extends Array {
      constructor(opts) {
        super();
        const options = utils.mergeOptions(opts);
        Object.defineProperty(this, "options", {
          value: options,
          enumerable: options.debug
        });
        if (options.debug) {
          switch (typeof options.debug) {
            case "boolean":
              debug.setDebugLevel(debug.WARN);
              break;
            case "number":
              debug.setDebugLevel(options.debug);
              break;
            case "string":
              debug.setDebugLevel(parseInt(options.debug, 10));
              break;
            default:
              debug.setDebugLevel(debug.WARN);
              debug.warn(`Debug option is expected to be boolean, number, or string. Received a ${typeof options.debug}`);
          }
          Object.defineProperty(this, "messages", {
            get() {
              return debug.debugMessages();
            }
          });
        }
      }
      toString() {
        let array = this;
        let headersPresent = this.options.head && this.options.head.length;
        if (headersPresent) {
          array = [this.options.head];
          if (this.length) {
            array.push.apply(array, this);
          }
        } else {
          this.options.style.head = [];
        }
        let cells = tableLayout.makeTableLayout(array);
        cells.forEach(function(row) {
          row.forEach(function(cell) {
            cell.mergeTableOptions(this.options, cells);
          }, this);
        }, this);
        tableLayout.computeWidths(this.options.colWidths, cells);
        tableLayout.computeHeights(this.options.rowHeights, cells);
        cells.forEach(function(row) {
          row.forEach(function(cell) {
            cell.init(this.options);
          }, this);
        }, this);
        let result = [];
        for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
          let row = cells[rowIndex];
          let heightOfRow = this.options.rowHeights[rowIndex];
          if (rowIndex === 0 || !this.options.style.compact || rowIndex == 1 && headersPresent) {
            doDraw(row, "top", result);
          }
          for (let lineNum = 0; lineNum < heightOfRow; lineNum++) {
            doDraw(row, lineNum, result);
          }
          if (rowIndex + 1 == cells.length) {
            doDraw(row, "bottom", result);
          }
        }
        return result.join("\n");
      }
      get width() {
        let str = this.toString().split("\n");
        return str[0].length;
      }
    };
    Table.reset = () => debug.reset();
    function doDraw(row, lineNum, result) {
      let line = [];
      row.forEach(function(cell) {
        line.push(cell.draw(lineNum));
      });
      let str = line.join("");
      if (str.length)
        result.push(str);
    }
    module2.exports = Table;
  }
});

// node_modules/cli-table3/index.js
var require_cli_table3 = __commonJS({
  "node_modules/cli-table3/index.js"(exports2, module2) {
    module2.exports = require_table();
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/chalk/node_modules/has-flag/index.js
var require_has_flag2 = __commonJS({
  "node_modules/chalk/node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/chalk/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/chalk/node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os2 = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag2();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os2.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/chalk/source/util.js"(exports2, module2) {
    "use strict";
    var stringReplaceAll = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "node_modules/chalk/source/templates.js"(exports2, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk2, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk2;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk2, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk2, styles)(string));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk2, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/chalk/source/index.js"(exports2, module2) {
    "use strict";
    var ansiStyles = require_ansi_styles();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color();
    var {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    } = require_util();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    var chalkFactory = (options) => {
      const chalk3 = {};
      applyOptions(chalk3, options);
      chalk3.template = (...arguments_) => chalkTag(chalk3.template, ...arguments_);
      Object.setPrototypeOf(chalk3, Chalk.prototype);
      Object.setPrototypeOf(chalk3.template, chalk3);
      chalk3.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk3.template.Instance = ChalkClass;
      return chalk3.template;
    };
    function Chalk(options) {
      return chalkFactory(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto);
      builder._generator = self;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle = (self, string) => {
      if (self.level <= 0 || !string) {
        return self._isEmpty ? "" : string;
      }
      let styler = self._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk3, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk3, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles);
    var chalk2 = Chalk();
    chalk2.supportsColor = stdoutColor;
    chalk2.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
    chalk2.stderr.supportsColor = stderrColor;
    module2.exports = chalk2;
  }
});

// src/ios/listDevices.ts
var import_cli_table3 = __toESM(require_cli_table3());

// src/utils/index.ts
var import_child_process = require("child_process");
var import_util = require("util");
var import_os = __toESM(require("os"));
function runCommand(command) {
  return __async(this, null, function* () {
    const exec5 = (0, import_util.promisify)(import_child_process.exec);
    try {
      const { stdout, stderr } = yield exec5(command);
      return { stdout, stderr };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error executing command "${command}": ${error.message}`);
      } else {
        throw new Error(`Error executing command "${command}": ${error}`);
      }
    }
  });
}
function isValidUUID(uuid) {
  const uuidPattern = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  return uuidPattern.test(uuid);
}
function showCurrentOS() {
  const currentOS = import_os.default.type();
  const OSS = {
    Windows_NT: "\u{1F5A5} Current OS: Windows",
    Linux: "\u{1F427} Current OS: Linux.change",
    Darwin: "\u{1F34E} Current OS: MacOS.change11112"
  };
  console.log(OSS[currentOS]);
}
function validateIfCanUseIOS() {
  const currentOS = import_os.default.type();
  if (currentOS === "Windows_NT") {
    console.log("\u{1F6AB} Error: You cannot use iOS commands on Windows.");
    return false;
  }
  if (currentOS === "Linux") {
    console.log("\u{1F6AB} Error: You cannot use iOS commands on Linux.");
    return false;
  }
  return true;
}

// src/ios/listDevices.ts
var showDevices = () => __async(void 0, null, function* () {
  const tableDevices = new import_cli_table3.default({
    head: ["UUID", "Name", "State", "Version OS"],
    colWidths: [40, 50, 15]
  });
  const command = "xcrun simctl list devices --json";
  try {
    const { stdout, stderr } = yield runCommand(command);
    if (stderr) {
      console.log(`Error in standard output: ${stderr}`);
      return;
    }
    const data = JSON.parse(stdout);
    const devices = Object.keys(data["devices"]).map((runtime) => {
      const version = runtime.split("SimRuntime")[1].split("-");
      return data["devices"][runtime].map((device) => __spreadProps(__spreadValues({}, device), {
        versionOS: `${version[1]}.${version[2]}`
      }));
    }).flat().filter((item) => item.isAvailable);
    devices.forEach((device) => {
      const name = `\u{1F4F1} ${device.name}`;
      const showState = device.state === "Booted" ? "\u2705" : "\u274C";
      tableDevices.push([device.udid, name, `${showState} ${device.state}`, device.versionOS]);
    });
    console.log(tableDevices.toString());
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
});

// src/ios/bootEmulator.ts
var import_chalk = __toESM(require_source());
var import_child_process2 = require("child_process");
var openSimulator = () => __async(void 0, null, function* () {
  const openSimulatorCommand = "open -a Simulator";
  try {
    const { stderr } = yield runCommand(openSimulatorCommand);
    if (stderr) {
      console.log(`Error in standard output: ${stderr}`);
      return;
    }
    console.log("\u2705 Emulator opened successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
});
var checkIfSimulatorIsRunning = () => __async(void 0, null, function* () {
  const command = "pgrep -x Simulator";
  try {
    const { stdout, stderr } = yield runCommand(command);
    if (stderr) {
      console.log(import_chalk.default.red(`Error in command output: ${stderr}`));
      return;
    }
    if (stdout.trim() === "") {
      console.log("Simulator is not running");
      return false;
    }
    console.log("Simulator is running");
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.log(import_chalk.default.red(`Error running command: ${error.message}`));
    } else {
      console.log(import_chalk.default.red(`Error running command: ${error}`));
    }
  }
});
var isIOSEmulatorRunning = (device) => {
  return new Promise((resolve, reject) => {
    (0, import_child_process2.exec)("xcrun simctl list", (error, stdout, stderr) => {
      if (error) {
        console.log(`exec error: ${error}`);
        reject(error);
      }
      const lines = stdout.split("\n");
      const isRunning = lines.some((line) => line.includes("(Booted)"));
      const specificDevice = lines.some((line) => line.includes(`(${device}) (Booted)`));
      if (device) {
        resolve(specificDevice);
      } else {
        resolve(isRunning);
      }
    });
  });
};
var openDevice = (device) => __async(void 0, null, function* () {
  const command = `xcrun simctl boot ${device}`;
  try {
    const result = yield isIOSEmulatorRunning(device);
    if (result) {
      console.log("An iOS emulator is already running.");
      return;
    }
    const { stderr } = yield runCommand(command);
    if (stderr) {
      console.error(`Error en la salida est\xE1ndar: ${stderr}`);
      return;
    }
    console.log(`Emulador iniciado con \xE9xito para el dispositivo ${device}`);
    const isRunning = yield checkIfSimulatorIsRunning();
    if (isRunning)
      return;
    yield openSimulator();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
});

// src/ios/shutdownEmulator.ts
var checkIfEmulatorIsRunning = (UUID2) => __async(void 0, null, function* () {
  const command = `xcrun simctl list | grep -w "${UUID2}" | grep -w "Booted"`;
  try {
    const { stdout, stderr } = yield runCommand(command);
    if (stderr) {
      console.log(`Error in standard output: ${stderr}`);
      return;
    }
    if (stdout.trim() === "") {
      console.log("Simulator is not running");
      return false;
    }
    console.log(`The device with UUID ${UUID2} is running`);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
});
var closeAppSimulator = () => __async(void 0, null, function* () {
  const closeSimulatorCommand = `osascript -e 'tell application "Simulator" to quit'`;
  try {
    const { stderr } = yield runCommand(closeSimulatorCommand);
    if (stderr) {
      console.log(`Error in standard output: ${stderr}`);
      return;
    }
    console.log("\u2705 Simulator application closed successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
});
var closeEmulator = (UUID2) => __async(void 0, null, function* () {
  const isEmulatorRunning = yield checkIfEmulatorIsRunning(UUID2);
  if (!isEmulatorRunning) {
    console.log(`The device with UUID ${UUID2} is not running`);
    return;
  }
  const shutdownCommand = `xcrun simctl shutdown ${UUID2}`;
  try {
    const { stderr } = yield runCommand(shutdownCommand);
    if (stderr) {
      console.error(`Error en la salida est\xE1ndar: ${stderr}`);
      return;
    }
    yield closeAppSimulator();
    console.log(`\u2705 Emulator closed successfully for device ${UUID2}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
});

// src/ios/resetEmulator.ts
var resetEmulator = (UUID2) => __async(void 0, null, function* () {
  const eraseCommand = `xcrun simctl erase ${UUID2}`;
  try {
    yield closeEmulator(UUID2);
    const { stderr } = yield runCommand(eraseCommand);
    if (stderr) {
      console.log(`Error resetting emulator: ${stderr}`);
      return;
    }
    console.log(`\u2705 Emulator restarted successfully for device ${UUID2}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error running command: ${error.message}`);
    } else {
      console.error(`Error running command: ${error}`);
    }
  }
});

// src/android/listDownloadedEmulators.ts
var import_child_process3 = require("child_process");
var listDownloadedEmulators = () => {
  (0, import_child_process3.exec)("emulator -list-avds", (error, stdout, stderr) => {
    if (error) {
      console.log(`Error listing downloaded emulators: ${error.message}`);
      return;
    }
    const emulators = stdout.trim().split("\n");
    if (emulators.length === 0 || emulators.length === 1 && emulators[0] === "") {
      console.log("No downloaded emulators found.");
    } else {
      console.log("Downloaded emulators:");
      emulators.forEach((emulator) => {
        console.log(emulator);
      });
    }
  });
};

// src/android/startDevice.ts
var import_child_process4 = require("child_process");
var startDevice = (emulatorName) => {
  console.log(`\u{1F680} Starting Android emulator "${emulatorName}"...`);
  const emulatorPath = "~/Library/Android/sdk/emulator/emulator";
  const startEmulatorArgs = ["-avd", emulatorName, "-no-boot-anim"];
  const emulatorProcess = (0, import_child_process4.spawn)(emulatorPath, startEmulatorArgs, {
    detached: true,
    stdio: "ignore",
    shell: true
  });
  emulatorProcess.unref();
};

// src/android/shutdownDevice.ts
var import_child_process5 = require("child_process");
var shutdownDevice = (emulatorName) => {
  console.log(`Shutting down Android emulator "${emulatorName}"...`);
  const getEmulatorPidCommand = `pgrep -f "${emulatorName}"`;
  (0, import_child_process5.exec)(getEmulatorPidCommand, (error, stdout) => {
    if (error) {
      console.log(`Error getting emulator PID: ${error}`);
    } else {
      const emulatorPid = stdout.trim();
      const killEmulatorCommand = `kill ${emulatorPid}`;
      (0, import_child_process5.exec)(killEmulatorCommand, (error2) => {
        if (error2) {
          console.log(`Error shutting down emulator: ${error2}`);
        } else {
          console.log(`\u{1F4F4} Shut down ${emulatorName}.`);
        }
      });
    }
  });
};

// src/android/resetDataAppAndroid.ts
var import_child_process6 = require("child_process");
function resetDeviceData(deviceId, packageName) {
  (0, import_child_process6.exec)(`adb -s ${deviceId} shell pm clear ${packageName}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error resetting data on device ${deviceId}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`Error resetting data on device ${deviceId}: ${stderr}`);
      return;
    }
    console.log(`Data reset on device ${deviceId}`);
  });
}

// src/index.ts
var argument = process.argv.slice(2);
var UUID = argument[1];
var lastArgument = argument[argument.length - 1];
var optionSelected = "android";
if (lastArgument === "ios") {
  console.log("\u{1F4F1} Platform iOS");
} else if (lastArgument === "android") {
  console.log("\u{1F916} Platform Android");
}
if (!validateIfCanUseIOS() && lastArgument === "ios") {
  process.exit(1);
}
var platformCommands = ["ios", "android"];
if (validateIfCanUseIOS() && (!platformCommands.includes(lastArgument) || lastArgument === "ios")) {
  optionSelected = "ios";
  console.log("\u{1F4F1} Platform iOS");
} else if (lastArgument === "android") {
  optionSelected = "android";
  console.log("\u{1F916} Platform Android");
}
showCurrentOS();
if (optionSelected === "android") {
  switch (argument[0]) {
    case "list-devices":
      (() => __async(exports, null, function* () {
        yield listDownloadedEmulators();
      }))();
      break;
    case "start-device":
      (() => __async(exports, null, function* () {
        yield startDevice(UUID);
      }))();
      break;
    case "shutdown-device":
      (() => __async(exports, null, function* () {
        yield shutdownDevice(UUID);
      }))();
      break;
    case "reset-data":
      if (!UUID) {
        console.log("\u{1F6AB} Error: No se ha especificado el UUID del dispositivo.");
        break;
      }
      (() => __async(exports, null, function* () {
        yield resetDeviceData(UUID, argument[2]);
      }))();
      break;
    default:
      console.log("\u{1F6AB} No valid command specified.");
      break;
  }
}
if (optionSelected === "ios") {
  switch (argument[0]) {
    case "list-devices":
      (() => __async(exports, null, function* () {
        yield showDevices();
      }))();
      break;
    case "start-device":
      if (!UUID) {
        console.log("\u{1F6AB} Error: No device UUID specified.");
        break;
      }
      if (!isValidUUID(UUID)) {
        console.log("\u{1F6AB} Error: UUID is not valid.");
        break;
      }
      (() => __async(exports, null, function* () {
        yield openDevice(UUID);
      }))();
      break;
    case "shutdown-device":
      if (!isValidUUID(UUID)) {
        console.log("\u{1F6AB} Error: UUID is not valid.");
        break;
      }
      (() => __async(exports, null, function* () {
        yield closeEmulator(UUID);
      }))();
      break;
    case "reset-device":
      if (!isValidUUID(UUID)) {
        console.log("\u{1F6AB} Error: UUID is not valid.");
        break;
      }
      (() => __async(exports, null, function* () {
        yield resetEmulator(UUID);
      }))();
      break;
    default:
      console.log("\u{1F6AB} No valid command specified.");
      break;
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2NsaS10YWJsZTMvc3JjL2RlYnVnLmpzIiwgIm5vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9pcy1mdWxsd2lkdGgtY29kZS1wb2ludC9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3N0cmluZy13aWR0aC9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvY2xpLXRhYmxlMy9zcmMvdXRpbHMuanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL2xpYi9zdHlsZXMuanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL2xpYi9zeXN0ZW0vaGFzLWZsYWcuanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL2xpYi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzLmpzIiwgIm5vZGVfbW9kdWxlcy9AY29sb3JzL2NvbG9ycy9saWIvY3VzdG9tL3RyYXAuanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL2xpYi9jdXN0b20vemFsZ28uanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL2xpYi9tYXBzL2FtZXJpY2EuanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL2xpYi9tYXBzL3plYnJhLmpzIiwgIm5vZGVfbW9kdWxlcy9AY29sb3JzL2NvbG9ycy9saWIvbWFwcy9yYWluYm93LmpzIiwgIm5vZGVfbW9kdWxlcy9AY29sb3JzL2NvbG9ycy9saWIvbWFwcy9yYW5kb20uanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL2xpYi9jb2xvcnMuanMiLCAibm9kZV9tb2R1bGVzL0Bjb2xvcnMvY29sb3JzL3NhZmUuanMiLCAibm9kZV9tb2R1bGVzL2NsaS10YWJsZTMvc3JjL2NlbGwuanMiLCAibm9kZV9tb2R1bGVzL2NsaS10YWJsZTMvc3JjL2xheW91dC1tYW5hZ2VyLmpzIiwgIm5vZGVfbW9kdWxlcy9jbGktdGFibGUzL3NyYy90YWJsZS5qcyIsICJub2RlX21vZHVsZXMvY2xpLXRhYmxlMy9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsICJub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsICJub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvYW5zaS1zdHlsZXMvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2NoYWxrL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvY2hhbGsvbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdXRpbC5qcyIsICJub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3RlbXBsYXRlcy5qcyIsICJub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwgInNyYy9pb3MvbGlzdERldmljZXMudHMiLCAic3JjL3V0aWxzL2luZGV4LnRzIiwgInNyYy9pb3MvYm9vdEVtdWxhdG9yLnRzIiwgInNyYy9pb3Mvc2h1dGRvd25FbXVsYXRvci50cyIsICJzcmMvaW9zL3Jlc2V0RW11bGF0b3IudHMiLCAic3JjL2FuZHJvaWQvbGlzdERvd25sb2FkZWRFbXVsYXRvcnMudHMiLCAic3JjL2FuZHJvaWQvc3RhcnREZXZpY2UudHMiLCAic3JjL2FuZHJvaWQvc2h1dGRvd25EZXZpY2UudHMiLCAic3JjL2FuZHJvaWQvcmVzZXREYXRhQXBwQW5kcm9pZC50cyIsICJzcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBtZXNzYWdlcyA9IFtdO1xubGV0IGxldmVsID0gMDtcblxuY29uc3QgZGVidWcgPSAobXNnLCBtaW4pID0+IHtcbiAgaWYgKGxldmVsID49IG1pbikge1xuICAgIG1lc3NhZ2VzLnB1c2gobXNnKTtcbiAgfVxufTtcblxuZGVidWcuV0FSTiA9IDE7XG5kZWJ1Zy5JTkZPID0gMjtcbmRlYnVnLkRFQlVHID0gMztcblxuZGVidWcucmVzZXQgPSAoKSA9PiB7XG4gIG1lc3NhZ2VzID0gW107XG59O1xuXG5kZWJ1Zy5zZXREZWJ1Z0xldmVsID0gKHYpID0+IHtcbiAgbGV2ZWwgPSB2O1xufTtcblxuZGVidWcud2FybiA9IChtc2cpID0+IGRlYnVnKG1zZywgZGVidWcuV0FSTik7XG5kZWJ1Zy5pbmZvID0gKG1zZykgPT4gZGVidWcobXNnLCBkZWJ1Zy5JTkZPKTtcbmRlYnVnLmRlYnVnID0gKG1zZykgPT4gZGVidWcobXNnLCBkZWJ1Zy5ERUJVRyk7XG5cbmRlYnVnLmRlYnVnTWVzc2FnZXMgPSAoKSA9PiBtZXNzYWdlcztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1ZztcbiIsICIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKHtvbmx5Rmlyc3QgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBwYXR0ZXJuID0gW1xuXHRcdCdbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpJyxcblx0XHQnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1udHFyeT0+PH5dKSknXG5cdF0uam9pbignfCcpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIG9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmcgPT4gdHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgPyBzdHJpbmcucmVwbGFjZShhbnNpUmVnZXgoKSwgJycpIDogc3RyaW5nO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIHlvZGEgKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNGdWxsd2lkdGhDb2RlUG9pbnQgPSBjb2RlUG9pbnQgPT4ge1xuXHRpZiAoTnVtYmVyLmlzTmFOKGNvZGVQb2ludCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBDb2RlIHBvaW50cyBhcmUgZGVyaXZlZCBmcm9tOlxuXHQvLyBodHRwOi8vd3d3LnVuaXgub3JnL1B1YmxpYy9VTklEQVRBL0Vhc3RBc2lhbldpZHRoLnR4dFxuXHRpZiAoXG5cdFx0Y29kZVBvaW50ID49IDB4MTEwMCAmJiAoXG5cdFx0XHRjb2RlUG9pbnQgPD0gMHgxMTVGIHx8IC8vIEhhbmd1bCBKYW1vXG5cdFx0XHRjb2RlUG9pbnQgPT09IDB4MjMyOSB8fCAvLyBMRUZULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdGNvZGVQb2ludCA9PT0gMHgyMzJBIHx8IC8vIFJJR0hULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdC8vIENKSyBSYWRpY2FscyBTdXBwbGVtZW50IC4uIEVuY2xvc2VkIENKSyBMZXR0ZXJzIGFuZCBNb250aHNcblx0XHRcdCgweDJFODAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDMyNDcgJiYgY29kZVBvaW50ICE9PSAweDMwM0YpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzIC4uIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEFcblx0XHRcdCgweDMyNTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDREQkYpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIC4uIFlpIFJhZGljYWxzXG5cdFx0XHQoMHg0RTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhBNEM2KSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIEphbW8gRXh0ZW5kZWQtQVxuXHRcdFx0KDB4QTk2MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4QTk3QykgfHxcblx0XHRcdC8vIEhhbmd1bCBTeWxsYWJsZXNcblx0XHRcdCgweEFDMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEQ3QTMpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBJZGVvZ3JhcGhzXG5cdFx0XHQoMHhGOTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGQUZGKSB8fFxuXHRcdFx0Ly8gVmVydGljYWwgRm9ybXNcblx0XHRcdCgweEZFMTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZFMTkpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBGb3JtcyAuLiBTbWFsbCBGb3JtIFZhcmlhbnRzXG5cdFx0XHQoMHhGRTMwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRTZCKSB8fFxuXHRcdFx0Ly8gSGFsZndpZHRoIGFuZCBGdWxsd2lkdGggRm9ybXNcblx0XHRcdCgweEZGMDEgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZGNjApIHx8XG5cdFx0XHQoMHhGRkUwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRkU2KSB8fFxuXHRcdFx0Ly8gS2FuYSBTdXBwbGVtZW50XG5cdFx0XHQoMHgxQjAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUIwMDEpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBJZGVvZ3JhcGhpYyBTdXBwbGVtZW50XG5cdFx0XHQoMHgxRjIwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUYyNTEpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBCIC4uIFRlcnRpYXJ5IElkZW9ncmFwaGljIFBsYW5lXG5cdFx0XHQoMHgyMDAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4M0ZGRkQpXG5cdFx0KVxuXHQpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL210aHMuYmUvZW1vamlcbiAgcmV0dXJuIC9cXHVEODNDXFx1REZGNFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjIoPzpcXHVEQjQwXFx1REM2NVxcdURCNDBcXHVEQzZFXFx1REI0MFxcdURDNjd8XFx1REI0MFxcdURDNzNcXHVEQjQwXFx1REM2M1xcdURCNDBcXHVEQzc0fFxcdURCNDBcXHVEQzc3XFx1REI0MFxcdURDNkNcXHVEQjQwXFx1REM3MylcXHVEQjQwXFx1REM3RnxcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1xcdURGRkJ8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZGXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkVcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRF0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRFxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1MjAwRCg/OlxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRFxcdURDNjh8KD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKSl8XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGfFxcdUQ4M0RbXFx1REM2NlxcdURDNjddfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXwoPzpcXHVEODNDXFx1REZGQlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRVxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQ1xcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XSlcXHVGRTBGfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkJcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGQ1xcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OSlcXHVEODNDXFx1REZGQnxcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NcXHVERkZGXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDEpfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkVcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGRlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSkpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZDXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkRcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpKD86XFx1RDgzQ1tcXHVERkZCXFx1REZGQ10pfFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1xcdURGRkVcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkNcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkJcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRFxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHUyMDBEKD86XFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pfFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkZcXHUyMDBEKD86XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSkpfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkRcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGRVxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRF0pfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY5XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXwoPzpcXHVEODNEXFx1REM0MVxcdUZFMEZcXHUyMDBEXFx1RDgzRFxcdURERTh8XFx1RDgzRFxcdURDNjkoPzpcXHVEODNDXFx1REZGRlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRVxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQ1xcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pfCg/Oig/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpXFx1RkUwRnxcXHVEODNEXFx1REM2RnxcXHVEODNFW1xcdUREM0NcXHVERERFXFx1RERERl0pXFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml18KD86XFx1MjZGOXxcXHVEODNDW1xcdURGQ0JcXHVERkNDXXxcXHVEODNEXFx1REQ3NSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pXFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml18KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENi1cXHVEREREXSkoPzooPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pXFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml18XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml0pfFxcdUQ4M0NcXHVERkY0XFx1MjAwRFxcdTI2MjApXFx1RkUwRnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8XFx1RDgzQ1xcdURGRjNcXHVGRTBGXFx1MjAwRFxcdUQ4M0NcXHVERjA4fFxcdUQ4M0RcXHVEQzE1XFx1MjAwRFxcdUQ4M0VcXHVEREJBfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY3fFxcdUQ4M0NcXHVEREZEXFx1RDgzQ1xcdURERjB8XFx1RDgzQ1xcdURERjRcXHVEODNDXFx1RERGMnxcXHVEODNDXFx1RERGNlxcdUQ4M0NcXHVEREU2fFsjXFwqMC05XVxcdUZFMEZcXHUyMEUzfFxcdUQ4M0NcXHVEREU3KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRlxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERGOSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVEXFx1RERFRi1cXHVEREY0XFx1RERGN1xcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkZdKXxcXHVEODNDXFx1RERFQSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERURcXHVEREY3LVxcdURERkFdKXxcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1RDgzQ1xcdURERjcoPzpcXHVEODNDW1xcdURERUFcXHVEREY0XFx1RERGOFxcdURERkFcXHVEREZDXSl8XFx1RDgzRFxcdURDNjkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0NcXHVEREYyKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOC1cXHVEREVEXFx1RERGMC1cXHVEREZGXSl8XFx1RDgzQ1xcdURERTYoPzpcXHVEODNDW1xcdURERTgtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGMlxcdURERjRcXHVEREY2LVxcdURERkFcXHVEREZDXFx1RERGRFxcdURERkZdKXxcXHVEODNDXFx1RERGMCg/OlxcdUQ4M0NbXFx1RERFQVxcdURERUMtXFx1RERFRVxcdURERjJcXHVEREYzXFx1RERGNVxcdURERjdcXHVEREZDXFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERFRCg/OlxcdUQ4M0NbXFx1RERGMFxcdURERjJcXHVEREYzXFx1RERGN1xcdURERjlcXHVEREZBXSl8XFx1RDgzQ1xcdURERTkoPzpcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdKXxcXHVEODNDXFx1RERGRSg/OlxcdUQ4M0NbXFx1RERFQVxcdURERjldKXxcXHVEODNDXFx1RERFQyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUVcXHVEREYxLVxcdURERjNcXHVEREY1LVxcdURERkFcXHVEREZDXFx1RERGRV0pfFxcdUQ4M0NcXHVEREY4KD86XFx1RDgzQ1tcXHVEREU2LVxcdURERUFcXHVEREVDLVxcdURERjRcXHVEREY3LVxcdURERjlcXHVEREZCXFx1RERGRC1cXHVEREZGXSl8XFx1RDgzQ1xcdURERUIoPzpcXHVEODNDW1xcdURERUUtXFx1RERGMFxcdURERjJcXHVEREY0XFx1RERGN10pfFxcdUQ4M0NcXHVEREY1KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERGQig/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERUVcXHVEREYzXFx1RERGQV0pfFxcdUQ4M0NcXHVEREYzKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdKXxcXHVEODNDXFx1RERFOCg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVFXFx1RERGMC1cXHVEREY1XFx1RERGN1xcdURERkEtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREYxKD86XFx1RDgzQ1tcXHVEREU2LVxcdURERThcXHVEREVFXFx1RERGMFxcdURERjctXFx1RERGQlxcdURERkVdKXxcXHVEODNDXFx1RERGRig/OlxcdUQ4M0NbXFx1RERFNlxcdURERjJcXHVEREZDXSl8XFx1RDgzQ1xcdURERkMoPzpcXHVEODNDW1xcdURERUJcXHVEREY4XSl8XFx1RDgzQ1xcdURERkEoPzpcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERFRSg/OlxcdUQ4M0NbXFx1RERFOC1cXHVEREVBXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XSl8XFx1RDgzQ1xcdURERUYoPzpcXHVEODNDW1xcdURERUFcXHVEREYyXFx1RERGNFxcdURERjVdKXwoPzpcXHVEODNDW1xcdURGQzNcXHVERkM0XFx1REZDQV18XFx1RDgzRFtcXHVEQzZFXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0LVxcdURFQjZdfFxcdUQ4M0VbXFx1REQyNlxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENELVxcdUREQ0ZcXHVEREQ2LVxcdURERERdKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86XFx1MjZGOXxcXHVEODNDW1xcdURGQ0JcXHVERkNDXXxcXHVEODNEXFx1REQ3NSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OltcXHUyNjFEXFx1MjcwQS1cXHUyNzBEXXxcXHVEODNDW1xcdURGODVcXHVERkMyXFx1REZDN118XFx1RDgzRFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjZcXHVEQzY3XFx1REM2Qi1cXHVEQzZEXFx1REM3MFxcdURDNzJcXHVEQzc0LVxcdURDNzZcXHVEQzc4XFx1REM3Q1xcdURDODNcXHVEQzg1XFx1RENBQVxcdURENzRcXHVERDdBXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1REU0Q1xcdURFNEZcXHVERUMwXFx1REVDQ118XFx1RDgzRVtcXHVERDBGXFx1REQxOC1cXHVERDFDXFx1REQxRVxcdUREMUZcXHVERDMwLVxcdUREMzZcXHVEREI1XFx1RERCNlxcdUREQkJcXHVEREQyLVxcdURERDVdKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86W1xcdTIzMUFcXHUyMzFCXFx1MjNFOS1cXHUyM0VDXFx1MjNGMFxcdTIzRjNcXHUyNUZEXFx1MjVGRVxcdTI2MTRcXHUyNjE1XFx1MjY0OC1cXHUyNjUzXFx1MjY3RlxcdTI2OTNcXHUyNkExXFx1MjZBQVxcdTI2QUJcXHUyNkJEXFx1MjZCRVxcdTI2QzRcXHUyNkM1XFx1MjZDRVxcdTI2RDRcXHUyNkVBXFx1MjZGMlxcdTI2RjNcXHUyNkY1XFx1MjZGQVxcdTI2RkRcXHUyNzA1XFx1MjcwQVxcdTI3MEJcXHUyNzI4XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc5NS1cXHUyNzk3XFx1MjdCMFxcdTI3QkZcXHUyQjFCXFx1MkIxQ1xcdTJCNTBcXHUyQjU1XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURERTYtXFx1RERGRlxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjdDXFx1REY3RS1cXHVERjkzXFx1REZBMC1cXHVERkNBXFx1REZDRi1cXHVERkQzXFx1REZFMC1cXHVERkYwXFx1REZGNFxcdURGRjgtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDM0VcXHVEQzQwXFx1REM0Mi1cXHVEQ0ZDXFx1RENGRi1cXHVERDNEXFx1REQ0Qi1cXHVERDRFXFx1REQ1MC1cXHVERDY3XFx1REQ3QVxcdUREOTVcXHVERDk2XFx1RERBNFxcdURERkItXFx1REU0RlxcdURFODAtXFx1REVDNVxcdURFQ0NcXHVERUQwLVxcdURFRDJcXHVERUQ1XFx1REVFQlxcdURFRUNcXHVERUY0LVxcdURFRkFcXHVERkUwLVxcdURGRUJdfFxcdUQ4M0VbXFx1REQwRC1cXHVERDNBXFx1REQzQy1cXHVERDQ1XFx1REQ0Ny1cXHVERDcxXFx1REQ3My1cXHVERDc2XFx1REQ3QS1cXHVEREEyXFx1RERBNS1cXHVEREFBXFx1RERBRS1cXHVERENBXFx1RERDRC1cXHVEREZGXFx1REU3MC1cXHVERTczXFx1REU3OC1cXHVERTdBXFx1REU4MC1cXHVERTgyXFx1REU5MC1cXHVERTk1XSl8KD86WyNcXCowLTlcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRTktXFx1MjNGM1xcdTIzRjgtXFx1MjNGQVxcdTI0QzJcXHUyNUFBXFx1MjVBQlxcdTI1QjZcXHUyNUMwXFx1MjVGQi1cXHUyNUZFXFx1MjYwMC1cXHUyNjA0XFx1MjYwRVxcdTI2MTFcXHUyNjE0XFx1MjYxNVxcdTI2MThcXHUyNjFEXFx1MjYyMFxcdTI2MjJcXHUyNjIzXFx1MjYyNlxcdTI2MkFcXHUyNjJFXFx1MjYyRlxcdTI2MzgtXFx1MjYzQVxcdTI2NDBcXHUyNjQyXFx1MjY0OC1cXHUyNjUzXFx1MjY1RlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjY4XFx1MjY3QlxcdTI2N0VcXHUyNjdGXFx1MjY5Mi1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTFcXHUyNkFBXFx1MjZBQlxcdTI2QjBcXHUyNkIxXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2QzhcXHUyNkNFXFx1MjZDRlxcdTI2RDFcXHUyNkQzXFx1MjZENFxcdTI2RTlcXHUyNkVBXFx1MjZGMC1cXHUyNkY1XFx1MjZGNy1cXHUyNkZBXFx1MjZGRFxcdTI3MDJcXHUyNzA1XFx1MjcwOC1cXHUyNzBEXFx1MjcwRlxcdTI3MTJcXHUyNzE0XFx1MjcxNlxcdTI3MURcXHUyNzIxXFx1MjcyOFxcdTI3MzNcXHUyNzM0XFx1Mjc0NFxcdTI3NDdcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3NTdcXHUyNzYzXFx1Mjc2NFxcdTI3OTUtXFx1Mjc5N1xcdTI3QTFcXHUyN0IwXFx1MjdCRlxcdTI5MzRcXHUyOTM1XFx1MkIwNS1cXHUyQjA3XFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NVxcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldfFxcdUQ4M0NbXFx1REMwNFxcdURDQ0ZcXHVERDcwXFx1REQ3MVxcdUREN0VcXHVERDdGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURERTYtXFx1RERGRlxcdURFMDFcXHVERTAyXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMVxcdURGMjQtXFx1REY5M1xcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RS1cXHVERkYwXFx1REZGMy1cXHVERkY1XFx1REZGNy1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1RENGRFxcdURDRkYtXFx1REQzRFxcdURENDktXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdURENkZcXHVERDcwXFx1REQ3My1cXHVERDdBXFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREOTBcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREE1XFx1RERBOFxcdUREQjFcXHVEREIyXFx1RERCQ1xcdUREQzItXFx1RERDNFxcdURERDEtXFx1REREM1xcdUREREMtXFx1RERERVxcdURERTFcXHVEREUzXFx1RERFOFxcdURERUZcXHVEREYzXFx1RERGQS1cXHVERTRGXFx1REU4MC1cXHVERUM1XFx1REVDQi1cXHVERUQyXFx1REVENVxcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUVCXFx1REVFQ1xcdURFRjBcXHVERUYzLVxcdURFRkFcXHVERkUwLVxcdURGRUJdfFxcdUQ4M0VbXFx1REQwRC1cXHVERDNBXFx1REQzQy1cXHVERDQ1XFx1REQ0Ny1cXHVERDcxXFx1REQ3My1cXHVERDc2XFx1REQ3QS1cXHVEREEyXFx1RERBNS1cXHVEREFBXFx1RERBRS1cXHVERENBXFx1RERDRC1cXHVEREZGXFx1REU3MC1cXHVERTczXFx1REU3OC1cXHVERTdBXFx1REU4MC1cXHVERTgyXFx1REU5MC1cXHVERTk1XSlcXHVGRTBGfCg/OltcXHUyNjFEXFx1MjZGOVxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMi1cXHVERkM0XFx1REZDN1xcdURGQ0EtXFx1REZDQ118XFx1RDgzRFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjYtXFx1REM3OFxcdURDN0NcXHVEQzgxLVxcdURDODNcXHVEQzg1LVxcdURDODdcXHVEQzhGXFx1REM5MVxcdURDQUFcXHVERDc0XFx1REQ3NVxcdUREN0FcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVERTQ1LVxcdURFNDdcXHVERTRCLVxcdURFNEZcXHVERUEzXFx1REVCNC1cXHVERUI2XFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwRlxcdUREMTgtXFx1REQxRlxcdUREMjZcXHVERDMwLVxcdUREMzlcXHVERDNDLVxcdUREM0VcXHVEREI1XFx1RERCNlxcdUREQjhcXHVEREI5XFx1RERCQlxcdUREQ0QtXFx1RERDRlxcdURERDEtXFx1RERERF0pL2c7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbmNvbnN0IHN0cmlwQW5zaSA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcbmNvbnN0IGlzRnVsbHdpZHRoQ29kZVBvaW50ID0gcmVxdWlyZSgnaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQnKTtcbmNvbnN0IGVtb2ppUmVnZXggPSByZXF1aXJlKCdlbW9qaS1yZWdleCcpO1xuXG5jb25zdCBzdHJpbmdXaWR0aCA9IHN0cmluZyA9PiB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCBzdHJpbmcubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpcEFuc2koc3RyaW5nKTtcblxuXHRpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoZW1vamlSZWdleCgpLCAnICAnKTtcblxuXHRsZXQgd2lkdGggPSAwO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY29kZSA9IHN0cmluZy5jb2RlUG9pbnRBdChpKTtcblxuXHRcdC8vIElnbm9yZSBjb250cm9sIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZSA8PSAweDFGIHx8IChjb2RlID49IDB4N0YgJiYgY29kZSA8PSAweDlGKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIGNvbWJpbmluZyBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPj0gMHgzMDAgJiYgY29kZSA8PSAweDM2Rikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gU3Vycm9nYXRlc1xuXHRcdGlmIChjb2RlID4gMHhGRkZGKSB7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0d2lkdGggKz0gaXNGdWxsd2lkdGhDb2RlUG9pbnQoY29kZSkgPyAyIDogMTtcblx0fVxuXG5cdHJldHVybiB3aWR0aDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nV2lkdGg7XG4vLyBUT0RPOiByZW1vdmUgdGhpcyBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gc3RyaW5nV2lkdGg7XG4iLCAiY29uc3Qgc3RyaW5nV2lkdGggPSByZXF1aXJlKCdzdHJpbmctd2lkdGgnKTtcblxuZnVuY3Rpb24gY29kZVJlZ2V4KGNhcHR1cmUpIHtcbiAgcmV0dXJuIGNhcHR1cmUgPyAvXFx1MDAxYlxcWygoPzpcXGQqOyl7MCw1fVxcZCopbS9nIDogL1xcdTAwMWJcXFsoPzpcXGQqOyl7MCw1fVxcZCptL2c7XG59XG5cbmZ1bmN0aW9uIHN0cmxlbihzdHIpIHtcbiAgbGV0IGNvZGUgPSBjb2RlUmVnZXgoKTtcbiAgbGV0IHN0cmlwcGVkID0gKCcnICsgc3RyKS5yZXBsYWNlKGNvZGUsICcnKTtcbiAgbGV0IHNwbGl0ID0gc3RyaXBwZWQuc3BsaXQoJ1xcbicpO1xuICByZXR1cm4gc3BsaXQucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBzKSB7XG4gICAgcmV0dXJuIHN0cmluZ1dpZHRoKHMpID4gbWVtbyA/IHN0cmluZ1dpZHRoKHMpIDogbWVtbztcbiAgfSwgMCk7XG59XG5cbmZ1bmN0aW9uIHJlcGVhdChzdHIsIHRpbWVzKSB7XG4gIHJldHVybiBBcnJheSh0aW1lcyArIDEpLmpvaW4oc3RyKTtcbn1cblxuZnVuY3Rpb24gcGFkKHN0ciwgbGVuLCBwYWQsIGRpcikge1xuICBsZXQgbGVuZ3RoID0gc3RybGVuKHN0cik7XG4gIGlmIChsZW4gKyAxID49IGxlbmd0aCkge1xuICAgIGxldCBwYWRsZW4gPSBsZW4gLSBsZW5ndGg7XG4gICAgc3dpdGNoIChkaXIpIHtcbiAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgICBzdHIgPSByZXBlYXQocGFkLCBwYWRsZW4pICsgc3RyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NlbnRlcic6IHtcbiAgICAgICAgbGV0IHJpZ2h0ID0gTWF0aC5jZWlsKHBhZGxlbiAvIDIpO1xuICAgICAgICBsZXQgbGVmdCA9IHBhZGxlbiAtIHJpZ2h0O1xuICAgICAgICBzdHIgPSByZXBlYXQocGFkLCBsZWZ0KSArIHN0ciArIHJlcGVhdChwYWQsIHJpZ2h0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHN0ciA9IHN0ciArIHJlcGVhdChwYWQsIHBhZGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5sZXQgY29kZUNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGFkZFRvQ29kZUNhY2hlKG5hbWUsIG9uLCBvZmYpIHtcbiAgb24gPSAnXFx1MDAxYlsnICsgb24gKyAnbSc7XG4gIG9mZiA9ICdcXHUwMDFiWycgKyBvZmYgKyAnbSc7XG4gIGNvZGVDYWNoZVtvbl0gPSB7IHNldDogbmFtZSwgdG86IHRydWUgfTtcbiAgY29kZUNhY2hlW29mZl0gPSB7IHNldDogbmFtZSwgdG86IGZhbHNlIH07XG4gIGNvZGVDYWNoZVtuYW1lXSA9IHsgb246IG9uLCBvZmY6IG9mZiB9O1xufVxuXG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9NYXJhay9jb2xvcnMuanMvYmxvYi9tYXN0ZXIvbGliL3N0eWxlcy5qc1xuYWRkVG9Db2RlQ2FjaGUoJ2JvbGQnLCAxLCAyMik7XG5hZGRUb0NvZGVDYWNoZSgnaXRhbGljcycsIDMsIDIzKTtcbmFkZFRvQ29kZUNhY2hlKCd1bmRlcmxpbmUnLCA0LCAyNCk7XG5hZGRUb0NvZGVDYWNoZSgnaW52ZXJzZScsIDcsIDI3KTtcbmFkZFRvQ29kZUNhY2hlKCdzdHJpa2V0aHJvdWdoJywgOSwgMjkpO1xuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSwgY29udHJvbENoYXJzKSB7XG4gIGxldCBjb250cm9sQ29kZSA9IGNvbnRyb2xDaGFyc1sxXSA/IHBhcnNlSW50KGNvbnRyb2xDaGFyc1sxXS5zcGxpdCgnOycpWzBdKSA6IDA7XG4gIGlmICgoY29udHJvbENvZGUgPj0gMzAgJiYgY29udHJvbENvZGUgPD0gMzkpIHx8IChjb250cm9sQ29kZSA+PSA5MCAmJiBjb250cm9sQ29kZSA8PSA5NykpIHtcbiAgICBzdGF0ZS5sYXN0Rm9yZWdyb3VuZEFkZGVkID0gY29udHJvbENoYXJzWzBdO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoKGNvbnRyb2xDb2RlID49IDQwICYmIGNvbnRyb2xDb2RlIDw9IDQ5KSB8fCAoY29udHJvbENvZGUgPj0gMTAwICYmIGNvbnRyb2xDb2RlIDw9IDEwNykpIHtcbiAgICBzdGF0ZS5sYXN0QmFja2dyb3VuZEFkZGVkID0gY29udHJvbENoYXJzWzBdO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY29udHJvbENvZGUgPT09IDApIHtcbiAgICBmb3IgKGxldCBpIGluIHN0YXRlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdGF0ZSwgaSkpIHtcbiAgICAgICAgZGVsZXRlIHN0YXRlW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGluZm8gPSBjb2RlQ2FjaGVbY29udHJvbENoYXJzWzBdXTtcbiAgaWYgKGluZm8pIHtcbiAgICBzdGF0ZVtpbmZvLnNldF0gPSBpbmZvLnRvO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRTdGF0ZShsaW5lKSB7XG4gIGxldCBjb2RlID0gY29kZVJlZ2V4KHRydWUpO1xuICBsZXQgY29udHJvbENoYXJzID0gY29kZS5leGVjKGxpbmUpO1xuICBsZXQgc3RhdGUgPSB7fTtcbiAgd2hpbGUgKGNvbnRyb2xDaGFycyAhPT0gbnVsbCkge1xuICAgIHVwZGF0ZVN0YXRlKHN0YXRlLCBjb250cm9sQ2hhcnMpO1xuICAgIGNvbnRyb2xDaGFycyA9IGNvZGUuZXhlYyhsaW5lKTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVud2luZFN0YXRlKHN0YXRlLCByZXQpIHtcbiAgbGV0IGxhc3RCYWNrZ3JvdW5kQWRkZWQgPSBzdGF0ZS5sYXN0QmFja2dyb3VuZEFkZGVkO1xuICBsZXQgbGFzdEZvcmVncm91bmRBZGRlZCA9IHN0YXRlLmxhc3RGb3JlZ3JvdW5kQWRkZWQ7XG5cbiAgZGVsZXRlIHN0YXRlLmxhc3RCYWNrZ3JvdW5kQWRkZWQ7XG4gIGRlbGV0ZSBzdGF0ZS5sYXN0Rm9yZWdyb3VuZEFkZGVkO1xuXG4gIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoc3RhdGVba2V5XSkge1xuICAgICAgcmV0ICs9IGNvZGVDYWNoZVtrZXldLm9mZjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsYXN0QmFja2dyb3VuZEFkZGVkICYmIGxhc3RCYWNrZ3JvdW5kQWRkZWQgIT0gJ1xcdTAwMWJbNDltJykge1xuICAgIHJldCArPSAnXFx1MDAxYls0OW0nO1xuICB9XG4gIGlmIChsYXN0Rm9yZWdyb3VuZEFkZGVkICYmIGxhc3RGb3JlZ3JvdW5kQWRkZWQgIT0gJ1xcdTAwMWJbMzltJykge1xuICAgIHJldCArPSAnXFx1MDAxYlszOW0nO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gcmV3aW5kU3RhdGUoc3RhdGUsIHJldCkge1xuICBsZXQgbGFzdEJhY2tncm91bmRBZGRlZCA9IHN0YXRlLmxhc3RCYWNrZ3JvdW5kQWRkZWQ7XG4gIGxldCBsYXN0Rm9yZWdyb3VuZEFkZGVkID0gc3RhdGUubGFzdEZvcmVncm91bmRBZGRlZDtcblxuICBkZWxldGUgc3RhdGUubGFzdEJhY2tncm91bmRBZGRlZDtcbiAgZGVsZXRlIHN0YXRlLmxhc3RGb3JlZ3JvdW5kQWRkZWQ7XG5cbiAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChzdGF0ZVtrZXldKSB7XG4gICAgICByZXQgPSBjb2RlQ2FjaGVba2V5XS5vbiArIHJldDtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsYXN0QmFja2dyb3VuZEFkZGVkICYmIGxhc3RCYWNrZ3JvdW5kQWRkZWQgIT0gJ1xcdTAwMWJbNDltJykge1xuICAgIHJldCA9IGxhc3RCYWNrZ3JvdW5kQWRkZWQgKyByZXQ7XG4gIH1cbiAgaWYgKGxhc3RGb3JlZ3JvdW5kQWRkZWQgJiYgbGFzdEZvcmVncm91bmRBZGRlZCAhPSAnXFx1MDAxYlszOW0nKSB7XG4gICAgcmV0ID0gbGFzdEZvcmVncm91bmRBZGRlZCArIHJldDtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlV2lkdGgoc3RyLCBkZXNpcmVkTGVuZ3RoKSB7XG4gIGlmIChzdHIubGVuZ3RoID09PSBzdHJsZW4oc3RyKSkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGRlc2lyZWRMZW5ndGgpO1xuICB9XG5cbiAgd2hpbGUgKHN0cmxlbihzdHIpID4gZGVzaXJlZExlbmd0aCkge1xuICAgIHN0ciA9IHN0ci5zbGljZSgwLCAtMSk7XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZVdpZHRoV2l0aEFuc2koc3RyLCBkZXNpcmVkTGVuZ3RoKSB7XG4gIGxldCBjb2RlID0gY29kZVJlZ2V4KHRydWUpO1xuICBsZXQgc3BsaXQgPSBzdHIuc3BsaXQoY29kZVJlZ2V4KCkpO1xuICBsZXQgc3BsaXRJbmRleCA9IDA7XG4gIGxldCByZXRMZW4gPSAwO1xuICBsZXQgcmV0ID0gJyc7XG4gIGxldCBteUFycmF5O1xuICBsZXQgc3RhdGUgPSB7fTtcblxuICB3aGlsZSAocmV0TGVuIDwgZGVzaXJlZExlbmd0aCkge1xuICAgIG15QXJyYXkgPSBjb2RlLmV4ZWMoc3RyKTtcbiAgICBsZXQgdG9BZGQgPSBzcGxpdFtzcGxpdEluZGV4XTtcbiAgICBzcGxpdEluZGV4Kys7XG4gICAgaWYgKHJldExlbiArIHN0cmxlbih0b0FkZCkgPiBkZXNpcmVkTGVuZ3RoKSB7XG4gICAgICB0b0FkZCA9IHRydW5jYXRlV2lkdGgodG9BZGQsIGRlc2lyZWRMZW5ndGggLSByZXRMZW4pO1xuICAgIH1cbiAgICByZXQgKz0gdG9BZGQ7XG4gICAgcmV0TGVuICs9IHN0cmxlbih0b0FkZCk7XG5cbiAgICBpZiAocmV0TGVuIDwgZGVzaXJlZExlbmd0aCkge1xuICAgICAgaWYgKCFteUFycmF5KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBmdWxsLXdpZHRoIGNoYXJzIG1heSBjYXVzZSBhIHdoaXRlc3BhY2Ugd2hpY2ggY2Fubm90IGJlIGZpbGxlZFxuICAgICAgcmV0ICs9IG15QXJyYXlbMF07XG4gICAgICB1cGRhdGVTdGF0ZShzdGF0ZSwgbXlBcnJheSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVud2luZFN0YXRlKHN0YXRlLCByZXQpO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHIsIGRlc2lyZWRMZW5ndGgsIHRydW5jYXRlQ2hhcikge1xuICB0cnVuY2F0ZUNoYXIgPSB0cnVuY2F0ZUNoYXIgfHwgJ1x1MjAyNic7XG4gIGxldCBsZW5ndGhPZlN0ciA9IHN0cmxlbihzdHIpO1xuICBpZiAobGVuZ3RoT2ZTdHIgPD0gZGVzaXJlZExlbmd0aCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgZGVzaXJlZExlbmd0aCAtPSBzdHJsZW4odHJ1bmNhdGVDaGFyKTtcblxuICBsZXQgcmV0ID0gdHJ1bmNhdGVXaWR0aFdpdGhBbnNpKHN0ciwgZGVzaXJlZExlbmd0aCk7XG5cbiAgcmV0dXJuIHJldCArIHRydW5jYXRlQ2hhcjtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiB7XG4gICAgY2hhcnM6IHtcbiAgICAgIHRvcDogJ1x1MjUwMCcsXG4gICAgICAndG9wLW1pZCc6ICdcdTI1MkMnLFxuICAgICAgJ3RvcC1sZWZ0JzogJ1x1MjUwQycsXG4gICAgICAndG9wLXJpZ2h0JzogJ1x1MjUxMCcsXG4gICAgICBib3R0b206ICdcdTI1MDAnLFxuICAgICAgJ2JvdHRvbS1taWQnOiAnXHUyNTM0JyxcbiAgICAgICdib3R0b20tbGVmdCc6ICdcdTI1MTQnLFxuICAgICAgJ2JvdHRvbS1yaWdodCc6ICdcdTI1MTgnLFxuICAgICAgbGVmdDogJ1x1MjUwMicsXG4gICAgICAnbGVmdC1taWQnOiAnXHUyNTFDJyxcbiAgICAgIG1pZDogJ1x1MjUwMCcsXG4gICAgICAnbWlkLW1pZCc6ICdcdTI1M0MnLFxuICAgICAgcmlnaHQ6ICdcdTI1MDInLFxuICAgICAgJ3JpZ2h0LW1pZCc6ICdcdTI1MjQnLFxuICAgICAgbWlkZGxlOiAnXHUyNTAyJyxcbiAgICB9LFxuICAgIHRydW5jYXRlOiAnXHUyMDI2JyxcbiAgICBjb2xXaWR0aHM6IFtdLFxuICAgIHJvd0hlaWdodHM6IFtdLFxuICAgIGNvbEFsaWduczogW10sXG4gICAgcm93QWxpZ25zOiBbXSxcbiAgICBzdHlsZToge1xuICAgICAgJ3BhZGRpbmctbGVmdCc6IDEsXG4gICAgICAncGFkZGluZy1yaWdodCc6IDEsXG4gICAgICBoZWFkOiBbJ3JlZCddLFxuICAgICAgYm9yZGVyOiBbJ2dyZXknXSxcbiAgICAgIGNvbXBhY3Q6IGZhbHNlLFxuICAgIH0sXG4gICAgaGVhZDogW10sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zLCBkZWZhdWx0cykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgZGVmYXVsdHMgPSBkZWZhdWx0cyB8fCBkZWZhdWx0T3B0aW9ucygpO1xuICBsZXQgcmV0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICByZXQuY2hhcnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jaGFycywgb3B0aW9ucy5jaGFycyk7XG4gIHJldC5zdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLnN0eWxlLCBvcHRpb25zLnN0eWxlKTtcbiAgcmV0dXJuIHJldDtcbn1cblxuLy8gV3JhcCBvbiB3b3JkIGJvdW5kYXJ5XG5mdW5jdGlvbiB3b3JkV3JhcChtYXhMZW5ndGgsIGlucHV0KSB7XG4gIGxldCBsaW5lcyA9IFtdO1xuICBsZXQgc3BsaXQgPSBpbnB1dC5zcGxpdCgvKFxccyspL2cpO1xuICBsZXQgbGluZSA9IFtdO1xuICBsZXQgbGluZUxlbmd0aCA9IDA7XG4gIGxldCB3aGl0ZXNwYWNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgbGV0IHdvcmQgPSBzcGxpdFtpXTtcbiAgICBsZXQgbmV3TGVuZ3RoID0gbGluZUxlbmd0aCArIHN0cmxlbih3b3JkKTtcbiAgICBpZiAobGluZUxlbmd0aCA+IDAgJiYgd2hpdGVzcGFjZSkge1xuICAgICAgbmV3TGVuZ3RoICs9IHdoaXRlc3BhY2UubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAobmV3TGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICBpZiAobGluZUxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUuam9pbignJykpO1xuICAgICAgfVxuICAgICAgbGluZSA9IFt3b3JkXTtcbiAgICAgIGxpbmVMZW5ndGggPSBzdHJsZW4od29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUucHVzaCh3aGl0ZXNwYWNlIHx8ICcnLCB3b3JkKTtcbiAgICAgIGxpbmVMZW5ndGggPSBuZXdMZW5ndGg7XG4gICAgfVxuICAgIHdoaXRlc3BhY2UgPSBzcGxpdFtpICsgMV07XG4gIH1cbiAgaWYgKGxpbmVMZW5ndGgpIHtcbiAgICBsaW5lcy5wdXNoKGxpbmUuam9pbignJykpO1xuICB9XG4gIHJldHVybiBsaW5lcztcbn1cblxuLy8gV3JhcCB0ZXh0IChpZ25vcmluZyB3b3JkIGJvdW5kYXJpZXMpXG5mdW5jdGlvbiB0ZXh0V3JhcChtYXhMZW5ndGgsIGlucHV0KSB7XG4gIGxldCBsaW5lcyA9IFtdO1xuICBsZXQgbGluZSA9ICcnO1xuICBmdW5jdGlvbiBwdXNoTGluZShzdHIsIHdzKSB7XG4gICAgaWYgKGxpbmUubGVuZ3RoICYmIHdzKSBsaW5lICs9IHdzO1xuICAgIGxpbmUgKz0gc3RyO1xuICAgIHdoaWxlIChsaW5lLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgbGluZXMucHVzaChsaW5lLnNsaWNlKDAsIG1heExlbmd0aCkpO1xuICAgICAgbGluZSA9IGxpbmUuc2xpY2UobWF4TGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgbGV0IHNwbGl0ID0gaW5wdXQuc3BsaXQoLyhcXHMrKS9nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkgKz0gMikge1xuICAgIHB1c2hMaW5lKHNwbGl0W2ldLCBpICYmIHNwbGl0W2kgLSAxXSk7XG4gIH1cbiAgaWYgKGxpbmUubGVuZ3RoKSBsaW5lcy5wdXNoKGxpbmUpO1xuICByZXR1cm4gbGluZXM7XG59XG5cbmZ1bmN0aW9uIG11bHRpTGluZVdvcmRXcmFwKG1heExlbmd0aCwgaW5wdXQsIHdyYXBPbldvcmRCb3VuZGFyeSA9IHRydWUpIHtcbiAgbGV0IG91dHB1dCA9IFtdO1xuICBpbnB1dCA9IGlucHV0LnNwbGl0KCdcXG4nKTtcbiAgY29uc3QgaGFuZGxlciA9IHdyYXBPbldvcmRCb3VuZGFyeSA/IHdvcmRXcmFwIDogdGV4dFdyYXA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXQucHVzaC5hcHBseShvdXRwdXQsIGhhbmRsZXIobWF4TGVuZ3RoLCBpbnB1dFtpXSkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGNvbG9yaXplTGluZXMoaW5wdXQpIHtcbiAgbGV0IHN0YXRlID0ge307XG4gIGxldCBvdXRwdXQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5lID0gcmV3aW5kU3RhdGUoc3RhdGUsIGlucHV0W2ldKTtcbiAgICBzdGF0ZSA9IHJlYWRTdGF0ZShsaW5lKTtcbiAgICBsZXQgdGVtcCA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcbiAgICBvdXRwdXQucHVzaCh1bndpbmRTdGF0ZSh0ZW1wLCBsaW5lKSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBDcmVkaXQ6IE1hdGhldXMgU2FtcGFpbyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGV1c3NhbXBhaW9cbiAqL1xuZnVuY3Rpb24gaHlwZXJsaW5rKHVybCwgdGV4dCkge1xuICBjb25zdCBPU0MgPSAnXFx1MDAxQl0nO1xuICBjb25zdCBCRUwgPSAnXFx1MDAwNyc7XG4gIGNvbnN0IFNFUCA9ICc7JztcblxuICByZXR1cm4gW09TQywgJzgnLCBTRVAsIFNFUCwgdXJsIHx8IHRleHQsIEJFTCwgdGV4dCwgT1NDLCAnOCcsIFNFUCwgU0VQLCBCRUxdLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RybGVuOiBzdHJsZW4sXG4gIHJlcGVhdDogcmVwZWF0LFxuICBwYWQ6IHBhZCxcbiAgdHJ1bmNhdGU6IHRydW5jYXRlLFxuICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgd29yZFdyYXA6IG11bHRpTGluZVdvcmRXcmFwLFxuICBjb2xvcml6ZUxpbmVzOiBjb2xvcml6ZUxpbmVzLFxuICBoeXBlcmxpbmssXG59O1xuIiwgIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG52YXIgc3R5bGVzID0ge307XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IHN0eWxlcztcblxudmFyIGNvZGVzID0ge1xuICByZXNldDogWzAsIDBdLFxuXG4gIGJvbGQ6IFsxLCAyMl0sXG4gIGRpbTogWzIsIDIyXSxcbiAgaXRhbGljOiBbMywgMjNdLFxuICB1bmRlcmxpbmU6IFs0LCAyNF0sXG4gIGludmVyc2U6IFs3LCAyN10sXG4gIGhpZGRlbjogWzgsIDI4XSxcbiAgc3RyaWtldGhyb3VnaDogWzksIDI5XSxcblxuICBibGFjazogWzMwLCAzOV0sXG4gIHJlZDogWzMxLCAzOV0sXG4gIGdyZWVuOiBbMzIsIDM5XSxcbiAgeWVsbG93OiBbMzMsIDM5XSxcbiAgYmx1ZTogWzM0LCAzOV0sXG4gIG1hZ2VudGE6IFszNSwgMzldLFxuICBjeWFuOiBbMzYsIDM5XSxcbiAgd2hpdGU6IFszNywgMzldLFxuICBncmF5OiBbOTAsIDM5XSxcbiAgZ3JleTogWzkwLCAzOV0sXG5cbiAgYnJpZ2h0UmVkOiBbOTEsIDM5XSxcbiAgYnJpZ2h0R3JlZW46IFs5MiwgMzldLFxuICBicmlnaHRZZWxsb3c6IFs5MywgMzldLFxuICBicmlnaHRCbHVlOiBbOTQsIDM5XSxcbiAgYnJpZ2h0TWFnZW50YTogWzk1LCAzOV0sXG4gIGJyaWdodEN5YW46IFs5NiwgMzldLFxuICBicmlnaHRXaGl0ZTogWzk3LCAzOV0sXG5cbiAgYmdCbGFjazogWzQwLCA0OV0sXG4gIGJnUmVkOiBbNDEsIDQ5XSxcbiAgYmdHcmVlbjogWzQyLCA0OV0sXG4gIGJnWWVsbG93OiBbNDMsIDQ5XSxcbiAgYmdCbHVlOiBbNDQsIDQ5XSxcbiAgYmdNYWdlbnRhOiBbNDUsIDQ5XSxcbiAgYmdDeWFuOiBbNDYsIDQ5XSxcbiAgYmdXaGl0ZTogWzQ3LCA0OV0sXG4gIGJnR3JheTogWzEwMCwgNDldLFxuICBiZ0dyZXk6IFsxMDAsIDQ5XSxcblxuICBiZ0JyaWdodFJlZDogWzEwMSwgNDldLFxuICBiZ0JyaWdodEdyZWVuOiBbMTAyLCA0OV0sXG4gIGJnQnJpZ2h0WWVsbG93OiBbMTAzLCA0OV0sXG4gIGJnQnJpZ2h0Qmx1ZTogWzEwNCwgNDldLFxuICBiZ0JyaWdodE1hZ2VudGE6IFsxMDUsIDQ5XSxcbiAgYmdCcmlnaHRDeWFuOiBbMTA2LCA0OV0sXG4gIGJnQnJpZ2h0V2hpdGU6IFsxMDcsIDQ5XSxcblxuICAvLyBsZWdhY3kgc3R5bGVzIGZvciBjb2xvcnMgcHJlIHYxLjAuMFxuICBibGFja0JHOiBbNDAsIDQ5XSxcbiAgcmVkQkc6IFs0MSwgNDldLFxuICBncmVlbkJHOiBbNDIsIDQ5XSxcbiAgeWVsbG93Qkc6IFs0MywgNDldLFxuICBibHVlQkc6IFs0NCwgNDldLFxuICBtYWdlbnRhQkc6IFs0NSwgNDldLFxuICBjeWFuQkc6IFs0NiwgNDldLFxuICB3aGl0ZUJHOiBbNDcsIDQ5XSxcblxufTtcblxuT2JqZWN0LmtleXMoY29kZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gIHZhciB2YWwgPSBjb2Rlc1trZXldO1xuICB2YXIgc3R5bGUgPSBzdHlsZXNba2V5XSA9IFtdO1xuICBzdHlsZS5vcGVuID0gJ1xcdTAwMWJbJyArIHZhbFswXSArICdtJztcbiAgc3R5bGUuY2xvc2UgPSAnXFx1MDAxYlsnICsgdmFsWzFdICsgJ20nO1xufSk7XG4iLCAiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbnRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbnRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbnVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzXG5vZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG9cbnNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbGFnLCBhcmd2KSB7XG4gIGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblxuICB2YXIgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcbiAgdmFyIHByZWZpeCA9IC9eLXsxLDJ9Ly50ZXN0KGZsYWcpID8gJycgOiAnLS0nO1xuICB2YXIgcG9zID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXG4gIHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCAiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG9zID0gcmVxdWlyZSgnb3MnKTtcbnZhciBoYXNGbGFnID0gcmVxdWlyZSgnLi9oYXMtZmxhZy5qcycpO1xuXG52YXIgZW52ID0gcHJvY2Vzcy5lbnY7XG5cbnZhciBmb3JjZUNvbG9yID0gdm9pZCAwO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHwgaGFzRmxhZygnbm8tY29sb3JzJykgfHwgaGFzRmxhZygnY29sb3I9ZmFsc2UnKSkge1xuICBmb3JjZUNvbG9yID0gZmFsc2U7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHwgaGFzRmxhZygnY29sb3JzJykgfHwgaGFzRmxhZygnY29sb3I9dHJ1ZScpXG4gICAgICAgICAgIHx8IGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG4gIGZvcmNlQ29sb3IgPSB0cnVlO1xufVxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG4gIGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwXG4gICAgfHwgcGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCkgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG4gIGlmIChsZXZlbCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGV2ZWw6IGxldmVsLFxuICAgIGhhc0Jhc2ljOiB0cnVlLFxuICAgIGhhczI1NjogbGV2ZWwgPj0gMixcbiAgICBoYXMxNm06IGxldmVsID49IDMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3Ioc3RyZWFtKSB7XG4gIGlmIChmb3JjZUNvbG9yID09PSBmYWxzZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8IGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKVxuICAgICAgfHwgaGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgaWYgKHN0cmVhbSAmJiAhc3RyZWFtLmlzVFRZICYmIGZvcmNlQ29sb3IgIT09IHRydWUpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBtaW4gPSBmb3JjZUNvbG9yID8gMSA6IDA7XG5cbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICAvLyBOb2RlLmpzIDcuNS4wIGlzIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIE5vZGUuanMgdG8gaW5jbHVkZSBhIHBhdGNoIHRvXG4gICAgLy8gbGlidXYgdGhhdCBlbmFibGVzIDI1NiBjb2xvciBvdXRwdXQgb24gV2luZG93cy4gQW55dGhpbmcgZWFybGllciBhbmQgaXRcbiAgICAvLyB3b24ndCB3b3JrLiBIb3dldmVyLCBoZXJlIHdlIHRhcmdldCBOb2RlLmpzIDggYXQgbWluaW11bSBhcyBpdCBpcyBhbiBMVFNcbiAgICAvLyByZWxlYXNlLCBhbmQgTm9kZS5qcyA3IGlzIG5vdC4gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3RcbiAgICAvLyBXaW5kb3dzIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLiBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZVxuICAgIC8vIGZpcnN0IHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuICAgIHZhciBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcbiAgICBpZiAoTnVtYmVyKHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpWzBdKSA+PSA4XG4gICAgICAgICYmIE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2KSB7XG4gICAgICByZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICgnQ0knIGluIGVudikge1xuICAgIGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knXS5zb21lKGZ1bmN0aW9uKHNpZ24pIHtcbiAgICAgIHJldHVybiBzaWduIGluIGVudjtcbiAgICB9KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG4gICAgcmV0dXJuICgvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMFxuICAgICk7XG4gIH1cblxuICBpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG4gICAgdmFyIHZlcnNpb24gPSBwYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cbiAgICBzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcbiAgICAgIGNhc2UgJ2lUZXJtLmFwcCc6XG4gICAgICAgIHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcbiAgICAgIGNhc2UgJ0h5cGVyJzpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG4gICAgICAgIHJldHVybiAyO1xuICAgICAgLy8gTm8gZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuICAgIHJldHVybiBtaW47XG4gIH1cblxuICByZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XG4gIHZhciBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtKTtcbiAgcmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcbiAgc3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRvdXQpLFxuICBzdGRlcnI6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZGVyciksXG59O1xuIiwgIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24gcnVuVGhlVHJhcCh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdGV4dCA9IHRleHQgfHwgJ1J1biB0aGUgdHJhcCwgZHJvcCB0aGUgYmFzcyc7XG4gIHRleHQgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgdmFyIHRyYXAgPSB7XG4gICAgYTogWydcXHUwMDQwJywgJ1xcdTAxMDQnLCAnXFx1MDIzYScsICdcXHUwMjQ1JywgJ1xcdTAzOTQnLCAnXFx1MDM5YicsICdcXHUwNDE0J10sXG4gICAgYjogWydcXHUwMGRmJywgJ1xcdTAxODEnLCAnXFx1MDI0MycsICdcXHUwMjZlJywgJ1xcdTAzYjInLCAnXFx1MGUzZiddLFxuICAgIGM6IFsnXFx1MDBhOScsICdcXHUwMjNiJywgJ1xcdTAzZmUnXSxcbiAgICBkOiBbJ1xcdTAwZDAnLCAnXFx1MDE4YScsICdcXHUwNTAwJywgJ1xcdTA1MDEnLCAnXFx1MDUwMicsICdcXHUwNTAzJ10sXG4gICAgZTogWydcXHUwMGNiJywgJ1xcdTAxMTUnLCAnXFx1MDE4ZScsICdcXHUwMjU4JywgJ1xcdTAzYTMnLCAnXFx1MDNiZScsICdcXHUwNGJjJyxcbiAgICAgICdcXHUwYTZjJ10sXG4gICAgZjogWydcXHUwNGZhJ10sXG4gICAgZzogWydcXHUwMjYyJ10sXG4gICAgaDogWydcXHUwMTI2JywgJ1xcdTAxOTUnLCAnXFx1MDRhMicsICdcXHUwNGJhJywgJ1xcdTA0YzcnLCAnXFx1MDUwYSddLFxuICAgIGk6IFsnXFx1MGYwZiddLFxuICAgIGo6IFsnXFx1MDEzNCddLFxuICAgIGs6IFsnXFx1MDEzOCcsICdcXHUwNGEwJywgJ1xcdTA0YzMnLCAnXFx1MDUxZSddLFxuICAgIGw6IFsnXFx1MDEzOSddLFxuICAgIG06IFsnXFx1MDI4ZCcsICdcXHUwNGNkJywgJ1xcdTA0Y2UnLCAnXFx1MDUyMCcsICdcXHUwNTIxJywgJ1xcdTBkNjknXSxcbiAgICBuOiBbJ1xcdTAwZDEnLCAnXFx1MDE0YicsICdcXHUwMTlkJywgJ1xcdTAzNzYnLCAnXFx1MDNhMCcsICdcXHUwNDhhJ10sXG4gICAgbzogWydcXHUwMGQ4JywgJ1xcdTAwZjUnLCAnXFx1MDBmOCcsICdcXHUwMWZlJywgJ1xcdTAyOTgnLCAnXFx1MDQ3YScsICdcXHUwNWRkJyxcbiAgICAgICdcXHUwNmRkJywgJ1xcdTBlNGYnXSxcbiAgICBwOiBbJ1xcdTAxZjcnLCAnXFx1MDQ4ZSddLFxuICAgIHE6IFsnXFx1MDljZCddLFxuICAgIHI6IFsnXFx1MDBhZScsICdcXHUwMWE2JywgJ1xcdTAyMTAnLCAnXFx1MDI0YycsICdcXHUwMjgwJywgJ1xcdTA0MmYnXSxcbiAgICBzOiBbJ1xcdTAwYTcnLCAnXFx1MDNkZScsICdcXHUwM2RmJywgJ1xcdTAzZTgnXSxcbiAgICB0OiBbJ1xcdTAxNDEnLCAnXFx1MDE2NicsICdcXHUwMzczJ10sXG4gICAgdTogWydcXHUwMWIxJywgJ1xcdTA1NGQnXSxcbiAgICB2OiBbJ1xcdTA1ZDgnXSxcbiAgICB3OiBbJ1xcdTA0MjgnLCAnXFx1MDQ2MCcsICdcXHUwNDdjJywgJ1xcdTBkNzAnXSxcbiAgICB4OiBbJ1xcdTA0YjInLCAnXFx1MDRmZScsICdcXHUwNGZjJywgJ1xcdTA0ZmQnXSxcbiAgICB5OiBbJ1xcdTAwYTUnLCAnXFx1MDRiMCcsICdcXHUwNGNiJ10sXG4gICAgejogWydcXHUwMWI1JywgJ1xcdTAyNDAnXSxcbiAgfTtcbiAgdGV4dC5mb3JFYWNoKGZ1bmN0aW9uKGMpIHtcbiAgICBjID0gYy50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBjaGFycyA9IHRyYXBbY10gfHwgWycgJ107XG4gICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpO1xuICAgIGlmICh0eXBlb2YgdHJhcFtjXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdCArPSB0cmFwW2NdW3JhbmRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gYztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIvLyBwbGVhc2Ugbm9cbm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24gemFsZ28odGV4dCwgb3B0aW9ucykge1xuICB0ZXh0ID0gdGV4dCB8fCAnICAgaGUgaXMgaGVyZSAgICc7XG4gIHZhciBzb3VsID0ge1xuICAgICd1cCc6IFtcbiAgICAgICdcdTAzMEQnLCAnXHUwMzBFJywgJ1x1MDMwNCcsICdcdTAzMDUnLFxuICAgICAgJ1x1MDMzRicsICdcdTAzMTEnLCAnXHUwMzA2JywgJ1x1MDMxMCcsXG4gICAgICAnXHUwMzUyJywgJ1x1MDM1NycsICdcdTAzNTEnLCAnXHUwMzA3JyxcbiAgICAgICdcdTAzMDgnLCAnXHUwMzBBJywgJ1x1MDM0MicsICdcdTAzMTMnLFxuICAgICAgJ1x1MDMwOCcsICdcdTAzNEEnLCAnXHUwMzRCJywgJ1x1MDM0QycsXG4gICAgICAnXHUwMzAzJywgJ1x1MDMwMicsICdcdTAzMEMnLCAnXHUwMzUwJyxcbiAgICAgICdcdTAzMDAnLCAnXHUwMzAxJywgJ1x1MDMwQicsICdcdTAzMEYnLFxuICAgICAgJ1x1MDMxMicsICdcdTAzMTMnLCAnXHUwMzE0JywgJ1x1MDMzRCcsXG4gICAgICAnXHUwMzA5JywgJ1x1MDM2MycsICdcdTAzNjQnLCAnXHUwMzY1JyxcbiAgICAgICdcdTAzNjYnLCAnXHUwMzY3JywgJ1x1MDM2OCcsICdcdTAzNjknLFxuICAgICAgJ1x1MDM2QScsICdcdTAzNkInLCAnXHUwMzZDJywgJ1x1MDM2RCcsXG4gICAgICAnXHUwMzZFJywgJ1x1MDM2RicsICdcdTAzM0UnLCAnXHUwMzVCJyxcbiAgICAgICdcdTAzNDYnLCAnXHUwMzFBJyxcbiAgICBdLFxuICAgICdkb3duJzogW1xuICAgICAgJ1x1MDMxNicsICdcdTAzMTcnLCAnXHUwMzE4JywgJ1x1MDMxOScsXG4gICAgICAnXHUwMzFDJywgJ1x1MDMxRCcsICdcdTAzMUUnLCAnXHUwMzFGJyxcbiAgICAgICdcdTAzMjAnLCAnXHUwMzI0JywgJ1x1MDMyNScsICdcdTAzMjYnLFxuICAgICAgJ1x1MDMyOScsICdcdTAzMkEnLCAnXHUwMzJCJywgJ1x1MDMyQycsXG4gICAgICAnXHUwMzJEJywgJ1x1MDMyRScsICdcdTAzMkYnLCAnXHUwMzMwJyxcbiAgICAgICdcdTAzMzEnLCAnXHUwMzMyJywgJ1x1MDMzMycsICdcdTAzMzknLFxuICAgICAgJ1x1MDMzQScsICdcdTAzM0InLCAnXHUwMzNDJywgJ1x1MDM0NScsXG4gICAgICAnXHUwMzQ3JywgJ1x1MDM0OCcsICdcdTAzNDknLCAnXHUwMzREJyxcbiAgICAgICdcdTAzNEUnLCAnXHUwMzUzJywgJ1x1MDM1NCcsICdcdTAzNTUnLFxuICAgICAgJ1x1MDM1NicsICdcdTAzNTknLCAnXHUwMzVBJywgJ1x1MDMyMycsXG4gICAgXSxcbiAgICAnbWlkJzogW1xuICAgICAgJ1x1MDMxNScsICdcdTAzMUInLCAnXHUwMzAwJywgJ1x1MDMwMScsXG4gICAgICAnXHUwMzU4JywgJ1x1MDMyMScsICdcdTAzMjInLCAnXHUwMzI3JyxcbiAgICAgICdcdTAzMjgnLCAnXHUwMzM0JywgJ1x1MDMzNScsICdcdTAzMzYnLFxuICAgICAgJ1x1MDM1QycsICdcdTAzNUQnLCAnXHUwMzVFJyxcbiAgICAgICdcdTAzNUYnLCAnXHUwMzYwJywgJ1x1MDM2MicsICdcdTAzMzgnLFxuICAgICAgJ1x1MDMzNycsICdcdTAzNjEnLCAnIFx1MDQ4OScsXG4gICAgXSxcbiAgfTtcbiAgdmFyIGFsbCA9IFtdLmNvbmNhdChzb3VsLnVwLCBzb3VsLmRvd24sIHNvdWwubWlkKTtcblxuICBmdW5jdGlvbiByYW5kb21OdW1iZXIocmFuZ2UpIHtcbiAgICB2YXIgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2hhcihjaGFyYWN0ZXIpIHtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgIGFsbC5maWx0ZXIoZnVuY3Rpb24oaSkge1xuICAgICAgYm9vbCA9IChpID09PSBjaGFyYWN0ZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBib29sO1xuICB9XG5cblxuICBmdW5jdGlvbiBoZUNvbWVzKHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNvdW50cztcbiAgICB2YXIgbDtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zWyd1cCddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWyd1cCddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ3VwJ10gOiB0cnVlO1xuICAgIG9wdGlvbnNbJ21pZCddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydtaWQnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydtaWQnXSA6IHRydWU7XG4gICAgb3B0aW9uc1snZG93biddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydkb3duJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snZG93biddIDogdHJ1ZTtcbiAgICBvcHRpb25zWydzaXplJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ3NpemUnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydzaXplJ10gOiAnbWF4aSc7XG4gICAgdGV4dCA9IHRleHQuc3BsaXQoJycpO1xuICAgIGZvciAobCBpbiB0ZXh0KSB7XG4gICAgICBpZiAoaXNDaGFyKGwpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgdGV4dFtsXTtcbiAgICAgIGNvdW50cyA9IHsndXAnOiAwLCAnZG93bic6IDAsICdtaWQnOiAwfTtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ21pbmknOlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcig4KTtcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDIpO1xuICAgICAgICAgIGNvdW50cy5kb3duID0gcmFuZG9tTnVtYmVyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXhpJzpcbiAgICAgICAgICBjb3VudHMudXAgPSByYW5kb21OdW1iZXIoMTYpICsgMztcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDQpICsgMTtcbiAgICAgICAgICBjb3VudHMuZG93biA9IHJhbmRvbU51bWJlcig2NCkgKyAzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcig4KSArIDE7XG4gICAgICAgICAgY291bnRzLm1pZCA9IHJhbmRvbU51bWJlcig2KSAvIDI7XG4gICAgICAgICAgY291bnRzLmRvd24gPSByYW5kb21OdW1iZXIoOCkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJyID0gWyd1cCcsICdtaWQnLCAnZG93biddO1xuICAgICAgZm9yICh2YXIgZCBpbiBhcnIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyW2RdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBjb3VudHNbaW5kZXhdOyBpKyspIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHNvdWxbaW5kZXhdW3JhbmRvbU51bWJlcihzb3VsW2luZGV4XS5sZW5ndGgpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvLyBkb24ndCBzdW1tb24gaGltXG4gIHJldHVybiBoZUNvbWVzKHRleHQsIG9wdGlvbnMpO1xufTtcblxuIiwgIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJyAnKSByZXR1cm4gbGV0dGVyO1xuICAgIHN3aXRjaCAoaSUzKSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBjb2xvcnMucmVkKGxldHRlcik7XG4gICAgICBjYXNlIDE6IHJldHVybiBjb2xvcnMud2hpdGUobGV0dGVyKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGNvbG9ycy5ibHVlKGxldHRlcik7XG4gICAgfVxuICB9O1xufTtcbiIsICJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIHJldHVybiBpICUgMiA9PT0gMCA/IGxldHRlciA6IGNvbG9ycy5pbnZlcnNlKGxldHRlcik7XG4gIH07XG59O1xuIiwgIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIC8vIFJvWSBHIEJpVlxuICB2YXIgcmFpbmJvd0NvbG9ycyA9IFsncmVkJywgJ3llbGxvdycsICdncmVlbicsICdibHVlJywgJ21hZ2VudGEnXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICBpZiAobGV0dGVyID09PSAnICcpIHtcbiAgICAgIHJldHVybiBsZXR0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb2xvcnNbcmFpbmJvd0NvbG9yc1tpKysgJSByYWluYm93Q29sb3JzLmxlbmd0aF1dKGxldHRlcik7XG4gICAgfVxuICB9O1xufTtcblxuIiwgIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHZhciBhdmFpbGFibGUgPSBbJ3VuZGVybGluZScsICdpbnZlcnNlJywgJ2dyZXknLCAneWVsbG93JywgJ3JlZCcsICdncmVlbicsXG4gICAgJ2JsdWUnLCAnd2hpdGUnLCAnY3lhbicsICdtYWdlbnRhJywgJ2JyaWdodFllbGxvdycsICdicmlnaHRSZWQnLFxuICAgICdicmlnaHRHcmVlbicsICdicmlnaHRCbHVlJywgJ2JyaWdodFdoaXRlJywgJ2JyaWdodEN5YW4nLCAnYnJpZ2h0TWFnZW50YSddO1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIHJldHVybiBsZXR0ZXIgPT09ICcgJyA/IGxldHRlciA6XG4gICAgICBjb2xvcnNbXG4gICAgICAgICAgYXZhaWxhYmxlW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhdmFpbGFibGUubGVuZ3RoIC0gMikpXVxuICAgICAgXShsZXR0ZXIpO1xuICB9O1xufTtcbiIsICIvKlxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuT3JpZ2luYWwgTGlicmFyeVxuICAtIENvcHlyaWdodCAoYykgTWFyYWsgU3F1aXJlc1xuXG5BZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHlcbiAtIENvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxudmFyIGNvbG9ycyA9IHt9O1xubW9kdWxlWydleHBvcnRzJ10gPSBjb2xvcnM7XG5cbmNvbG9ycy50aGVtZXMgPSB7fTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgYW5zaVN0eWxlcyA9IGNvbG9ycy5zdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xudmFyIGRlZmluZVByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgbmV3TGluZVJlZ2V4ID0gbmV3IFJlZ0V4cCgvW1xcclxcbl0rL2cpO1xuXG5jb2xvcnMuc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJy4vc3lzdGVtL3N1cHBvcnRzLWNvbG9ycycpLnN1cHBvcnRzQ29sb3I7XG5cbmlmICh0eXBlb2YgY29sb3JzLmVuYWJsZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbG9ycy5lbmFibGVkID0gY29sb3JzLnN1cHBvcnRzQ29sb3IoKSAhPT0gZmFsc2U7XG59XG5cbmNvbG9ycy5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgY29sb3JzLmVuYWJsZWQgPSB0cnVlO1xufTtcblxuY29sb3JzLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgY29sb3JzLmVuYWJsZWQgPSBmYWxzZTtcbn07XG5cbmNvbG9ycy5zdHJpcENvbG9ycyA9IGNvbG9ycy5zdHJpcCA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gKCcnICsgc3RyKS5yZXBsYWNlKC9cXHgxQlxcW1xcZCttL2csICcnKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xudmFyIHN0eWxpemUgPSBjb2xvcnMuc3R5bGl6ZSA9IGZ1bmN0aW9uIHN0eWxpemUoc3RyLCBzdHlsZSkge1xuICBpZiAoIWNvbG9ycy5lbmFibGVkKSB7XG4gICAgcmV0dXJuIHN0cisnJztcbiAgfVxuXG4gIHZhciBzdHlsZU1hcCA9IGFuc2lTdHlsZXNbc3R5bGVdO1xuXG4gIC8vIFN0eWxpemUgc2hvdWxkIHdvcmsgZm9yIG5vbi1BTlNJIHN0eWxlcywgdG9vXG4gIGlmICghc3R5bGVNYXAgJiYgc3R5bGUgaW4gY29sb3JzKSB7XG4gICAgLy8gU3R5bGUgbWFwcyBsaWtlIHRyYXAgb3BlcmF0ZSBhcyBmdW5jdGlvbnMgb24gc3RyaW5ncztcbiAgICAvLyB0aGV5IGRvbid0IGhhdmUgcHJvcGVydGllcyBsaWtlIG9wZW4gb3IgY2xvc2UuXG4gICAgcmV0dXJuIGNvbG9yc1tzdHlsZV0oc3RyKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZU1hcC5vcGVuICsgc3RyICsgc3R5bGVNYXAuY2xvc2U7XG59O1xuXG52YXIgbWF0Y2hPcGVyYXRvcnNSZSA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZztcbnZhciBlc2NhcGVTdHJpbmdSZWdleHAgPSBmdW5jdGlvbihzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuICByZXR1cm4gc3RyLnJlcGxhY2UobWF0Y2hPcGVyYXRvcnNSZSwgJ1xcXFwkJicpO1xufTtcblxuZnVuY3Rpb24gYnVpbGQoX3N0eWxlcykge1xuICB2YXIgYnVpbGRlciA9IGZ1bmN0aW9uIGJ1aWxkZXIoKSB7XG4gICAgcmV0dXJuIGFwcGx5U3R5bGUuYXBwbHkoYnVpbGRlciwgYXJndW1lbnRzKTtcbiAgfTtcbiAgYnVpbGRlci5fc3R5bGVzID0gX3N0eWxlcztcbiAgLy8gX19wcm90b19fIGlzIHVzZWQgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcbiAgLy8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlLlxuICBidWlsZGVyLl9fcHJvdG9fXyA9IHByb3RvO1xuICByZXR1cm4gYnVpbGRlcjtcbn1cblxudmFyIHN0eWxlcyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBhbnNpU3R5bGVzLmdyZXkgPSBhbnNpU3R5bGVzLmdyYXk7XG4gIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgYW5zaVN0eWxlc1trZXldLmNsb3NlUmUgPVxuICAgICAgbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlc1trZXldLmNsb3NlKSwgJ2cnKTtcbiAgICByZXRba2V5XSA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBidWlsZCh0aGlzLl9zdHlsZXMuY29uY2F0KGtleSkpO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn0pKCk7XG5cbnZhciBwcm90byA9IGRlZmluZVByb3BzKGZ1bmN0aW9uIGNvbG9ycygpIHt9LCBzdHlsZXMpO1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlKCkge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgdmFyIHN0ciA9IGFyZ3MubWFwKGZ1bmN0aW9uKGFyZykge1xuICAgIC8vIFVzZSB3ZWFrIGVxdWFsaXR5IGNoZWNrIHNvIHdlIGNhbiBjb2xvcml6ZSBudWxsL3VuZGVmaW5lZCBpbiBzYWZlIG1vZGVcbiAgICBpZiAoYXJnICE9IG51bGwgJiYgYXJnLmNvbnN0cnVjdG9yID09PSBTdHJpbmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1dGlsLmluc3BlY3QoYXJnKTtcbiAgICB9XG4gIH0pLmpvaW4oJyAnKTtcblxuICBpZiAoIWNvbG9ycy5lbmFibGVkIHx8ICFzdHIpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIG5ld0xpbmVzUHJlc2VudCA9IHN0ci5pbmRleE9mKCdcXG4nKSAhPSAtMTtcblxuICB2YXIgbmVzdGVkU3R5bGVzID0gdGhpcy5fc3R5bGVzO1xuXG4gIHZhciBpID0gbmVzdGVkU3R5bGVzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBjb2RlID0gYW5zaVN0eWxlc1tuZXN0ZWRTdHlsZXNbaV1dO1xuICAgIHN0ciA9IGNvZGUub3BlbiArIHN0ci5yZXBsYWNlKGNvZGUuY2xvc2VSZSwgY29kZS5vcGVuKSArIGNvZGUuY2xvc2U7XG4gICAgaWYgKG5ld0xpbmVzUHJlc2VudCkge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3TGluZVJlZ2V4LCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gY29kZS5jbG9zZSArIG1hdGNoICsgY29kZS5vcGVuO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuY29sb3JzLnNldFRoZW1lID0gZnVuY3Rpb24odGhlbWUpIHtcbiAgaWYgKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zb2xlLmxvZygnY29sb3JzLnNldFRoZW1lIG5vdyBvbmx5IGFjY2VwdHMgYW4gb2JqZWN0LCBub3QgYSBzdHJpbmcuICAnICtcbiAgICAgICdJZiB5b3UgYXJlIHRyeWluZyB0byBzZXQgYSB0aGVtZSBmcm9tIGEgZmlsZSwgaXQgaXMgbm93IHlvdXIgKHRoZSAnICtcbiAgICAgICdjYWxsZXJcXCdzKSByZXNwb25zaWJpbGl0eSB0byByZXF1aXJlIHRoZSBmaWxlLiAgVGhlIG9sZCBzeW50YXggJyArXG4gICAgICAnbG9va2VkIGxpa2UgY29sb3JzLnNldFRoZW1lKF9fZGlybmFtZSArICcgK1xuICAgICAgJ1xcJy8uLi90aGVtZXMvZ2VuZXJpYy1sb2dnaW5nLmpzXFwnKTsgVGhlIG5ldyBzeW50YXggbG9va3MgbGlrZSAnK1xuICAgICAgJ2NvbG9ycy5zZXRUaGVtZShyZXF1aXJlKF9fZGlybmFtZSArICcgK1xuICAgICAgJ1xcJy8uLi90aGVtZXMvZ2VuZXJpYy1sb2dnaW5nLmpzXFwnKSk7Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAodmFyIHN0eWxlIGluIHRoZW1lKSB7XG4gICAgKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICBjb2xvcnNbc3R5bGVdID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhlbWVbc3R5bGVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBvdXQgPSBzdHI7XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGVtZVtzdHlsZV0pIHtcbiAgICAgICAgICAgIG91dCA9IGNvbG9yc1t0aGVtZVtzdHlsZV1baV1dKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yc1t0aGVtZVtzdHlsZV1dKHN0cik7XG4gICAgICB9O1xuICAgIH0pKHN0eWxlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIHJldFtuYW1lXSA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBidWlsZChbbmFtZV0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxudmFyIHNlcXVlbmNlciA9IGZ1bmN0aW9uIHNlcXVlbmNlcihtYXAsIHN0cikge1xuICB2YXIgZXhwbG9kZWQgPSBzdHIuc3BsaXQoJycpO1xuICBleHBsb2RlZCA9IGV4cGxvZGVkLm1hcChtYXApO1xuICByZXR1cm4gZXhwbG9kZWQuam9pbignJyk7XG59O1xuXG4vLyBjdXN0b20gZm9ybWF0dGVyIG1ldGhvZHNcbmNvbG9ycy50cmFwID0gcmVxdWlyZSgnLi9jdXN0b20vdHJhcCcpO1xuY29sb3JzLnphbGdvID0gcmVxdWlyZSgnLi9jdXN0b20vemFsZ28nKTtcblxuLy8gbWFwc1xuY29sb3JzLm1hcHMgPSB7fTtcbmNvbG9ycy5tYXBzLmFtZXJpY2EgPSByZXF1aXJlKCcuL21hcHMvYW1lcmljYScpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy56ZWJyYSA9IHJlcXVpcmUoJy4vbWFwcy96ZWJyYScpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy5yYWluYm93ID0gcmVxdWlyZSgnLi9tYXBzL3JhaW5ib3cnKShjb2xvcnMpO1xuY29sb3JzLm1hcHMucmFuZG9tID0gcmVxdWlyZSgnLi9tYXBzL3JhbmRvbScpKGNvbG9ycyk7XG5cbmZvciAodmFyIG1hcCBpbiBjb2xvcnMubWFwcykge1xuICAoZnVuY3Rpb24obWFwKSB7XG4gICAgY29sb3JzW21hcF0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzZXF1ZW5jZXIoY29sb3JzLm1hcHNbbWFwXSwgc3RyKTtcbiAgICB9O1xuICB9KShtYXApO1xufVxuXG5kZWZpbmVQcm9wcyhjb2xvcnMsIGluaXQoKSk7XG4iLCAiLy9cbi8vIFJlbWFyazogUmVxdWlyaW5nIHRoaXMgZmlsZSB3aWxsIHVzZSB0aGUgXCJzYWZlXCIgY29sb3JzIEFQSSxcbi8vIHdoaWNoIHdpbGwgbm90IHRvdWNoIFN0cmluZy5wcm90b3R5cGUuXG4vL1xuLy8gICB2YXIgY29sb3JzID0gcmVxdWlyZSgnY29sb3JzL3NhZmUnKTtcbi8vICAgY29sb3JzLnJlZChcImZvb1wiKVxuLy9cbi8vXG52YXIgY29sb3JzID0gcmVxdWlyZSgnLi9saWIvY29sb3JzJyk7XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IGNvbG9ycztcbiIsICJjb25zdCB7IGluZm8sIGRlYnVnIH0gPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuY2xhc3MgQ2VsbCB7XG4gIC8qKlxuICAgKiBBIHJlcHJlc2VudGF0aW9uIG9mIGEgY2VsbCB3aXRoaW4gdGhlIHRhYmxlLlxuICAgKiBJbXBsZW1lbnRhdGlvbnMgbXVzdCBoYXZlIGBpbml0YCBhbmQgYGRyYXdgIG1ldGhvZHMsXG4gICAqIGFzIHdlbGwgYXMgYGNvbFNwYW5gLCBgcm93U3BhbmAsIGBkZXNpcmVkSGVpZ2h0YCBhbmQgYGRlc2lyZWRXaWR0aGAgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgICogRWFjaCBjZWxsIHdpbGwgaGF2ZSBpdCdzIGB4YCBhbmQgYHlgIHZhbHVlcyBzZXQgYnkgdGhlIGBsYXlvdXQtbWFuYWdlcmAgcHJpb3IgdG9cbiAgICAgKiBgaW5pdGAgYmVpbmcgY2FsbGVkO1xuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy54ID0gbnVsbDtcbiAgICB0aGlzLnkgPSBudWxsO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKFsnYm9vbGVhbicsICdudW1iZXInLCAnc3RyaW5nJ10uaW5kZXhPZih0eXBlb2Ygb3B0aW9ucykgIT09IC0xKSB7XG4gICAgICBvcHRpb25zID0geyBjb250ZW50OiAnJyArIG9wdGlvbnMgfTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBsZXQgY29udGVudCA9IG9wdGlvbnMuY29udGVudDtcbiAgICBpZiAoWydib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnXS5pbmRleE9mKHR5cGVvZiBjb250ZW50KSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IFN0cmluZyhjb250ZW50KTtcbiAgICB9IGVsc2UgaWYgKCFjb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLm9wdGlvbnMuaHJlZiB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250ZW50IG5lZWRzIHRvIGJlIGEgcHJpbWl0aXZlLCBnb3Q6ICcgKyB0eXBlb2YgY29udGVudCk7XG4gICAgfVxuICAgIHRoaXMuY29sU3BhbiA9IG9wdGlvbnMuY29sU3BhbiB8fCAxO1xuICAgIHRoaXMucm93U3BhbiA9IG9wdGlvbnMucm93U3BhbiB8fCAxO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaHJlZikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdocmVmJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5ocmVmO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbWVyZ2VUYWJsZU9wdGlvbnModGFibGVPcHRpb25zLCBjZWxscykge1xuICAgIHRoaXMuY2VsbHMgPSBjZWxscztcblxuICAgIGxldCBvcHRpb25zQ2hhcnMgPSB0aGlzLm9wdGlvbnMuY2hhcnMgfHwge307XG4gICAgbGV0IHRhYmxlQ2hhcnMgPSB0YWJsZU9wdGlvbnMuY2hhcnM7XG4gICAgbGV0IGNoYXJzID0gKHRoaXMuY2hhcnMgPSB7fSk7XG4gICAgQ0hBUl9OQU1FUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBzZXRPcHRpb24ob3B0aW9uc0NoYXJzLCB0YWJsZUNoYXJzLCBuYW1lLCBjaGFycyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRydW5jYXRlID0gdGhpcy5vcHRpb25zLnRydW5jYXRlIHx8IHRhYmxlT3B0aW9ucy50cnVuY2F0ZTtcblxuICAgIGxldCBzdHlsZSA9ICh0aGlzLm9wdGlvbnMuc3R5bGUgPSB0aGlzLm9wdGlvbnMuc3R5bGUgfHwge30pO1xuICAgIGxldCB0YWJsZVN0eWxlID0gdGFibGVPcHRpb25zLnN0eWxlO1xuICAgIHNldE9wdGlvbihzdHlsZSwgdGFibGVTdHlsZSwgJ3BhZGRpbmctbGVmdCcsIHRoaXMpO1xuICAgIHNldE9wdGlvbihzdHlsZSwgdGFibGVTdHlsZSwgJ3BhZGRpbmctcmlnaHQnLCB0aGlzKTtcbiAgICB0aGlzLmhlYWQgPSBzdHlsZS5oZWFkIHx8IHRhYmxlU3R5bGUuaGVhZDtcbiAgICB0aGlzLmJvcmRlciA9IHN0eWxlLmJvcmRlciB8fCB0YWJsZVN0eWxlLmJvcmRlcjtcblxuICAgIHRoaXMuZml4ZWRXaWR0aCA9IHRhYmxlT3B0aW9ucy5jb2xXaWR0aHNbdGhpcy54XTtcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5jb21wdXRlTGluZXModGFibGVPcHRpb25zKTtcblxuICAgIHRoaXMuZGVzaXJlZFdpZHRoID0gdXRpbHMuc3RybGVuKHRoaXMuY29udGVudCkgKyB0aGlzLnBhZGRpbmdMZWZ0ICsgdGhpcy5wYWRkaW5nUmlnaHQ7XG4gICAgdGhpcy5kZXNpcmVkSGVpZ2h0ID0gdGhpcy5saW5lcy5sZW5ndGg7XG4gIH1cblxuICBjb21wdXRlTGluZXModGFibGVPcHRpb25zKSB7XG4gICAgY29uc3QgdGFibGVXb3JkV3JhcCA9IHRhYmxlT3B0aW9ucy53b3JkV3JhcCB8fCB0YWJsZU9wdGlvbnMudGV4dFdyYXA7XG4gICAgY29uc3QgeyB3b3JkV3JhcCA9IHRhYmxlV29yZFdyYXAgfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5maXhlZFdpZHRoICYmIHdvcmRXcmFwKSB7XG4gICAgICB0aGlzLmZpeGVkV2lkdGggLT0gdGhpcy5wYWRkaW5nTGVmdCArIHRoaXMucGFkZGluZ1JpZ2h0O1xuICAgICAgaWYgKHRoaXMuY29sU3Bhbikge1xuICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5jb2xTcGFuKSB7XG4gICAgICAgICAgdGhpcy5maXhlZFdpZHRoICs9IHRhYmxlT3B0aW9ucy5jb2xXaWR0aHNbdGhpcy54ICsgaV07XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB7IHdyYXBPbldvcmRCb3VuZGFyeTogdGFibGVXcmFwT25Xb3JkQm91bmRhcnkgPSB0cnVlIH0gPSB0YWJsZU9wdGlvbnM7XG4gICAgICBjb25zdCB7IHdyYXBPbldvcmRCb3VuZGFyeSA9IHRhYmxlV3JhcE9uV29yZEJvdW5kYXJ5IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICByZXR1cm4gdGhpcy53cmFwTGluZXModXRpbHMud29yZFdyYXAodGhpcy5maXhlZFdpZHRoLCB0aGlzLmNvbnRlbnQsIHdyYXBPbldvcmRCb3VuZGFyeSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53cmFwTGluZXModGhpcy5jb250ZW50LnNwbGl0KCdcXG4nKSk7XG4gIH1cblxuICB3cmFwTGluZXMoY29tcHV0ZWRMaW5lcykge1xuICAgIGNvbnN0IGxpbmVzID0gdXRpbHMuY29sb3JpemVMaW5lcyhjb21wdXRlZExpbmVzKTtcbiAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICByZXR1cm4gbGluZXMubWFwKChsaW5lKSA9PiB1dGlscy5oeXBlcmxpbmsodGhpcy5ocmVmLCBsaW5lKSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgQ2VsbHMgZGF0YSBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEBwYXJhbSB0YWJsZU9wdGlvbnMgLSBBIGZ1bGx5IHBvcHVsYXRlZCBzZXQgb2YgdGFibGVPcHRpb25zLlxuICAgKiBJbiBhZGRpdGlvbiB0byB0aGUgc3RhbmRhcmQgZGVmYXVsdCB2YWx1ZXMsIHRhYmxlT3B0aW9ucyBtdXN0IGhhdmUgZnVsbHkgcG9wdWxhdGVkIHRoZVxuICAgKiBgY29sV2lkdGhzYCBhbmQgYHJvd1dpZHRoc2AgYXJyYXlzLiBUaG9zZSBhcnJheXMgbXVzdCBoYXZlIGxlbmd0aHMgZXF1YWwgdG8gdGhlIG51bWJlclxuICAgKiBvZiBjb2x1bW5zIG9yIHJvd3MgKHJlc3BlY3RpdmVseSkgaW4gdGhpcyB0YWJsZSwgYW5kIGVhY2ggYXJyYXkgaXRlbSBtdXN0IGJlIGEgTnVtYmVyLlxuICAgKlxuICAgKi9cbiAgaW5pdCh0YWJsZU9wdGlvbnMpIHtcbiAgICBsZXQgeCA9IHRoaXMueDtcbiAgICBsZXQgeSA9IHRoaXMueTtcbiAgICB0aGlzLndpZHRocyA9IHRhYmxlT3B0aW9ucy5jb2xXaWR0aHMuc2xpY2UoeCwgeCArIHRoaXMuY29sU3Bhbik7XG4gICAgdGhpcy5oZWlnaHRzID0gdGFibGVPcHRpb25zLnJvd0hlaWdodHMuc2xpY2UoeSwgeSArIHRoaXMucm93U3Bhbik7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMud2lkdGhzLnJlZHVjZShzdW1QbHVzT25lLCAtMSk7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodHMucmVkdWNlKHN1bVBsdXNPbmUsIC0xKTtcblxuICAgIHRoaXMuaEFsaWduID0gdGhpcy5vcHRpb25zLmhBbGlnbiB8fCB0YWJsZU9wdGlvbnMuY29sQWxpZ25zW3hdO1xuICAgIHRoaXMudkFsaWduID0gdGhpcy5vcHRpb25zLnZBbGlnbiB8fCB0YWJsZU9wdGlvbnMucm93QWxpZ25zW3ldO1xuXG4gICAgdGhpcy5kcmF3UmlnaHQgPSB4ICsgdGhpcy5jb2xTcGFuID09IHRhYmxlT3B0aW9ucy5jb2xXaWR0aHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXdzIHRoZSBnaXZlbiBsaW5lIG9mIHRoZSBjZWxsLlxuICAgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZGVmZXJzIHRvIG1ldGhvZHMgYGRyYXdUb3BgLCBgZHJhd0JvdHRvbWAsIGBkcmF3TGluZWAgYW5kIGBkcmF3RW1wdHlgLlxuICAgKiBAcGFyYW0gbGluZU51bSAtIGNhbiBiZSBgdG9wYCwgYGJvdHRvbWAgb3IgYSBudW1lcmljYWwgbGluZSBudW1iZXIuXG4gICAqIEBwYXJhbSBzcGFubmluZ0NlbGwgLSB3aWxsIGJlIGEgbnVtYmVyIGlmIGJlaW5nIGNhbGxlZCBmcm9tIGEgUm93U3BhbkNlbGwsIGFuZCB3aWxsIHJlcHJlc2VudCBob3dcbiAgICogbWFueSByb3dzIGJlbG93IGl0J3MgYmVpbmcgY2FsbGVkIGZyb20uIE90aGVyd2lzZSBpdCdzIHVuZGVmaW5lZC5cbiAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgbGluZS5cbiAgICovXG4gIGRyYXcobGluZU51bSwgc3Bhbm5pbmdDZWxsKSB7XG4gICAgaWYgKGxpbmVOdW0gPT0gJ3RvcCcpIHJldHVybiB0aGlzLmRyYXdUb3AodGhpcy5kcmF3UmlnaHQpO1xuICAgIGlmIChsaW5lTnVtID09ICdib3R0b20nKSByZXR1cm4gdGhpcy5kcmF3Qm90dG9tKHRoaXMuZHJhd1JpZ2h0KTtcbiAgICBsZXQgY29udGVudCA9IHV0aWxzLnRydW5jYXRlKHRoaXMuY29udGVudCwgMTAsIHRoaXMudHJ1bmNhdGUpO1xuICAgIGlmICghbGluZU51bSkge1xuICAgICAgaW5mbyhgJHt0aGlzLnl9LSR7dGhpcy54fTogJHt0aGlzLnJvd1NwYW4gLSBsaW5lTnVtfXgke3RoaXMuY29sU3Bhbn0gQ2VsbCAke2NvbnRlbnR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlYnVnKGAke2xpbmVOdW19LSR7dGhpcy54fTogMXgke3RoaXMuY29sU3Bhbn0gUm93U3BhbkNlbGwgJHtjb250ZW50fWApO1xuICAgIH1cbiAgICBsZXQgcGFkTGVuID0gTWF0aC5tYXgodGhpcy5oZWlnaHQgLSB0aGlzLmxpbmVzLmxlbmd0aCwgMCk7XG4gICAgbGV0IHBhZFRvcDtcbiAgICBzd2l0Y2ggKHRoaXMudkFsaWduKSB7XG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICBwYWRUb3AgPSBNYXRoLmNlaWwocGFkTGVuIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgcGFkVG9wID0gcGFkTGVuO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHBhZFRvcCA9IDA7XG4gICAgfVxuICAgIGlmIChsaW5lTnVtIDwgcGFkVG9wIHx8IGxpbmVOdW0gPj0gcGFkVG9wICsgdGhpcy5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyYXdFbXB0eSh0aGlzLmRyYXdSaWdodCwgc3Bhbm5pbmdDZWxsKTtcbiAgICB9XG4gICAgbGV0IGZvcmNlVHJ1bmNhdGlvbiA9IHRoaXMubGluZXMubGVuZ3RoID4gdGhpcy5oZWlnaHQgJiYgbGluZU51bSArIDEgPj0gdGhpcy5oZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXMuZHJhd0xpbmUobGluZU51bSAtIHBhZFRvcCwgdGhpcy5kcmF3UmlnaHQsIGZvcmNlVHJ1bmNhdGlvbiwgc3Bhbm5pbmdDZWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSB0b3AgbGluZSBvZiB0aGUgY2VsbC5cbiAgICogQHBhcmFtIGRyYXdSaWdodCAtIHRydWUgaWYgdGhpcyBtZXRob2Qgc2hvdWxkIHJlbmRlciB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgY2VsbC5cbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGRyYXdUb3AoZHJhd1JpZ2h0KSB7XG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcbiAgICBpZiAodGhpcy5jZWxscykge1xuICAgICAgLy9UT0RPOiBjZWxscyBzaG91bGQgYWx3YXlzIGV4aXN0IC0gc29tZSB0ZXN0cyBkb24ndCBmaWxsIGl0IGluIHRob3VnaFxuICAgICAgdGhpcy53aWR0aHMuZm9yRWFjaChmdW5jdGlvbiAod2lkdGgsIGluZGV4KSB7XG4gICAgICAgIGNvbnRlbnQucHVzaCh0aGlzLl90b3BMZWZ0Q2hhcihpbmRleCkpO1xuICAgICAgICBjb250ZW50LnB1c2godXRpbHMucmVwZWF0KHRoaXMuY2hhcnNbdGhpcy55ID09IDAgPyAndG9wJyA6ICdtaWQnXSwgd2lkdGgpKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnB1c2godGhpcy5fdG9wTGVmdENoYXIoMCkpO1xuICAgICAgY29udGVudC5wdXNoKHV0aWxzLnJlcGVhdCh0aGlzLmNoYXJzW3RoaXMueSA9PSAwID8gJ3RvcCcgOiAnbWlkJ10sIHRoaXMud2lkdGgpKTtcbiAgICB9XG4gICAgaWYgKGRyYXdSaWdodCkge1xuICAgICAgY29udGVudC5wdXNoKHRoaXMuY2hhcnNbdGhpcy55ID09IDAgPyAndG9wUmlnaHQnIDogJ3JpZ2h0TWlkJ10pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53cmFwV2l0aFN0eWxlQ29sb3JzKCdib3JkZXInLCBjb250ZW50LmpvaW4oJycpKTtcbiAgfVxuXG4gIF90b3BMZWZ0Q2hhcihvZmZzZXQpIHtcbiAgICBsZXQgeCA9IHRoaXMueCArIG9mZnNldDtcbiAgICBsZXQgbGVmdENoYXI7XG4gICAgaWYgKHRoaXMueSA9PSAwKSB7XG4gICAgICBsZWZ0Q2hhciA9IHggPT0gMCA/ICd0b3BMZWZ0JyA6IG9mZnNldCA9PSAwID8gJ3RvcE1pZCcgOiAndG9wJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHggPT0gMCkge1xuICAgICAgICBsZWZ0Q2hhciA9ICdsZWZ0TWlkJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRDaGFyID0gb2Zmc2V0ID09IDAgPyAnbWlkTWlkJyA6ICdib3R0b21NaWQnO1xuICAgICAgICBpZiAodGhpcy5jZWxscykge1xuICAgICAgICAgIC8vVE9ETzogY2VsbHMgc2hvdWxkIGFsd2F5cyBleGlzdCAtIHNvbWUgdGVzdHMgZG9uJ3QgZmlsbCBpdCBpbiB0aG91Z2hcbiAgICAgICAgICBsZXQgc3BhbkFib3ZlID0gdGhpcy5jZWxsc1t0aGlzLnkgLSAxXVt4XSBpbnN0YW5jZW9mIENlbGwuQ29sU3BhbkNlbGw7XG4gICAgICAgICAgaWYgKHNwYW5BYm92ZSkge1xuICAgICAgICAgICAgbGVmdENoYXIgPSBvZmZzZXQgPT0gMCA/ICd0b3BNaWQnIDogJ21pZCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvZmZzZXQgPT0gMCkge1xuICAgICAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2VsbHNbdGhpcy55XVt4IC0gaV0gaW5zdGFuY2VvZiBDZWxsLkNvbFNwYW5DZWxsKSB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNlbGxzW3RoaXMueV1beCAtIGldIGluc3RhbmNlb2YgQ2VsbC5Sb3dTcGFuQ2VsbCkge1xuICAgICAgICAgICAgICBsZWZ0Q2hhciA9ICdsZWZ0TWlkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2hhcnNbbGVmdENoYXJdO1xuICB9XG5cbiAgd3JhcFdpdGhTdHlsZUNvbG9ycyhzdHlsZVByb3BlcnR5LCBjb250ZW50KSB7XG4gICAgaWYgKHRoaXNbc3R5bGVQcm9wZXJ0eV0gJiYgdGhpc1tzdHlsZVByb3BlcnR5XS5sZW5ndGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBjb2xvcnMgPSByZXF1aXJlKCdAY29sb3JzL2NvbG9ycy9zYWZlJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzW3N0eWxlUHJvcGVydHldLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgY29sb3JzID0gY29sb3JzW3RoaXNbc3R5bGVQcm9wZXJ0eV1baV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvcnMoY29udGVudCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhIGxpbmUgb2YgdGV4dC5cbiAgICogQHBhcmFtIGxpbmVOdW0gLSBXaGljaCBsaW5lIG9mIHRleHQgdG8gcmVuZGVyLiBUaGlzIGlzIG5vdCBuZWNlc3NhcmlseSB0aGUgbGluZSB3aXRoaW4gdGhlIGNlbGwuXG4gICAqIFRoZXJlIG1heSBiZSB0b3AtcGFkZGluZyBhYm92ZSB0aGUgZmlyc3QgbGluZSBvZiB0ZXh0LlxuICAgKiBAcGFyYW0gZHJhd1JpZ2h0IC0gdHJ1ZSBpZiB0aGlzIG1ldGhvZCBzaG91bGQgcmVuZGVyIHRoZSByaWdodCBlZGdlIG9mIHRoZSBjZWxsLlxuICAgKiBAcGFyYW0gZm9yY2VUcnVuY2F0aW9uU3ltYm9sIC0gYHRydWVgIGlmIHRoZSByZW5kZXJlZCB0ZXh0IHNob3VsZCBlbmQgd2l0aCB0aGUgdHJ1bmNhdGlvbiBzeW1ib2wgZXZlblxuICAgKiBpZiB0aGUgdGV4dCBmaXRzLiBUaGlzIGlzIHVzZWQgd2hlbiB0aGUgY2VsbCBpcyB2ZXJ0aWNhbGx5IHRydW5jYXRlZC4gSWYgYGZhbHNlYCB0aGUgdGV4dCBzaG91bGRcbiAgICogb25seSBpbmNsdWRlIHRoZSB0cnVuY2F0aW9uIHN5bWJvbCBpZiB0aGUgdGV4dCB3aWxsIG5vdCBmaXQgaG9yaXpvbnRhbGx5IHdpdGhpbiB0aGUgY2VsbCB3aWR0aC5cbiAgICogQHBhcmFtIHNwYW5uaW5nQ2VsbCAtIGEgbnVtYmVyIG9mIGlmIGJlaW5nIGNhbGxlZCBmcm9tIGEgUm93U3BhbkNlbGwuIChob3cgbWFueSByb3dzIGJlbG93KS4gb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGRyYXdMaW5lKGxpbmVOdW0sIGRyYXdSaWdodCwgZm9yY2VUcnVuY2F0aW9uU3ltYm9sLCBzcGFubmluZ0NlbGwpIHtcbiAgICBsZXQgbGVmdCA9IHRoaXMuY2hhcnNbdGhpcy54ID09IDAgPyAnbGVmdCcgOiAnbWlkZGxlJ107XG4gICAgaWYgKHRoaXMueCAmJiBzcGFubmluZ0NlbGwgJiYgdGhpcy5jZWxscykge1xuICAgICAgbGV0IGNlbGxMZWZ0ID0gdGhpcy5jZWxsc1t0aGlzLnkgKyBzcGFubmluZ0NlbGxdW3RoaXMueCAtIDFdO1xuICAgICAgd2hpbGUgKGNlbGxMZWZ0IGluc3RhbmNlb2YgQ29sU3BhbkNlbGwpIHtcbiAgICAgICAgY2VsbExlZnQgPSB0aGlzLmNlbGxzW2NlbGxMZWZ0LnldW2NlbGxMZWZ0LnggLSAxXTtcbiAgICAgIH1cbiAgICAgIGlmICghKGNlbGxMZWZ0IGluc3RhbmNlb2YgUm93U3BhbkNlbGwpKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmNoYXJzWydyaWdodE1pZCddO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbGVmdFBhZGRpbmcgPSB1dGlscy5yZXBlYXQoJyAnLCB0aGlzLnBhZGRpbmdMZWZ0KTtcbiAgICBsZXQgcmlnaHQgPSBkcmF3UmlnaHQgPyB0aGlzLmNoYXJzWydyaWdodCddIDogJyc7XG4gICAgbGV0IHJpZ2h0UGFkZGluZyA9IHV0aWxzLnJlcGVhdCgnICcsIHRoaXMucGFkZGluZ1JpZ2h0KTtcbiAgICBsZXQgbGluZSA9IHRoaXMubGluZXNbbGluZU51bV07XG4gICAgbGV0IGxlbiA9IHRoaXMud2lkdGggLSAodGhpcy5wYWRkaW5nTGVmdCArIHRoaXMucGFkZGluZ1JpZ2h0KTtcbiAgICBpZiAoZm9yY2VUcnVuY2F0aW9uU3ltYm9sKSBsaW5lICs9IHRoaXMudHJ1bmNhdGUgfHwgJ1x1MjAyNic7XG4gICAgbGV0IGNvbnRlbnQgPSB1dGlscy50cnVuY2F0ZShsaW5lLCBsZW4sIHRoaXMudHJ1bmNhdGUpO1xuICAgIGNvbnRlbnQgPSB1dGlscy5wYWQoY29udGVudCwgbGVuLCAnICcsIHRoaXMuaEFsaWduKTtcbiAgICBjb250ZW50ID0gbGVmdFBhZGRpbmcgKyBjb250ZW50ICsgcmlnaHRQYWRkaW5nO1xuICAgIHJldHVybiB0aGlzLnN0eWxpemVMaW5lKGxlZnQsIGNvbnRlbnQsIHJpZ2h0KTtcbiAgfVxuXG4gIHN0eWxpemVMaW5lKGxlZnQsIGNvbnRlbnQsIHJpZ2h0KSB7XG4gICAgbGVmdCA9IHRoaXMud3JhcFdpdGhTdHlsZUNvbG9ycygnYm9yZGVyJywgbGVmdCk7XG4gICAgcmlnaHQgPSB0aGlzLndyYXBXaXRoU3R5bGVDb2xvcnMoJ2JvcmRlcicsIHJpZ2h0KTtcbiAgICBpZiAodGhpcy55ID09PSAwKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy53cmFwV2l0aFN0eWxlQ29sb3JzKCdoZWFkJywgY29udGVudCk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0ICsgY29udGVudCArIHJpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGJvdHRvbSBsaW5lIG9mIHRoZSBjZWxsLlxuICAgKiBAcGFyYW0gZHJhd1JpZ2h0IC0gdHJ1ZSBpZiB0aGlzIG1ldGhvZCBzaG91bGQgcmVuZGVyIHRoZSByaWdodCBlZGdlIG9mIHRoZSBjZWxsLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZHJhd0JvdHRvbShkcmF3UmlnaHQpIHtcbiAgICBsZXQgbGVmdCA9IHRoaXMuY2hhcnNbdGhpcy54ID09IDAgPyAnYm90dG9tTGVmdCcgOiAnYm90dG9tTWlkJ107XG4gICAgbGV0IGNvbnRlbnQgPSB1dGlscy5yZXBlYXQodGhpcy5jaGFycy5ib3R0b20sIHRoaXMud2lkdGgpO1xuICAgIGxldCByaWdodCA9IGRyYXdSaWdodCA/IHRoaXMuY2hhcnNbJ2JvdHRvbVJpZ2h0J10gOiAnJztcbiAgICByZXR1cm4gdGhpcy53cmFwV2l0aFN0eWxlQ29sb3JzKCdib3JkZXInLCBsZWZ0ICsgY29udGVudCArIHJpZ2h0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgYmxhbmsgbGluZSBvZiB0ZXh0IHdpdGhpbiB0aGUgY2VsbC4gVXNlZCBmb3IgdG9wIGFuZC9vciBib3R0b20gcGFkZGluZy5cbiAgICogQHBhcmFtIGRyYXdSaWdodCAtIHRydWUgaWYgdGhpcyBtZXRob2Qgc2hvdWxkIHJlbmRlciB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgY2VsbC5cbiAgICogQHBhcmFtIHNwYW5uaW5nQ2VsbCAtIGEgbnVtYmVyIG9mIGlmIGJlaW5nIGNhbGxlZCBmcm9tIGEgUm93U3BhbkNlbGwuIChob3cgbWFueSByb3dzIGJlbG93KS4gb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGRyYXdFbXB0eShkcmF3UmlnaHQsIHNwYW5uaW5nQ2VsbCkge1xuICAgIGxldCBsZWZ0ID0gdGhpcy5jaGFyc1t0aGlzLnggPT0gMCA/ICdsZWZ0JyA6ICdtaWRkbGUnXTtcbiAgICBpZiAodGhpcy54ICYmIHNwYW5uaW5nQ2VsbCAmJiB0aGlzLmNlbGxzKSB7XG4gICAgICBsZXQgY2VsbExlZnQgPSB0aGlzLmNlbGxzW3RoaXMueSArIHNwYW5uaW5nQ2VsbF1bdGhpcy54IC0gMV07XG4gICAgICB3aGlsZSAoY2VsbExlZnQgaW5zdGFuY2VvZiBDb2xTcGFuQ2VsbCkge1xuICAgICAgICBjZWxsTGVmdCA9IHRoaXMuY2VsbHNbY2VsbExlZnQueV1bY2VsbExlZnQueCAtIDFdO1xuICAgICAgfVxuICAgICAgaWYgKCEoY2VsbExlZnQgaW5zdGFuY2VvZiBSb3dTcGFuQ2VsbCkpIHtcbiAgICAgICAgbGVmdCA9IHRoaXMuY2hhcnNbJ3JpZ2h0TWlkJ107XG4gICAgICB9XG4gICAgfVxuICAgIGxldCByaWdodCA9IGRyYXdSaWdodCA/IHRoaXMuY2hhcnNbJ3JpZ2h0J10gOiAnJztcbiAgICBsZXQgY29udGVudCA9IHV0aWxzLnJlcGVhdCgnICcsIHRoaXMud2lkdGgpO1xuICAgIHJldHVybiB0aGlzLnN0eWxpemVMaW5lKGxlZnQsIGNvbnRlbnQsIHJpZ2h0KTtcbiAgfVxufVxuXG5jbGFzcyBDb2xTcGFuQ2VsbCB7XG4gIC8qKlxuICAgKiBBIENlbGwgdGhhdCBkb2Vzbid0IGRvIGFueXRoaW5nLiBJdCBqdXN0IGRyYXdzIGVtcHR5IGxpbmVzLlxuICAgKiBVc2VkIGFzIGEgcGxhY2Vob2xkZXIgaW4gY29sdW1uIHNwYW5uaW5nLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBkcmF3KGxpbmVOdW0pIHtcbiAgICBpZiAodHlwZW9mIGxpbmVOdW0gPT09ICdudW1iZXInKSB7XG4gICAgICBkZWJ1ZyhgJHt0aGlzLnl9LSR7dGhpcy54fTogMXgxIENvbFNwYW5DZWxsYCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGluaXQoKSB7fVxuXG4gIG1lcmdlVGFibGVPcHRpb25zKCkge31cbn1cblxuY2xhc3MgUm93U3BhbkNlbGwge1xuICAvKipcbiAgICogQSBwbGFjZWhvbGRlciBDZWxsIGZvciBhIENlbGwgdGhhdCBzcGFucyBtdWx0aXBsZSByb3dzLlxuICAgKiBJdCBkZWxlZ2F0ZXMgcmVuZGVyaW5nIHRvIHRoZSBvcmlnaW5hbCBjZWxsLCBidXQgYWRkcyB0aGUgYXBwcm9wcmlhdGUgb2Zmc2V0LlxuICAgKiBAcGFyYW0gb3JpZ2luYWxDZWxsXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3Iob3JpZ2luYWxDZWxsKSB7XG4gICAgdGhpcy5vcmlnaW5hbENlbGwgPSBvcmlnaW5hbENlbGw7XG4gIH1cblxuICBpbml0KHRhYmxlT3B0aW9ucykge1xuICAgIGxldCB5ID0gdGhpcy55O1xuICAgIGxldCBvcmlnaW5hbFkgPSB0aGlzLm9yaWdpbmFsQ2VsbC55O1xuICAgIHRoaXMuY2VsbE9mZnNldCA9IHkgLSBvcmlnaW5hbFk7XG4gICAgdGhpcy5vZmZzZXQgPSBmaW5kRGltZW5zaW9uKHRhYmxlT3B0aW9ucy5yb3dIZWlnaHRzLCBvcmlnaW5hbFksIHRoaXMuY2VsbE9mZnNldCk7XG4gIH1cblxuICBkcmF3KGxpbmVOdW0pIHtcbiAgICBpZiAobGluZU51bSA9PSAndG9wJykge1xuICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxDZWxsLmRyYXcodGhpcy5vZmZzZXQsIHRoaXMuY2VsbE9mZnNldCk7XG4gICAgfVxuICAgIGlmIChsaW5lTnVtID09ICdib3R0b20nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbENlbGwuZHJhdygnYm90dG9tJyk7XG4gICAgfVxuICAgIGRlYnVnKGAke3RoaXMueX0tJHt0aGlzLnh9OiAxeCR7dGhpcy5jb2xTcGFufSBSb3dTcGFuQ2VsbCBmb3IgJHt0aGlzLm9yaWdpbmFsQ2VsbC5jb250ZW50fWApO1xuICAgIHJldHVybiB0aGlzLm9yaWdpbmFsQ2VsbC5kcmF3KHRoaXMub2Zmc2V0ICsgMSArIGxpbmVOdW0pO1xuICB9XG5cbiAgbWVyZ2VUYWJsZU9wdGlvbnMoKSB7fVxufVxuXG5mdW5jdGlvbiBmaXJzdERlZmluZWQoLi4uYXJncykge1xuICByZXR1cm4gYXJncy5maWx0ZXIoKHYpID0+IHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKS5zaGlmdCgpO1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG5mdW5jdGlvbiBzZXRPcHRpb24ob2JqQSwgb2JqQiwgbmFtZUIsIHRhcmdldE9iaikge1xuICBsZXQgbmFtZUEgPSBuYW1lQi5zcGxpdCgnLScpO1xuICBpZiAobmFtZUEubGVuZ3RoID4gMSkge1xuICAgIG5hbWVBWzFdID0gbmFtZUFbMV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lQVsxXS5zdWJzdHIoMSk7XG4gICAgbmFtZUEgPSBuYW1lQS5qb2luKCcnKTtcbiAgICB0YXJnZXRPYmpbbmFtZUFdID0gZmlyc3REZWZpbmVkKG9iakFbbmFtZUFdLCBvYmpBW25hbWVCXSwgb2JqQltuYW1lQV0sIG9iakJbbmFtZUJdKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRPYmpbbmFtZUJdID0gZmlyc3REZWZpbmVkKG9iakFbbmFtZUJdLCBvYmpCW25hbWVCXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZERpbWVuc2lvbihkaW1lbnNpb25UYWJsZSwgc3RhcnRpbmdJbmRleCwgc3Bhbikge1xuICBsZXQgcmV0ID0gZGltZW5zaW9uVGFibGVbc3RhcnRpbmdJbmRleF07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc3BhbjsgaSsrKSB7XG4gICAgcmV0ICs9IDEgKyBkaW1lbnNpb25UYWJsZVtzdGFydGluZ0luZGV4ICsgaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc3VtUGx1c09uZShhLCBiKSB7XG4gIHJldHVybiBhICsgYiArIDE7XG59XG5cbmxldCBDSEFSX05BTUVTID0gW1xuICAndG9wJyxcbiAgJ3RvcC1taWQnLFxuICAndG9wLWxlZnQnLFxuICAndG9wLXJpZ2h0JyxcbiAgJ2JvdHRvbScsXG4gICdib3R0b20tbWlkJyxcbiAgJ2JvdHRvbS1sZWZ0JyxcbiAgJ2JvdHRvbS1yaWdodCcsXG4gICdsZWZ0JyxcbiAgJ2xlZnQtbWlkJyxcbiAgJ21pZCcsXG4gICdtaWQtbWlkJyxcbiAgJ3JpZ2h0JyxcbiAgJ3JpZ2h0LW1pZCcsXG4gICdtaWRkbGUnLFxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBDZWxsO1xubW9kdWxlLmV4cG9ydHMuQ29sU3BhbkNlbGwgPSBDb2xTcGFuQ2VsbDtcbm1vZHVsZS5leHBvcnRzLlJvd1NwYW5DZWxsID0gUm93U3BhbkNlbGw7XG4iLCAiY29uc3QgeyB3YXJuLCBkZWJ1ZyB9ID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuY29uc3QgQ2VsbCA9IHJlcXVpcmUoJy4vY2VsbCcpO1xuY29uc3QgeyBDb2xTcGFuQ2VsbCwgUm93U3BhbkNlbGwgfSA9IENlbGw7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIG5leHQoYWxsb2MsIGNvbCkge1xuICAgIGlmIChhbGxvY1tjb2xdID4gMCkge1xuICAgICAgcmV0dXJuIG5leHQoYWxsb2MsIGNvbCArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY29sO1xuICB9XG5cbiAgZnVuY3Rpb24gbGF5b3V0VGFibGUodGFibGUpIHtcbiAgICBsZXQgYWxsb2MgPSB7fTtcbiAgICB0YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIHJvd0luZGV4KSB7XG4gICAgICBsZXQgY29sID0gMDtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIGNlbGwueSA9IHJvd0luZGV4O1xuICAgICAgICAvLyBBdm9pZCBlcnJvbmVvdXMgY2FsbCB0byBuZXh0KCkgb24gZmlyc3Qgcm93XG4gICAgICAgIGNlbGwueCA9IHJvd0luZGV4ID8gbmV4dChhbGxvYywgY29sKSA6IGNvbDtcbiAgICAgICAgY29uc3Qgcm93U3BhbiA9IGNlbGwucm93U3BhbiB8fCAxO1xuICAgICAgICBjb25zdCBjb2xTcGFuID0gY2VsbC5jb2xTcGFuIHx8IDE7XG4gICAgICAgIGlmIChyb3dTcGFuID4gMSkge1xuICAgICAgICAgIGZvciAobGV0IGNzID0gMDsgY3MgPCBjb2xTcGFuOyBjcysrKSB7XG4gICAgICAgICAgICBhbGxvY1tjZWxsLnggKyBjc10gPSByb3dTcGFuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb2wgPSBjZWxsLnggKyBjb2xTcGFuO1xuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyhhbGxvYykuZm9yRWFjaCgoaWR4KSA9PiB7XG4gICAgICAgIGFsbG9jW2lkeF0tLTtcbiAgICAgICAgaWYgKGFsbG9jW2lkeF0gPCAxKSBkZWxldGUgYWxsb2NbaWR4XTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF4V2lkdGgodGFibGUpIHtcbiAgICBsZXQgbXcgPSAwO1xuICAgIHRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgbXcgPSBNYXRoLm1heChtdywgY2VsbC54ICsgKGNlbGwuY29sU3BhbiB8fCAxKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbXc7XG4gIH1cblxuICBmdW5jdGlvbiBtYXhIZWlnaHQodGFibGUpIHtcbiAgICByZXR1cm4gdGFibGUubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VsbHNDb25mbGljdChjZWxsMSwgY2VsbDIpIHtcbiAgICBsZXQgeU1pbjEgPSBjZWxsMS55O1xuICAgIGxldCB5TWF4MSA9IGNlbGwxLnkgLSAxICsgKGNlbGwxLnJvd1NwYW4gfHwgMSk7XG4gICAgbGV0IHlNaW4yID0gY2VsbDIueTtcbiAgICBsZXQgeU1heDIgPSBjZWxsMi55IC0gMSArIChjZWxsMi5yb3dTcGFuIHx8IDEpO1xuICAgIGxldCB5Q29uZmxpY3QgPSAhKHlNaW4xID4geU1heDIgfHwgeU1pbjIgPiB5TWF4MSk7XG5cbiAgICBsZXQgeE1pbjEgPSBjZWxsMS54O1xuICAgIGxldCB4TWF4MSA9IGNlbGwxLnggLSAxICsgKGNlbGwxLmNvbFNwYW4gfHwgMSk7XG4gICAgbGV0IHhNaW4yID0gY2VsbDIueDtcbiAgICBsZXQgeE1heDIgPSBjZWxsMi54IC0gMSArIChjZWxsMi5jb2xTcGFuIHx8IDEpO1xuICAgIGxldCB4Q29uZmxpY3QgPSAhKHhNaW4xID4geE1heDIgfHwgeE1pbjIgPiB4TWF4MSk7XG5cbiAgICByZXR1cm4geUNvbmZsaWN0ICYmIHhDb25mbGljdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZsaWN0RXhpc3RzKHJvd3MsIHgsIHkpIHtcbiAgICBsZXQgaV9tYXggPSBNYXRoLm1pbihyb3dzLmxlbmd0aCAtIDEsIHkpO1xuICAgIGxldCBjZWxsID0geyB4OiB4LCB5OiB5IH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaV9tYXg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IHJvd3NbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoY2VsbHNDb25mbGljdChjZWxsLCByb3dbal0pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsQmxhbmsocm93cywgeSwgeE1pbiwgeE1heCkge1xuICAgIGZvciAobGV0IHggPSB4TWluOyB4IDwgeE1heDsgeCsrKSB7XG4gICAgICBpZiAoY29uZmxpY3RFeGlzdHMocm93cywgeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJvd1NwYW5DZWxscyh0YWJsZSkge1xuICAgIHRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgcm93SW5kZXgpIHtcbiAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2VsbC5yb3dTcGFuOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm93U3BhbkNlbGwgPSBuZXcgUm93U3BhbkNlbGwoY2VsbCk7XG4gICAgICAgICAgcm93U3BhbkNlbGwueCA9IGNlbGwueDtcbiAgICAgICAgICByb3dTcGFuQ2VsbC55ID0gY2VsbC55ICsgaTtcbiAgICAgICAgICByb3dTcGFuQ2VsbC5jb2xTcGFuID0gY2VsbC5jb2xTcGFuO1xuICAgICAgICAgIGluc2VydENlbGwocm93U3BhbkNlbGwsIHRhYmxlW3Jvd0luZGV4ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbFNwYW5DZWxscyhjZWxsUm93cykge1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gY2VsbFJvd3MubGVuZ3RoIC0gMTsgcm93SW5kZXggPj0gMDsgcm93SW5kZXgtLSkge1xuICAgICAgbGV0IGNlbGxDb2x1bW5zID0gY2VsbFJvd3Nbcm93SW5kZXhdO1xuICAgICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGNlbGxDb2x1bW5zLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICBsZXQgY2VsbCA9IGNlbGxDb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPCBjZWxsLmNvbFNwYW47IGsrKykge1xuICAgICAgICAgIGxldCBjb2xTcGFuQ2VsbCA9IG5ldyBDb2xTcGFuQ2VsbCgpO1xuICAgICAgICAgIGNvbFNwYW5DZWxsLnggPSBjZWxsLnggKyBrO1xuICAgICAgICAgIGNvbFNwYW5DZWxsLnkgPSBjZWxsLnk7XG4gICAgICAgICAgY2VsbENvbHVtbnMuc3BsaWNlKGNvbHVtbkluZGV4ICsgMSwgMCwgY29sU3BhbkNlbGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0Q2VsbChjZWxsLCByb3cpIHtcbiAgICBsZXQgeCA9IDA7XG4gICAgd2hpbGUgKHggPCByb3cubGVuZ3RoICYmIHJvd1t4XS54IDwgY2VsbC54KSB7XG4gICAgICB4Kys7XG4gICAgfVxuICAgIHJvdy5zcGxpY2UoeCwgMCwgY2VsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxsSW5UYWJsZSh0YWJsZSkge1xuICAgIGxldCBoX21heCA9IG1heEhlaWdodCh0YWJsZSk7XG4gICAgbGV0IHdfbWF4ID0gbWF4V2lkdGgodGFibGUpO1xuICAgIGRlYnVnKGBNYXggcm93czogJHtoX21heH07IE1heCBjb2xzOiAke3dfbWF4fWApO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaF9tYXg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3X21heDsgeCsrKSB7XG4gICAgICAgIGlmICghY29uZmxpY3RFeGlzdHModGFibGUsIHgsIHkpKSB7XG4gICAgICAgICAgbGV0IG9wdHMgPSB7IHg6IHgsIHk6IHksIGNvbFNwYW46IDEsIHJvd1NwYW46IDEgfTtcbiAgICAgICAgICB4Kys7XG4gICAgICAgICAgd2hpbGUgKHggPCB3X21heCAmJiAhY29uZmxpY3RFeGlzdHModGFibGUsIHgsIHkpKSB7XG4gICAgICAgICAgICBvcHRzLmNvbFNwYW4rKztcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHkyID0geSArIDE7XG4gICAgICAgICAgd2hpbGUgKHkyIDwgaF9tYXggJiYgYWxsQmxhbmsodGFibGUsIHkyLCBvcHRzLngsIG9wdHMueCArIG9wdHMuY29sU3BhbikpIHtcbiAgICAgICAgICAgIG9wdHMucm93U3BhbisrO1xuICAgICAgICAgICAgeTIrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGNlbGwgPSBuZXcgQ2VsbChvcHRzKTtcbiAgICAgICAgICBjZWxsLnggPSBvcHRzLng7XG4gICAgICAgICAgY2VsbC55ID0gb3B0cy55O1xuICAgICAgICAgIHdhcm4oYE1pc3NpbmcgY2VsbCBhdCAke2NlbGwueX0tJHtjZWxsLnh9LmApO1xuICAgICAgICAgIGluc2VydENlbGwoY2VsbCwgdGFibGVbeV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDZWxscyhyb3dzKSB7XG4gICAgcmV0dXJuIHJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSB7XG4gICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhyb3cpWzBdO1xuICAgICAgICByb3cgPSByb3dba2V5XTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93KSkge1xuICAgICAgICAgIHJvdyA9IHJvdy5zbGljZSgpO1xuICAgICAgICAgIHJvdy51bnNoaWZ0KGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93ID0gW2tleSwgcm93XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdy5tYXAoZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDZWxsKGNlbGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlVGFibGVMYXlvdXQocm93cykge1xuICAgIGxldCBjZWxsUm93cyA9IGdlbmVyYXRlQ2VsbHMocm93cyk7XG4gICAgbGF5b3V0VGFibGUoY2VsbFJvd3MpO1xuICAgIGZpbGxJblRhYmxlKGNlbGxSb3dzKTtcbiAgICBhZGRSb3dTcGFuQ2VsbHMoY2VsbFJvd3MpO1xuICAgIGFkZENvbFNwYW5DZWxscyhjZWxsUm93cyk7XG4gICAgcmV0dXJuIGNlbGxSb3dzO1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbWFrZVRhYmxlTGF5b3V0OiBtYWtlVGFibGVMYXlvdXQsXG4gICAgbGF5b3V0VGFibGU6IGxheW91dFRhYmxlLFxuICAgIGFkZFJvd1NwYW5DZWxsczogYWRkUm93U3BhbkNlbGxzLFxuICAgIG1heFdpZHRoOiBtYXhXaWR0aCxcbiAgICBmaWxsSW5UYWJsZTogZmlsbEluVGFibGUsXG4gICAgY29tcHV0ZVdpZHRoczogbWFrZUNvbXB1dGVXaWR0aHMoJ2NvbFNwYW4nLCAnZGVzaXJlZFdpZHRoJywgJ3gnLCAxKSxcbiAgICBjb21wdXRlSGVpZ2h0czogbWFrZUNvbXB1dGVXaWR0aHMoJ3Jvd1NwYW4nLCAnZGVzaXJlZEhlaWdodCcsICd5JywgMSksXG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZVdpZHRocyhjb2xTcGFuLCBkZXNpcmVkV2lkdGgsIHgsIGZvcmNlZE1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHMsIHRhYmxlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBzcGFubmVycyA9IFtdO1xuICAgIGxldCBhdXRvID0ge307XG4gICAgdGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICBpZiAoKGNlbGxbY29sU3Bhbl0gfHwgMSkgPiAxKSB7XG4gICAgICAgICAgc3Bhbm5lcnMucHVzaChjZWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbY2VsbFt4XV0gPSBNYXRoLm1heChyZXN1bHRbY2VsbFt4XV0gfHwgMCwgY2VsbFtkZXNpcmVkV2lkdGhdIHx8IDAsIGZvcmNlZE1pbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFscy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vc3Bhbm5lcnMuZm9yRWFjaChmdW5jdGlvbihjZWxsKXtcbiAgICBmb3IgKGxldCBrID0gc3Bhbm5lcnMubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgIGxldCBjZWxsID0gc3Bhbm5lcnNba107XG4gICAgICBsZXQgc3BhbiA9IGNlbGxbY29sU3Bhbl07XG4gICAgICBsZXQgY29sID0gY2VsbFt4XTtcbiAgICAgIGxldCBleGlzdGluZ1dpZHRoID0gcmVzdWx0W2NvbF07XG4gICAgICBsZXQgZWRpdGFibGVDb2xzID0gdHlwZW9mIHZhbHNbY29sXSA9PT0gJ251bWJlcicgPyAwIDogMTtcbiAgICAgIGlmICh0eXBlb2YgZXhpc3RpbmdXaWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzcGFuOyBpKyspIHtcbiAgICAgICAgICBleGlzdGluZ1dpZHRoICs9IDEgKyByZXN1bHRbY29sICsgaV07XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWxzW2NvbCArIGldICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZWRpdGFibGVDb2xzKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGlzdGluZ1dpZHRoID0gZGVzaXJlZFdpZHRoID09PSAnZGVzaXJlZFdpZHRoJyA/IGNlbGwuZGVzaXJlZFdpZHRoIC0gMSA6IDE7XG4gICAgICAgIGlmICghYXV0b1tjb2xdIHx8IGF1dG9bY29sXSA8IGV4aXN0aW5nV2lkdGgpIHtcbiAgICAgICAgICBhdXRvW2NvbF0gPSBleGlzdGluZ1dpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjZWxsW2Rlc2lyZWRXaWR0aF0gPiBleGlzdGluZ1dpZHRoKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGVkaXRhYmxlQ29scyA+IDAgJiYgY2VsbFtkZXNpcmVkV2lkdGhdID4gZXhpc3RpbmdXaWR0aCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsc1tjb2wgKyBpXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGxldCBkaWYgPSBNYXRoLnJvdW5kKChjZWxsW2Rlc2lyZWRXaWR0aF0gLSBleGlzdGluZ1dpZHRoKSAvIGVkaXRhYmxlQ29scyk7XG4gICAgICAgICAgICBleGlzdGluZ1dpZHRoICs9IGRpZjtcbiAgICAgICAgICAgIHJlc3VsdFtjb2wgKyBpXSArPSBkaWY7XG4gICAgICAgICAgICBlZGl0YWJsZUNvbHMtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih2YWxzLCByZXN1bHQsIGF1dG8pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFscy5sZW5ndGg7IGorKykge1xuICAgICAgdmFsc1tqXSA9IE1hdGgubWF4KGZvcmNlZE1pbiwgdmFsc1tqXSB8fCAwKTtcbiAgICB9XG4gIH07XG59XG4iLCAiY29uc3QgZGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbmNvbnN0IHRhYmxlTGF5b3V0ID0gcmVxdWlyZSgnLi9sYXlvdXQtbWFuYWdlcicpO1xuXG5jbGFzcyBUYWJsZSBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBvcHRpb25zID0gdXRpbHMubWVyZ2VPcHRpb25zKG9wdHMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnb3B0aW9ucycsIHtcbiAgICAgIHZhbHVlOiBvcHRpb25zLFxuICAgICAgZW51bWVyYWJsZTogb3B0aW9ucy5kZWJ1ZyxcbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICBzd2l0Y2ggKHR5cGVvZiBvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIGRlYnVnLnNldERlYnVnTGV2ZWwoZGVidWcuV0FSTik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgZGVidWcuc2V0RGVidWdMZXZlbChvcHRpb25zLmRlYnVnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBkZWJ1Zy5zZXREZWJ1Z0xldmVsKHBhcnNlSW50KG9wdGlvbnMuZGVidWcsIDEwKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGVidWcuc2V0RGVidWdMZXZlbChkZWJ1Zy5XQVJOKTtcbiAgICAgICAgICBkZWJ1Zy53YXJuKGBEZWJ1ZyBvcHRpb24gaXMgZXhwZWN0ZWQgdG8gYmUgYm9vbGVhbiwgbnVtYmVyLCBvciBzdHJpbmcuIFJlY2VpdmVkIGEgJHt0eXBlb2Ygb3B0aW9ucy5kZWJ1Z31gKTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZXMnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gZGVidWcuZGVidWdNZXNzYWdlcygpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IGFycmF5ID0gdGhpcztcbiAgICBsZXQgaGVhZGVyc1ByZXNlbnQgPSB0aGlzLm9wdGlvbnMuaGVhZCAmJiB0aGlzLm9wdGlvbnMuaGVhZC5sZW5ndGg7XG4gICAgaWYgKGhlYWRlcnNQcmVzZW50KSB7XG4gICAgICBhcnJheSA9IFt0aGlzLm9wdGlvbnMuaGVhZF07XG4gICAgICBpZiAodGhpcy5sZW5ndGgpIHtcbiAgICAgICAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9ucy5zdHlsZS5oZWFkID0gW107XG4gICAgfVxuXG4gICAgbGV0IGNlbGxzID0gdGFibGVMYXlvdXQubWFrZVRhYmxlTGF5b3V0KGFycmF5KTtcblxuICAgIGNlbGxzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgY2VsbC5tZXJnZVRhYmxlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIGNlbGxzKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgdGFibGVMYXlvdXQuY29tcHV0ZVdpZHRocyh0aGlzLm9wdGlvbnMuY29sV2lkdGhzLCBjZWxscyk7XG4gICAgdGFibGVMYXlvdXQuY29tcHV0ZUhlaWdodHModGhpcy5vcHRpb25zLnJvd0hlaWdodHMsIGNlbGxzKTtcblxuICAgIGNlbGxzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgY2VsbC5pbml0KHRoaXMub3B0aW9ucyk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBjZWxscy5sZW5ndGg7IHJvd0luZGV4KyspIHtcbiAgICAgIGxldCByb3cgPSBjZWxsc1tyb3dJbmRleF07XG4gICAgICBsZXQgaGVpZ2h0T2ZSb3cgPSB0aGlzLm9wdGlvbnMucm93SGVpZ2h0c1tyb3dJbmRleF07XG5cbiAgICAgIGlmIChyb3dJbmRleCA9PT0gMCB8fCAhdGhpcy5vcHRpb25zLnN0eWxlLmNvbXBhY3QgfHwgKHJvd0luZGV4ID09IDEgJiYgaGVhZGVyc1ByZXNlbnQpKSB7XG4gICAgICAgIGRvRHJhdyhyb3csICd0b3AnLCByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBsaW5lTnVtID0gMDsgbGluZU51bSA8IGhlaWdodE9mUm93OyBsaW5lTnVtKyspIHtcbiAgICAgICAgZG9EcmF3KHJvdywgbGluZU51bSwgcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvd0luZGV4ICsgMSA9PSBjZWxscy5sZW5ndGgpIHtcbiAgICAgICAgZG9EcmF3KHJvdywgJ2JvdHRvbScsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICBsZXQgc3RyID0gdGhpcy50b1N0cmluZygpLnNwbGl0KCdcXG4nKTtcbiAgICByZXR1cm4gc3RyWzBdLmxlbmd0aDtcbiAgfVxufVxuXG5UYWJsZS5yZXNldCA9ICgpID0+IGRlYnVnLnJlc2V0KCk7XG5cbmZ1bmN0aW9uIGRvRHJhdyhyb3csIGxpbmVOdW0sIHJlc3VsdCkge1xuICBsZXQgbGluZSA9IFtdO1xuICByb3cuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgIGxpbmUucHVzaChjZWxsLmRyYXcobGluZU51bSkpO1xuICB9KTtcbiAgbGV0IHN0ciA9IGxpbmUuam9pbignJyk7XG4gIGlmIChzdHIubGVuZ3RoKSByZXN1bHQucHVzaChzdHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlO1xuIiwgIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvdGFibGUnKTsiLCAiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsICIvKiBNSVQgbGljZW5zZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5jb25zdCBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxuY29uc3QgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjc3NLZXl3b3JkcykpIHtcblx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xufVxuXG5jb25zdCBjb252ZXJ0ID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG4vLyBIaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGNvbnZlcnQpKSB7XG5cdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHR9XG5cblx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHR9XG5cblx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRjb25zdCB7Y2hhbm5lbHMsIGxhYmVsc30gPSBjb252ZXJ0W21vZGVsXTtcblx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuXHRsZXQgaDtcblx0bGV0IHM7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjb25zdCBsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHJkaWY7XG5cdGxldCBnZGlmO1xuXHRsZXQgYmRpZjtcblx0bGV0IGg7XG5cdGxldCBzO1xuXG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0Y29uc3QgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0Y29uc3QgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSAwO1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdO1xuXHRjb25zdCBnID0gcmdiWzFdO1xuXHRsZXQgYiA9IHJnYlsyXTtcblx0Y29uc3QgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHRjb25zdCB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Y29uc3QgayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjb25zdCBjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdGNvbnN0IG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0Y29uc3QgeSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0Lypcblx0XHRTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2Vcblx0Ki9cblx0cmV0dXJuIChcblx0XHQoKHhbMF0gLSB5WzBdKSAqKiAyKSArXG5cdFx0KCh4WzFdIC0geVsxXSkgKiogMikgK1xuXHRcdCgoeFsyXSAtIHlbMl0pICoqIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdGxldCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdGxldCBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yIChjb25zdCBrZXl3b3JkIG9mIE9iamVjdC5rZXlzKGNzc0tleXdvcmRzKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0Y29uc3QgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGxldCBnID0gcmdiWzFdIC8gMjU1O1xuXHRsZXQgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBBc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyAoKChyICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gKCgoZyArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/ICgoKGIgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdGNvbnN0IHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdGNvbnN0IHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdGNvbnN0IHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdGxldCB4ID0geHl6WzBdO1xuXHRsZXQgeSA9IHh5elsxXTtcblx0bGV0IHogPSB4eXpbMl07XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/ICh4ICoqICgxIC8gMykpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gKHkgKiogKDEgLyAzKSkgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyAoeiAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRjb25zdCBsID0gKDExNiAqIHkpIC0gMTY7XG5cdGNvbnN0IGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRjb25zdCBiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdIC8gMzYwO1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXHRsZXQgdDI7XG5cdGxldCB0Mztcblx0bGV0IHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHRjb25zdCB0MSA9IDIgKiBsIC0gdDI7XG5cblx0Y29uc3QgcmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdO1xuXHRsZXQgcyA9IGhzbFsxXSAvIDEwMDtcblx0bGV0IGwgPSBoc2xbMl0gLyAxMDA7XG5cdGxldCBzbWluID0gcztcblx0Y29uc3QgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdGNvbnN0IHYgPSAobCArIHMpIC8gMjtcblx0Y29uc3Qgc3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgaCA9IGhzdlswXSAvIDYwO1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRsZXQgdiA9IGhzdlsyXSAvIDEwMDtcblx0Y29uc3QgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHRjb25zdCBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdGNvbnN0IHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0Y29uc3QgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHRjb25zdCB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBoID0gaHN2WzBdO1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRjb25zdCB2ID0gaHN2WzJdIC8gMTAwO1xuXHRjb25zdCB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdGxldCBzbDtcblx0bGV0IGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRjb25zdCBsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHRjb25zdCBoID0gaHdiWzBdIC8gMzYwO1xuXHRsZXQgd2ggPSBod2JbMV0gLyAxMDA7XG5cdGxldCBibCA9IGh3YlsyXSAvIDEwMDtcblx0Y29uc3QgcmF0aW8gPSB3aCArIGJsO1xuXHRsZXQgZjtcblxuXHQvLyBXaCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGNvbnN0IGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0Y29uc3QgdiA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdGNvbnN0IG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gTGluZWFyIGludGVycG9sYXRpb25cblxuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSxuby1tdWx0aS1zcGFjZXMgKi9cblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgIGcgPSBuOyAgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyAgZyA9IHY7ICBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgIGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47ICBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgIGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7ICBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0Y29uc3QgYyA9IGNteWtbMF0gLyAxMDA7XG5cdGNvbnN0IG0gPSBjbXlrWzFdIC8gMTAwO1xuXHRjb25zdCB5ID0gY215a1syXSAvIDEwMDtcblx0Y29uc3QgayA9IGNteWtbM10gLyAxMDA7XG5cblx0Y29uc3QgciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRjb25zdCBnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGNvbnN0IGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHRjb25zdCB4ID0geHl6WzBdIC8gMTAwO1xuXHRjb25zdCB5ID0geHl6WzFdIC8gMTAwO1xuXHRjb25zdCB6ID0geHl6WzJdIC8gMTAwO1xuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIEFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKHIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGcgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0bGV0IHggPSB4eXpbMF07XG5cdGxldCB5ID0geHl6WzFdO1xuXHRsZXQgeiA9IHh5elsyXTtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcblx0Y29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG5cdGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdGNvbnN0IGwgPSBsYWJbMF07XG5cdGNvbnN0IGEgPSBsYWJbMV07XG5cdGNvbnN0IGIgPSBsYWJbMl07XG5cdGxldCB4O1xuXHRsZXQgeTtcblx0bGV0IHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHRjb25zdCB5MiA9IHkgKiogMztcblx0Y29uc3QgeDIgPSB4ICoqIDM7XG5cdGNvbnN0IHoyID0geiAqKiAzO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdGNvbnN0IGwgPSBsYWJbMF07XG5cdGNvbnN0IGEgPSBsYWJbMV07XG5cdGNvbnN0IGIgPSBsYWJbMl07XG5cdGxldCBoO1xuXG5cdGNvbnN0IGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjb25zdCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdGNvbnN0IGwgPSBsY2hbMF07XG5cdGNvbnN0IGMgPSBsY2hbMV07XG5cdGNvbnN0IGggPSBsY2hbMl07XG5cblx0Y29uc3QgaHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGNvbnN0IGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRjb25zdCBiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MsIHNhdHVyYXRpb24gPSBudWxsKSB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IGFyZ3M7XG5cdGxldCB2YWx1ZSA9IHNhdHVyYXRpb24gPT09IG51bGwgPyBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl0gOiBzYXR1cmF0aW9uOyAvLyBIc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHRsZXQgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBPcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IHIgPSBhcmdzWzBdO1xuXHRjb25zdCBnID0gYXJnc1sxXTtcblx0Y29uc3QgYiA9IGFyZ3NbMl07XG5cblx0Ly8gV2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHRjb25zdCBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0bGV0IGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIEhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdGNvbnN0IG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHRjb25zdCByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdGNvbnN0IGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdGNvbnN0IGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBIYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdGNvbnN0IGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0bGV0IHJlbTtcblx0Y29uc3QgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdGNvbnN0IGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHRjb25zdCBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0Y29uc3Qgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdGxldCBjb2xvclN0cmluZyA9IG1hdGNoWzBdO1xuXG5cdGlmIChtYXRjaFswXS5sZW5ndGggPT09IDMpIHtcblx0XHRjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnNwbGl0KCcnKS5tYXAoY2hhciA9PiB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHRjb25zdCBpbnRlZ2VyID0gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblx0Y29uc3QgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdGNvbnN0IGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdGNvbnN0IGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0Y29uc3QgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdGxldCBncmF5c2NhbGU7XG5cdGxldCBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYTtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXG5cdGNvbnN0IGMgPSBsIDwgMC41ID8gKDIuMCAqIHMgKiBsKSA6ICgyLjAgKiBzICogKDEuMCAtIGwpKTtcblxuXHRsZXQgZiA9IDA7XG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGNvbnN0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0Y29uc3QgYyA9IHMgKiB2O1xuXHRsZXQgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGggPSBoY2dbMF0gLyAzNjA7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHRjb25zdCBwdXJlID0gWzAsIDAsIDBdO1xuXHRjb25zdCBoaSA9IChoICUgMSkgKiA2O1xuXHRjb25zdCB2ID0gaGkgJSAxO1xuXHRjb25zdCB3ID0gMSAtIHY7XG5cdGxldCBtZyA9IDA7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGNvbnN0IHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0bGV0IGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGNvbnN0IGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0bGV0IHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblx0Y29uc3QgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdGNvbnN0IHcgPSBod2JbMV0gLyAxMDA7XG5cdGNvbnN0IGIgPSBod2JbMl0gLyAxMDA7XG5cdGNvbnN0IHYgPSAxIC0gYjtcblx0Y29uc3QgYyA9IHYgLSB3O1xuXHRsZXQgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc3YgPSBjb252ZXJ0LmdyYXkuaHNsO1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0Y29uc3QgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdGNvbnN0IGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0Y29uc3Qgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcbiIsICJjb25zdCBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0VGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdGNvbnN0IGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0Y29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAobGV0IGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHRjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0Y29uc3QgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gVW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdGNvbnN0IGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAobGV0IGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGNvbnN0IGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0Y29uc3QgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHRsZXQgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdGxldCBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29uc3QgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0Y29uc3QgY29udmVyc2lvbiA9IHt9O1xuXG5cdGNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yIChsZXQgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGNvbnN0IHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0Y29uc3Qgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBObyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsICJjb25zdCBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG5jb25zdCBjb252ZXJ0ID0ge307XG5cbmNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHRjb25zdCB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGNvbnN0IGFyZzAgPSBhcmdzWzBdO1xuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0Y29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBhcmcwID0gYXJnc1swXTtcblxuXHRcdGlmIChhcmcwID09PSB1bmRlZmluZWQgfHwgYXJnMCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZzA7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZzAubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IGFyZzA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyBXZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yIChsZXQgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBQcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZyb21Nb2RlbCA9PiB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdGNvbnN0IHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdGNvbnN0IHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKHRvTW9kZWwgPT4ge1xuXHRcdGNvbnN0IGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgd3JhcEFuc2kxNiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlske2NvZGUgKyBvZmZzZXR9bWA7XG59O1xuXG5jb25zdCB3cmFwQW5zaTI1NiA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBjb2RlID0gZm4oLi4uYXJncyk7XG5cdHJldHVybiBgXFx1MDAxQlskezM4ICsgb2Zmc2V0fTs1OyR7Y29kZX1tYDtcbn07XG5cbmNvbnN0IHdyYXBBbnNpMTZtID0gKGZuLCBvZmZzZXQpID0+ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHJnYiA9IGZuKC4uLmFyZ3MpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07Mjske3JnYlswXX07JHtyZ2JbMV19OyR7cmdiWzJdfW1gO1xufTtcblxuY29uc3QgYW5zaTJhbnNpID0gbiA9PiBuO1xuY29uc3QgcmdiMnJnYiA9IChyLCBnLCBiKSA9PiBbciwgZywgYl07XG5cbmNvbnN0IHNldExhenlQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5LCBnZXQpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIHtcblx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0KCk7XG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCB7XG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcbn07XG5cbi8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnY29sb3ItY29udmVydCcpfSAqL1xubGV0IGNvbG9yQ29udmVydDtcbmNvbnN0IG1ha2VEeW5hbWljU3R5bGVzID0gKHdyYXAsIHRhcmdldFNwYWNlLCBpZGVudGl0eSwgaXNCYWNrZ3JvdW5kKSA9PiB7XG5cdGlmIChjb2xvckNvbnZlcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbG9yQ29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblx0fVxuXG5cdGNvbnN0IG9mZnNldCA9IGlzQmFja2dyb3VuZCA/IDEwIDogMDtcblx0Y29uc3Qgc3R5bGVzID0ge307XG5cblx0Zm9yIChjb25zdCBbc291cmNlU3BhY2UsIHN1aXRlXSBvZiBPYmplY3QuZW50cmllcyhjb2xvckNvbnZlcnQpKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHNvdXJjZVNwYWNlID09PSAnYW5zaTE2JyA/ICdhbnNpJyA6IHNvdXJjZVNwYWNlO1xuXHRcdGlmIChzb3VyY2VTcGFjZSA9PT0gdGFyZ2V0U3BhY2UpIHtcblx0XHRcdHN0eWxlc1tuYW1lXSA9IHdyYXAoaWRlbnRpdHksIG9mZnNldCk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc3VpdGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRzdHlsZXNbbmFtZV0gPSB3cmFwKHN1aXRlW3RhcmdldFNwYWNlXSwgb2Zmc2V0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufTtcblxuZnVuY3Rpb24gYXNzZW1ibGVTdHlsZXMoKSB7XG5cdGNvbnN0IGNvZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCBzdHlsZXMgPSB7XG5cdFx0bW9kaWZpZXI6IHtcblx0XHRcdHJlc2V0OiBbMCwgMF0sXG5cdFx0XHQvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG5cdFx0XHRib2xkOiBbMSwgMjJdLFxuXHRcdFx0ZGltOiBbMiwgMjJdLFxuXHRcdFx0aXRhbGljOiBbMywgMjNdLFxuXHRcdFx0dW5kZXJsaW5lOiBbNCwgMjRdLFxuXHRcdFx0aW52ZXJzZTogWzcsIDI3XSxcblx0XHRcdGhpZGRlbjogWzgsIDI4XSxcblx0XHRcdHN0cmlrZXRocm91Z2g6IFs5LCAyOV1cblx0XHR9LFxuXHRcdGNvbG9yOiB7XG5cdFx0XHRibGFjazogWzMwLCAzOV0sXG5cdFx0XHRyZWQ6IFszMSwgMzldLFxuXHRcdFx0Z3JlZW46IFszMiwgMzldLFxuXHRcdFx0eWVsbG93OiBbMzMsIDM5XSxcblx0XHRcdGJsdWU6IFszNCwgMzldLFxuXHRcdFx0bWFnZW50YTogWzM1LCAzOV0sXG5cdFx0XHRjeWFuOiBbMzYsIDM5XSxcblx0XHRcdHdoaXRlOiBbMzcsIDM5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRibGFja0JyaWdodDogWzkwLCAzOV0sXG5cdFx0XHRyZWRCcmlnaHQ6IFs5MSwgMzldLFxuXHRcdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRcdGJsdWVCcmlnaHQ6IFs5NCwgMzldLFxuXHRcdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHRcdHdoaXRlQnJpZ2h0OiBbOTcsIDM5XVxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuOiBbNDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGE6IFs0NSwgNDldLFxuXHRcdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0XHRiZ1llbGxvd0JyaWdodDogWzEwMywgNDldLFxuXHRcdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRcdGJnQ3lhbkJyaWdodDogWzEwNiwgNDldLFxuXHRcdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldXG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFsaWFzIGJyaWdodCBibGFjayBhcyBncmF5IChhbmQgZ3JleSlcblx0c3R5bGVzLmNvbG9yLmdyYXkgPSBzdHlsZXMuY29sb3IuYmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5iZ0NvbG9yLmJnR3JheSA9IHN0eWxlcy5iZ0NvbG9yLmJnQmxhY2tCcmlnaHQ7XG5cdHN0eWxlcy5jb2xvci5ncmV5ID0gc3R5bGVzLmNvbG9yLmJsYWNrQnJpZ2h0O1xuXHRzdHlsZXMuYmdDb2xvci5iZ0dyZXkgPSBzdHlsZXMuYmdDb2xvci5iZ0JsYWNrQnJpZ2h0O1xuXG5cdGZvciAoY29uc3QgW2dyb3VwTmFtZSwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlcykpIHtcblx0XHRmb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhncm91cCkpIHtcblx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0ge1xuXHRcdFx0XHRvcGVuOiBgXFx1MDAxQlske3N0eWxlWzBdfW1gLFxuXHRcdFx0XHRjbG9zZTogYFxcdTAwMUJbJHtzdHlsZVsxXX1tYFxuXHRcdFx0fTtcblxuXHRcdFx0Z3JvdXBbc3R5bGVOYW1lXSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuXG5cdFx0XHRjb2Rlcy5zZXQoc3R5bGVbMF0sIHN0eWxlWzFdKTtcblx0XHR9XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCBncm91cE5hbWUsIHtcblx0XHRcdHZhbHVlOiBncm91cCxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc3R5bGVzLCAnY29kZXMnLCB7XG5cdFx0dmFsdWU6IGNvZGVzLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlXG5cdH0pO1xuXG5cdHN0eWxlcy5jb2xvci5jbG9zZSA9ICdcXHUwMDFCWzM5bSc7XG5cdHN0eWxlcy5iZ0NvbG9yLmNsb3NlID0gJ1xcdTAwMUJbNDltJztcblxuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIGZhbHNlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuY29sb3IsICdhbnNpMjU2JywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kyNTYsICdhbnNpMjU2JywgYW5zaTJhbnNpLCBmYWxzZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaTE2bScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTZtLCAncmdiJywgcmdiMnJnYiwgZmFsc2UpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTYsICdhbnNpMTYnLCBhbnNpMmFuc2ksIHRydWUpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaTI1NicsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMjU2LCAnYW5zaTI1NicsIGFuc2kyYW5zaSwgdHJ1ZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmJnQ29sb3IsICdhbnNpMTZtJywgKCkgPT4gbWFrZUR5bmFtaWNTdHlsZXMod3JhcEFuc2kxNm0sICdyZ2InLCByZ2IycmdiLCB0cnVlKSk7XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuLy8gTWFrZSB0aGUgZXhwb3J0IGltbXV0YWJsZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGdldDogYXNzZW1ibGVTdHlsZXNcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZmxhZywgYXJndiA9IHByb2Nlc3MuYXJndikgPT4ge1xuXHRjb25zdCBwcmVmaXggPSBmbGFnLnN0YXJ0c1dpdGgoJy0nKSA/ICcnIDogKGZsYWcubGVuZ3RoID09PSAxID8gJy0nIDogJy0tJyk7XG5cdGNvbnN0IHBvc2l0aW9uID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXHRjb25zdCB0ZXJtaW5hdG9yUG9zaXRpb24gPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3NpdGlvbiAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3NpdGlvbiA9PT0gLTEgfHwgcG9zaXRpb24gPCB0ZXJtaW5hdG9yUG9zaXRpb24pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCB0dHkgPSByZXF1aXJlKCd0dHknKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCB7ZW52fSA9IHByb2Nlc3M7XG5cbmxldCBmb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1uZXZlcicpKSB7XG5cdGZvcmNlQ29sb3IgPSAwO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPXRydWUnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuXHRmb3JjZUNvbG9yID0gMTtcbn1cblxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG5cdGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICd0cnVlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAxO1xuXHR9IGVsc2UgaWYgKGVudi5GT1JDRV9DT0xPUiA9PT0gJ2ZhbHNlJykge1xuXHRcdGZvcmNlQ29sb3IgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWluKHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApLCAzKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuXHRpZiAobGV2ZWwgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxldmVsLFxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxuXHRcdGhhczI1NjogbGV2ZWwgPj0gMixcblx0XHRoYXMxNm06IGxldmVsID49IDNcblx0fTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihoYXZlU3RyZWFtLCBzdHJlYW1Jc1RUWSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9ZnVsbCcpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKGhhdmVTdHJlYW0gJiYgIXN0cmVhbUlzVFRZICYmIGZvcmNlQ29sb3IgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgbWluID0gZm9yY2VDb2xvciB8fCAwO1xuXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93cyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy5cblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cblx0XHRjb25zdCBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcblx0XHRpZiAoXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODZcblx0XHQpIHtcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuXHRcdH1cblxuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDSScgaW4gZW52KSB7XG5cdFx0aWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSScsICdHSVRIVUJfQUNUSU9OUycsICdCVUlMREtJVEUnXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtLCBzdHJlYW0gJiYgc3RyZWFtLmlzVFRZKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMSkpKSxcblx0c3RkZXJyOiB0cmFuc2xhdGVMZXZlbChzdXBwb3J0c0NvbG9yKHRydWUsIHR0eS5pc2F0dHkoMikpKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmluZ1JlcGxhY2VBbGwgPSAoc3RyaW5nLCBzdWJzdHJpbmcsIHJlcGxhY2VyKSA9PiB7XG5cdGxldCBpbmRleCA9IHN0cmluZy5pbmRleE9mKHN1YnN0cmluZyk7XG5cdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3Qgc3Vic3RyaW5nTGVuZ3RoID0gc3Vic3RyaW5nLmxlbmd0aDtcblx0bGV0IGVuZEluZGV4ID0gMDtcblx0bGV0IHJldHVyblZhbHVlID0gJyc7XG5cdGRvIHtcblx0XHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4LCBpbmRleCAtIGVuZEluZGV4KSArIHN1YnN0cmluZyArIHJlcGxhY2VyO1xuXHRcdGVuZEluZGV4ID0gaW5kZXggKyBzdWJzdHJpbmdMZW5ndGg7XG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihzdWJzdHJpbmcsIGVuZEluZGV4KTtcblx0fSB3aGlsZSAoaW5kZXggIT09IC0xKTtcblxuXHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4KTtcblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuY29uc3Qgc3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4ID0gKHN0cmluZywgcHJlZml4LCBwb3N0Zml4LCBpbmRleCkgPT4ge1xuXHRsZXQgZW5kSW5kZXggPSAwO1xuXHRsZXQgcmV0dXJuVmFsdWUgPSAnJztcblx0ZG8ge1xuXHRcdGNvbnN0IGdvdENSID0gc3RyaW5nW2luZGV4IC0gMV0gPT09ICdcXHInO1xuXHRcdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgsIChnb3RDUiA/IGluZGV4IC0gMSA6IGluZGV4KSAtIGVuZEluZGV4KSArIHByZWZpeCArIChnb3RDUiA/ICdcXHJcXG4nIDogJ1xcbicpICsgcG9zdGZpeDtcblx0XHRlbmRJbmRleCA9IGluZGV4ICsgMTtcblx0XHRpbmRleCA9IHN0cmluZy5pbmRleE9mKCdcXG4nLCBlbmRJbmRleCk7XG5cdH0gd2hpbGUgKGluZGV4ICE9PSAtMSk7XG5cblx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCk7XG5cdHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdHJpbmdSZXBsYWNlQWxsLFxuXHRzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXhcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuY29uc3QgVEVNUExBVEVfUkVHRVggPSAvKD86XFxcXCh1KD86W2EtZlxcZF17NH18XFx7W2EtZlxcZF17MSw2fVxcfSl8eFthLWZcXGRdezJ9fC4pKXwoPzpcXHsofik/KFxcdysoPzpcXChbXildKlxcKSk/KD86XFwuXFx3Kyg/OlxcKFteKV0qXFwpKT8pKikoPzpbIFxcdF18KD89XFxyP1xcbikpKXwoXFx9KXwoKD86LnxbXFxyXFxuXFxmXSkrPykvZ2k7XG5jb25zdCBTVFlMRV9SRUdFWCA9IC8oPzpefFxcLikoXFx3KykoPzpcXCgoW14pXSopXFwpKT8vZztcbmNvbnN0IFNUUklOR19SRUdFWCA9IC9eKFsnXCJdKSgoPzpcXFxcLnwoPyFcXDEpW15cXFxcXSkqKVxcMSQvO1xuY29uc3QgRVNDQVBFX1JFR0VYID0gL1xcXFwodSg/OlthLWZcXGRdezR9fHtbYS1mXFxkXXsxLDZ9fSl8eFthLWZcXGRdezJ9fC4pfChbXlxcXFxdKS9naTtcblxuY29uc3QgRVNDQVBFUyA9IG5ldyBNYXAoW1xuXHRbJ24nLCAnXFxuJ10sXG5cdFsncicsICdcXHInXSxcblx0Wyd0JywgJ1xcdCddLFxuXHRbJ2InLCAnXFxiJ10sXG5cdFsnZicsICdcXGYnXSxcblx0Wyd2JywgJ1xcdiddLFxuXHRbJzAnLCAnXFwwJ10sXG5cdFsnXFxcXCcsICdcXFxcJ10sXG5cdFsnZScsICdcXHUwMDFCJ10sXG5cdFsnYScsICdcXHUwMDA3J11cbl0pO1xuXG5mdW5jdGlvbiB1bmVzY2FwZShjKSB7XG5cdGNvbnN0IHUgPSBjWzBdID09PSAndSc7XG5cdGNvbnN0IGJyYWNrZXQgPSBjWzFdID09PSAneyc7XG5cblx0aWYgKCh1ICYmICFicmFja2V0ICYmIGMubGVuZ3RoID09PSA1KSB8fCAoY1swXSA9PT0gJ3gnICYmIGMubGVuZ3RoID09PSAzKSkge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGMuc2xpY2UoMSksIDE2KSk7XG5cdH1cblxuXHRpZiAodSAmJiBicmFja2V0KSB7XG5cdFx0cmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KHBhcnNlSW50KGMuc2xpY2UoMiwgLTEpLCAxNikpO1xuXHR9XG5cblx0cmV0dXJuIEVTQ0FQRVMuZ2V0KGMpIHx8IGM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKG5hbWUsIGFyZ3VtZW50c18pIHtcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRjb25zdCBjaHVua3MgPSBhcmd1bWVudHNfLnRyaW0oKS5zcGxpdCgvXFxzKixcXHMqL2cpO1xuXHRsZXQgbWF0Y2hlcztcblxuXHRmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuXHRcdGNvbnN0IG51bWJlciA9IE51bWJlcihjaHVuayk7XG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4obnVtYmVyKSkge1xuXHRcdFx0cmVzdWx0cy5wdXNoKG51bWJlcik7XG5cdFx0fSBlbHNlIGlmICgobWF0Y2hlcyA9IGNodW5rLm1hdGNoKFNUUklOR19SRUdFWCkpKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2gobWF0Y2hlc1syXS5yZXBsYWNlKEVTQ0FQRV9SRUdFWCwgKG0sIGVzY2FwZSwgY2hhcmFjdGVyKSA9PiBlc2NhcGUgPyB1bmVzY2FwZShlc2NhcGUpIDogY2hhcmFjdGVyKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBDaGFsayB0ZW1wbGF0ZSBzdHlsZSBhcmd1bWVudDogJHtjaHVua30gKGluIHN0eWxlICcke25hbWV9JylgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZShzdHlsZSkge1xuXHRTVFlMRV9SRUdFWC5sYXN0SW5kZXggPSAwO1xuXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0bGV0IG1hdGNoZXM7XG5cblx0d2hpbGUgKChtYXRjaGVzID0gU1RZTEVfUkVHRVguZXhlYyhzdHlsZSkpICE9PSBudWxsKSB7XG5cdFx0Y29uc3QgbmFtZSA9IG1hdGNoZXNbMV07XG5cblx0XHRpZiAobWF0Y2hlc1syXSkge1xuXHRcdFx0Y29uc3QgYXJncyA9IHBhcnNlQXJndW1lbnRzKG5hbWUsIG1hdGNoZXNbMl0pO1xuXHRcdFx0cmVzdWx0cy5wdXNoKFtuYW1lXS5jb25jYXQoYXJncykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKSB7XG5cdGNvbnN0IGVuYWJsZWQgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGxheWVyIG9mIHN0eWxlcykge1xuXHRcdGZvciAoY29uc3Qgc3R5bGUgb2YgbGF5ZXIuc3R5bGVzKSB7XG5cdFx0XHRlbmFibGVkW3N0eWxlWzBdXSA9IGxheWVyLmludmVyc2UgPyBudWxsIDogc3R5bGUuc2xpY2UoMSk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGN1cnJlbnQgPSBjaGFsaztcblx0Zm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZXNdIG9mIE9iamVjdC5lbnRyaWVzKGVuYWJsZWQpKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghKHN0eWxlTmFtZSBpbiBjdXJyZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIENoYWxrIHN0eWxlOiAke3N0eWxlTmFtZX1gKTtcblx0XHR9XG5cblx0XHRjdXJyZW50ID0gc3R5bGVzLmxlbmd0aCA+IDAgPyBjdXJyZW50W3N0eWxlTmFtZV0oLi4uc3R5bGVzKSA6IGN1cnJlbnRbc3R5bGVOYW1lXTtcblx0fVxuXG5cdHJldHVybiBjdXJyZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IChjaGFsaywgdGVtcG9yYXJ5KSA9PiB7XG5cdGNvbnN0IHN0eWxlcyA9IFtdO1xuXHRjb25zdCBjaHVua3MgPSBbXTtcblx0bGV0IGNodW5rID0gW107XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblx0dGVtcG9yYXJ5LnJlcGxhY2UoVEVNUExBVEVfUkVHRVgsIChtLCBlc2NhcGVDaGFyYWN0ZXIsIGludmVyc2UsIHN0eWxlLCBjbG9zZSwgY2hhcmFjdGVyKSA9PiB7XG5cdFx0aWYgKGVzY2FwZUNoYXJhY3Rlcikge1xuXHRcdFx0Y2h1bmsucHVzaCh1bmVzY2FwZShlc2NhcGVDaGFyYWN0ZXIpKTtcblx0XHR9IGVsc2UgaWYgKHN0eWxlKSB7XG5cdFx0XHRjb25zdCBzdHJpbmcgPSBjaHVuay5qb2luKCcnKTtcblx0XHRcdGNodW5rID0gW107XG5cdFx0XHRjaHVua3MucHVzaChzdHlsZXMubGVuZ3RoID09PSAwID8gc3RyaW5nIDogYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKShzdHJpbmcpKTtcblx0XHRcdHN0eWxlcy5wdXNoKHtpbnZlcnNlLCBzdHlsZXM6IHBhcnNlU3R5bGUoc3R5bGUpfSk7XG5cdFx0fSBlbHNlIGlmIChjbG9zZSkge1xuXHRcdFx0aWYgKHN0eWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGb3VuZCBleHRyYW5lb3VzIH0gaW4gQ2hhbGsgdGVtcGxhdGUgbGl0ZXJhbCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRjaHVua3MucHVzaChidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpKGNodW5rLmpvaW4oJycpKSk7XG5cdFx0XHRjaHVuayA9IFtdO1xuXHRcdFx0c3R5bGVzLnBvcCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaHVuay5wdXNoKGNoYXJhY3Rlcik7XG5cdFx0fVxuXHR9KTtcblxuXHRjaHVua3MucHVzaChjaHVuay5qb2luKCcnKSk7XG5cblx0aWYgKHN0eWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0Y29uc3QgZXJyTWVzc2FnZSA9IGBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsIGlzIG1pc3NpbmcgJHtzdHlsZXMubGVuZ3RofSBjbG9zaW5nIGJyYWNrZXQke3N0eWxlcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gKFxcYH1cXGApYDtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyTWVzc2FnZSk7XG5cdH1cblxuXHRyZXR1cm4gY2h1bmtzLmpvaW4oJycpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBhbnNpU3R5bGVzID0gcmVxdWlyZSgnYW5zaS1zdHlsZXMnKTtcbmNvbnN0IHtzdGRvdXQ6IHN0ZG91dENvbG9yLCBzdGRlcnI6IHN0ZGVyckNvbG9yfSA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG5jb25zdCB7XG5cdHN0cmluZ1JlcGxhY2VBbGwsXG5cdHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleFxufSA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcblxuLy8gYHN1cHBvcnRzQ29sb3IubGV2ZWxgIFx1MjE5MiBgYW5zaVN0eWxlcy5jb2xvcltuYW1lXWAgbWFwcGluZ1xuY29uc3QgbGV2ZWxNYXBwaW5nID0gW1xuXHQnYW5zaScsXG5cdCdhbnNpJyxcblx0J2Fuc2kyNTYnLFxuXHQnYW5zaTE2bSdcbl07XG5cbmNvbnN0IHN0eWxlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmNvbnN0IGFwcGx5T3B0aW9ucyA9IChvYmplY3QsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRpZiAob3B0aW9ucy5sZXZlbCAmJiAhKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5sZXZlbCkgJiYgb3B0aW9ucy5sZXZlbCA+PSAwICYmIG9wdGlvbnMubGV2ZWwgPD0gMykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgbGV2ZWxgIG9wdGlvbiBzaG91bGQgYmUgYW4gaW50ZWdlciBmcm9tIDAgdG8gMycpO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IGxldmVsIGlmIG5vdCBzZXQgbWFudWFsbHlcblx0Y29uc3QgY29sb3JMZXZlbCA9IHN0ZG91dENvbG9yID8gc3Rkb3V0Q29sb3IubGV2ZWwgOiAwO1xuXHRvYmplY3QubGV2ZWwgPSBvcHRpb25zLmxldmVsID09PSB1bmRlZmluZWQgPyBjb2xvckxldmVsIDogb3B0aW9ucy5sZXZlbDtcbn07XG5cbmNsYXNzIENoYWxrQ2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuXHRcdHJldHVybiBjaGFsa0ZhY3Rvcnkob3B0aW9ucyk7XG5cdH1cbn1cblxuY29uc3QgY2hhbGtGYWN0b3J5ID0gb3B0aW9ucyA9PiB7XG5cdGNvbnN0IGNoYWxrID0ge307XG5cdGFwcGx5T3B0aW9ucyhjaGFsaywgb3B0aW9ucyk7XG5cblx0Y2hhbGsudGVtcGxhdGUgPSAoLi4uYXJndW1lbnRzXykgPT4gY2hhbGtUYWcoY2hhbGsudGVtcGxhdGUsIC4uLmFyZ3VtZW50c18pO1xuXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFsaywgQ2hhbGsucHJvdG90eXBlKTtcblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLnRlbXBsYXRlLCBjaGFsayk7XG5cblx0Y2hhbGsudGVtcGxhdGUuY29uc3RydWN0b3IgPSAoKSA9PiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdgY2hhbGsuY29uc3RydWN0b3IoKWAgaXMgZGVwcmVjYXRlZC4gVXNlIGBuZXcgY2hhbGsuSW5zdGFuY2UoKWAgaW5zdGVhZC4nKTtcblx0fTtcblxuXHRjaGFsay50ZW1wbGF0ZS5JbnN0YW5jZSA9IENoYWxrQ2xhc3M7XG5cblx0cmV0dXJuIGNoYWxrLnRlbXBsYXRlO1xufTtcblxuZnVuY3Rpb24gQ2hhbGsob3B0aW9ucykge1xuXHRyZXR1cm4gY2hhbGtGYWN0b3J5KG9wdGlvbnMpO1xufVxuXG5mb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhhbnNpU3R5bGVzKSkge1xuXHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCBidWlsZGVyID0gY3JlYXRlQnVpbGRlcih0aGlzLCBjcmVhdGVTdHlsZXIoc3R5bGUub3Blbiwgc3R5bGUuY2xvc2UsIHRoaXMuX3N0eWxlciksIHRoaXMuX2lzRW1wdHkpO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHN0eWxlTmFtZSwge3ZhbHVlOiBidWlsZGVyfSk7XG5cdFx0XHRyZXR1cm4gYnVpbGRlcjtcblx0XHR9XG5cdH07XG59XG5cbnN0eWxlcy52aXNpYmxlID0ge1xuXHRnZXQoKSB7XG5cdFx0Y29uc3QgYnVpbGRlciA9IGNyZWF0ZUJ1aWxkZXIodGhpcywgdGhpcy5fc3R5bGVyLCB0cnVlKTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Zpc2libGUnLCB7dmFsdWU6IGJ1aWxkZXJ9KTtcblx0XHRyZXR1cm4gYnVpbGRlcjtcblx0fVxufTtcblxuY29uc3QgdXNlZE1vZGVscyA9IFsncmdiJywgJ2hleCcsICdrZXl3b3JkJywgJ2hzbCcsICdoc3YnLCAnaHdiJywgJ2Fuc2knLCAnYW5zaTI1NiddO1xuXG5mb3IgKGNvbnN0IG1vZGVsIG9mIHVzZWRNb2RlbHMpIHtcblx0c3R5bGVzW21vZGVsXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCB7bGV2ZWx9ID0gdGhpcztcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRcdFx0XHRjb25zdCBzdHlsZXIgPSBjcmVhdGVTdHlsZXIoYW5zaVN0eWxlcy5jb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0oLi4uYXJndW1lbnRzXyksIGFuc2lTdHlsZXMuY29sb3IuY2xvc2UsIHRoaXMuX3N0eWxlcik7XG5cdFx0XHRcdHJldHVybiBjcmVhdGVCdWlsZGVyKHRoaXMsIHN0eWxlciwgdGhpcy5faXNFbXB0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cblxuZm9yIChjb25zdCBtb2RlbCBvZiB1c2VkTW9kZWxzKSB7XG5cdGNvbnN0IGJnTW9kZWwgPSAnYmcnICsgbW9kZWxbMF0udG9VcHBlckNhc2UoKSArIG1vZGVsLnNsaWNlKDEpO1xuXHRzdHlsZXNbYmdNb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3Qge2xldmVsfSA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0XHRcdFx0Y29uc3Qgc3R5bGVyID0gY3JlYXRlU3R5bGVyKGFuc2lTdHlsZXMuYmdDb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0oLi4uYXJndW1lbnRzXyksIGFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZSwgdGhpcy5fc3R5bGVyKTtcblx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJ1aWxkZXIodGhpcywgc3R5bGVyLCB0aGlzLl9pc0VtcHR5KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBwcm90byA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCgpID0+IHt9LCB7XG5cdC4uLnN0eWxlcyxcblx0bGV2ZWw6IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZW5lcmF0b3IubGV2ZWw7XG5cdFx0fSxcblx0XHRzZXQobGV2ZWwpIHtcblx0XHRcdHRoaXMuX2dlbmVyYXRvci5sZXZlbCA9IGxldmVsO1xuXHRcdH1cblx0fVxufSk7XG5cbmNvbnN0IGNyZWF0ZVN0eWxlciA9IChvcGVuLCBjbG9zZSwgcGFyZW50KSA9PiB7XG5cdGxldCBvcGVuQWxsO1xuXHRsZXQgY2xvc2VBbGw7XG5cdGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wZW5BbGwgPSBvcGVuO1xuXHRcdGNsb3NlQWxsID0gY2xvc2U7XG5cdH0gZWxzZSB7XG5cdFx0b3BlbkFsbCA9IHBhcmVudC5vcGVuQWxsICsgb3Blbjtcblx0XHRjbG9zZUFsbCA9IGNsb3NlICsgcGFyZW50LmNsb3NlQWxsO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRvcGVuLFxuXHRcdGNsb3NlLFxuXHRcdG9wZW5BbGwsXG5cdFx0Y2xvc2VBbGwsXG5cdFx0cGFyZW50XG5cdH07XG59O1xuXG5jb25zdCBjcmVhdGVCdWlsZGVyID0gKHNlbGYsIF9zdHlsZXIsIF9pc0VtcHR5KSA9PiB7XG5cdGNvbnN0IGJ1aWxkZXIgPSAoLi4uYXJndW1lbnRzXykgPT4ge1xuXHRcdGlmIChpc0FycmF5KGFyZ3VtZW50c19bMF0pICYmIGlzQXJyYXkoYXJndW1lbnRzX1swXS5yYXcpKSB7XG5cdFx0XHQvLyBDYWxsZWQgYXMgYSB0ZW1wbGF0ZSBsaXRlcmFsLCBmb3IgZXhhbXBsZTogY2hhbGsucmVkYDIgKyAzID0ge2JvbGQgJHsyKzN9fWBcblx0XHRcdHJldHVybiBhcHBseVN0eWxlKGJ1aWxkZXIsIGNoYWxrVGFnKGJ1aWxkZXIsIC4uLmFyZ3VtZW50c18pKTtcblx0XHR9XG5cblx0XHQvLyBTaW5nbGUgYXJndW1lbnQgaXMgaG90IHBhdGgsIGltcGxpY2l0IGNvZXJjaW9uIGlzIGZhc3RlciB0aGFuIGFueXRoaW5nXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0cmV0dXJuIGFwcGx5U3R5bGUoYnVpbGRlciwgKGFyZ3VtZW50c18ubGVuZ3RoID09PSAxKSA/ICgnJyArIGFyZ3VtZW50c19bMF0pIDogYXJndW1lbnRzXy5qb2luKCcgJykpO1xuXHR9O1xuXG5cdC8vIFdlIGFsdGVyIHRoZSBwcm90b3R5cGUgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcblx0Ly8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihidWlsZGVyLCBwcm90byk7XG5cblx0YnVpbGRlci5fZ2VuZXJhdG9yID0gc2VsZjtcblx0YnVpbGRlci5fc3R5bGVyID0gX3N0eWxlcjtcblx0YnVpbGRlci5faXNFbXB0eSA9IF9pc0VtcHR5O1xuXG5cdHJldHVybiBidWlsZGVyO1xufTtcblxuY29uc3QgYXBwbHlTdHlsZSA9IChzZWxmLCBzdHJpbmcpID0+IHtcblx0aWYgKHNlbGYubGV2ZWwgPD0gMCB8fCAhc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHNlbGYuX2lzRW1wdHkgPyAnJyA6IHN0cmluZztcblx0fVxuXG5cdGxldCBzdHlsZXIgPSBzZWxmLl9zdHlsZXI7XG5cblx0aWYgKHN0eWxlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHtvcGVuQWxsLCBjbG9zZUFsbH0gPSBzdHlsZXI7XG5cdGlmIChzdHJpbmcuaW5kZXhPZignXFx1MDAxQicpICE9PSAtMSkge1xuXHRcdHdoaWxlIChzdHlsZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gUmVwbGFjZSBhbnkgaW5zdGFuY2VzIGFscmVhZHkgcHJlc2VudCB3aXRoIGEgcmUtb3BlbmluZyBjb2RlXG5cdFx0XHQvLyBvdGhlcndpc2Ugb25seSB0aGUgcGFydCBvZiB0aGUgc3RyaW5nIHVudGlsIHNhaWQgY2xvc2luZyBjb2RlXG5cdFx0XHQvLyB3aWxsIGJlIGNvbG9yZWQsIGFuZCB0aGUgcmVzdCB3aWxsIHNpbXBseSBiZSAncGxhaW4nLlxuXHRcdFx0c3RyaW5nID0gc3RyaW5nUmVwbGFjZUFsbChzdHJpbmcsIHN0eWxlci5jbG9zZSwgc3R5bGVyLm9wZW4pO1xuXG5cdFx0XHRzdHlsZXIgPSBzdHlsZXIucGFyZW50O1xuXHRcdH1cblx0fVxuXG5cdC8vIFdlIGNhbiBtb3ZlIGJvdGggbmV4dCBhY3Rpb25zIG91dCBvZiBsb29wLCBiZWNhdXNlIHJlbWFpbmluZyBhY3Rpb25zIGluIGxvb3Agd29uJ3QgaGF2ZVxuXHQvLyBhbnkvdmlzaWJsZSBlZmZlY3Qgb24gcGFydHMgd2UgYWRkIGhlcmUuIENsb3NlIHRoZSBzdHlsaW5nIGJlZm9yZSBhIGxpbmVicmVhayBhbmQgcmVvcGVuXG5cdC8vIGFmdGVyIG5leHQgbGluZSB0byBmaXggYSBibGVlZCBpc3N1ZSBvbiBtYWNPUzogaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2NoYWxrL3B1bGwvOTJcblx0Y29uc3QgbGZJbmRleCA9IHN0cmluZy5pbmRleE9mKCdcXG4nKTtcblx0aWYgKGxmSW5kZXggIT09IC0xKSB7XG5cdFx0c3RyaW5nID0gc3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4KHN0cmluZywgY2xvc2VBbGwsIG9wZW5BbGwsIGxmSW5kZXgpO1xuXHR9XG5cblx0cmV0dXJuIG9wZW5BbGwgKyBzdHJpbmcgKyBjbG9zZUFsbDtcbn07XG5cbmxldCB0ZW1wbGF0ZTtcbmNvbnN0IGNoYWxrVGFnID0gKGNoYWxrLCAuLi5zdHJpbmdzKSA9PiB7XG5cdGNvbnN0IFtmaXJzdFN0cmluZ10gPSBzdHJpbmdzO1xuXG5cdGlmICghaXNBcnJheShmaXJzdFN0cmluZykgfHwgIWlzQXJyYXkoZmlyc3RTdHJpbmcucmF3KSkge1xuXHRcdC8vIElmIGNoYWxrKCkgd2FzIGNhbGxlZCBieSBpdHNlbGYgb3Igd2l0aCBhIHN0cmluZyxcblx0XHQvLyByZXR1cm4gdGhlIHN0cmluZyBpdHNlbGYgYXMgYSBzdHJpbmcuXG5cdFx0cmV0dXJuIHN0cmluZ3Muam9pbignICcpO1xuXHR9XG5cblx0Y29uc3QgYXJndW1lbnRzXyA9IHN0cmluZ3Muc2xpY2UoMSk7XG5cdGNvbnN0IHBhcnRzID0gW2ZpcnN0U3RyaW5nLnJhd1swXV07XG5cblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBmaXJzdFN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdHBhcnRzLnB1c2goXG5cdFx0XHRTdHJpbmcoYXJndW1lbnRzX1tpIC0gMV0pLnJlcGxhY2UoL1t7fVxcXFxdL2csICdcXFxcJCYnKSxcblx0XHRcdFN0cmluZyhmaXJzdFN0cmluZy5yYXdbaV0pXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXHR9XG5cblx0cmV0dXJuIHRlbXBsYXRlKGNoYWxrLCBwYXJ0cy5qb2luKCcnKSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDaGFsay5wcm90b3R5cGUsIHN0eWxlcyk7XG5cbmNvbnN0IGNoYWxrID0gQ2hhbGsoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5jaGFsay5zdXBwb3J0c0NvbG9yID0gc3Rkb3V0Q29sb3I7XG5jaGFsay5zdGRlcnIgPSBDaGFsayh7bGV2ZWw6IHN0ZGVyckNvbG9yID8gc3RkZXJyQ29sb3IubGV2ZWwgOiAwfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuY2hhbGsuc3RkZXJyLnN1cHBvcnRzQ29sb3IgPSBzdGRlcnJDb2xvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFsaztcbiIsICJpbXBvcnQgQ2xpVGFibGUzIGZyb20gJ2NsaS10YWJsZTMnO1xuXG5pbXBvcnQgeyBydW5Db21tYW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgU2ltdWxhdG9yRGV2aWNlIHtcbiAgbGFzdEJvb3RlZEF0OiBzdHJpbmc7XG4gIGRhdGFQYXRoOiBzdHJpbmc7XG4gIGRhdGFQYXRoU2l6ZTogbnVtYmVyO1xuICBsb2dQYXRoOiBzdHJpbmc7XG4gIHVkaWQ6IHN0cmluZztcbiAgaXNBdmFpbGFibGU6IGJvb2xlYW47XG4gIGxvZ1BhdGhTaXplOiBudW1iZXI7XG4gIGRldmljZVR5cGVJZGVudGlmaWVyOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3Qgc2hvd0RldmljZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRhYmxlRGV2aWNlcyA9IG5ldyBDbGlUYWJsZTMoe1xuICAgIGhlYWQ6IFsnVVVJRCcsICdOYW1lJywgJ1N0YXRlJywgJ1ZlcnNpb24gT1MnXSxcbiAgICBjb2xXaWR0aHM6IFs0MCwgNTAsIDE1XVxuICB9KTtcblxuICAvLyBsaXN0IGRldmljZXNcbiAgY29uc3QgY29tbWFuZCA9ICd4Y3J1biBzaW1jdGwgbGlzdCBkZXZpY2VzIC0tanNvbic7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBydW5Db21tYW5kKGNvbW1hbmQpO1xuXG4gICAgaWYgKHN0ZGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIHN0YW5kYXJkIG91dHB1dDogJHtzdGRlcnJ9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc3Rkb3V0KTtcblxuICAgIGNvbnN0IGRldmljZXMgPSBPYmplY3Qua2V5cyhkYXRhWydkZXZpY2VzJ10pXG4gICAgICAubWFwKHJ1bnRpbWUgPT4ge1xuICAgICAgICBjb25zdCB2ZXJzaW9uID0gcnVudGltZS5zcGxpdCgnU2ltUnVudGltZScpWzFdLnNwbGl0KCctJyk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGFbJ2RldmljZXMnXVtydW50aW1lXS5tYXAoKGRldmljZTogU2ltdWxhdG9yRGV2aWNlKSA9PiAoe1xuICAgICAgICAgIC4uLmRldmljZSxcbiAgICAgICAgICB2ZXJzaW9uT1M6IGAke3ZlcnNpb25bMV19LiR7dmVyc2lvblsyXX1gXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgICAuZmxhdCgpXG4gICAgICAuZmlsdGVyKChpdGVtOiBTaW11bGF0b3JEZXZpY2UpID0+IGl0ZW0uaXNBdmFpbGFibGUpO1xuXG4gICAgZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gYFx1RDgzRFx1RENGMSAke2RldmljZS5uYW1lfWA7XG4gICAgICBjb25zdCBzaG93U3RhdGUgPSBkZXZpY2Uuc3RhdGUgPT09ICdCb290ZWQnID8gJ1x1MjcwNScgOiAnXHUyNzRDJztcbiAgICAgIHRhYmxlRGV2aWNlcy5wdXNoKFtkZXZpY2UudWRpZCwgbmFtZSwgYCR7c2hvd1N0YXRlfSAke2RldmljZS5zdGF0ZX1gLCBkZXZpY2UudmVyc2lvbk9TXSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyh0YWJsZURldmljZXMudG9TdHJpbmcoKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJ1bm5pbmcgY29tbWFuZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBydW5uaW5nIGNvbW1hbmQ6ICR7ZXJyb3J9YCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBzaG93RGV2aWNlcyB9O1xuIiwgImltcG9ydCB7IGV4ZWMgYXMgZXhlY0NhbGxiYWNrIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5Db21tYW5kKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8eyBzdGRvdXQ6IHN0cmluZzsgc3RkZXJyOiBzdHJpbmcgfT4ge1xuICBjb25zdCBleGVjID0gcHJvbWlzaWZ5KGV4ZWNDYWxsYmFjayk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNvbW1hbmQpO1xuICAgIHJldHVybiB7IHN0ZG91dCwgc3RkZXJyIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZXhlY3V0aW5nIGNvbW1hbmQgXCIke2NvbW1hbmR9XCI6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBleGVjdXRpbmcgY29tbWFuZCBcIiR7Y29tbWFuZH1cIjogJHtlcnJvcn1gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRVVUlEKHV1aWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1dWlkUGF0dGVybiA9IG5ldyBSZWdFeHAoL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaSk7XG4gIHJldHVybiB1dWlkUGF0dGVybi50ZXN0KHV1aWQpO1xufVxuXG50eXBlIE9TID0gJ1dpbmRvd3NfTlQnIHwgJ0xpbnV4JyB8ICdEYXJ3aW4nO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3VycmVudE9TKCk6IHZvaWQge1xuICBjb25zdCBjdXJyZW50T1MgPSBvcy50eXBlKCk7XG5cbiAgY29uc3QgT1NTOiBSZWNvcmQ8T1MsIHN0cmluZz4gPSB7XG4gICAgV2luZG93c19OVDogJ1x1RDgzRFx1RERBNSBDdXJyZW50IE9TOiBXaW5kb3dzJyxcbiAgICBMaW51eDogJ1x1RDgzRFx1REMyNyBDdXJyZW50IE9TOiBMaW51eC5jaGFuZ2UnLFxuICAgIERhcndpbjogJ1x1RDgzQ1x1REY0RSBDdXJyZW50IE9TOiBNYWNPUy5jaGFuZ2UxMTExMidcbiAgfTtcblxuICBjb25zb2xlLmxvZyhPU1NbY3VycmVudE9TIGFzIE9TXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUlmQ2FuVXNlSU9TKCk6IGJvb2xlYW4ge1xuICBjb25zdCBjdXJyZW50T1MgPSBvcy50eXBlKCk7XG5cbiAgaWYgKGN1cnJlbnRPUyA9PT0gJ1dpbmRvd3NfTlQnKSB7XG4gICAgY29uc29sZS5sb2coJ1x1RDgzRFx1REVBQiBFcnJvcjogWW91IGNhbm5vdCB1c2UgaU9TIGNvbW1hbmRzIG9uIFdpbmRvd3MuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRPUyA9PT0gJ0xpbnV4Jykge1xuICAgIGNvbnNvbGUubG9nKCdcdUQ4M0RcdURFQUIgRXJyb3I6IFlvdSBjYW5ub3QgdXNlIGlPUyBjb21tYW5kcyBvbiBMaW51eC4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERlZmF1bHRQbGF0Zm9ybShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY3VycmVudE9TID0gb3MudHlwZSgpO1xuXG4gIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgYW5kcm9pZDogJ2FuZHJvaWQnLFxuICAgIGlvczogJ2lvcydcbiAgfTtcblxuICBpZiAob3B0aW9uc1twYXJhbV0pIHtcbiAgICByZXR1cm4gb3B0aW9uc1twYXJhbV07XG4gIH1cblxuICByZXR1cm4gY3VycmVudE9TID09PSAnRGFyd2luJyA/ICdpb3MnIDogJ2FuZHJvaWQnO1xufVxuIiwgImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBydW5Db21tYW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBvcGVuU2ltdWxhdG9yID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBvcGVuU2ltdWxhdG9yQ29tbWFuZCA9ICdvcGVuIC1hIFNpbXVsYXRvcic7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0ZGVyciB9ID0gYXdhaXQgcnVuQ29tbWFuZChvcGVuU2ltdWxhdG9yQ29tbWFuZCk7XG5cbiAgICBpZiAoc3RkZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gc3RhbmRhcmQgb3V0cHV0OiAke3N0ZGVycn1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnXHUyNzA1IEVtdWxhdG9yIG9wZW5lZCBzdWNjZXNzZnVsbHkuJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJ1bm5pbmcgY29tbWFuZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBydW5uaW5nIGNvbW1hbmQ6ICR7ZXJyb3J9YCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBjaGVjayBpZiBlbXVsYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcbi8vIGlmIG5vdCwgcnVuIGl0XG5jb25zdCBjaGVja0lmU2ltdWxhdG9ySXNSdW5uaW5nID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3BncmVwIC14IFNpbXVsYXRvcic7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBydW5Db21tYW5kKGNvbW1hbmQpO1xuICAgIGlmIChzdGRlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChgRXJyb3IgaW4gY29tbWFuZCBvdXRwdXQ6ICR7c3RkZXJyfWApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3Rkb3V0LnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTaW11bGF0b3IgaXMgbm90IHJ1bm5pbmcnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnU2ltdWxhdG9yIGlzIHJ1bm5pbmcnKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoYEVycm9yIHJ1bm5pbmcgY29tbWFuZDogJHtlcnJvci5tZXNzYWdlfWApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkKGBFcnJvciBydW5uaW5nIGNvbW1hbmQ6ICR7ZXJyb3J9YCkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgYW55IGlPUyBlbXVsYXRvciBpcyBydW5uaW5nXG5jb25zdCBpc0lPU0VtdWxhdG9yUnVubmluZyA9IChkZXZpY2U6IHN0cmluZykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGV4ZWMoJ3hjcnVuIHNpbWN0bCBsaXN0JywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBleGVjIGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsaW5lcyA9IHN0ZG91dC5zcGxpdCgnXFxuJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsaW5lcywgbnVsbCwgMikpO1xuICAgICAgY29uc3QgaXNSdW5uaW5nID0gbGluZXMuc29tZShsaW5lID0+IGxpbmUuaW5jbHVkZXMoJyhCb290ZWQpJykpO1xuICAgICAgLy8gVE9ETzogY2hlY2sgaWYgc3BlY2lmaWMgZGV2aWNlIGlzIHJ1bm5pbmdcbiAgICAgIGNvbnN0IHNwZWNpZmljRGV2aWNlID0gbGluZXMuc29tZShsaW5lID0+IGxpbmUuaW5jbHVkZXMoYCgke2RldmljZX0pIChCb290ZWQpYCkpO1xuICAgICAgaWYgKGRldmljZSkge1xuICAgICAgICByZXNvbHZlKHNwZWNpZmljRGV2aWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoaXNSdW5uaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGVuRGV2aWNlID0gYXN5bmMgKGRldmljZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSBgeGNydW4gc2ltY3RsIGJvb3QgJHtkZXZpY2V9YDtcblxuICB0cnkge1xuICAgIC8vIHZhbGlkYXRlIGlmIGRldmljZSBpcyBhbHJlYWR5IHJ1bm5pbmdcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpc0lPU0VtdWxhdG9yUnVubmluZyhkZXZpY2UpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBbiBpT1MgZW11bGF0b3IgaXMgYWxyZWFkeSBydW5uaW5nLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3RkZXJyIH0gPSBhd2FpdCBydW5Db21tYW5kKGNvbW1hbmQpO1xuXG4gICAgaWYgKHN0ZGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZW4gbGEgc2FsaWRhIGVzdFx1MDBFMW5kYXI6ICR7c3RkZXJyfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBFbXVsYWRvciBpbmljaWFkbyBjb24gXHUwMEU5eGl0byBwYXJhIGVsIGRpc3Bvc2l0aXZvICR7ZGV2aWNlfWApO1xuXG4gICAgY29uc3QgaXNSdW5uaW5nID0gYXdhaXQgY2hlY2tJZlNpbXVsYXRvcklzUnVubmluZygpO1xuICAgIGlmIChpc1J1bm5pbmcpIHJldHVybjtcblxuICAgIGF3YWl0IG9wZW5TaW11bGF0b3IoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcnVubmluZyBjb21tYW5kOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJ1bm5pbmcgY29tbWFuZDogJHtlcnJvcn1gKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IG9wZW5EZXZpY2UgfTtcbiIsICJpbXBvcnQgeyBydW5Db21tYW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBjaGVja0lmRW11bGF0b3JJc1J1bm5pbmcgPSBhc3luYyAoVVVJRDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSBgeGNydW4gc2ltY3RsIGxpc3QgfCBncmVwIC13IFwiJHtVVUlEfVwiIHwgZ3JlcCAtdyBcIkJvb3RlZFwiYDtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IHJ1bkNvbW1hbmQoY29tbWFuZCk7XG5cbiAgICBpZiAoc3RkZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gc3RhbmRhcmQgb3V0cHV0OiAke3N0ZGVycn1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3Rkb3V0LnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTaW11bGF0b3IgaXMgbm90IHJ1bm5pbmcnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgVGhlIGRldmljZSB3aXRoIFVVSUQgJHtVVUlEfSBpcyBydW5uaW5nYCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcnVubmluZyBjb21tYW5kOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJ1bm5pbmcgY29tbWFuZDogJHtlcnJvcn1gKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNsb3NlQXBwU2ltdWxhdG9yID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjbG9zZVNpbXVsYXRvckNvbW1hbmQgPSAnb3Nhc2NyaXB0IC1lIFxcJ3RlbGwgYXBwbGljYXRpb24gXCJTaW11bGF0b3JcIiB0byBxdWl0XFwnJztcblxuICB0cnkge1xuICAgIGNvbnN0IHsgc3RkZXJyIH0gPSBhd2FpdCBydW5Db21tYW5kKGNsb3NlU2ltdWxhdG9yQ29tbWFuZCk7XG5cbiAgICBpZiAoc3RkZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gc3RhbmRhcmQgb3V0cHV0OiAke3N0ZGVycn1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnXHUyNzA1IFNpbXVsYXRvciBhcHBsaWNhdGlvbiBjbG9zZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBydW5uaW5nIGNvbW1hbmQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcnVubmluZyBjb21tYW5kOiAke2Vycm9yfWApO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY2xvc2VFbXVsYXRvciA9IGFzeW5jIChVVUlEOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgaXNFbXVsYXRvclJ1bm5pbmcgPSBhd2FpdCBjaGVja0lmRW11bGF0b3JJc1J1bm5pbmcoVVVJRCk7XG5cbiAgaWYgKCFpc0VtdWxhdG9yUnVubmluZykge1xuICAgIGNvbnNvbGUubG9nKGBUaGUgZGV2aWNlIHdpdGggVVVJRCAke1VVSUR9IGlzIG5vdCBydW5uaW5nYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2h1dGRvd25Db21tYW5kID0gYHhjcnVuIHNpbWN0bCBzaHV0ZG93biAke1VVSUR9YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgc3RkZXJyIH0gPSBhd2FpdCBydW5Db21tYW5kKHNodXRkb3duQ29tbWFuZCk7XG4gICAgaWYgKHN0ZGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZW4gbGEgc2FsaWRhIGVzdFx1MDBFMW5kYXI6ICR7c3RkZXJyfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IGNsb3NlQXBwU2ltdWxhdG9yKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgXHUyNzA1IEVtdWxhdG9yIGNsb3NlZCBzdWNjZXNzZnVsbHkgZm9yIGRldmljZSAke1VVSUR9YCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJ1bm5pbmcgY29tbWFuZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBydW5uaW5nIGNvbW1hbmQ6ICR7ZXJyb3J9YCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBjbG9zZUVtdWxhdG9yIH07XG4iLCAiaW1wb3J0IHsgcnVuQ29tbWFuZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGNsb3NlRW11bGF0b3IgfSBmcm9tICcuL3NodXRkb3duRW11bGF0b3InO1xuXG5jb25zdCByZXNldEVtdWxhdG9yID0gYXN5bmMgKFVVSUQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBlcmFzZUNvbW1hbmQgPSBgeGNydW4gc2ltY3RsIGVyYXNlICR7VVVJRH1gO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgY2xvc2VFbXVsYXRvcihVVUlEKTtcblxuICAgIGNvbnN0IHsgc3RkZXJyIH0gPSBhd2FpdCBydW5Db21tYW5kKGVyYXNlQ29tbWFuZCk7XG5cbiAgICBpZiAoc3RkZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVzZXR0aW5nIGVtdWxhdG9yOiAke3N0ZGVycn1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgXHUyNzA1IEVtdWxhdG9yIHJlc3RhcnRlZCBzdWNjZXNzZnVsbHkgZm9yIGRldmljZSAke1VVSUR9YCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJ1bm5pbmcgY29tbWFuZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBydW5uaW5nIGNvbW1hbmQ6ICR7ZXJyb3J9YCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyByZXNldEVtdWxhdG9yIH07XG4iLCAiaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5jb25zdCBsaXN0RG93bmxvYWRlZEVtdWxhdG9ycyA9ICgpOiB2b2lkID0+IHtcbiAgZXhlYygnZW11bGF0b3IgLWxpc3QtYXZkcycsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBsaXN0aW5nIGRvd25sb2FkZWQgZW11bGF0b3JzOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW11bGF0b3JzID0gc3Rkb3V0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XG5cbiAgICBpZiAoZW11bGF0b3JzLmxlbmd0aCA9PT0gMCB8fCAoZW11bGF0b3JzLmxlbmd0aCA9PT0gMSAmJiBlbXVsYXRvcnNbMF0gPT09ICcnKSkge1xuICAgICAgY29uc29sZS5sb2coJ05vIGRvd25sb2FkZWQgZW11bGF0b3JzIGZvdW5kLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRG93bmxvYWRlZCBlbXVsYXRvcnM6Jyk7XG4gICAgICBlbXVsYXRvcnMuZm9yRWFjaChlbXVsYXRvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtdWxhdG9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBsaXN0RG93bmxvYWRlZEVtdWxhdG9ycyB9O1xuIiwgImltcG9ydCB7IHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmNvbnN0IHN0YXJ0RGV2aWNlID0gKGVtdWxhdG9yTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnNvbGUubG9nKGBcdUQ4M0RcdURFODAgU3RhcnRpbmcgQW5kcm9pZCBlbXVsYXRvciBcIiR7ZW11bGF0b3JOYW1lfVwiLi4uYCk7XG5cbiAgLy8gVE9ETzogTWFrZSB0aGlzIHBhdGggY29uZmlndXJhYmxlXG4gIC8vIFRPRE86IHRoaXMgaXMgYSBoYWNreSB3YXkgdG8gZ2V0IHRoZSBlbXVsYXRvciBwYXRoIG9uIG1hY09TLCBidXQgaXQgd29ya3MgZm9yIG5vdy4gV2Ugc2hvdWxkIGZpbmQgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXMgaW4gdGhlIGZ1dHVyZS5cbiAgLy8gIEl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBnZXQgdGhlIGVtdWxhdG9yIHBhdGggZnJvbSB0aGUgQW5kcm9pZCBTREsuXG4gIC8vIFRPRE86IExpbnV4IGFuZCBXaW5kb3dzIHN1cHBvcnQgZm9yIHRoaXMgcGF0aCB3aWxsIG5lZWQgdG8gYmUgYWRkZWQuXG4gIGNvbnN0IGVtdWxhdG9yUGF0aCA9ICd+L0xpYnJhcnkvQW5kcm9pZC9zZGsvZW11bGF0b3IvZW11bGF0b3InO1xuICBjb25zdCBzdGFydEVtdWxhdG9yQXJncyA9IFsnLWF2ZCcsIGVtdWxhdG9yTmFtZSwgJy1uby1ib290LWFuaW0nXTtcblxuICBjb25zdCBlbXVsYXRvclByb2Nlc3MgPSBzcGF3bihlbXVsYXRvclBhdGgsIHN0YXJ0RW11bGF0b3JBcmdzLCB7XG4gICAgZGV0YWNoZWQ6IHRydWUsXG4gICAgc3RkaW86ICdpZ25vcmUnLFxuICAgIHNoZWxsOiB0cnVlXG4gIH0pO1xuXG4gIGVtdWxhdG9yUHJvY2Vzcy51bnJlZigpO1xufVxuXG5leHBvcnQgeyBzdGFydERldmljZSB9O1xuIiwgImltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuY29uc3Qgc2h1dGRvd25EZXZpY2UgPSAoZW11bGF0b3JOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc29sZS5sb2coYFNodXR0aW5nIGRvd24gQW5kcm9pZCBlbXVsYXRvciBcIiR7ZW11bGF0b3JOYW1lfVwiLi4uYCk7XG4gIGNvbnN0IGdldEVtdWxhdG9yUGlkQ29tbWFuZCA9IGBwZ3JlcCAtZiBcIiR7ZW11bGF0b3JOYW1lfVwiYDtcblxuICBleGVjKGdldEVtdWxhdG9yUGlkQ29tbWFuZCwgKGVycm9yLCBzdGRvdXQpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIGVtdWxhdG9yIFBJRDogJHtlcnJvcn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW11bGF0b3JQaWQgPSBzdGRvdXQudHJpbSgpO1xuICAgICAgY29uc3Qga2lsbEVtdWxhdG9yQ29tbWFuZCA9IGBraWxsICR7ZW11bGF0b3JQaWR9YDtcbiAgICAgIGV4ZWMoa2lsbEVtdWxhdG9yQ29tbWFuZCwgZXJyb3IgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igc2h1dHRpbmcgZG93biBlbXVsYXRvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgXHVEODNEXHVEQ0Y0IFNodXQgZG93biAke2VtdWxhdG9yTmFtZX0uYCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBzaHV0ZG93bkRldmljZSB9O1xuIiwgIi8vIGNvbnN0IHsgc3Bhd24gfSA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbi8vXG4vLyAvLyBEZWZpbmUgdGhlIHBhY2thZ2UgbmFtZSBvZiB0aGUgYXBwIHlvdSB3YW50IHRvIGNsZWFyIGRhdGEgZm9yXG4vLyBjb25zdCBwYWNrYWdlTmFtZSA9ICdjb20uZXhhbXBsZS5teWFwcCc7XG4vL1xuLy8gLy8gU3Bhd24gYSBuZXcgcHJvY2VzcyB0byBleGVjdXRlIHRoZSBhZGIgY29tbWFuZFxuLy8gY29uc3QgYWRiID0gc3Bhd24oJ2FkYicsIFsnc2hlbGwnLCAncG0nLCAnY2xlYXInLCBwYWNrYWdlTmFtZV0pO1xuLy9cbi8vIC8vIExpc3RlbiBmb3Igb3V0cHV0IGZyb20gdGhlIHByb2Nlc3Ncbi8vIGFkYi5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhgc3Rkb3V0OiAke2RhdGF9YCk7XG4vLyB9KTtcbi8vXG4vLyBhZGIuc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbi8vICAgY29uc29sZS5lcnJvcihgc3RkZXJyOiAke2RhdGF9YCk7XG4vLyB9KTtcbi8vXG4vLyAvLyBMaXN0ZW4gZm9yIHdoZW4gdGhlIHByb2Nlc3MgZXhpdHNcbi8vIGFkYi5vbignY2xvc2UnLCAoY29kZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhgY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlICR7Y29kZX1gKTtcbi8vIH0pO1xuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldERldmljZURhdGEoZGV2aWNlSWQ6IHN0cmluZywgcGFja2FnZU5hbWU6IHN0cmluZykge1xuICAvLyBUYW1iaWVuIGZ1bmNpb25hOlxuICAvLyBhZGIgc2hlbGwgcG0gY2xlYXIgY29tLnJhaXhlci5jb21cblxuICBleGVjKGBhZGIgLXMgJHtkZXZpY2VJZH0gc2hlbGwgcG0gY2xlYXIgJHtwYWNrYWdlTmFtZX1gLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVzZXR0aW5nIGRhdGEgb24gZGV2aWNlICR7ZGV2aWNlSWR9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzdGRlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZXNldHRpbmcgZGF0YSBvbiBkZXZpY2UgJHtkZXZpY2VJZH06ICR7c3RkZXJyfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgRGF0YSByZXNldCBvbiBkZXZpY2UgJHtkZXZpY2VJZH1gKTtcbiAgfSk7XG59XG4iLCAiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgKiBhcyBpT1NDb21tYW5kcyBmcm9tICcuL2lvcyc7XG5pbXBvcnQgKiBhcyBhbmRyb2lkQ29tbWFuZHMgZnJvbSAnLi9hbmRyb2lkJztcblxuaW1wb3J0IHsgaXNWYWxpZFVVSUQsIHNob3dDdXJyZW50T1MsIHZhbGlkYXRlSWZDYW5Vc2VJT1MgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgYXJndW1lbnQgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG5jb25zdCBVVUlEID0gYXJndW1lbnRbMV07XG5cbnR5cGUgUGxhdGZvcm0gPSAnaW9zJyB8ICdhbmRyb2lkJztcbmNvbnN0IGxhc3RBcmd1bWVudCA9IGFyZ3VtZW50W2FyZ3VtZW50Lmxlbmd0aCAtIDFdIGFzIFBsYXRmb3JtXG5sZXQgb3B0aW9uU2VsZWN0ZWQgPSAnYW5kcm9pZCc7XG5cbmlmIChsYXN0QXJndW1lbnQgPT09ICdpb3MnKSB7XG4gIGNvbnNvbGUubG9nKCdcdUQ4M0RcdURDRjEgUGxhdGZvcm0gaU9TJyk7XG59IGVsc2UgaWYgKGxhc3RBcmd1bWVudCA9PT0gJ2FuZHJvaWQnKSB7XG4gIGNvbnNvbGUubG9nKCdcdUQ4M0VcdUREMTYgUGxhdGZvcm0gQW5kcm9pZCcpO1xufVxuXG5pZiAoIXZhbGlkYXRlSWZDYW5Vc2VJT1MoKSAmJiBsYXN0QXJndW1lbnQgPT09ICdpb3MnKSB7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn1cblxuY29uc3QgbGlzdENvbW1hbmRzID0gWydsaXN0LWRldmljZXMnLCAnc3RhcnQtZGV2aWNlJywgJ3NodXRkb3duLWRldmljZScsICdyZXNldC1kZXZpY2UnXTtcbmNvbnN0IHBsYXRmb3JtQ29tbWFuZHMgPSBbJ2lvcycsICdhbmRyb2lkJ107XG5cbmlmICh2YWxpZGF0ZUlmQ2FuVXNlSU9TKCkgJiYgKCFwbGF0Zm9ybUNvbW1hbmRzLmluY2x1ZGVzKGxhc3RBcmd1bWVudCkgfHwgbGFzdEFyZ3VtZW50ID09PSAnaW9zJykpIHtcbiAgb3B0aW9uU2VsZWN0ZWQgPSAnaW9zJztcbiAgY29uc29sZS5sb2coJ1x1RDgzRFx1RENGMSBQbGF0Zm9ybSBpT1MnKTtcbn0gZWxzZSBpZiAobGFzdEFyZ3VtZW50ID09PSAnYW5kcm9pZCcpIHtcbiAgb3B0aW9uU2VsZWN0ZWQgPSAnYW5kcm9pZCc7XG4gIGNvbnNvbGUubG9nKCdcdUQ4M0VcdUREMTYgUGxhdGZvcm0gQW5kcm9pZCcpO1xufVxuXG5zaG93Q3VycmVudE9TKCk7XG5cbmlmIChvcHRpb25TZWxlY3RlZCA9PT0gJ2FuZHJvaWQnKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRbMF0pIHtcbiAgICBjYXNlICdsaXN0LWRldmljZXMnOlxuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgYW5kcm9pZENvbW1hbmRzLmxpc3REb3dubG9hZGVkRW11bGF0b3JzKCk7XG4gICAgICB9KSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3RhcnQtZGV2aWNlJzpcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGFuZHJvaWRDb21tYW5kcy5zdGFydERldmljZShVVUlEKTtcbiAgICAgIH0pKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzaHV0ZG93bi1kZXZpY2UnOlxuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgYW5kcm9pZENvbW1hbmRzLnNodXRkb3duRGV2aWNlKFVVSUQpO1xuICAgICAgfSkoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Jlc2V0LWRhdGEnOlxuICAgICAgaWYgKCFVVUlEKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdUQ4M0RcdURFQUIgRXJyb3I6IE5vIHNlIGhhIGVzcGVjaWZpY2FkbyBlbCBVVUlEIGRlbCBkaXNwb3NpdGl2by4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBhbmRyb2lkQ29tbWFuZHMucmVzZXREZXZpY2VEYXRhKFVVSUQsIGFyZ3VtZW50WzJdKTtcbiAgICAgIH0pKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coJ1x1RDgzRFx1REVBQiBObyB2YWxpZCBjb21tYW5kIHNwZWNpZmllZC4nKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmlmIChvcHRpb25TZWxlY3RlZCA9PT0gJ2lvcycpIHtcbiAgc3dpdGNoIChhcmd1bWVudFswXSkge1xuICAgIGNhc2UgJ2xpc3QtZGV2aWNlcyc6XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBpT1NDb21tYW5kcy5zaG93RGV2aWNlcygpO1xuICAgICAgfSkoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0YXJ0LWRldmljZSc6XG4gICAgICBpZiAoIVVVSUQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1RDgzRFx1REVBQiBFcnJvcjogTm8gZGV2aWNlIFVVSUQgc3BlY2lmaWVkLicpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZFVVSUQoVVVJRCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1x1RDgzRFx1REVBQiBFcnJvcjogVVVJRCBpcyBub3QgdmFsaWQuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBpT1NDb21tYW5kcy5vcGVuRGV2aWNlKFVVSUQpO1xuICAgICAgfSkoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NodXRkb3duLWRldmljZSc6XG4gICAgICBpZiAoIWlzVmFsaWRVVUlEKFVVSUQpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcdUQ4M0RcdURFQUIgRXJyb3I6IFVVSUQgaXMgbm90IHZhbGlkLicpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgaU9TQ29tbWFuZHMuY2xvc2VFbXVsYXRvcihVVUlEKTtcbiAgICAgIH0pKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZXNldC1kZXZpY2UnOlxuICAgICAgaWYgKCFpc1ZhbGlkVVVJRChVVUlEKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnXHVEODNEXHVERUFCIEVycm9yOiBVVUlEIGlzIG5vdCB2YWxpZC4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGlPU0NvbW1hbmRzLnJlc2V0RW11bGF0b3IoVVVJRCk7XG4gICAgICB9KSgpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUubG9nKCdcdUQ4M0RcdURFQUIgTm8gdmFsaWQgY29tbWFuZCBzcGVjaWZpZWQuJyk7XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSx5Q0FBQUEsVUFBQUMsU0FBQTtBQUFBLFFBQUksV0FBVyxDQUFDO0FBQ2hCLFFBQUksUUFBUTtBQUVaLFFBQU0sUUFBUSxDQUFDLEtBQUssUUFBUTtBQUMxQixVQUFJLFNBQVMsS0FBSztBQUNoQixpQkFBUyxLQUFLLEdBQUc7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFFQSxVQUFNLE9BQU87QUFDYixVQUFNLE9BQU87QUFDYixVQUFNLFFBQVE7QUFFZCxVQUFNLFFBQVEsTUFBTTtBQUNsQixpQkFBVyxDQUFDO0FBQUEsSUFDZDtBQUVBLFVBQU0sZ0JBQWdCLENBQUMsTUFBTTtBQUMzQixjQUFRO0FBQUEsSUFDVjtBQUVBLFVBQU0sT0FBTyxDQUFDLFFBQVEsTUFBTSxLQUFLLE1BQU0sSUFBSTtBQUMzQyxVQUFNLE9BQU8sQ0FBQyxRQUFRLE1BQU0sS0FBSyxNQUFNLElBQUk7QUFDM0MsVUFBTSxRQUFRLENBQUMsUUFB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RCxJQUFHO0FBQ0g7QUFBQSxJQUNGO0FBQ0UsY0FBUSxJQUFJLHVDQUFnQztBQUM1QztBQUFBLEVBQ0o7QUFDRjtBQUVBLElBQUksbUJBQW1CLE9BQU87QUFDNUIsVUFBUSxTQUFTLENBQUMsR0FBRztBQUFBLElBQ25CLEtBQUs7QUFDSCxPQUFDLE1BQVk7QUFDWCxjQUFrQixZQUFZO0FBQUEsTUFDaEMsSUFBRztBQUNIO0FBQUEsSUFDRixLQUFLO0FBQ0gsVUFBSSxDQUFDLE1BQU07QUFDVCxnQkFBUSxJQUFJLDRDQUFxQztBQUNqRDtBQUFBLE1BQ0Y7QUFDQSxVQUFJLENBQUMsWUFBWSxJQUFJLEdBQUc7QUFDdEIsZ0JBQVEsSUFBSSxxQ0FBOEI7QUFDMUM7QUFBQSxNQUNGO0FBRUEsT0FBQyxNQUFZO0FBQ1gsY0FBa0IsV0FBVyxJQUFJO0FBQUEsTUFDbkMsSUFBRztBQUNIO0FBQUEsSUFDRixLQUFLO0FBQ0gsVUFBSSxDQUFDLFlBQVksSUFBSSxHQUFHO0FBQ3RCLGdCQUFRLElBQUkscUNBQThCO0FBQzFDO0FBQUEsTUFDRjtBQUVBLE9BQUMsTUFBWTtBQUNYLGNBQWtCLGNBQWMsSUFBSTtBQUFBLE1BQ3RDLElBQUc7QUFDSDtBQUFBLElBQ0YsS0FBSztBQUNILFVBQUksQ0FBQyxZQUFZLElBQUksR0FBRztBQUN0QixnQkFBUSxJQUFJLHFDQUE4QjtBQUMxQztBQUFBLE1BQ0Y7QUFFQSxPQUFDLE1BQVk7QUFDWCxjQUFrQixjQUFjLElBQUk7QUFBQSxNQUN0QyxJQUFHO0FBQ0g7QUFBQSxJQUNGO0FBQ0UsY0FBUSxJQUFJLHVDQUFnQztBQUM1QztBQUFBLEVBQ0o7QUFDRjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGFkIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInRleHQiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzdHlsaXplIiwgImJ1aWxkZXIiLCAiY29sb3JzIiwgInN0eWxlIiwgInNlcXVlbmNlciIsICJtYXAiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicmVxdWlyZV9oYXNfZmxhZyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJjaGFsayIsICJzdHlsZXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiY2hhbGsiLCAiZXhlYyIsICJleGVjQ2FsbGJhY2siLCAib3MiLCAiQ2xpVGFibGUzIiwgImltcG9ydF9jaGlsZF9wcm9jZXNzIiwgImNoYWxrIiwgIlVVSUQiLCAiVVVJRCIsICJpbXBvcnRfY2hpbGRfcHJvY2VzcyIsICJpbXBvcnRfY2hpbGRfcHJvY2VzcyIsICJpbXBvcnRfY2hpbGRfcHJvY2VzcyIsICJlcnJvciIsICJpbXBvcnRfY2hpbGRfcHJvY2VzcyJdCn0K
