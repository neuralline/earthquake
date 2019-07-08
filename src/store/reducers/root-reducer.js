import {mag, magType} from './reducer-functions'

const initialState = {
  status: 200,
  data: [],
  featured: [],
  filters: {mag: '', magType: ''},
  connectionError: 0,
  errorMessage: 'Error connecting to server',
  loadingMessage: 'Not found'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EVENT_LIST':
      return {
        ...state,
        data: action.payload.features,
        featured: action.payload.features,
        connectionError: 0
      }
    case 'EVENT_FILTER_BY_MAG':
      return {
        ...state,
        featured: action.condition
          ? mag(state.data, action.condition)
          : state.data
      }

    case 'EVENT_FILTER_BY_MAG_TYPE':
      return {
        ...state,
        featured: action.condition
          ? magType(state.data, action.condition)
          : state.data
      }

    case 'EVENT_ERROR':
      return {...state, connectionError: 1}
    default:
      return state
  }
}

export default rootReducer
