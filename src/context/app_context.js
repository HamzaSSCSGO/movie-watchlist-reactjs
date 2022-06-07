import React,{useContext,useReducer} from 'react';
import reducer from '../reducers/app_reducer';
import{
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
}
from '../Actions';

const initialState ={
    isSidebarOpen:true,
}

const AppContext = React.createContext();

export const AppProvider =({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState)

    const OpenSidebar = () =>{
        dispatch({type:SIDEBAR_OPEN})
    }

    const CloseSidebar = () =>{
        dispatch({type:SIDEBAR_CLOSE})

    }

    return(
        <AppContext.Provider value={{...state,OpenSidebar,CloseSidebar}}>
        {children}
        </AppContext.Provider>
    )
}

export const useAppContext=() =>{
    return useContext(AppContext);
}