exports.id = 6119;
exports.ids = [6119];
exports.modules = {

/***/ 76119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'ac51670028c29e7849b513f1979db83e8294c5f3': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22852)).then(mod => mod["fetchPosts"]),
'4b27cfcbfb8cd73d5558d1192a7d630e2ff5a87b': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22852)).then(mod => mod["createThread"]),
'7bef3064424aefb8e0e8f63d4602b5c828fc0660': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22852)).then(mod => mod["deleteThread"]),
'13e555ed7825e96044848b10c5c4bd490494900b': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22852)).then(mod => mod["fetchThreadById"]),
'7a9374a1c2ba267143725d2f9e61a3bf0a6618ef': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22852)).then(mod => mod["addCommentToThread"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  'ac51670028c29e7849b513f1979db83e8294c5f3': endpoint.bind(null, 'ac51670028c29e7849b513f1979db83e8294c5f3'),
  '4b27cfcbfb8cd73d5558d1192a7d630e2ff5a87b': endpoint.bind(null, '4b27cfcbfb8cd73d5558d1192a7d630e2ff5a87b'),
  '7bef3064424aefb8e0e8f63d4602b5c828fc0660': endpoint.bind(null, '7bef3064424aefb8e0e8f63d4602b5c828fc0660'),
  '13e555ed7825e96044848b10c5c4bd490494900b': endpoint.bind(null, '13e555ed7825e96044848b10c5c4bd490494900b'),
  '7a9374a1c2ba267143725d2f9e61a3bf0a6618ef': endpoint.bind(null, '7a9374a1c2ba267143725d2f9e61a3bf0a6618ef'),
}


/***/ }),

/***/ 22852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCommentToThread: () => (/* binding */ addCommentToThread),
/* harmony export */   createThread: () => (/* binding */ createThread),
/* harmony export */   deleteThread: () => (/* binding */ deleteThread),
/* harmony export */   fetchPosts: () => (/* binding */ fetchPosts),
/* harmony export */   fetchThreadById: () => (/* binding */ fetchThreadById)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18758);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67036);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13374);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21217);
/* harmony import */ var _models_thread_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50136);
/* harmony import */ var _models_community_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21033);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74050);
/* __next_internal_action_entry_do_not_use__ fetchPosts,createThread,deleteThread,fetchThreadById,addCommentToThread */ 





