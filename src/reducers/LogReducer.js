import * as Types from "../actions/Types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case Types.ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case Types.DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case Types.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case Types.SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload
      };
    case Types.SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case Types.CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case Types.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case Types.LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
