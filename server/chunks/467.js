exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 4728:
/***/ ((module) => {

// Exports
module.exports = {
	"pageSocial": "PageSocial_pageSocial__2q72j",
	"action": "PageSocial_action__l2jzO",
	"actionBg": "PageSocial_actionBg__VdO2Y",
	"actionBgPane": "PageSocial_actionBgPane__iaA3V",
	"facebook": "PageSocial_facebook__ShnKd",
	"twitter": "PageSocial_twitter__Q7LHY",
	"linkedin": "PageSocial_linkedin__24DsJ",
	"github": "PageSocial_github___g2RK",
	"youtube": "PageSocial_youtube__19ARa",
	"medium": "PageSocial_medium__fa8tD",
	"newsletter": "PageSocial_newsletter__tF684",
	"email": "PageSocial_email__9d8lS",
	"links": "PageSocial_links__q1XwB"
};


/***/ }),

/***/ 2980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* unused harmony export FooterImpl */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_icons_all_files_fa_FaEnvelopeOpenText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9407);
/* harmony import */ var _react_icons_all_files_fa_FaEnvelopeOpenText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaEnvelopeOpenText__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6740);
/* harmony import */ var _react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_icons_all_files_fa_FaLinkedin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6811);
/* harmony import */ var _react_icons_all_files_fa_FaLinkedin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaLinkedin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_icons_all_files_fa_FaMastodon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3566);
/* harmony import */ var _react_icons_all_files_fa_FaMastodon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaMastodon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_icons_all_files_fa_FaTwitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1574);
/* harmony import */ var _react_icons_all_files_fa_FaTwitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaTwitter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_icons_all_files_fa_FaYoutube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5566);
/* harmony import */ var _react_icons_all_files_fa_FaYoutube__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaYoutube__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _react_icons_all_files_fa_FaZhihu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5171);
/* harmony import */ var _react_icons_all_files_fa_FaZhihu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_fa_FaZhihu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9312);
/* harmony import */ var _react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6402);
/* harmony import */ var _react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4872);
/* harmony import */ var _lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6465);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1935);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_11__]);
_lib_config__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














