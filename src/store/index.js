import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import taskReducer from './reducers/taskReducer'
import appReducer from './reducers/appReducer'
import visibleReducer from './reducers/visibleTaskReducer'

// Если один reducer
// const store = createStore(reducer)
const rootReducer = combineReducers({
  taskDay: () => localStorage.getItem('wp_today'),
  tasks: taskReducer,
  visible: visibleReducer,

  app: appReducer,
  title: () => 'WeekPlan' // Reducer функция
})

const store = createStore(rootReducer, composeWithDevTools())

export default store