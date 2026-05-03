import React from "react";
function Article({ title, data, preview }) {
    return (
        <article>
            <h3> {title} </h3>
            <small> {data} </small>
            <p> {preview} </p>
        </article>
    );
}
export default Article;