import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../utils/toolkit/messageSLice";

const ContactForm = () => {
  const message = useSelector((state) => state.message.value);
  const dispatch = useDispatch();
  return (
    <div className="p-2 bg-orange-200">
      <h2 className="text-xl text-gray-900 font-semibold">ContactForm</h2>

      <div>
        <input
          className="p-2 border border-orange-400 outline-orange-400 rounded-md"
          type="number"
          value={message}
          onChange={(e) => dispatch(setMessage(parseInt(e.target.value)))}
          placeholder="Increment by..."
        />
      </div>
    </div>
  );
};

export default ContactForm;
