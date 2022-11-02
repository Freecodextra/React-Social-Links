import React from "react";


function Link({name, href, id}) {
    return (
        <a href={href} id={id} target="_blank">{name}</a>
    );
}

export default Link;