// TODO: merge the data and icons from PageSocial with the social links in Footer
const FooterImpl = ()=>{
    const [hasMounted, setHasMounted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const { isDarkMode , toggleDarkMode  } = (0,_lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_12__/* .useDarkMode */ .v)();
    const onToggleDarkMode = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((e)=>{
        e.preventDefault();
        toggleDarkMode();
    }, [
        toggleDarkMode
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setHasMounted(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().footer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().copyright),
                children: [
                    "Copyright 2022 ",
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .author */ .v
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().settings),
                children: hasMounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().toggleDarkMode),
                    href: "#",
                    role: "button",
                    onClick: onToggleDarkMode,
                    title: "Toggle dark mode",
                    children: isDarkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_9__.IoMoonSharp, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_10__.IoSunnyOutline, {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().social),
                children: [
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .twitter */ .km && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().twitter),
                        href: `https://twitter.com/${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .twitter */ .km}`,
                        title: `Twitter @${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .twitter */ .km}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_fa_FaTwitter__WEBPACK_IMPORTED_MODULE_6__.FaTwitter, {})
                    }),
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .mastodon */ .BP && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().mastodon),
                        href: _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .mastodon */ .BP,
                        title: `Mastodon ${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .getMastodonHandle */ .WJ()}`,
                        rel: "me",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_fa_FaMastodon__WEBPACK_IMPORTED_MODULE_5__.FaMastodon, {})
                    }),
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .zhihu */ .mo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().zhihu),
                        href: `https://zhihu.com/people/${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .zhihu */ .mo}`,
                        title: `Zhihu @${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .zhihu */ .mo}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_fa_FaZhihu__WEBPACK_IMPORTED_MODULE_8__.FaZhihu, {})
                    }),
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .github */ .bW && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().github),
                        href: `https://github.com/${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .github */ .bW}`,
                        title: `GitHub @${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .github */ .bW}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {})
                    }),
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .linkedin */ .kG && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().linkedin),
                        href: `https://www.linkedin.com/in/${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .linkedin */ .kG}`,
                        title: `LinkedIn ${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .author */ .v}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_fa_FaLinkedin__WEBPACK_IMPORTED_MODULE_4__.FaLinkedin, {})
                    }),
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .newsletter */ .NN && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().newsletter),
                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .newsletter */ .NN}`,
                        title: `Newsletter ${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .author */ .v}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_fa_FaEnvelopeOpenText__WEBPACK_IMPORTED_MODULE_2__.FaEnvelopeOpenText, {})
                    }),
                    _lib_config__WEBPACK_IMPORTED_MODULE_11__/* .youtube */ .ZB && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_13___default().youtube),
                        href: `https://www.youtube.com/${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .youtube */ .ZB}`,
                        title: `YouTube ${_lib_config__WEBPACK_IMPORTED_MODULE_11__/* .author */ .v}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_fa_FaYoutube__WEBPACK_IMPORTED_MODULE_7__.FaYoutube, {})
                    })
                ]
            })
        ]
    });
};
const Footer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.memo(FooterImpl);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ GitHubShareButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1935);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);



const GitHubShareButton = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "https://github.com/transitive-bullshit/nextjs-notion-starter-kit",
        target: "_blank",
        rel: "noopener noreferrer",
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().githubCorner),
        "aria-label": "View source on GitHub",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "80",
            height: "80",
            viewBox: "0 0 250 250",
            style: {
                fill: "#70B7FD",
                color: "#fff",
                position: "absolute",
                zIndex: 1001,
                top: 0,
                right: 0,
                border: 0,
                transform: "scale(1, 1)"
            },
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                    fill: "currentColor",
                    style: {
                        transformOrigin: "130px 106px"
                    },
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().octoArm)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                    fill: "currentColor",
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().octoBody)
                })
            ]
        })
    });
};


/***/ }),

/***/ 8450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ Loading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/styles.module.css
var styles_module = __webpack_require__(1935);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./components/LoadingIcon.tsx




const LoadingIcon = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: external_classnames_default()((styles_module_default()).loadingIcon, className),
        ...rest,
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    x1: "28.1542969%",
                    y1: "63.7402344%",
                    x2: "74.6289062%",
                    y2: "17.7832031%",
                    id: "linearGradient-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: "rgba(164, 164, 164, 1)",
                            offset: "0%"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: "rgba(164, 164, 164, 0)",
                            stopOpacity: "0",
                            offset: "100%"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                id: "Page-1",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    transform: "translate(-236.000000, -286.000000)",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        transform: "translate(238.000000, 286.000000)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                id: "Oval-2",
                                stroke: "url(#linearGradient-1)",
                                strokeWidth: "4",
                                cx: "10",
                                cy: "12",
                                r: "10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M10,2 C4.4771525,2 0,6.4771525 0,12",
                                id: "Oval-2",
                                stroke: "rgba(164, 164, 164, 1)",
                                strokeWidth: "4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                id: "Rectangle-1",
                                fill: "rgba(164, 164, 164, 1)",
                                x: "8",
                                y: "0",
                                width: "4",
                                height: "4",
                                rx: "8"
                            })
                        ]
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Loading.tsx




const Loading = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingIcon, {})
    });


/***/ }),

/***/ 6355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ NotionPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8751);
/* harmony import */ var react_body_classname__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2142);
/* harmony import */ var react_body_classname__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_body_classname__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5574);
/* harmony import */ var react_tweet_embed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1177);
/* harmony import */ var react_tweet_embed__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tweet_embed__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4872);
/* harmony import */ var _lib_map_image_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5085);
/* harmony import */ var _lib_map_page_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5595);
/* harmony import */ var _lib_search_notion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1535);
/* harmony import */ var _lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6465);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2980);
/* harmony import */ var _GitHubShareButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4903);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8450);
/* harmony import */ var _NotionPageHeader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4181);
/* harmony import */ var _Page404__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2484);
/* harmony import */ var _PageAside__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1009);
/* harmony import */ var _PageHead__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1719);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1935);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_7__, react_notion_x__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_12__, _lib_map_image_url__WEBPACK_IMPORTED_MODULE_13__, _lib_map_page_url__WEBPACK_IMPORTED_MODULE_14__, _lib_search_notion__WEBPACK_IMPORTED_MODULE_15__, _Footer__WEBPACK_IMPORTED_MODULE_17__, _NotionPageHeader__WEBPACK_IMPORTED_MODULE_20__, _Page404__WEBPACK_IMPORTED_MODULE_21__, _PageAside__WEBPACK_IMPORTED_MODULE_22__, _PageHead__WEBPACK_IMPORTED_MODULE_23__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_7__, react_notion_x__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_12__, _lib_map_image_url__WEBPACK_IMPORTED_MODULE_13__, _lib_map_page_url__WEBPACK_IMPORTED_MODULE_14__, _lib_search_notion__WEBPACK_IMPORTED_MODULE_15__, _Footer__WEBPACK_IMPORTED_MODULE_17__, _NotionPageHeader__WEBPACK_IMPORTED_MODULE_20__, _Page404__WEBPACK_IMPORTED_MODULE_21__, _PageAside__WEBPACK_IMPORTED_MODULE_22__, _PageHead__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























// -----------------------------------------------------------------------------
// dynamic imports for optional components
// -----------------------------------------------------------------------------
const Code = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 794).then(__webpack_require__.bind(__webpack_require__, 1794)).then(async (m)=>{
        // add / remove any prism syntaxes here
        await Promise.allSettled([
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4899, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9545, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9347, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7632, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7909, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4800, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 615, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4602, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5070, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8568, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9734, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5014, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5478, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2615, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1126, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4962, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9351, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6772, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5507, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 3786, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 712, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1508, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8352, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1465, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6819, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1360, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 646, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7449, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9815, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1742, 23)),
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5019, 23))
        ]);
        return m.Code;
    }), {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "prismjs/components/prism-yaml.js"
        ]
    }
});
const Collection = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 635).then(__webpack_require__.bind(__webpack_require__, 635)).then((m)=>m.Collection), {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/collection"
        ]
    }
});
const Equation = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 233).then(__webpack_require__.bind(__webpack_require__, 233)).then((m)=>m.Equation), {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/equation"
        ]
    }
});
const Pdf = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/pdf"
        ]
    },
    ssr: false
});
const Modal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/NotionPage.tsx -> " + "react-notion-x/build/third-party/modal"
        ]
    },
    ssr: false
});
const Tweet = ({ id  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tweet_embed__WEBPACK_IMPORTED_MODULE_10___default()), {
        tweetId: id
    });
};
const propertyLastEditedTimeValue = ({ block , pageHeader  }, defaultFn)=>{
    if (pageHeader && block?.last_edited_time) {
        return `Last updated ${(0,notion_utils__WEBPACK_IMPORTED_MODULE_7__.formatDate)(block?.last_edited_time, {
            month: "long"
        })}`;
    }
    return defaultFn();
};
const propertyDateValue = ({ data , schema , pageHeader  }, defaultFn)=>{
    if (pageHeader && schema?.name?.toLowerCase() === "published") {
        const publishDate = data?.[0]?.[1]?.[0]?.[1]?.start_date;
        if (publishDate) {
            return `${(0,notion_utils__WEBPACK_IMPORTED_MODULE_7__.formatDate)(publishDate, {
                month: "long"
            })}`;
        }
    }
    return defaultFn();
};
const propertyTextValue = ({ schema , pageHeader  }, defaultFn)=>{
    if (pageHeader && schema?.name?.toLowerCase() === "author") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: defaultFn()
        });
    }
    return defaultFn();
};
const NotionPage = ({ site , recordMap , error , pageId  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const lite = (0,react_use__WEBPACK_IMPORTED_MODULE_11__.useSearchParam)("lite");
    const components = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>({
            nextImage: (next_image__WEBPACK_IMPORTED_MODULE_3___default()),
            nextLink: (next_link__WEBPACK_IMPORTED_MODULE_4___default()),
            Code,
            Collection,
            Equation,
            Pdf,
            Modal,
            Tweet,
            Header: _NotionPageHeader__WEBPACK_IMPORTED_MODULE_20__/* .NotionPageHeader */ .k,
            propertyLastEditedTimeValue,
            propertyTextValue,
            propertyDateValue
        }), []);
    // lite mode is for oembed
    const isLiteMode = lite === "true";
    const { isDarkMode  } = (0,_lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_16__/* .useDarkMode */ .v)();
    const siteMapPageUrl = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        const params = {};
        if (lite) params.lite = lite;
        const searchParams = new URLSearchParams(params);
        return (0,_lib_map_page_url__WEBPACK_IMPORTED_MODULE_14__/* .mapPageUrl */ .O)(site, recordMap, searchParams);
    }, [
        site,
        recordMap,
        lite
    ]);
    const keys = Object.keys(recordMap?.block || {});
    const block = recordMap?.block?.[keys[0]]?.value;
    // const isRootPage =
    //   parsePageId(block?.id) === parsePageId(site?.rootNotionPageId)
    const isBlogPost = block?.type === "page" && block?.parent_table === "collection";
    const showTableOfContents = !!isBlogPost;
    const minTableOfContentsItems = 3;
    const pageAside = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageAside__WEBPACK_IMPORTED_MODULE_22__/* .PageAside */ .A, {
            block: block,
            recordMap: recordMap,
            isBlogPost: isBlogPost
        }), [
        block,
        recordMap,
        isBlogPost
    ]);
    const footer = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_17__/* .Footer */ .$, {}), []);
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_19__/* .Loading */ .g, {});
    }
    if (error || !site || !block) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Page404__WEBPACK_IMPORTED_MODULE_21__/* .Page404 */ .l, {
            site: site,
            pageId: pageId,
            error: error
        });
    }
    const title = (0,notion_utils__WEBPACK_IMPORTED_MODULE_7__.getBlockTitle)(block, recordMap) || site.name;
    console.log("notion page", {
        isDev: _lib_config__WEBPACK_IMPORTED_MODULE_12__/* .isDev */ .r8,
        title,
        pageId,
        rootNotionPageId: site.rootNotionPageId,
        recordMap
    });
    if (!_lib_config__WEBPACK_IMPORTED_MODULE_12__/* .isServer */ .sk) {
        // add important objects to the window global for easy debugging
        const g = window;
        g.pageId = pageId;
        g.recordMap = recordMap;
        g.block = block;
    }
    const canonicalPageUrl = !_lib_config__WEBPACK_IMPORTED_MODULE_12__/* .isDev */ .r8 && (0,_lib_map_page_url__WEBPACK_IMPORTED_MODULE_14__/* .getCanonicalPageUrl */ .K)(site, recordMap)(pageId);
    const socialImage = (0,_lib_map_image_url__WEBPACK_IMPORTED_MODULE_13__/* .mapImageUrl */ .H)((0,notion_utils__WEBPACK_IMPORTED_MODULE_7__.getPageProperty)("Social Image", block, recordMap) || block.format?.page_cover || _lib_config__WEBPACK_IMPORTED_MODULE_12__/* .defaultPageCover */ .yN, block);
    const socialDescription = (0,notion_utils__WEBPACK_IMPORTED_MODULE_7__.getPageProperty)("Description", block, recordMap) || _lib_config__WEBPACK_IMPORTED_MODULE_12__/* .description */ .WL;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageHead__WEBPACK_IMPORTED_MODULE_23__/* .PageHead */ .y, {
                pageId: pageId,
                site: site,
                title: title,
                description: socialDescription,
                image: socialImage,
                url: canonicalPageUrl
            }),
            isLiteMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_body_classname__WEBPACK_IMPORTED_MODULE_8___default()), {
                className: "notion-lite"
            }),
            isDarkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_body_classname__WEBPACK_IMPORTED_MODULE_8___default()), {
                className: "dark-mode"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_notion_x__WEBPACK_IMPORTED_MODULE_9__.NotionRenderer, {
                bodyClassName: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_styles_module_css__WEBPACK_IMPORTED_MODULE_24___default().notion), pageId === site.rootNotionPageId && "index-page"),
                darkMode: isDarkMode,
                components: components,
                recordMap: recordMap,
                rootPageId: site.rootNotionPageId,
                rootDomain: site.domain,
                fullPage: !isLiteMode,
                previewImages: !!recordMap.preview_images,
                showCollectionViewDropdown: false,
                showTableOfContents: showTableOfContents,
                minTableOfContentsItems: minTableOfContentsItems,
                defaultPageIcon: _lib_config__WEBPACK_IMPORTED_MODULE_12__/* .defaultPageIcon */ .SH,
                defaultPageCover: _lib_config__WEBPACK_IMPORTED_MODULE_12__/* .defaultPageCover */ .yN,
                defaultPageCoverPosition: _lib_config__WEBPACK_IMPORTED_MODULE_12__/* .defaultPageCoverPosition */ .Wx,
                mapPageUrl: siteMapPageUrl,
                mapImageUrl: _lib_map_image_url__WEBPACK_IMPORTED_MODULE_13__/* .mapImageUrl */ .H,
                searchNotion: _lib_config__WEBPACK_IMPORTED_MODULE_12__/* .isSearchEnabled */ .eF ? _lib_search_notion__WEBPACK_IMPORTED_MODULE_15__/* .searchNotion */ .$ : null,
                pageAside: pageAside,
                footer: footer
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GitHubShareButton__WEBPACK_IMPORTED_MODULE_18__/* .GitHubShareButton */ ._, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ NotionPageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9312);
/* harmony import */ var _react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6402);
/* harmony import */ var _react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5574);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4872);
/* harmony import */ var _lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6465);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1935);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_notion_x__WEBPACK_IMPORTED_MODULE_5__, _lib_config__WEBPACK_IMPORTED_MODULE_6__]);
([react_notion_x__WEBPACK_IMPORTED_MODULE_5__, _lib_config__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ToggleThemeButton = ()=>{
    const [hasMounted, setHasMounted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const { isDarkMode , toggleDarkMode  } = (0,_lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_7__/* .useDarkMode */ .v)();
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setHasMounted(true);
    }, []);
    const onToggleTheme = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        toggleDarkMode();
    }, [
        toggleDarkMode
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("breadcrumb", "button", !hasMounted && (_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().hidden)),
        onClick: onToggleTheme,
        children: hasMounted && isDarkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_2__.IoMoonSharp, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_3__.IoSunnyOutline, {})
    });
};
const NotionPageHeader = ({ block  })=>{
    const { components , mapPageUrl  } = (0,react_notion_x__WEBPACK_IMPORTED_MODULE_5__.useNotionContext)();
    if (_lib_config__WEBPACK_IMPORTED_MODULE_6__/* .navigationStyle */ .wW === "default") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_notion_x__WEBPACK_IMPORTED_MODULE_5__.Header, {
            block: block
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "notion-header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "notion-nav-header",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_notion_x__WEBPACK_IMPORTED_MODULE_5__.Breadcrumbs, {
                    block: block,
                    rootOnly: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "notion-nav-header-rhs breadcrumbs",
                    children: [
                        _lib_config__WEBPACK_IMPORTED_MODULE_6__/* .navigationLinks */ .tg?.map((link, index)=>{
                            if (!link.pageId && !link.url) {
                                return null;
                            }
                            if (link.pageId) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components.PageLink, {
                                    href: mapPageUrl(link.pageId),
                                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().navLink), "breadcrumb", "button"),
                                    children: link.title
                                }, index);
                            } else {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components.Link, {
                                    href: link.url,
                                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().navLink), "breadcrumb", "button"),
                                    children: link.title
                                }, index);
                            }
                        }).filter(Boolean),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToggleThemeButton, {}),
                        _lib_config__WEBPACK_IMPORTED_MODULE_6__/* .isSearchEnabled */ .eF && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_notion_x__WEBPACK_IMPORTED_MODULE_5__.Search, {
                            block: block,
                            title: null
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PageActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_icons_all_files_ai_AiOutlineRetweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7927);
/* harmony import */ var _react_icons_all_files_ai_AiOutlineRetweet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_ai_AiOutlineRetweet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_icons_all_files_io5_IoHeartOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9848);
/* harmony import */ var _react_icons_all_files_io5_IoHeartOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_icons_all_files_io5_IoHeartOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1935);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview
 */ const PageActions = ({ tweet  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageActions),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().likeTweet),
                href: `https://twitter.com/intent/like?tweet_id=${tweet}`,
                target: "_blank",
                rel: "noopener noreferrer",
                title: "Like this post on Twitter",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_io5_IoHeartOutline__WEBPACK_IMPORTED_MODULE_3__.IoHeartOutline, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().retweet),
                href: `https://twitter.com/intent/retweet?tweet_id=${tweet}`,
                target: "_blank",
                rel: "noopener noreferrer",
                title: "Retweet this post on Twitter",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_icons_all_files_ai_AiOutlineRetweet__WEBPACK_IMPORTED_MODULE_2__.AiOutlineRetweet, {})
            })
        ]
    });
};


