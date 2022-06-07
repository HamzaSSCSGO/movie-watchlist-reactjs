import React,{useContext,useReducer} from "react";
import reducer from "../reducers/character_reducer";
import {
    LEVEL_UP,
    LEVEL_DOWN,
    SELECT_WEAPON,
    SELECT_PLAYER,
    RESET_PLAYER,
    SET_PLAYER_NAME
} from '../Actions';

const initialState ={
   
    character:{
        image:1,
        strength:0,
        intelligence:0,
        agility:0,
        weapon:'',
        playerName:''

    },
    points:14,
}
const CharacterContext=React.createContext();

export const CharacterProvider=({children})=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    const LEVELUP =(carac)=>{
        dispatch({type: LEVEL_UP, payload:{...state,carac}});

    }
    const LEVELDOWN =(carac)=>{
        dispatch({type: LEVEL_DOWN, payload:{...state,carac}});

    }

    const SELECTWEAPON=(carac)=>{
        dispatch({type:SELECT_WEAPON, payload:{...state,carac}})
    }

    const SELECTPLAYER=(carac)=>{
        dispatch({type:SELECT_PLAYER, payload:{...state,carac}})
    }

    const RESETPLAYER=(carac)=>{
        dispatch({type:RESET_PLAYER, payload:{...state,carac}})
    }

    const SETPLAYERNAME=(carac)=>{
        dispatch({type:SET_PLAYER_NAME, payload:{...state,carac}})
    }
    
    return(
        <CharacterContext.Provider value={{...state, LEVELUP, LEVELDOWN, SELECTWEAPON, SELECTPLAYER, RESETPLAYER, SETPLAYERNAME}}>
            {children}
        </CharacterContext.Provider>
    )
}

export const useCharacterContext=()=>{
    return useContext(CharacterContext);
}