import React, {useState} from "react";

const MyHobbyDis=({myHobby})=>{
    console.log("This is MyHobbyDis component",myHobby);
    const [data,setData]=useState("");

    return(
        <div>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <p>My Hobby is {myHobby}</p>
        </div>
    );
};

export default MyHobbyDis;