/***/ }),

/***/ 1009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PageAside)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_get_page_tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9408);
/* harmony import */ var _PageActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9826);
/* harmony import */ var _PageSocial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_get_page_tweet__WEBPACK_IMPORTED_MODULE_2__, _PageSocial__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_get_page_tweet__WEBPACK_IMPORTED_MODULE_2__, _PageSocial__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PageAside = ({ block , recordMap , isBlogPost  })=>{
    if (!block) {
        return null;
    }
    // only display comments and page actions on blog post pages
    if (isBlogPost) {
        const tweet = (0,_lib_get_page_tweet__WEBPACK_IMPORTED_MODULE_2__/* .getPageTweet */ .W)(block, recordMap);
        if (!tweet) {
            return null;
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageActions__WEBPACK_IMPORTED_MODULE_3__/* .PageActions */ .Q, {
            tweet: tweet
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageSocial__WEBPACK_IMPORTED_MODULE_4__/* .PageSocial */ .K, {});
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ PageSocial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4872);
/* harmony import */ var _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4728);
/* harmony import */ var _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_3__]);
_lib_config__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const socialLinks = [
    _lib_config__WEBPACK_IMPORTED_MODULE_3__/* .twitter */ .km && {
        name: "twitter",
        href: `https://twitter.com/${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .twitter */ .km}`,
        title: `Twitter @${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .twitter */ .km}`,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
            })
        })
    },
    _lib_config__WEBPACK_IMPORTED_MODULE_3__/* .github */ .bW && {
        name: "github",
        href: `https://github.com/${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .github */ .bW}`,
        title: `GitHub @${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .github */ .bW}`,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            })
        })
    },
    _lib_config__WEBPACK_IMPORTED_MODULE_3__/* .linkedin */ .kG && {
        name: "linkedin",
        href: `https://www.linkedin.com/in/${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .linkedin */ .kG}`,
        title: `LinkedIn ${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .author */ .v}`,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"
            })
        })
    },
    _lib_config__WEBPACK_IMPORTED_MODULE_3__/* .newsletter */ .NN && {
        name: "newsletter",
        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .newsletter */ .NN}`,
        title: `Newsletter ${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .author */ .v}`,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z"
            })
        })
    },
    _lib_config__WEBPACK_IMPORTED_MODULE_3__/* .youtube */ .ZB && {
        name: "youtube",
        href: `https://www.youtube.com/${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .youtube */ .ZB}`,
        title: `YouTube ${_lib_config__WEBPACK_IMPORTED_MODULE_3__/* .youtube */ .ZB}`,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
            })
        })
    }
].filter(Boolean);
const PageSocial = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageSocial),
        children: socialLinks.map((action)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default().action), (_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default())[action.name]),
                href: action.href,
                title: action.title,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default().actionBg),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default().actionBgPane)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default().actionBg),
                        children: action.icon
                    })
                ]
            }, action.name))
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ pageAcl)
/* harmony export */ });
async function pageAcl({ site , recordMap , pageId  }) {
    if (!site) {
        return {
            error: {
                statusCode: 404,
                message: "Unable to resolve notion site"
            }
        };
    }
    if (!recordMap) {
        return {
            error: {
                statusCode: 404,
                message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" not found.`
            }
        };
    }
    const keys = Object.keys(recordMap.block);
    const rootKey = keys[0];
    if (!rootKey) {
        return {
            error: {
                statusCode: 404,
                message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" invalid data.`
            }
        };
    }
    const rootValue = recordMap.block[rootKey]?.value;
    const rootSpaceId = rootValue?.space_id;
    if (rootSpaceId && site.rootNotionSpaceId && rootSpaceId !== site.rootNotionSpaceId) {
        if (true) {
            return {
                error: {
                    statusCode: 404,
                    message: `Notion page "${pageId}" doesn't belong to the Notion workspace owned by "${site.domain}".`
                }
            };
        }
    }
}


