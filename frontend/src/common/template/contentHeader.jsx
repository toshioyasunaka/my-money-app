import React from "react";

const contentHeader = props => {
    return (
        <section className="content-header">
            <h1>{props.title} <small>{props.small}</small></h1>
        </section>
    )
}

export default contentHeader