import React from "react";

const Film = ({name, url})=>{
    return (
    <>
    <li><a href= {url} rel="noopener noreferrer" target="_blank" >{name}</a></li>
    </>
        )
}


export default Film;