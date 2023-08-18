// boilerPlate
// const GET_PAGE = 'GET_PAGE'
const SET_VISIBLE_TASKS = 'SET_VISIBLE_TASKS'

// const initState = (() => {

//   const appDataFromLocal = localStorage.getItem('wp_app');
//   const page = appDataFromLocal?.page
//   if (page) {
//     return { ...appDataFromLocal, page }
//   } else {
//     return { page: 2 }
//   }
// })()

export function setVisibleTask(payload) {
  console.log("▶ ⇛ setVisibleTask:payload", payload);
  return {
    type: SET_VISIBLE_TASKS,
    payload,
  }
}

export default function visibleReducer(state = [], action) {

  switch (action.type) {
    case SET_VISIBLE_TASKS:
      return { ...action.payload }


    default:
      return { ...state }
  }

}