import React, { useEffect, useState } from 'react'
import './Home.css'
import '../App.css'
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import { useSelector } from "react-redux";

function Home() {
    const[tropic, setTropic]=useState([])
    const[Trek, setTrek]=useState([])
    const[club, setClub]=useState([])
  const trips = useSelector((state) => state.TripReducer.list);
  useEffect(()=>{
    trips.filter(item=>{
        if(item.data.type=== 'tropic'){
           return setTropic((oldarr)=>{
           return[...oldarr,item]
           })
        }else if(item.data.type=== 'trek'){
            return setTrek((oldarr)=>{
                return[...oldarr,item]
                })
        }
        else if(item.data.type=== 'club'){
            return setClub((oldarr)=>{
                return[...oldarr,item]
                })
        }else{
            return false
        }
    })
  },[trips])

    return (
        <div className='home container'>
            <div className="home__container Box">
                <div className="home__containerTop">
                    <h3>Total Number Of Trips <span>{trips.length}</span></h3>
                </div>
                <div className="home__containerDown">
                  <h5>Tropic <span><Brightness7Icon/></span> <span>{tropic.length}</span></h5>
                  <h5>Trek <span><FilterHdrIcon/></span> <span>{Trek.length}</span></h5>
                  <h5>Club <span><LocalCafeIcon/></span> <span>{club.length}</span></h5>
                </div>
            </div>
        </div>
    )
}

export default Home
