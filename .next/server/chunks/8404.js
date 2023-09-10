exports.id = 8404;
exports.ids = [8404];
exports.modules = {

/***/ 38404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'63da9cfb4f042fc1f9ffdda0294e3200faada869': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["createCommunity"]),
'a3d53b5b087da94931221eb44c80b79360cd3efe': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["fetchCommunityDetails"]),
'7649af2f0b30f4d4f274902bc8d71274ea0578b7': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["fetchCommunityPosts"]),
'c78125579eb653f25b04777b0bf955baf713ba71': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["fetchCommunities"]),
'646169943f77f0efec7db81ad57f541dfe11cacf': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["addMemberToCommunity"]),
'd7d43c2b48c6fb3b6493269a704ba244297b3744': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["removeUserFromCommunity"]),
'82be37352014167c8dbe0faf0a708b6cfc69de2e': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["updateCommunityInfo"]),
'4b4c0dcecf405ac14b24ce2506eba5e31ce32e12': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93040)).then(mod => mod["deleteCommunity"]),
'e5d807b1e768e51cfbf3d1fc3a0cb34dbeed7409': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["fetchUser"]),
'e625189055d86d8ae1190f3a0723e73ee0303261': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["updateUser"]),
'077dbd9901e140adb33476885e823d552f134066': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["fetchUserPosts"]),
'937e5f35ee0fd3414436f20057efef8a65f3295f': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["fetchUsers"]),
'd4f9d2bbf29d579d826dcfee8bd54d39dfeecc47': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18776)).then(mod => mod["getActivity"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  '63da9cfb4f042fc1f9ffdda0294e3200faada869': endpoint.bind(null, '63da9cfb4f042fc1f9ffdda0294e3200faada869'),
  'a3d53b5b087da94931221eb44c80b79360cd3efe': endpoint.bind(null, 'a3d53b5b087da94931221eb44c80b79360cd3efe'),
  '7649af2f0b30f4d4f274902bc8d71274ea0578b7': endpoint.bind(null, '7649af2f0b30f4d4f274902bc8d71274ea0578b7'),
  'c78125579eb653f25b04777b0bf955baf713ba71': endpoint.bind(null, 'c78125579eb653f25b04777b0bf955baf713ba71'),
  '646169943f77f0efec7db81ad57f541dfe11cacf': endpoint.bind(null, '646169943f77f0efec7db81ad57f541dfe11cacf'),
  'd7d43c2b48c6fb3b6493269a704ba244297b3744': endpoint.bind(null, 'd7d43c2b48c6fb3b6493269a704ba244297b3744'),
  '82be37352014167c8dbe0faf0a708b6cfc69de2e': endpoint.bind(null, '82be37352014167c8dbe0faf0a708b6cfc69de2e'),
  '4b4c0dcecf405ac14b24ce2506eba5e31ce32e12': endpoint.bind(null, '4b4c0dcecf405ac14b24ce2506eba5e31ce32e12'),
  'e5d807b1e768e51cfbf3d1fc3a0cb34dbeed7409': endpoint.bind(null, 'e5d807b1e768e51cfbf3d1fc3a0cb34dbeed7409'),
  'e625189055d86d8ae1190f3a0723e73ee0303261': endpoint.bind(null, 'e625189055d86d8ae1190f3a0723e73ee0303261'),
  '077dbd9901e140adb33476885e823d552f134066': endpoint.bind(null, '077dbd9901e140adb33476885e823d552f134066'),
  '937e5f35ee0fd3414436f20057efef8a65f3295f': endpoint.bind(null, '937e5f35ee0fd3414436f20057efef8a65f3295f'),
  'd4f9d2bbf29d579d826dcfee8bd54d39dfeecc47': endpoint.bind(null, 'd4f9d2bbf29d579d826dcfee8bd54d39dfeecc47'),
}


/***/ })

};
;