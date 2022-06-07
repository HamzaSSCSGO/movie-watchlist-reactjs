import{
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
}
from '../Actions';

const app_reducer = (state,action) =>{
    if (action.type===SIDEBAR_OPEN){
        return{...state,isSidebarOpen:true}
    }

    if (action.type===SIDEBAR_CLOSE){
        return{...state,isSidebarOpen:false}
    }

    throw new Error(`No action is matched in ${action.type}`);
}

export default app_reducer;