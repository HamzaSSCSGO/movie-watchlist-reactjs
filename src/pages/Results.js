import React,{useState} from 'react';
import axios from 'axios';
import {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12,
    player1,
    player2,
    player3
}
from '../assets';

function Results() {

    const [dataRetrieved,setDataRetrieved]= useState([]);

    const dataUrl= 'https://characterproject-b1034-default-rtdb.firebaseio.com/persons.json'

    const getData = () =>{
        axios.get(dataUrl)
        .then(response =>{
            // console.log(Object.values(response.data))
            setDataRetrieved(Object.values(response.data));
        })
        .catch(err => {
           console.log(err)
        })
    }

    let newDataRetrieved= dataRetrieved.map((item)=>{
        if(item.image===1){
            item.image=player1;
            if(item.weapon==="sword"){
                item.image=avatar6;
            }
            if(item.weapon==="fleau"){
                item.image=avatar5;
            }
            if(item.weapon==="axe"){
                item.image=avatar7;
            }
            if(item.weapon==="arche"){
                item.image=avatar8;
            }
        }
        if(item.image===2){
            item.image=player2;
            if(item.weapon==="sword"){
                item.image=avatar2;
            }
            if(item.weapon==="fleau"){
                item.image=avatar4;
            }
            if(item.weapon==="axe"){
                item.image=avatar3;
            }
            if(item.weapon==="arche"){
                item.image=avatar1;
            }
        }
        if(item.image===3){
            item.image=player3;
            if(item.weapon==="sword"){
                item.image=avatar12;
            }
            if(item.weapon==="fleau"){
                item.image=avatar11;
            }
            if(item.weapon==="axe"){
                item.image=avatar10;
            }
            if(item.weapon==="arche"){
                item.image=avatar9;
            }
        }
    })

    console.log(dataRetrieved)

    

    return (
        <div>
            <h1>Hello Results</h1>
            <button type="button" onClick={()=>getData()}> GET RESULTS</button>
            <div className="players">
                {dataRetrieved.map((item,index)=>{
                    return(
                        <div className="player" key={index}>
                            <h2>{item.playerName} </h2>
                            <img src={item.image}/>
                            <h2>weapon: {item.weapon} </h2>
                            <h2>agility: {item.agility} </h2>
                            <h2>intelligence: {item.intelligence} </h2>
                            <h2>strength: {item.strength} </h2>
                        </div>
                    )

                })}
            </div>
            
        </div>
    )
}

export default Results;
