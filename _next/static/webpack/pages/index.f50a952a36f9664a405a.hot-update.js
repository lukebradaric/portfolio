self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "gameJams": function() { return /* binding */ gameJams; },
/* harmony export */   "smallProjects": function() { return /* binding */ smallProjects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'World of Warcraft',
  description: 'Worked on the World of Warcraft team for two consecutive summers and built tools to improve developer workflow.',
  image: 'static/images/dragonflight-warwithin.png',
  tags: ['Blizzard', 'C#', 'C++'],
  source: 'https://dragonflight.blizzard.com/en-us/',
  id: 3
}, {
  title: 'TinyTools',
  description: 'Collection of lightweight Unity tools used to streamline game development processes.',
  image: 'static/images/tinytools.png',
  tags: ['Unity', 'C#', 'Lightweight', 'Tools'],
  source: 'https://github.com/lukebradaric/TinyTools',
  id: 0
}, {
  title: 'Adventure Assembly',
  description: 'Action roguelike with a snake-like twist on player movement. Collect heroes and fight off waves of enemies!',
  image: 'static/images/adventureassembly.gif',
  tags: ['Unity', 'C#', 'WIP'],
  source: 'https://teamjolu.itch.io/adventurer-assembly',
  id: 0
}, {
  title: 'FujiCraft',
  description: 'Custom built minecraft server to provide an MMO-like experience to a active community of 100+ players.',
  image: 'static/images/fujicraft.png',
  tags: ['MMO', 'Minecraft', 'Java'],
  source: 'https://store.fujicraft.net/',
  id: 0
}, {
  title: 'Killchain',
  description: 'First person movement shooter based around chains, momentum, and fast pased action.',
  image: 'static/images/killchain.gif',
  tags: ['Unity', 'C#', 'FPS'],
  source: 'https://github.com/lukebradaric/killchain',
  id: 1
}, {
  title: 'Puffer Bot',
  description: 'Automated Twitch clip compiler. Running on YouTube channels for games such as League of Legends, Valorant and more.',
  image: 'static/images/puffer.png',
  tags: ['JS', 'Node', 'Automated'],
  source: 'https://github.com/lukebradaric/puffer-twitch',
  id: 2
}];
var gameJams = [{
  title: 'Tink',
  description: 'Rogue-like where player behaviour influences the way levels generate.',
  image: 'static/images/tink.gif',
  tags: ['Unity', 'C#', 'LudumDare Jam'],
  source: 'https://twitter.com/luke_bradaric',
  jam: 'Ludum Dare 54 Jam',
  theme: 'Action Roguelike',
  id: 0
}, {
  title: 'The Later Lab',
  description: 'Travel between timelines and transport objects back and forth to solve puzzles.',
  image: 'static/images/thelaterlab.gif',
  tags: ['Unity', 'C#', 'GMTK Jam'],
  source: 'https://teamjolu.itch.io/the-later-lab',
  jam: 'GMTK 2021 Jam',
  theme: 'Puzzle Platformer',
  id: 1
}, {
  title: 'Nuclear Labs',
  description: 'Freeze waves of enemies and kick them into the surrounding water to cool off your nuclear reactor.',
  image: 'static/images/nuclearlabs.gif',
  tags: ['Unity', 'C#', 'LudumDare Jam'],
  source: 'https://teamjolu.itch.io/nuclear-labs',
  jam: 'Ludum Dare 49 Jam',
  theme: 'Twin Stick Shooter',
  id: 2
}, {
  title: 'Torch Fella',
  description: 'Control a series of blobs to transport a lit torch across a level in order to light the bonfire.',
  image: 'static/images/torchfella.gif',
  tags: ['Unity', 'C#', 'Game Jam'],
  source: 'https://flowluke.itch.io/torch-fella',
  jam: 'Weekly 168 Jam',
  theme: 'Isometric Puzzle',
  id: 3
}];
var smallProjects = [{
  title: 'Flow',
  description: 'Spring from bounce pads, avoid spikes, and maintain your momentum while trying to set a highscore on the leaderboard.',
  image: 'static/images/flow.gif',
  tags: ['Unity', 'C#', 'Game Jam'],
  source: 'https://flowluke.itch.io/torch-fella',
  jam: 'Time Attack Platformer',
  theme: '',
  id: 0
}, {
  title: 'Hopson',
  description: 'Inspired by Counter-Strike bunny hopping. Hop across a series of platforms and build speed to complete the level as fast as possible.',
  image: 'static/images/hopson.gif',
  tags: ['Unity', 'C#', 'Game Jam'],
  source: 'https://flowluke.itch.io/torch-fella',
  jam: '3D Platformer',
  theme: '',
  id: 1
}, {
  title: 'No Tanks Left',
  description: 'Each key controls a singular tank. Tanks automatically shoot, hold your key to turn. Build your scorestreak and powerup your tank!',
  image: 'static/images/notanksleft.gif',
  tags: ['Unity', 'C#', 'Game Jam'],
  source: 'https://flowluke.itch.io/torch-fella',
  jam: 'Party Game',
  theme: '',
  id: 2
}, {
  title: 'Slitch',
  description: 'Make your way through an abandoned mental asylum. Collect notes and uncover the history of the asylum. Be as quiet as possible...',
  image: 'static/images/slitch.gif',
  tags: ['Unity', 'C#', 'Game Jam'],
  source: 'https://flowluke.itch.io/torch-fella',
  jam: 'Horror',
  theme: '',
  id: 3
}];
var TimeLineData = [{
  year: 'Introduction',
  text: "My love for game development started from a class I took in highschool. It's been 5 years since then, and development  remains my best-loved passion."
}, {
  year: 'Games',
  text: "Some of my favorite games that I have committed thousands of hours to include, League of Legends, Counter-Strike, Minecraft, and World of Warcraft." // My first game jam was through a local game developer community
  // The people were hella nice bruv
  // The first game jam I entered was through a local game develop community. I was nervous when I first arrived but after
  // meeting some of the people and showing off my game, I knew I was in the right community.

}, {
  year: 'Aspiration',
  text: 'I aspire to someday work on the games I have grown up playing. My dream companies are Riot, Blizzard, and Mojang.' // I continue to improve my development skills in hopes of one day working at a company
  // I aspire to one day work at one of the companies whos games I grew up playing, such as Riot, Blizzard, and Mojang.

}, {
  year: 'Riot & Blizzard',
  text: "If you're reading this, please give me a job. \n *Edit: I got a job :D"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwiaWQiLCJnYW1lSmFtcyIsImphbSIsInRoZW1lIiwic21hbGxQcm9qZWN0cyIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsYUFBVyxFQUNULGlIQUhKO0FBSUVDLE9BQUssRUFBRSwwQ0FKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxVQUFELEVBQWEsSUFBYixFQUFtQixLQUFuQixDQUxSO0FBTUVDLFFBQU0sRUFBRSwwQ0FOVjtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTCxPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQ1Qsc0ZBSEo7QUFJRUMsT0FBSyxFQUFFLDZCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLGFBQWhCLEVBQStCLE9BQS9CLENBTFI7QUFNRUMsUUFBTSxFQUFFLDJDQU5WO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTCxPQUFLLEVBQUUsb0JBRFQ7QUFFRUMsYUFBVyxFQUNULDZHQUhKO0FBSUVDLE9BQUssRUFBRSxxQ0FKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixLQUFoQixDQUxSO0FBTUVDLFFBQU0sRUFBRSw4Q0FOVjtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5Cc0IsRUE0QnRCO0FBQ0VMLE9BQUssRUFBRSxXQURUO0FBRUVDLGFBQVcsRUFDVCx3R0FISjtBQUlFQyxPQUFLLEVBQUUsNkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsS0FBRCxFQUFR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RSxlQURUO0FBRUVDLGFBQVcsRUFDVCxvSUFISjtBQUlFQyxPQUFLLEVBQUUsK0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsc0NBTlY7QUFPRUcsS0FBRyxFQUFFLFlBUFA7QUFRRUMsT0FBSyxFQUFFLEVBUlQ7QUFTRUgsSUFBRSxFQUFFO0FBVE4sQ0F2QjJCLEVBa0MzQjtBQUNFTCxPQUFLLEVBQUUsUUFEVDtBQUVFQyxhQUFXLEVBQ1QsbUlBSEo7QUFJRUMsT0FBSyxFQUFFLDBCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQWhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLHNDQU5WO0FBT0VHLEtBQUcsRUFBRSxRQVBQO0FBUUVDLE9BQUssRUFBRSxFQVJUO0FBU0VILElBQUUsRUFBRTtBQVROLENBbEMyQixDQUF0QjtBQStDQSxJQUFNSyxZQUFZLEdBQUcsQ0FDMUI7QUFDRUMsTUFBSSxFQUFFLGNBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEMEIsRUFLMUI7QUFDRUQsTUFBSSxFQUFFLE9BRFI7QUFFRUMsTUFBSSx1SkFGTixDQUdFO0FBQ0E7QUFDQTtBQUNBOztBQU5GLENBTDBCLEVBYTFCO0FBQ0VELE1BQUksRUFBRSxZQURSO0FBRUVDLE1BQUksRUFBRSxtSEFGUixDQUdFO0FBQ0E7O0FBSkYsQ0FiMEIsRUFtQjFCO0FBQ0VELE1BQUksRUFBRSxpQkFEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQW5CMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjUwYTk1MmEzNmY5NjY0YTQwNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ1dvcmxkIG9mIFdhcmNyYWZ0JyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnV29ya2VkIG9uIHRoZSBXb3JsZCBvZiBXYXJjcmFmdCB0ZWFtIGZvciB0d28gY29uc2VjdXRpdmUgc3VtbWVycyBhbmQgYnVpbHQgdG9vbHMgdG8gaW1wcm92ZSBkZXZlbG9wZXIgd29ya2Zsb3cuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9kcmFnb25mbGlnaHQtd2Fyd2l0aGluLnBuZycsXHJcbiAgICB0YWdzOiBbJ0JsaXp6YXJkJywgJ0MjJywgJ0MrKyddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9kcmFnb25mbGlnaHQuYmxpenphcmQuY29tL2VuLXVzLycsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVGlueVRvb2xzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQ29sbGVjdGlvbiBvZiBsaWdodHdlaWdodCBVbml0eSB0b29scyB1c2VkIHRvIHN0cmVhbWxpbmUgZ2FtZSBkZXZlbG9wbWVudCBwcm9jZXNzZXMuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy90aW55dG9vbHMucG5nJyxcclxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnTGlnaHR3ZWlnaHQnLCAnVG9vbHMnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYnJhZGFyaWMvVGlueVRvb2xzJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBZHZlbnR1cmUgQXNzZW1ibHknLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBY3Rpb24gcm9ndWVsaWtlIHdpdGggYSBzbmFrZS1saWtlIHR3aXN0IG9uIHBsYXllciBtb3ZlbWVudC4gQ29sbGVjdCBoZXJvZXMgYW5kIGZpZ2h0IG9mZiB3YXZlcyBvZiBlbmVtaWVzIScsXHJcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvYWR2ZW50dXJlYXNzZW1ibHkuZ2lmJyxcclxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnV0lQJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3RlYW1qb2x1Lml0Y2guaW8vYWR2ZW50dXJlci1hc3NlbWJseScsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRnVqaUNyYWZ0JyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQ3VzdG9tIGJ1aWx0IG1pbmVjcmFmdCBzZXJ2ZXIgdG8gcHJvdmlkZSBhbiBNTU8tbGlrZSBleHBlcmllbmNlIHRvIGEgYWN0aXZlIGNvbW11bml0eSBvZiAxMDArIHBsYXllcnMuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9mdWppY3JhZnQucG5nJyxcclxuICAgIHRhZ3M6IFsnTU1PJywgJ01pbmVjcmFmdCcsICdKYXZhJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3N0b3JlLmZ1amljcmFmdC5uZXQvJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdLaWxsY2hhaW4nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdGaXJzdCBwZXJzb24gbW92ZW1lbnQgc2hvb3RlciBiYXNlZCBhcm91bmQgY2hhaW5zLCBtb21lbnR1bSwgYW5kIGZhc3QgcGFzZWQgYWN0aW9uLicsXHJcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMva2lsbGNoYWluLmdpZicsXHJcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0ZQUyddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2x1a2VicmFkYXJpYy9raWxsY2hhaW4nLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1B1ZmZlciBCb3QnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBdXRvbWF0ZWQgVHdpdGNoIGNsaXAgY29tcGlsZXIuIFJ1bm5pbmcgb24gWW91VHViZSBjaGFubmVscyBmb3IgZ2FtZXMgc3VjaCBhcyBMZWFndWUgb2YgTGVnZW5kcywgVmFsb3JhbnQgYW5kIG1vcmUuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9wdWZmZXIucG5nJyxcclxuICAgIHRhZ3M6IFsnSlMnLCAnTm9kZScsICdBdXRvbWF0ZWQnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sdWtlYnJhZGFyaWMvcHVmZmVyLXR3aXRjaCcsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVKYW1zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnVGluaycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1JvZ3VlLWxpa2Ugd2hlcmUgcGxheWVyIGJlaGF2aW91ciBpbmZsdWVuY2VzIHRoZSB3YXkgbGV2ZWxzIGdlbmVyYXRlLicsXHJcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvdGluay5naWYnLFxyXG4gICAgdGFnczogWydVbml0eScsICdDIycsICdMdWR1bURhcmUgSmFtJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3R3aXR0ZXIuY29tL2x1a2VfYnJhZGFyaWMnLFxyXG4gICAgamFtOiAnTHVkdW0gRGFyZSA1NCBKYW0nLFxyXG4gICAgdGhlbWU6ICdBY3Rpb24gUm9ndWVsaWtlJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdUaGUgTGF0ZXIgTGFiJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnVHJhdmVsIGJldHdlZW4gdGltZWxpbmVzIGFuZCB0cmFuc3BvcnQgb2JqZWN0cyBiYWNrIGFuZCBmb3J0aCB0byBzb2x2ZSBwdXp6bGVzLicsXHJcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvdGhlbGF0ZXJsYWIuZ2lmJyxcclxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR01USyBKYW0nXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vdGVhbWpvbHUuaXRjaC5pby90aGUtbGF0ZXItbGFiJyxcclxuICAgIGphbTogJ0dNVEsgMjAyMSBKYW0nLFxyXG4gICAgdGhlbWU6ICdQdXp6bGUgUGxhdGZvcm1lcicsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTnVjbGVhciBMYWJzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRnJlZXplIHdhdmVzIG9mIGVuZW1pZXMgYW5kIGtpY2sgdGhlbSBpbnRvIHRoZSBzdXJyb3VuZGluZyB3YXRlciB0byBjb29sIG9mZiB5b3VyIG51Y2xlYXIgcmVhY3Rvci4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL251Y2xlYXJsYWJzLmdpZicsXHJcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0x1ZHVtRGFyZSBKYW0nXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vdGVhbWpvbHUuaXRjaC5pby9udWNsZWFyLWxhYnMnLFxyXG4gICAgamFtOiAnTHVkdW0gRGFyZSA0OSBKYW0nLFxyXG4gICAgdGhlbWU6ICdUd2luIFN0aWNrIFNob290ZXInLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1RvcmNoIEZlbGxhJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQ29udHJvbCBhIHNlcmllcyBvZiBibG9icyB0byB0cmFuc3BvcnQgYSBsaXQgdG9yY2ggYWNyb3NzIGEgbGV2ZWwgaW4gb3JkZXIgdG8gbGlnaHQgdGhlIGJvbmZpcmUuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy90b3JjaGZlbGxhLmdpZicsXHJcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0dhbWUgSmFtJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2Zsb3dsdWtlLml0Y2guaW8vdG9yY2gtZmVsbGEnLFxyXG4gICAgamFtOiAnV2Vla2x5IDE2OCBKYW0nLFxyXG4gICAgdGhlbWU6ICdJc29tZXRyaWMgUHV6emxlJyxcclxuICAgIGlkOiAzLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc21hbGxQcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0Zsb3cnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdTcHJpbmcgZnJvbSBib3VuY2UgcGFkcywgYXZvaWQgc3Bpa2VzLCBhbmQgbWFpbnRhaW4geW91ciBtb21lbnR1bSB3aGlsZSB0cnlpbmcgdG8gc2V0IGEgaGlnaHNjb3JlIG9uIHRoZSBsZWFkZXJib2FyZC4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL2Zsb3cuZ2lmJyxcclxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR2FtZSBKYW0nXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZmxvd2x1a2UuaXRjaC5pby90b3JjaC1mZWxsYScsXHJcbiAgICBqYW06ICdUaW1lIEF0dGFjayBQbGF0Zm9ybWVyJyxcclxuICAgIHRoZW1lOiAnJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdIb3Bzb24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdJbnNwaXJlZCBieSBDb3VudGVyLVN0cmlrZSBidW5ueSBob3BwaW5nLiBIb3AgYWNyb3NzIGEgc2VyaWVzIG9mIHBsYXRmb3JtcyBhbmQgYnVpbGQgc3BlZWQgdG8gY29tcGxldGUgdGhlIGxldmVsIGFzIGZhc3QgYXMgcG9zc2libGUuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9ob3Bzb24uZ2lmJyxcclxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR2FtZSBKYW0nXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZmxvd2x1a2UuaXRjaC5pby90b3JjaC1mZWxsYScsXHJcbiAgICBqYW06ICczRCBQbGF0Zm9ybWVyJyxcclxuICAgIHRoZW1lOiAnJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdObyBUYW5rcyBMZWZ0JyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRWFjaCBrZXkgY29udHJvbHMgYSBzaW5ndWxhciB0YW5rLiBUYW5rcyBhdXRvbWF0aWNhbGx5IHNob290LCBob2xkIHlvdXIga2V5IHRvIHR1cm4uIEJ1aWxkIHlvdXIgc2NvcmVzdHJlYWsgYW5kIHBvd2VydXAgeW91ciB0YW5rIScsXHJcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvbm90YW5rc2xlZnQuZ2lmJyxcclxuICAgIHRhZ3M6IFsnVW5pdHknLCAnQyMnLCAnR2FtZSBKYW0nXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZmxvd2x1a2UuaXRjaC5pby90b3JjaC1mZWxsYScsXHJcbiAgICBqYW06ICdQYXJ0eSBHYW1lJyxcclxuICAgIHRoZW1lOiAnJyxcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTbGl0Y2gnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdNYWtlIHlvdXIgd2F5IHRocm91Z2ggYW4gYWJhbmRvbmVkIG1lbnRhbCBhc3lsdW0uIENvbGxlY3Qgbm90ZXMgYW5kIHVuY292ZXIgdGhlIGhpc3Rvcnkgb2YgdGhlIGFzeWx1bS4gQmUgYXMgcXVpZXQgYXMgcG9zc2libGUuLi4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3NsaXRjaC5naWYnLFxyXG4gICAgdGFnczogWydVbml0eScsICdDIycsICdHYW1lIEphbSddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9mbG93bHVrZS5pdGNoLmlvL3RvcmNoLWZlbGxhJyxcclxuICAgIGphbTogJ0hvcnJvcicsXHJcbiAgICB0aGVtZTogJycsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7XHJcbiAgICB5ZWFyOiAnSW50cm9kdWN0aW9uJyxcclxuICAgIHRleHQ6IFwiTXkgbG92ZSBmb3IgZ2FtZSBkZXZlbG9wbWVudCBzdGFydGVkIGZyb20gYSBjbGFzcyBJIHRvb2sgaW4gaGlnaHNjaG9vbC4gSXQncyBiZWVuIDUgeWVhcnMgc2luY2UgdGhlbiwgYW5kIGRldmVsb3BtZW50ICByZW1haW5zIG15IGJlc3QtbG92ZWQgcGFzc2lvbi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHllYXI6ICdHYW1lcycsXHJcbiAgICB0ZXh0OiBgU29tZSBvZiBteSBmYXZvcml0ZSBnYW1lcyB0aGF0IEkgaGF2ZSBjb21taXR0ZWQgdGhvdXNhbmRzIG9mIGhvdXJzIHRvIGluY2x1ZGUsIExlYWd1ZSBvZiBMZWdlbmRzLCBDb3VudGVyLVN0cmlrZSwgTWluZWNyYWZ0LCBhbmQgV29ybGQgb2YgV2FyY3JhZnQuYCxcclxuICAgIC8vIE15IGZpcnN0IGdhbWUgamFtIHdhcyB0aHJvdWdoIGEgbG9jYWwgZ2FtZSBkZXZlbG9wZXIgY29tbXVuaXR5XHJcbiAgICAvLyBUaGUgcGVvcGxlIHdlcmUgaGVsbGEgbmljZSBicnV2XHJcbiAgICAvLyBUaGUgZmlyc3QgZ2FtZSBqYW0gSSBlbnRlcmVkIHdhcyB0aHJvdWdoIGEgbG9jYWwgZ2FtZSBkZXZlbG9wIGNvbW11bml0eS4gSSB3YXMgbmVydm91cyB3aGVuIEkgZmlyc3QgYXJyaXZlZCBidXQgYWZ0ZXJcclxuICAgIC8vIG1lZXRpbmcgc29tZSBvZiB0aGUgcGVvcGxlIGFuZCBzaG93aW5nIG9mZiBteSBnYW1lLCBJIGtuZXcgSSB3YXMgaW4gdGhlIHJpZ2h0IGNvbW11bml0eS5cclxuICB9LFxyXG4gIHtcclxuICAgIHllYXI6ICdBc3BpcmF0aW9uJyxcclxuICAgIHRleHQ6ICdJIGFzcGlyZSB0byBzb21lZGF5IHdvcmsgb24gdGhlIGdhbWVzIEkgaGF2ZSBncm93biB1cCBwbGF5aW5nLiBNeSBkcmVhbSBjb21wYW5pZXMgYXJlIFJpb3QsIEJsaXp6YXJkLCBhbmQgTW9qYW5nLicsXHJcbiAgICAvLyBJIGNvbnRpbnVlIHRvIGltcHJvdmUgbXkgZGV2ZWxvcG1lbnQgc2tpbGxzIGluIGhvcGVzIG9mIG9uZSBkYXkgd29ya2luZyBhdCBhIGNvbXBhbnlcclxuICAgIC8vIEkgYXNwaXJlIHRvIG9uZSBkYXkgd29yayBhdCBvbmUgb2YgdGhlIGNvbXBhbmllcyB3aG9zIGdhbWVzIEkgZ3JldyB1cCBwbGF5aW5nLCBzdWNoIGFzIFJpb3QsIEJsaXp6YXJkLCBhbmQgTW9qYW5nLlxyXG4gIH0sXHJcbiAge1xyXG4gICAgeWVhcjogJ1Jpb3QgJiBCbGl6emFyZCcsXHJcbiAgICB0ZXh0OiBcIklmIHlvdSdyZSByZWFkaW5nIHRoaXMsIHBsZWFzZSBnaXZlIG1lIGEgam9iLiBcXG4gKkVkaXQ6IEkgZ290IGEgam9iIDpEXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==