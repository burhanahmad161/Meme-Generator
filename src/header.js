import React from "react";
import './header.css';

export default function Header1(){
    return(
        <div  className="mainDiv">
            <div className="subDiv">
                <img src="clown.png" alt="No Photo" width={150} height={150} />
                <h1 style={{paddingTop: '30px'}}>Meme Generator</h1>
            </div>
        </div>
    )
}

