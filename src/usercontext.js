import React, { useState } from "react";

let UserContext=React.createContext();

export default UserContext;

export const UserProvider=({children})=>{
    let[currentvalue, updatevalue]=useState([]);
    return <UserContext.Provider value={{username:"vasanth", age:30, currentvalue, updatevalue}}>
            {children}
    </UserContext.Provider>
}