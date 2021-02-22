import React from "react";

function timeToReadString( minutes ) {
    let result = "";
    if ( minutes < 30 ) {
        for( let i = 0; i < minutes; i += 5 ) { result += "☕️"; }
    } else {
        for( let i = 0; i < minutes; i += 10 ) { result += "🍱"; }
    }
    return result + ` ${ minutes } min. read`;
}

function Article( { title, date = "January 1, 1970", preview, minutes } ) {
    return (
        <article>
            <h3>{ title }</h3>
            <small>{ date }</small>
            <p>{ preview }</p>
            <p>{ timeToReadString( minutes ) }</p>
        </article>
    );
}

export default Article;
