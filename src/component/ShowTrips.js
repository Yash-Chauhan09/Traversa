import React, { useState } from "react";
import "./ShowTrips.css";
import '../App.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { useSelector } from "react-redux";
import { deleteTrip} from '../actions/index'
import {useDispatch} from 'react-redux'
function ShowTrips() {
  const dispatch = useDispatch();
    const[button,setButton]= useState('')
  const trips = useSelector((state) => state.TripReducer.list);
  const handleClick = (e)=>{
    setButton(e.target.value)
  }
  return (
    <div className="showTrips container">
      <div className="showTrips__container Box">
        <h3>All Trips</h3>
        <div className="showTrips__containerFilter">
          <button value='ALL' onClick={handleClick}>All</button>
          <button  value='trek' onClick={handleClick}>Trek</button>
          <button value='tropic' onClick={handleClick}>Tropic</button>
          <button value='club' onClick={handleClick}>Club</button>
        </div>
        <div className="showTrips__containerTrips">
          <div className="trip">
            <div className="trip__head">
              <h5>Date</h5>
              <h5>Place</h5>
              <h5 style={{marginRight:'15px'}}>Type</h5>
            </div>
            {trips.filter((item)=>{
                    if(button === '' || button ==="ALL" ){
                        return item
                    }else if(item.data.type=== button){
                        return item
                    }else{
                      return false
                    }
            }).map((item) => {
              return (
                <div className="trip__body" key={item.id}>
                  <p>{item.data.date}</p>
                  <p>{item.data.place}</p>
                  <p>{item.data.type} <span onClick={()=>{
                      dispatch(deleteTrip(item.id))
                  }}><DeleteOutlineIcon className='deleteIcon'/></span></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTrips;
