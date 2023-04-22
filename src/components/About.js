import React from "react";
function About(props){
    const imageSrc=props.blogLogo ||
    "https://via.placeholder.com/215"
    return(
        <aside>
            <img src={imageSrc} alt='blog logo'/>
            <p>{props.aboutText}</p>
        </aside>
    )
}
export default About