/***/ }),

/***/ 8268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _keyvhq_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3050);
/* harmony import */ var _keyvhq_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keyvhq_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keyvhq_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1888);
/* harmony import */ var _keyvhq_redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keyvhq_redis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_2__]);
_config__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let db;
if (_config__WEBPACK_IMPORTED_MODULE_2__/* .isRedisEnabled */ .YZ) {
    const keyvRedis = new (_keyvhq_redis__WEBPACK_IMPORTED_MODULE_1___default())(_config__WEBPACK_IMPORTED_MODULE_2__/* .redisUrl */ .Xc);
    db = new (_keyvhq_core__WEBPACK_IMPORTED_MODULE_0___default())({
        store: keyvRedis,
        namespace: _config__WEBPACK_IMPORTED_MODULE_2__/* .redisNamespace */ .VO || undefined
    });
} else {
    db = new (_keyvhq_core__WEBPACK_IMPORTED_MODULE_0___default())();
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9408:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getPageTweet)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__]);
notion_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getPageTweet(block, recordMap) {
    return (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getPageProperty)("Tweet", block, recordMap);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ mapImageUrl)
/* harmony export */ });
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5574);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_notion_x__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__]);
([react_notion_x__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const mapImageUrl = (url, block)=>{
    if (url === _config__WEBPACK_IMPORTED_MODULE_1__/* .defaultPageCover */ .yN || url === _config__WEBPACK_IMPORTED_MODULE_1__/* .defaultPageIcon */ .SH) {
        return url;
    }
    return (0,react_notion_x__WEBPACK_IMPORTED_MODULE_0__.defaultMapImageUrl)(url, block);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ getPage)
/* harmony export */ });
/* unused harmony export search */
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8098);
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9726);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4872);
/* harmony import */ var _notion_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8730);
/* harmony import */ var _preview_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__, p_map__WEBPACK_IMPORTED_MODULE_1__, p_memoize__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__, _notion_api__WEBPACK_IMPORTED_MODULE_4__, _preview_images__WEBPACK_IMPORTED_MODULE_5__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_0__, p_map__WEBPACK_IMPORTED_MODULE_1__, p_memoize__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__, _notion_api__WEBPACK_IMPORTED_MODULE_4__, _preview_images__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getNavigationLinkPages = (0,p_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(async ()=>{
    const navigationLinkPageIds = (_config__WEBPACK_IMPORTED_MODULE_3__/* .navigationLinks */ .tg || []).map((link)=>link.pageId).filter(Boolean);
    if (_config__WEBPACK_IMPORTED_MODULE_3__/* .navigationStyle */ .wW !== "default" && navigationLinkPageIds.length) {
        return (0,p_map__WEBPACK_IMPORTED_MODULE_1__["default"])(navigationLinkPageIds, async (navigationLinkPageId)=>_notion_api__WEBPACK_IMPORTED_MODULE_4__/* .notion.getPage */ .R.getPage(navigationLinkPageId, {
                chunkLimit: 1,
                fetchMissingBlocks: false,
                fetchCollections: false,
                signFileUrls: false
            }), {
            concurrency: 4
        });
    }
    return [];
});
async function getPage(pageId) {
    let recordMap = await _notion_api__WEBPACK_IMPORTED_MODULE_4__/* .notion.getPage */ .R.getPage(pageId);
    if (_config__WEBPACK_IMPORTED_MODULE_3__/* .navigationStyle */ .wW !== "default") {
        // ensure that any pages linked to in the custom navigation header have
        // their block info fully resolved in the page record map so we know
        // the page title, slug, etc.
        const navigationLinkRecordMaps = await getNavigationLinkPages();
        if (navigationLinkRecordMaps?.length) {
            recordMap = navigationLinkRecordMaps.reduce((map, navigationLinkRecordMap)=>(0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.mergeRecordMaps)(map, navigationLinkRecordMap), recordMap);
        }
    }
    if (_config__WEBPACK_IMPORTED_MODULE_3__/* .isPreviewImageSupportEnabled */ .K6) {
        const previewImageMap = await (0,_preview_images__WEBPACK_IMPORTED_MODULE_5__/* .getPreviewImageMap */ .R)(recordMap);
        recordMap.preview_images = previewImageMap;
    }
    return recordMap;
}
async function search(params) {
    return notion.search(params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getPreviewImageMap)
/* harmony export */ });
/* unused harmony export getPreviewImage */
/* harmony import */ var got__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
/* harmony import */ var lqip_modern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1253);
/* harmony import */ var lqip_modern__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lqip_modern__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8751);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8098);
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9726);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4872);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8268);
/* harmony import */ var _map_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5085);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([got__WEBPACK_IMPORTED_MODULE_0__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, p_map__WEBPACK_IMPORTED_MODULE_3__, p_memoize__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__, _db__WEBPACK_IMPORTED_MODULE_6__, _map_image_url__WEBPACK_IMPORTED_MODULE_7__]);
([got__WEBPACK_IMPORTED_MODULE_0__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, p_map__WEBPACK_IMPORTED_MODULE_3__, p_memoize__WEBPACK_IMPORTED_MODULE_4__, _config__WEBPACK_IMPORTED_MODULE_5__, _db__WEBPACK_IMPORTED_MODULE_6__, _map_image_url__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getPreviewImageMap(recordMap) {
    const urls = (0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.getPageImageUrls)(recordMap, {
        mapImageUrl: _map_image_url__WEBPACK_IMPORTED_MODULE_7__/* .mapImageUrl */ .H
    }).concat([
        _config__WEBPACK_IMPORTED_MODULE_5__/* .defaultPageIcon */ .SH,
        _config__WEBPACK_IMPORTED_MODULE_5__/* .defaultPageCover */ .yN
    ]).filter(Boolean);
    const previewImagesMap = Object.fromEntries(await (0,p_map__WEBPACK_IMPORTED_MODULE_3__["default"])(urls, async (url)=>{
        const cacheKey = (0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeUrl)(url);
        return [
            cacheKey,
            await getPreviewImage(url, {
                cacheKey
            })
        ];
    }, {
        concurrency: 8
    }));
    return previewImagesMap;
}
async function createPreviewImage(url, { cacheKey  }) {
    try {
        try {
            const cachedPreviewImage = await _db__WEBPACK_IMPORTED_MODULE_6__.db.get(cacheKey);
            if (cachedPreviewImage) {
                return cachedPreviewImage;
            }
        } catch (err) {
            // ignore redis errors
            console.warn(`redis error get "${cacheKey}"`, err.message);
        }
        const { body  } = await (0,got__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
            responseType: "buffer"
        });
        const result = await lqip_modern__WEBPACK_IMPORTED_MODULE_1___default()(body);
        console.log("lqip", {
            ...result.metadata,
            url,
            cacheKey
        });
        const previewImage = {
            originalWidth: result.metadata.originalWidth,
            originalHeight: result.metadata.originalHeight,
            dataURIBase64: result.metadata.dataURIBase64
        };
        try {
            await _db__WEBPACK_IMPORTED_MODULE_6__.db.set(cacheKey, previewImage);
        } catch (err1) {
            // ignore redis errors
            console.warn(`redis error set "${cacheKey}"`, err1.message);
        }
        return previewImage;
    } catch (err2) {
        console.warn("failed to create preview image", url, err2.message);
        return null;
    }
}
const getPreviewImage = (0,p_memoize__WEBPACK_IMPORTED_MODULE_4__["default"])(createPreviewImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ resolveNotionPage)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
/* harmony import */ var _acl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1058);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4872);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8268);
/* harmony import */ var _get_site_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6655);
/* harmony import */ var _notion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__, _db__WEBPACK_IMPORTED_MODULE_2__, _get_site_map__WEBPACK_IMPORTED_MODULE_3__, _notion__WEBPACK_IMPORTED_MODULE_4__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_0__, _config__WEBPACK_IMPORTED_MODULE_1__, _db__WEBPACK_IMPORTED_MODULE_2__, _get_site_map__WEBPACK_IMPORTED_MODULE_3__, _notion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function resolveNotionPage(domain, rawPageId) {
    let pageId;
    let recordMap;
    if (rawPageId && rawPageId !== "index") {
        pageId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)(rawPageId);
        if (!pageId) {
            // check if the site configuration provides an override or a fallback for
            // the page's URI
            const override = _config__WEBPACK_IMPORTED_MODULE_1__/* .pageUrlOverrides */ ._w[rawPageId] || _config__WEBPACK_IMPORTED_MODULE_1__/* .pageUrlAdditions */ .mH[rawPageId];
            if (override) {
                pageId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)(override);
            }
        }
        const useUriToPageIdCache = true;
        const cacheKey = `uri-to-page-id:${domain}:${_config__WEBPACK_IMPORTED_MODULE_1__/* .environment */ .NZ}:${rawPageId}`;
        // TODO: should we use a TTL for these mappings or make them permanent?
        // const cacheTTL = 8.64e7 // one day in milliseconds
        const cacheTTL = undefined // disable cache TTL
        ;
        if (!pageId && useUriToPageIdCache) {
            try {
                // check if the database has a cached mapping of this URI to page ID
                pageId = await _db__WEBPACK_IMPORTED_MODULE_2__.db.get(cacheKey);
            // console.log(`redis get "${cacheKey}"`, pageId)
            } catch (err) {
                // ignore redis errors
                console.warn(`redis error get "${cacheKey}"`, err.message);
            }
        }
        if (pageId) {
            recordMap = await (0,_notion__WEBPACK_IMPORTED_MODULE_4__/* .getPage */ .f)(pageId);
        } else {
            // handle mapping of user-friendly canonical page paths to Notion page IDs
            // e.g., /developer-x-entrepreneur versus /71201624b204481f862630ea25ce62fe
            const siteMap = await (0,_get_site_map__WEBPACK_IMPORTED_MODULE_3__/* .getSiteMap */ .P)();
            pageId = siteMap?.canonicalPageMap[rawPageId];
            if (pageId) {
                // TODO: we're not re-using the page recordMap from siteMaps because it is
                // cached aggressively
                // recordMap = siteMap.pageMap[pageId]
                recordMap = await (0,_notion__WEBPACK_IMPORTED_MODULE_4__/* .getPage */ .f)(pageId);
                if (useUriToPageIdCache) {
                    try {
                        // update the database mapping of URI to pageId
                        await _db__WEBPACK_IMPORTED_MODULE_2__.db.set(cacheKey, pageId, cacheTTL);
                    // console.log(`redis set "${cacheKey}"`, pageId, { cacheTTL })
                    } catch (err1) {
                        // ignore redis errors
                        console.warn(`redis error set "${cacheKey}"`, err1.message);
                    }
                }
            } else {
                // note: we're purposefully not caching URI to pageId mappings for 404s
                return {
                    error: {
                        message: `Not found "${rawPageId}"`,
                        statusCode: 404
                    }
                };
            }
        }
    } else {
        pageId = _config__WEBPACK_IMPORTED_MODULE_1__/* .site.rootNotionPageId */ .lz.rootNotionPageId;
        console.log(_config__WEBPACK_IMPORTED_MODULE_1__/* .site */ .lz);
        recordMap = await (0,_notion__WEBPACK_IMPORTED_MODULE_4__/* .getPage */ .f)(pageId);
    }
    const props = {
        site: _config__WEBPACK_IMPORTED_MODULE_1__/* .site */ .lz,
        recordMap,
        pageId
    };
    return {
        ...props,
        ...await _acl__WEBPACK_IMPORTED_MODULE_5__/* .pageAcl */ .e(props)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ searchNotion)
