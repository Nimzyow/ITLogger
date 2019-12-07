import * as Types from "../actions/Types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case Types.ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    case Types.DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      }
    case Types.GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case Types.TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    default:
      return state;
  }
};
