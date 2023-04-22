import React from "react"
function Article(props){
    const{title,date,preview}=props.article
    const displayDate=date ? date :"january 1,1970"
    return (
        <article>
            <h3>{title}</h3>
            <small>{displayDate}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article