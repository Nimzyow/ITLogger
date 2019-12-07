import * as Types from "./Types";

//Get techs from server

//below is another way of doing the getLogs
//get logs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: Types.GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//add technician to server
export const addTechs = tech => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: Types.ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, { method: "DELETE" });
    dispatch({
      type: Types.DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: Types.SET_LOADING
  };
};
