import React, { useState } from "react";
import "./AddTrips.css";
import '../App.css'
import {addTrip} from '../actions/index'
import {useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTrips() {
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("trek");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (date === "" || place === "" || type === "") {
      alert("Fill each section to add trips");
    } else {
      dispatch(addTrip({date, place, type}))
      toast.success("Trip has been added")
      setDate('')
      setPlace('')
    }
  };

  return (
    <div className=" container">
      <div className="addTrips__container Box">
        <h3>Add A Trip</h3>
        <form>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            id="date"
            placeholder="Select date for the trip"
          />
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            type="text"
            placeholder="Destination for the trip"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            name="types"
            placeholder="Type of destination"
          >
            <option value="trek"> Trek</option>
            <option value="tropic"> Tropic</option>
            <option value="club"> Club</option>
          </select>
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddTrips;
