import React from "react";
import Avatar from "./avatar.jpg";
function Image() {
    return (
        <div className="profile center">
            <div className="image">
               <img src={Avatar} alt="avatar" />
            </div>
            <div className="text">
                <p>Annette Black</p>
            </div>
        </div>
    );
}

export default Image;