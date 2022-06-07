import{
    LEVEL_UP,
    LEVEL_DOWN,
    SELECT_WEAPON,
    SELECT_PLAYER,
    RESET_PLAYER,
    SET_PLAYER_NAME
} from '../Actions';

const character_reducer = (state, action)=>{

  /**************LEVEL SELECTION **************/
    if (action.type ===LEVEL_UP){

      if (action.payload.carac==='strength'){
          const{character,points}=action.payload;
          let newPoints=points;
          const newCharacter={...character};
          if (newPoints>0){
            if(newCharacter.strength<6){
                newCharacter.strength++ ;
                newPoints--;
              }
          }
          return{
            ...state,
            character:newCharacter,
            strength:newCharacter.strength,
            points:newPoints,
        }
      }

      if (action.payload.carac==='intelligence'){
        const{character,points}=action.payload;
        let newPoints=points;
        const newCharacter={...character};
        if (newPoints>0){
        if(newCharacter.intelligence<6){
            newCharacter.intelligence++ ;
            newPoints--;
          }}
        return{
          ...state,
          character:newCharacter,
          strength:newCharacter.intelligence,
          points:newPoints,
      }
    }


    if (action.payload.carac==='agility'){
      const{character,points}=action.payload;
      let newPoints=points;
      const newCharacter={...character};
      if (newPoints>0){
      if(newCharacter.agility<6){
        newCharacter.agility++ ;
        newPoints--;
      }}
      return{
        ...state,
        character:newCharacter,
        strength:newCharacter.agility,
        points:newPoints,
    }
  }
         
        return{
            ...state
        }
    }


    if (action.type ===LEVEL_DOWN){

        if (action.payload.carac==='strength'){
            const{character,points}=action.payload;
            let newPoints=points;
            const newCharacter={...character};
            if(newCharacter.strength>0)
            {
                newCharacter.strength--;
                newPoints++;
            }
            
            return{
              ...state,
              character:newCharacter,
              strength:newCharacter.strength,
              points:newPoints,
          }
        }

        if (action.payload.carac==='intelligence'){
          const{character,points}=action.payload;
          let newPoints=points;
          const newCharacter={...character};
          if(newCharacter.intelligence>0)
            {
                newCharacter.intelligence--;
                newPoints++;
            }
          return{
            ...state,
            character:newCharacter,
            strength:newCharacter.intelligence,
            points:newPoints,
        }
      }

      if (action.payload.carac==='agility'){
        const{character,points}=action.payload;
        let newPoints=points;
        const newCharacter={...character};
        if(newCharacter.agility>0)
            {
                newCharacter.agility--;
                newPoints++;
            }
        return{
          ...state,
          character:newCharacter,
          strength:newCharacter.agility,
          points:newPoints,
      }
    }
      return {...state};
     }


     /********SELECT WEAPON *************/
     if (action.type ===SELECT_WEAPON){
        
     

      if (action.payload.carac==='sword'){
        const{character,points}=action.payload;
        const newCharacter={...character};
        newCharacter.weapon='sword';
        return{
          ...state,
          character:newCharacter,
          weapon:newCharacter.weapon,
      }
      return{...state};
    }

    if (action.payload.carac==='fleau'){
      const{character,points}=action.payload;
      const newCharacter={...character};
      newCharacter.weapon='fleau';
      return{
        ...state,
        character:newCharacter,
        weapon:newCharacter.weapon,
    }
    
  }

  if (action.payload.carac==='axe'){
    const{character,points}=action.payload;
    const newCharacter={...character};
    newCharacter.weapon='axe';
    return{
      ...state,
      character:newCharacter,
      weapon:newCharacter.weapon,
  }
  
}

if (action.payload.carac==='arche'){
  const{character,points}=action.payload;
  const newCharacter={...character};
  newCharacter.weapon='arche';
  console.log(newCharacter)
  return{
    ...state,
    character:newCharacter,
    weapon:newCharacter.weapon,
}

}
return{...state};

     }

/************SELECTION IMAGE *******/
if (action.type ===SELECT_PLAYER){
  if (action.payload.carac===1){
    const{character,points}=action.payload;
    const newCharacter={...character};
    newCharacter.image=1;
    return{
      ...state,
      character:newCharacter,
      image:newCharacter.image,
  }
  
}

if (action.payload.carac===2){
  const{character,points}=action.payload;
  const newCharacter={...character};
  newCharacter.image=2;
  return{
    ...state,
    character:newCharacter,
    image:newCharacter.image,
}

}

if (action.payload.carac===3){
  const{character,points}=action.payload;
  const newCharacter={...character};
  newCharacter.image=3;
  return{
    ...state,
    character:newCharacter,
    image:newCharacter.image,
}

}
return{...state};

}

/*************RESET ****************************/  
if (action.type ===RESET_PLAYER){
  if (action.payload.carac==='reset'){
    const{character,points}=action.payload;
    const newCharacter={...character};
    let newPoints=points;
    
    newCharacter.image=1;
    newCharacter.agility=0;
    newCharacter.intelligence=0;
    newCharacter.strength=0;
    newCharacter.weapon='';
    newCharacter.playerName='';
    newPoints=14;
    console.log(newCharacter);

    return{
      ...state,
      character:newCharacter,
      image:newCharacter.image,
      agility:newCharacter.agility,
      intelligence:newCharacter.intelligence,
      strength:newCharacter.strength,
      weapon:newCharacter.weapon,
      playerName:newCharacter.playerName,
      points:newPoints
  }
  
  }
  return{...state};
}

/*************SET PLAYER NAME ****************************/  
if (action.type ===SET_PLAYER_NAME){
  if (action.payload.carac==='playername'){
    const{character,points}=action.payload;
    console.log(character.playerName)
    return{
      ...state,
  }
  }
  return{...state};
}


     
    throw new Error(`No action is matched in ${action.type}`);
}

export default character_reducer;