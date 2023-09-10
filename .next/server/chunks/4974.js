exports.id = 4974;
exports.ids = [4974];
exports.modules = {

/***/ 67146:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63425));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16373));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54390));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 52990));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84102))

/***/ }),

/***/ 63425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ forms_AccountProfile)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(83894);
// EXTERNAL MODULE: ./components/ui/form.tsx + 1 modules
var ui_form = __webpack_require__(1753);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(5538);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(44368);
// EXTERNAL MODULE: ./components/ui/textarea.tsx
var ui_textarea = __webpack_require__(21460);
// EXTERNAL MODULE: ./node_modules/@uploadthing/react/dist/hooks.mjs + 8 modules
var hooks = __webpack_require__(8425);
;// CONCATENATED MODULE: ./lib/uploadthing.ts
// Resource: https://docs.uploadthing.com/api-reference/react#generatereacthelpers
// Copy paste (be careful with imports)

const { useUploadThing, uploadFiles } = (0,hooks/* generateReactHelpers */.$)();

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(19098);
;// CONCATENATED MODULE: ./lib/validations/user.ts

const UserValidation = lib/* object */.Ry({
    profile_photo: lib/* string */.Z_().url().nonempty(),
    name: lib/* string */.Z_().min(3, {
        message: "Minimum 3 characters."
    }).max(30, {
        message: "Maximum 30 caracters."
    }),
    username: lib/* string */.Z_().min(3, {
        message: "Minimum 3 characters."
    }).max(30, {
        message: "Maximum 30 caracters."
    }),
    bio: lib/* string */.Z_().min(3, {
        message: "Minimum 3 characters."
    }).max(1000, {
        message: "Maximum 1000 caracters."
    })
});

// EXTERNAL MODULE: ./node_modules/next/dist/client/app-call-server.js
var app_call_server = __webpack_require__(56937);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js
var action_proxy = __webpack_require__(53009);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(61324);
;// CONCATENATED MODULE: ./lib/actions/user.actions.ts



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ fetchUser,updateUser,fetchUserPosts,fetchUsers,getActivity */ 

var fetchUser = (0,action_client_wrapper/* default */.Z)("e5d807b1e768e51cfbf3d1fc3a0cb34dbeed7409");
var updateUser = (0,action_client_wrapper/* default */.Z)("e625189055d86d8ae1190f3a0723e73ee0303261");
var fetchUserPosts = (0,action_client_wrapper/* default */.Z)("077dbd9901e140adb33476885e823d552f134066");
var fetchUsers = (0,action_client_wrapper/* default */.Z)("937e5f35ee0fd3414436f20057efef8a65f3295f");
var getActivity = (0,action_client_wrapper/* default */.Z)("d4f9d2bbf29d579d826dcfee8bd54d39dfeecc47");


;// CONCATENATED MODULE: ./components/forms/AccountProfile.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













const AccountProfile = ({ user, btnTitle })=>{
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const { startUpload } = useUploadThing("media");
    const [files, setFiles] = (0,react_experimental_.useState)([]);
    const form = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod/* zodResolver */.F)(UserValidation),
        defaultValues: {
            profile_photo: user?.image ? user.image : "",
            name: user?.name ? user.name : "",
            username: user?.username ? user.username : "",
            bio: user?.bio ? user.bio : ""
        }
    });
    const onSubmit = async (values)=>{
        const blob = values.profile_photo;
        const hasImageChanged = (0,utils/* isBase64Image */.dY)(blob);
        if (hasImageChanged) {
            const imgRes = await startUpload(files);
            if (imgRes && imgRes[0].fileUrl) {
                values.profile_photo = imgRes[0].fileUrl;
            }
        }
        await updateUser({
            name: values.name,
            path: pathname,
            username: values.username,
            userId: user.id,
            bio: values.bio,
            image: values.profile_photo
        });
        if (pathname === "/profile/edit") {
            router.back();
        } else {
            router.push("/");
        }
    };
    const handleImage = (e, fieldChange)=>{
        e.preventDefault();
        const fileReader = new FileReader();
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFiles(Array.from(e.target.files));
            if (!file.type.includes("image")) return;
            fileReader.onload = async (event)=>{
                const imageDataUrl = event.target?.result?.toString() || "";
                fieldChange(imageDataUrl);
            };
            fileReader.readAsDataURL(file);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* Form */.l0, {
        ...form,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: "flex flex-col justify-start gap-10",
            onSubmit: form.handleSubmit(onSubmit),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormField */.Wi, {
                    control: form.control,
                    name: "profile_photo",
                    render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_form/* FormItem */.xJ, {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormLabel */.lX, {
                                    className: "account-form_image-label",
                                    children: field.value ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: field.value,
                                        alt: "profile_icon",
                                        width: 96,
                                        height: 96,
                                        priority: true,
                                        className: "rounded-full object-contain"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/assets/profile.svg",
                                        alt: "profile_icon",
                                        width: 24,
                                        height: 24,
                                        className: "object-contain"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormControl */.NI, {
                                    className: "flex-1 text-base-semibold text-gray-200",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                        type: "file",
                                        accept: "image/*",
                                        placeholder: "Add profile photo",
                                        className: "account-form_image-input",
                                        onChange: (e)=>handleImage(e, field.onChange)
                                    })
                                })
                            ]
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormField */.Wi, {
                    control: form.control,
                    name: "name",
                    render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_form/* FormItem */.xJ, {
                            className: "flex w-full flex-col gap-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormLabel */.lX, {
                                    className: "text-base-semibold text-light-2",
                                    children: "Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormControl */.NI, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                        type: "text",
                                        className: "account-form_input no-focus",
                                        ...field
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormMessage */.zG, {})
                            ]
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormField */.Wi, {
                    control: form.control,
                    name: "username",
                    render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_form/* FormItem */.xJ, {
                            className: "flex w-full flex-col gap-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormLabel */.lX, {
                                    className: "text-base-semibold text-light-2",
                                    children: "Username"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormControl */.NI, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                        type: "text",
                                        className: "account-form_input no-focus",
                                        ...field
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormMessage */.zG, {})
                            ]
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormField */.Wi, {
                    control: form.control,
                    name: "bio",
                    render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_form/* FormItem */.xJ, {
                            className: "flex w-full flex-col gap-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormLabel */.lX, {
                                    className: "text-base-semibold text-light-2",
                                    children: "Bio"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormControl */.NI, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_textarea/* Textarea */.g, {
                                        rows: 10,
                                        className: "account-form_input no-focus",
                                        ...field
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_form/* FormMessage */.zG, {})
                            ]
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                    type: "submit",
                    className: "bg-primary-500",
                    children: btnTitle
                })
            ]
        })
    });
};
/* harmony default export */ const forms_AccountProfile = (AccountProfile);


/***/ }),

/***/ 5538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12857);



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-slate-200 border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-800", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 21460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12857);



const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex min-h-[80px] w-full rounded-md border border-slate-200 border-slate-200 bg-transparent px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-800", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";



/***/ }),

/***/ 63054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/bhupeshsinghchauhan/Documents/GitHub/Thread-Clone/components/forms/AccountProfile.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;