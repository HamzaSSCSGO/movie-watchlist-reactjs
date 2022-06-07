import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {useCharacterContext} from '../context/character_context';
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
    sword,
    axe,
    fleau,
    arche,
    player1,
    player2,
    player3
}
from '../assets';

function Person() {

    const items = [{
        character: player1,
        sword: avatar2,
        hachette: avatar3,
        flail: avatar4
    },
    {
        character: player2,
        sword: avatar6,
        hachette: avatar7,
        flail: avatar5
    },
    {
        character: player3,
        sword: avatar12,
        hachette: avatar10,
        flail: avatar11
    }];

    const [dataReceived,setDataReceived]= useState([]);

    const {LEVELUP, character,points,LEVELDOWN,SELECTWEAPON,SELECTPLAYER,RESETPLAYER,SETPLAYERNAME} = useCharacterContext();
    const dataUrl= 'https://characterproject-b1034-default-rtdb.firebaseio.com/persons.json'
    
    const handleCreate = () =>{
         const player = {
            ...character
         }
         axios.post(dataUrl,player)
         .then(response =>{
             console.log(response)
         })
         .catch(err => {
            console.log(err)
         })
    }
    
    const handleGet = () =>{
        axios.get(dataUrl)
        .then(response =>{
            // console.log(Object.values(response.data))
            setDataReceived(Object.values(response.data));
        })
        .catch(err => {
           console.log(err)
        })
   }
   console.log(dataReceived)
   

   /* const handlePlayerName = (e) =>{
       e.preventDefault();
       character.playerName=e.target.value;
       SETPLAYERNAME('playername')
   }
 */

    return (
        <div className="pageperson">
            <div className="section1">
                <h1 className="titre">OUR CUSTOM PLAYERS</h1>
                <div className="characterchoice">
                    <Carousel itemsToShow={1}>
                        {items.map((item,index)=>{
                        return(<div className="image-container-person" key={index}>
                            <button type="button" id="buttoncharacter" onClick={()=> SELECTPLAYER(index+1)}>
                                <img src={item.character} alt='test' id='image1'/>
                            </button>
                            </div>)

                        })}
                    </Carousel>
                </div>

                <div className="character-percs">

                    <div>
                        <h1>POINTS LEFT: {points}</h1>
                    </div>

                    <div className="character-abilities">
                        <div>
                            <h3>strength</h3>
                            <div className="ability">
                                <button type="button" id="button-plus" onClick={()=> LEVELUP('strength') }><AiOutlinePlusCircle/></button>
                                <h3>{character.strength}</h3>
                                <button type="button" id="button-minus" onClick={()=> LEVELDOWN('strength')}><AiOutlineMinusCircle/></button>
                            </div>
                        </div>

                        <div>
                            <h3>intelligence</h3>
                            <div className="ability">
                                <button type="button" id="button-plus" onClick={()=> LEVELUP('intelligence') }><AiOutlinePlusCircle/></button>
                                <h3>{character.intelligence}</h3>
                                <button type="button" id="button-minus" onClick={()=> LEVELDOWN('intelligence')}><AiOutlineMinusCircle/></button>
                            </div> 
                        </div>

                        <div>
                            <h3>agility</h3>
                            <div className="ability">
                                <button type="button" id="button-plus" onClick={()=> LEVELUP('agility') }><AiOutlinePlusCircle/></button>
                                <h3>{character.agility}</h3>
                                <button type="button" id="button-minus" onClick={()=> LEVELDOWN('agility')}><AiOutlineMinusCircle/></button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="weapons">
                        <h2>Choose your weapon</h2>
                        <div className="weapons-shit">

                            <div className="sword">
                                <button type="button"><img src={sword} onClick={()=>SELECTWEAPON('sword')}/></button>
                            </div>

                            <div className="fleau">
                                <button type="button"><img src={fleau} onClick={()=>SELECTWEAPON('fleau')}/></button>
                            </div>

                            <div className="arche">
                                <button type="button"><img src={arche} onClick={()=>SELECTWEAPON('arche')}/></button>
                            </div>

                            <div className="axe">
                                <button type="button"><img src={axe} onClick={()=>SELECTWEAPON('axe')}/></button>
                            </div>

                        </div>
                    </div>

                <div>
                    <form>
                        <input type="text" id="playername" className="playername" placeholder="enter your name"  value={character.playerName} onChange={(e)=>{e.preventDefault();character.playerName=e.target.value;SETPLAYERNAME('playername')}}/>
                    </form>
                </div>

                <div>
                    <button type="button" onClick={()=>handleCreate()}><h1>CREATE</h1> </button>
                </div>

                <div>
                    <button type="button" onClick={()=>handleGet()}><h1>GETDATA</h1> </button>
                </div>

                <div>
                    <button type="button" onClick={()=>RESETPLAYER('reset') }><h1>RESET</h1> </button>
                </div>
            </div>

           {/*  <div className="mydata" >
            {dataReceived.map((item,index)=>{
                        return(<div className="image-container-person" key={index}>
                            <button type="button" id="buttoncharacter" >
                                <img src={item.image}  alt='test' id='image1'/>
                            </button>
                            </div>)

                        })}

            </div> */}
        </div>
    )
}

export default Person
