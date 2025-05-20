import React from "react";
import myHobbyDis from './MyHobbyDis';

const MyAgeDis=({myAge,Myhobby}) =>{
    console.log("This is MyAgeDis component",myHobby);

    return(
        <div>
            <p>My Age is {myAge}</p>
            <myHobbyDis myHobby={myHobby}/>
        </div>
    );
};

export default MyAgeDis;