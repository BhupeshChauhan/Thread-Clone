"use strict";
exports.id = 1065;
exports.ids = [1065];
exports.modules = {

/***/ 79636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_actions_thread_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99805);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function DeleteThread({ threadId, currentUserId, authorId, parentId, isComment }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (currentUserId !== authorId || pathname === "/") return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "/assets/delete.svg",
        alt: "delte",
        width: 18,
        height: 18,
        className: "cursor-pointer object-contain",
        onClick: async ()=>{
            await (0,_lib_actions_thread_actions__WEBPACK_IMPORTED_MODULE_3__/* .deleteThread */ .l8)(JSON.parse(threadId), pathname);
            if (!parentId || !isComment) {
                router.push("/");
            }
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteThread);


/***/ }),

/***/ 99805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ho: () => (/* binding */ addCommentToThread),
/* harmony export */   gK: () => (/* binding */ createThread),
/* harmony export */   l8: () => (/* binding */ deleteThread)
/* harmony export */ });
/* unused harmony exports fetchPosts, fetchThreadById */
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56937);
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53009);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61324);



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ fetchPosts,createThread,deleteThread,fetchThreadById,addCommentToThread */ 

var fetchPosts = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("ac51670028c29e7849b513f1979db83e8294c5f3");
var createThread = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("4b27cfcbfb8cd73d5558d1192a7d630e2ff5a87b");
var deleteThread = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("7bef3064424aefb8e0e8f63d4602b5c828fc0660");
var fetchThreadById = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("13e555ed7825e96044848b10c5c4bd490494900b");
var addCommentToThread = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("7a9374a1c2ba267143725d2f9e61a3bf0a6618ef");



/***/ }),

/***/ 13312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ cards_ThreadCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(85839);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/forms/DeleteThread.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/bhupeshsinghchauhan/Documents/GitHub/Thread-Clone/components/forms/DeleteThread.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const DeleteThread = (__default__);
;// CONCATENATED MODULE: ./components/cards/ThreadCard.tsx





function ThreadCard({ id, currentUserId, parentId, content, author, community, createdAt, comments, isComment }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: `flex w-full flex-col rounded-xl ${isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full flex-1 flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/profile/${author.id}`,
                                        className: "relative h-11 w-11",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: author.image,
                                            alt: "user_community_image",
                                            fill: true,
                                            className: "cursor-pointer rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "thread-card_bar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-full flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/profile/${author.id}`,
                                        className: "w-fit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "cursor-pointer text-base-semibold text-light-1",
                                            children: author.name
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-2 text-small-regular text-light-2",
                                        children: content
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `${isComment && "mb-10"} mt-5 flex flex-col gap-3`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex gap-3.5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/assets/heart-gray.svg",
                                                        alt: "heart",
                                                        width: 24,
                                                        height: 24,
                                                        className: "cursor-pointer object-contain"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `/thread/${id}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/assets/reply.svg",
                                                            alt: "heart",
                                                            width: 24,
                                                            height: 24,
                                                            className: "cursor-pointer object-contain"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/assets/repost.svg",
                                                        alt: "heart",
                                                        width: 24,
                                                        height: 24,
                                                        className: "cursor-pointer object-contain"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/assets/share.svg",
                                                        alt: "heart",
                                                        width: 24,
                                                        height: 24,
                                                        className: "cursor-pointer object-contain"
                                                    })
                                                ]
                                            }),
                                            isComment && comments.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/thread/${id}`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "mt-1 text-subtle-medium text-gray-1",
                                                    children: [
                                                        comments.length,
                                                        " repl",
                                                        comments.length > 1 ? "ies" : "y"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DeleteThread, {
                        threadId: JSON.stringify(id),
                        currentUserId: currentUserId,
                        authorId: author.id,
                        parentId: parentId,
                        isComment: isComment
                    })
                ]
            }),
            !isComment && comments.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-1 mt-3 flex items-center gap-2",
                children: [
                    comments.slice(0, 2).map((comment, index)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: comment.author.image,
                            alt: `user_${index}`,
                            width: 24,
                            height: 24,
                            className: `${index !== 0 && "-ml-5"} rounded-full object-cover`
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/thread/${id}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "mt-1 text-subtle-medium text-gray-1",
                            children: [
                                comments.length,
                                " repl",
                                comments.length > 1 ? "ies" : "y"
                            ]
                        })
                    })
                ]
            }),
            !isComment && community && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: `/communities/${community.id}`,
                className: "mt-5 flex items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-subtle-medium text-gray-1",
                        children: [
                            (0,utils/* formatDateString */.ie)(createdAt),
                            community && ` - ${community.name} Community`
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: community.image,
                        alt: community.name,
                        width: 14,
                        height: 14,
                        className: "ml-1 rounded-full object-cover"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const cards_ThreadCard = (ThreadCard);


/***/ })

};
;