import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/LogActions";
import TechSelectOptions from "../techs/TechSelectOptions";

import M from "materialize-css/dist/js/materialize.min.js";
const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "please enter a message and tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

      addLog(newLog);
      M.toast({ html: `log added by ${tech}` });
      //clear fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  {
    /* the below id="add-log-modal" has to match the id in the div inside the AddBtn.js file. when the button is clicked in AddBtn, the div below is called */
  }
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

//not calling any state so we can set mapStateToProps as null. we just want the action.
export default connect(null, { addLog })(AddLogModal);
