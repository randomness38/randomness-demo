import axios from 'axios';

const api = 'http://localhost:3001'
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': token,
}


/**
 * GET /categories
 *    USAGE:
 *      Get all of the categories available for the app. List is found in categories.js.
 *      Feel free to extend this list as you desire.
 */

// TODO: navigation (1) 모든 네비 가져오기
export const fetchNavigation = () => {
  return axios ({
    method: 'get',
    url: `${api}/navigation`,
    headers: {...headers}
  }).then((res) => res.data)
}

// TODO: category (1) 모든 카테고리 가져오기
export const fetchCategories = () => {
  return axios ({
    method: 'get',
    url: `${api}/categories`,
    headers: {...headers}
  }).then((res) => res.data)
}



/**
 *GET /:category/posts
 USAGE:
 Get all of the posts for a particular category
 *
 */
// TODO: theme (0) 모든 themes 가져오기
export const fetchAllThemes = () => {
  return axios ({
    method: 'get',
    url: `${api}/themes`,
    headers: {...headers}
  }).then(res => res.data)
}


// TODO: theme (1) 카테고리 별 themes 가져오기
export const fetchThemesByCategory = (category) => {
  return axios ({
    method: 'get',
    url: `${api}/${category}/themes`,
    headers: {...headers}
  }).then(res => res.data)
}

// TODO: theme (2) 특정 theme 정보 가져오기
export const fetchTheme = (id) => {
  return axios({
    method: 'get',
    url: `${api}/themes/${id}`,
    headers: headers,
  }).then(res => res.data)
};

// TODO: activity (1) 모든 activities 가져오기
export const fetchAllActivities = () => {
  return axios ({
    method: 'get',
    url: `${api}/activities`,
    headers: {...headers}
  }).then(res => res.data)

}

// TODO: activity (2) 카테고리 별 activities 가져오기
export const fetchActivitiesByCategory = (category) => {
  return axios ({
    method: 'get',
    url: `${api}/${category}/activities`,
    headers: {...headers}
  }).then(res => res.data)
}

// TODO: activity (3) themes 별 activities 가져오기
export const fetchActivitiesByTheme = (theme) => {
  return axios ({
    method: 'get',
    url: `${api}/category/${theme}/activities`,
    headers: {...headers}
  }).then(res => res.data)
}

// TODO: activity (4) 특정 activity 정보 가져오기
export const fetchActivity = (id) => {
  return axios({
    method: 'get',
    url: `${api}/activities/${id}`,
    headers: headers,
  }).then(res => res.data)
};

// TODO: user(1) user.log 에 activity log 추가하기
export const addActivityLog = (id, log) => {
  return axios({
    method: 'post',
    url: `${api}/users/${id}/logs`,
    headers: headers,
    data: log,
  }).then(res => res.data)
}

// TODO: user(2) users[id] 의 timeStack, days 수정하기
export const changeStats = (id, runningTime, diffDay, lastDate) => {
  return axios({
    method: 'post',
    url: `${api}/users/${id}`,
    data: {runningTime: runningTime, diffDay: diffDay, lastDate: lastDate},
    headers: headers,
  }).then(res => res.data)
}

// TODO: user(3) getUser
export const fetchUser = (id) => {
  return axios({
    method: 'get',
    url: `${api}/users/${id}`,
    headers: headers,
  }).then(res => res.data)
};

// TODO: user(4) getUserLogs
export const fetchUserLogs = (id) => {
  return axios({
    method: 'get',
    url: `${api}/users/${id}/logs`,
    headers: headers,
  }).then(res => res.data)
};

export const fetchAllQuotes = () => {
  return axios({
    method: 'get',
    url: `${api}/quotes`,
    headers: headers,
  }).then(res => res.data)
};

export const fetchRandomQuote = () => {
  return axios({
    method: 'get',
    url: `${api}/quotes/random`,
    headers: headers,
  }).then(res => res.data)
};

/**
 * PUT /posts/:id
 USAGE:
 Edit the details of an existing post
 PARAMS:
 title - String
 body - String

 */
//
// export const editPost = (id, post) => {
//   return axios({
//     method: 'put',
//     url: `${api}/posts/${id}`,
//     data: post,
//     headers: headers,
//   }).then(res => res.data)
// }
//
//
// /**
//  * DELETE /posts/:id
//  USAGE:
//  Sets the deleted flag for a post to 'true'.
//  Sets the parentDeleted flag for all child comments to 'true'.
//  ( flag 는 field 라고 이해하자 )
//  */
//
// export const deletePost = (id) => {
//   return axios({
//     method: 'delete',
//     url: `${api}/posts/${id}`,
//     headers: headers,
//   }).then(res => res.data)
// }
//
// /**
//  * GET /posts/:id/comments
//  USAGE:
//  Get all the comments for a single post
//
//  */
//
// export const fetchComments = (id) => {
//   return axios ({
//     method: 'get',
//     url: `${api}/posts/${id}/comments`,
//     headers: {...headers}
//   }).then((res) => res.data)
// }
//
//
//
// /**
//  * POST /comments
//  USAGE:
//  Add a comment to a post
//
//  PARAMS:
//  id: Any unique ID. As with posts, UUID is probably the best here.
//  timestamp: timestamp. Get this however you want.
//  body: String
//  author: String
//  parentId: Should match a post id in the database.
//
//  */
//
//
// export const addComment = (comment) => {
//   return axios({
//     method: 'post',
//     url: `${api}/comments`,
//     headers: headers,
//     data: comment,
//   }).then(res => res.data)
// }
//
// /**
//  * GET /comments/:id
//  USAGE:
//  Get the details for a single comment
//
//  */
//
// export const fetchComment = (id)  => {
//   return axios({
//     method: 'get',
//     url: `${api}/comments/${id}`,
//     headers: {...headers}
//   }).then(res => res.data)
// }
// /**
//  * POST /comments/:id
//  USAGE:
//  Used for voting on a comment.
//  PARAMS:
//  option - String: Either "upVote" or "downVote"
//  */
//
// export const voteComment = (id, option)  => {
//   return axios({
//     method: 'post',
//     url: `${api}/comments/${id}`,
//     data: {option : option},
//     headers: {...headers}
//   }).then(res => res.data)
// }
//
// /**
//  * PUT /comments/:id
//  USAGE:
//  Edit the details of an existing comment
//
//  PARAMS:
//  timestamp: timestamp. Get this however you want.
//  body: String
//
//  */
//
// export const editComment = (id, comment) => {
//   return axios({
//     method: 'put',
//     url: `${api}/comments/${id}`,
//     data: comment,
//     headers: {...headers}
//   }).then(res => res.data)
// }
//
// /**
//  * DELETE /comments/:id
//  USAGE:
//  Sets a comment's deleted flag to 'true'
//
//  */
//
// export const deleteComment = (id) => {
//   return axios({
//     method: 'delete',
//     url: `${api}/comments/${id}`,
//     headers: {...headers}
//   }).then(res => res.data)
// }
//