async function fetchPosts(pageNumber = 1, pageSize = 20) {
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();
    // Calculate the number of posts to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;
    // Create a query to fetch the posts that have no parent (top-level threads) (a thread that is not a comment/reply).
    const postsQuery = _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].find({
        parentId: {
            $in: [
                null,
                undefined
            ]
        }
    }).sort({
        createdAt: "desc"
    }).skip(skipAmount).limit(pageSize).populate({
        path: "author",
        model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__["default"]
    }).populate({
        path: "community",
        model: _models_community_model__WEBPACK_IMPORTED_MODULE_5__["default"]
    }).populate({
        path: "children",
        populate: {
            path: "author",
            model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__["default"],
            select: "_id name parentId image"
        }
    });
    // Count the total number of top-level posts (threads) i.e., threads that are not comments.
    const totalPostsCount = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].countDocuments({
        parentId: {
            $in: [
                null,
                undefined
            ]
        }
    }); // Get the total count of posts
    const posts = await postsQuery.exec();
    const isNext = totalPostsCount > skipAmount + posts.length;
    return {
        posts,
        isNext
    };
}
async function createThread({ text, author, communityId, path }) {
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();
        const communityIdObject = await _models_community_model__WEBPACK_IMPORTED_MODULE_5__["default"].findOne({
            id: communityId
        }, {
            _id: 1
        });
        const createdThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].create({
            text,
            author,
            community: communityIdObject
        });
        // Update User model
        await _models_user_model__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(author, {
            $push: {
                threads: createdThread._id
            }
        });
        if (communityIdObject) {
            // Update Community model
            await _models_community_model__WEBPACK_IMPORTED_MODULE_5__["default"].findByIdAndUpdate(communityIdObject, {
                $push: {
                    threads: createdThread._id
                }
            });
        }
        (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)(path);
    } catch (error) {
        throw new Error(`Failed to create thread: ${error.message}`);
    }
}
async function fetchAllChildThreads(threadId) {
    const childThreads = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].find({
        parentId: threadId
    });
    const descendantThreads = [];
    for (const childThread of childThreads){
        const descendants = await fetchAllChildThreads(childThread._id);
        descendantThreads.push(childThread, ...descendants);
    }
    return descendantThreads;
}
async function deleteThread(id, path) {
    try {
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();
        // Find the thread to be deleted (the main thread)
        const mainThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].findById(id).populate("author community");
        if (!mainThread) {
            throw new Error("Thread not found");
        }
        // Fetch all child threads and their descendants recursively
        const descendantThreads = await fetchAllChildThreads(id);
        // Get all descendant thread IDs including the main thread ID and child thread IDs
        const descendantThreadIds = [
            id,
            ...descendantThreads.map((thread)=>thread._id)
        ];
        // Extract the authorIds and communityIds to update User and Community models respectively
        const uniqueAuthorIds = new Set([
            ...descendantThreads.map((thread)=>thread.author?._id?.toString()),
            mainThread.author?._id?.toString()
        ].filter((id)=>id !== undefined));
        const uniqueCommunityIds = new Set([
            ...descendantThreads.map((thread)=>thread.community?._id?.toString()),
            mainThread.community?._id?.toString()
        ].filter((id)=>id !== undefined));
        // Recursively delete child threads and their descendants
        await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].deleteMany({
            _id: {
                $in: descendantThreadIds
            }
        });
        // Update User model
        await _models_user_model__WEBPACK_IMPORTED_MODULE_3__["default"].updateMany({
            _id: {
                $in: Array.from(uniqueAuthorIds)
            }
        }, {
            $pull: {
                threads: {
                    $in: descendantThreadIds
                }
            }
        });
        // Update Community model
        await _models_community_model__WEBPACK_IMPORTED_MODULE_5__["default"].updateMany({
            _id: {
                $in: Array.from(uniqueCommunityIds)
            }
        }, {
            $pull: {
                threads: {
                    $in: descendantThreadIds
                }
            }
        });
        (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)(path);
    } catch (error) {
        throw new Error(`Failed to delete thread: ${error.message}`);
    }
}
async function fetchThreadById(threadId) {
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();
    try {
        const thread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].findById(threadId).populate({
            path: "author",
            model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__["default"],
            select: "_id id name image"
        }) // Populate the author field with _id and username
        .populate({
            path: "community",
            model: _models_community_model__WEBPACK_IMPORTED_MODULE_5__["default"],
            select: "_id id name image"
        }) // Populate the community field with _id and name
        .populate({
            path: "children",
            populate: [
                {
                    path: "author",
                    model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__["default"],
                    select: "_id id name parentId image"
                },
                {
                    path: "children",
                    model: _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"],
                    populate: {
                        path: "author",
                        model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__["default"],
                        select: "_id id name parentId image"
                    }
                }
            ]
        }).exec();
        return thread;
    } catch (err) {
        console.error("Error while fetching thread:", err);
        throw new Error("Unable to fetch thread");
    }
}
async function addCommentToThread(threadId, commentText, userId, path) {
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__.connectToDB)();
    try {
        // Find the original thread by its ID
        const originalThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"].findById(threadId);
        if (!originalThread) {
            throw new Error("Thread not found");
        }
        // Create the new comment thread
        const commentThread = new _models_thread_model__WEBPACK_IMPORTED_MODULE_4__["default"]({
            text: commentText,
            author: userId,
            parentId: threadId
        });
        // Save the comment thread to the database
        const savedCommentThread = await commentThread.save();
        // Add the comment thread's ID to the original thread's children array
        originalThread.children.push(savedCommentThread._id);
        // Save the updated original thread to the database
        await originalThread.save();
        (0,next_cache__WEBPACK_IMPORTED_MODULE_1__.revalidatePath)(path);
    } catch (err) {
        console.error("Error while adding comment:", err);
        throw new Error("Unable to add comment");
    }
}

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_6__["default"])([
    fetchPosts,
    createThread,
    deleteThread,
    fetchThreadById,
    addCommentToThread
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__.createActionProxy)("ac51670028c29e7849b513f1979db83e8294c5f3", null, fetchPosts);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__.createActionProxy)("4b27cfcbfb8cd73d5558d1192a7d630e2ff5a87b", null, createThread);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__.createActionProxy)("7bef3064424aefb8e0e8f63d4602b5c828fc0660", null, deleteThread);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__.createActionProxy)("13e555ed7825e96044848b10c5c4bd490494900b", null, fetchThreadById);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__.createActionProxy)("7a9374a1c2ba267143725d2f9e61a3bf0a6618ef", null, addCommentToThread);


/***/ }),

/***/ 21033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const communitySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    bio: String,
    createdBy: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "User"
    },
    threads: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "Thread"
        }
    ],
    members: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "User"
        }
    ]
});
const Community = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.Community || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Community", communitySchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Community);


/***/ }),

/***/ 50136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const threadSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    text: {
        type: String,
        required: true
    },
    author: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "User",
        required: true
    },
    community: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Community"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    parentId: {
        type: String
    },
    children: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "Thread"
        }
    ]
});
const Thread = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.Thread || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Thread", threadSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thread);


/***/ }),

/***/ 21217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    bio: String,
    threads: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "Thread"
        }
    ],
    onboarded: {
        type: Boolean,
        default: false
    },
    communities: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: "Community"
        }
    ]
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 13374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectToDB: () => (/* binding */ connectToDB)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

let isConnected = false; // Variable to track the connection status
const connectToDB = async ()=>{
    // Set strict query mode for Mongoose to prevent unknown field queries.
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set("strictQuery", true);
    if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL");
    // If the connection is already established, return without creating a new connection.
    if (isConnected) {
        console.log("MongoDB connection already established");
        return;
    }
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);
        isConnected = true; // Set the connection status to true
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;