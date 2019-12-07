import * as Types from "./Types";

//below is one way of doing the getLogs
// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch("/logs");
//         const data = await res.json();
//         dispatch({
//             type: Types.GET_LOGS,
//             payload: data
//         })
//     }
// };

//below is another way of doing the getLogs
//get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: Types.GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//get logs from server
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: Types.ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};
//delete log from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });
    dispatch({
      type: Types.DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    dispatch({
      type: Types.UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//searcg logs from server
export const searchLogs = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: Types.SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Types.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//set current log
export const setCurrent = log => {
  return {
    type: Types.SET_CURRENT,
    payload: log
  };
};

//clear current log
export const clearCurrent = () => {
  return {
    type: Types.CLEAR_CURRENT
  };
};

//set loading to true
export const setLoading = () => {
  return {
    type: Types.SET_LOADING
  };
};
