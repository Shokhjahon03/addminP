import {teacherdata,teachererror,teachersucces} from './techersType'
const initialState = {
    users: [],
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case teacherdata:
        return {
          ...state,
        };
      case teachersucces:
        return {
          ...state,
          users: action.payload,
        };
      case teachererror:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default reducer;