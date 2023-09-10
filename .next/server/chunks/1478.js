"use strict";
exports.id = 1478;
exports.ids = [1478];
exports.modules = {

/***/ 71478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCommentToThread: () => (/* binding */ addCommentToThread),
/* harmony export */   createThread: () => (/* binding */ createThread),
/* harmony export */   deleteThread: () => (/* binding */ deleteThread),
/* harmony export */   fetchPosts: () => (/* binding */ fetchPosts),
/* harmony export */   fetchThreadById: () => (/* binding */ fetchThreadById)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44269);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6285);
/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28198);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43047);
/* harmony import */ var _models_thread_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42841);
/* harmony import */ var _models_community_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88935);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53559);
/* __next_internal_action_entry_do_not_use__ fetchPosts,createThread,deleteThread,fetchThreadById,addCommentToThread */ 





async function fetchPosts(pageNumber = 1, pageSize = 20) {
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__/* .connectToDB */ .P)();
    // Calculate the number of posts to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;
    // Create a query to fetch the posts that have no parent (top-level threads) (a thread that is not a comment/reply).
    const postsQuery = _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.find({
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
        model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    }).populate({
        path: "community",
        model: _models_community_model__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    }).populate({
        path: "children",
        populate: {
            path: "author",
            model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            select: "_id name parentId image"
        }
    });
    // Count the total number of top-level posts (threads) i.e., threads that are not comments.
    const totalPostsCount = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.countDocuments({
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
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__/* .connectToDB */ .P)();
        const communityIdObject = await _models_community_model__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.findOne({
            id: communityId
        }, {
            _id: 1
        });
        const createdThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.create({
            text,
            author,
            community: communityIdObject
        });
        // Update User model
        await _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findByIdAndUpdate(author, {
            $push: {
                threads: createdThread._id
            }
        });
        if (communityIdObject) {
            // Update Community model
            await _models_community_model__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.findByIdAndUpdate(communityIdObject, {
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
    const childThreads = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.find({
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
        (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__/* .connectToDB */ .P)();
        // Find the thread to be deleted (the main thread)
        const mainThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.findById(id).populate("author community");
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
        await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.deleteMany({
            _id: {
                $in: descendantThreadIds
            }
        });
        // Update User model
        await _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.updateMany({
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
        await _models_community_model__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.updateMany({
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
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__/* .connectToDB */ .P)();
    try {
        const thread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.findById(threadId).populate({
            path: "author",
            model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            select: "_id id name image"
        }) // Populate the author field with _id and username
        .populate({
            path: "community",
            model: _models_community_model__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            select: "_id id name image"
        }) // Populate the community field with _id and name
        .populate({
            path: "children",
            populate: [
                {
                    path: "author",
                    model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    select: "_id id name parentId image"
                },
                {
                    path: "children",
                    model: _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                    populate: {
                        path: "author",
                        model: _models_user_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
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
    (0,_mongoose__WEBPACK_IMPORTED_MODULE_2__/* .connectToDB */ .P)();
    try {
        // Find the original thread by its ID
        const originalThread = await _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.findById(threadId);
        if (!originalThread) {
            throw new Error("Thread not found");
        }
        // Create the new comment thread
        const commentThread = new _models_thread_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z({
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

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)([
    fetchPosts,
    createThread,
    deleteThread,
    fetchThreadById,
    addCommentToThread
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("ac51670028c29e7849b513f1979db83e8294c5f3", null, fetchPosts);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("4b27cfcbfb8cd73d5558d1192a7d630e2ff5a87b", null, createThread);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("7bef3064424aefb8e0e8f63d4602b5c828fc0660", null, deleteThread);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("13e555ed7825e96044848b10c5c4bd490494900b", null, fetchThreadById);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__/* .createActionProxy */ .U)("7a9374a1c2ba267143725d2f9e61a3bf0a6618ef", null, addCommentToThread);


/***/ })

};
;