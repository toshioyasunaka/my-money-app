import React from "react"
import {Link} from 'react-router'

const menuItem = props => {
    return (
        <li>
            <Link to={props.path}>
                <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            </Link>
        </li>
    )
}

export default menuItem