/* harmony export */ });
/* harmony import */ var expiry_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9818);
/* harmony import */ var expiry_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(expiry_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7881);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9726);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([p_memoize__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__]);
([p_memoize__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import ky from 'ky'




const searchNotion = (0,p_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(searchNotionImpl, {
    cacheKey: (args)=>args[0]?.query,
    cache: new (expiry_map__WEBPACK_IMPORTED_MODULE_0___default())(10000)
});
async function searchNotionImpl(params) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(_config__WEBPACK_IMPORTED_MODULE_3__/* .api.searchNotion */ .hi.searchNotion, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "content-type": "application/json"
        }
    }).then((res)=>{
        if (res.ok) {
            return res;
        }
        // convert non-2xx HTTP responses into errors
        const error = new Error(res.statusText);
        error.response = res;
        return Promise.reject(error);
    }).then((res)=>res.json());
// return ky
//   .post(api.searchNotion, {
//     json: params
//   })
//   .json()
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var _fisch0920_use_dark_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
/* harmony import */ var _fisch0920_use_dark_mode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fisch0920_use_dark_mode__WEBPACK_IMPORTED_MODULE_0__);

function useDarkMode() {
    const darkMode = _fisch0920_use_dark_mode__WEBPACK_IMPORTED_MODULE_0___default()(false, {
        classNameDark: "dark-mode"
    });
    return {
        isDarkMode: darkMode.value,
        toggleDarkMode: darkMode.toggle
    };
}


/***/ })

};
;