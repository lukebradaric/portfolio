self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/GameJams/GameJamsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/GameJams/GameJamsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "SmallBlogCard": function() { return /* binding */ SmallBlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "GameJamsStyles__Img",
  componentId: "xqffmf-0"
})(["width:100%;height:100%;min-height:140px;object-fit:cover;overflow:hidden;border-radius:10px 10px 0px 0px;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GameJamsStyles__GridContainer",
  componentId: "xqffmf-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));padding:1rem;place-items:center;column-gap:20px;row-gap:1rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__BlogCard",
  componentId: "xqffmf-2"
})(["border-radius:10px;background:#171717;text-align:center;width:250px;min-height:475px;position:relative;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var SmallBlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__SmallBlogCard",
  componentId: "xqffmf-3"
})(["border-radius:10px;background:#171717;text-align:center;width:250px;min-height:440px;position:relative;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__TitleContent",
  componentId: "xqffmf-4"
})(["margin-top:5px;text-align:center;z-index:20;width:100%;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "GameJamsStyles__HeaderThree",
  componentId: "xqffmf-5"
})(["font-weight:500;letter-spacing:2px;color:#91cca5;padding:0.5rem 0;font-size:", ";"], function (props) {
  return props.title ? '3rem' : '2rem';
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "GameJamsStyles__Hr",
  componentId: "xqffmf-6"
})(["width:50px;height:3px;margin:15px auto;border:0;background:#1db954;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GameJamsStyles__Intro",
  componentId: "xqffmf-7"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GameJamsStyles__CardInfo",
  componentId: "xqffmf-8"
})(["width:100%;padding:0 30px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:center;margin-bottom:15px;@media ", "{padding:0.3rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "GameJamsStyles__UtilityList",
  componentId: "xqffmf-9"
})(["list-style-type:none;padding:0;position:absolute;bottom:0;width:100%;margin:2.5rem 0;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "GameJamsStyles__ExternalLinks",
  componentId: "xqffmf-10"
})(["color:#191414;font-weight:bold;font-size:1.6rem;padding:1rem 1.5rem;background:#1db954;border-radius:15px;transition:0.5s;&:hover{background:#1ed760;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "GameJamsStyles__TagList",
  componentId: "xqffmf-11"
})(["display:flex;justify-content:space-around;padding:2rem;"]); // export const Tag = styled.li`
//   margin-top: 30px;
// `;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZUphbXMvR2FtZUphbXNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiQmxvZ0NhcmQiLCJTbWFsbEJsb2dDYXJkIiwiVGl0bGVDb250ZW50IiwiSGVhZGVyVGhyZWUiLCJ0aXRsZSIsIkhyIiwiSW50cm8iLCJDYXJkSW5mbyIsIlV0aWxpdHlMaXN0IiwiRXh0ZXJuYWxMaW5rcyIsIlRhZ0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlIQUFUO0FBU0EsSUFBTUMsYUFBYSxHQUFHRCx5RUFBSDtBQUFBO0FBQUE7QUFBQSwyTkFPZixVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FQZSxDQUFuQjtBQWNBLElBQU1DLFFBQVEsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsd0lBU1YsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBVFUsQ0FBZDtBQWNBLElBQU1FLGFBQWEsR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0lBU2YsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBVGUsQ0FBbkI7QUFjQSxJQUFNRyxZQUFZLEdBQUdSLHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFsQjtBQU9BLElBQU1TLFdBQVcsR0FBR1Qsb0VBQUg7QUFBQTtBQUFBO0FBQUEsMEZBS1QsVUFBQ0UsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ1EsS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBbkM7QUFBQSxDQUxTLENBQWpCO0FBUUEsSUFBTUMsRUFBRSxHQUFHWCxvRUFBSDtBQUFBO0FBQUE7QUFBQSwyRUFBUjtBQVFBLElBQU1ZLEtBQUssR0FBR1oscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFVQSxJQUFNYSxRQUFRLEdBQUdiLG1FQUFIO0FBQUE7QUFBQTtBQUFBLG1KQVFWLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJVLENBQWQ7QUFhQSxJQUFNUyxXQUFXLEdBQUdkLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDZGQUFqQjtBQVdBLElBQU1lLGFBQWEsR0FBR2YsbUVBQUg7QUFBQTtBQUFBO0FBQUEsOEpBQW5CO0FBYUEsSUFBTWdCLE9BQU8sR0FBR2hCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFiLEMsQ0FNUDtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDIzMjVmNjc3NmQ2ZDUwYzczYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjQwcHgsIDFmcikpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gIHJvdy1nYXA6IDFyZW07XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzE3MTcxNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ3NXB4O1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTbWFsbEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxNzE3MTc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtaW4taGVpZ2h0OiA0NDBweDtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzkxY2NhNTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbScpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIciA9IHN0eWxlZC5ocmBcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZGNlM2U3O1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIGNvbG9yOiAjZTRlNmU3O1xyXG4gIGZvbnQtc3R5bGU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVdGlsaXR5TGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHRlcm5hbExpbmtzID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICMxOTE0MTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogIzFkYjk1NDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWVkNzYwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuYDtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcbi8vICAgbWFyZ2luLXRvcDogMzBweDtcclxuLy8gYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==