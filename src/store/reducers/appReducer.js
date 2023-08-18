// boilerPlate
// const GET_PAGE = 'GET_PAGE'
const SET_PAGE = 'SET_PAGE'

const initState = (() => {

  const appDataFromLocal = localStorage.getItem('wp_app');
  const page = appDataFromLocal?.page
  if (page) {
    return { ...appDataFromLocal, page }
  } else {
    return { page: 2 }
  }
})()

export function setPage(payload) {
  return {
    type: SET_PAGE,
    payload,
  }
}

export default function taskReducer(state = initState, action) {

  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload }


    default:
      return { ...state }
  }

}