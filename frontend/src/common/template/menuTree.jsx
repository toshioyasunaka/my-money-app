import React from "react"

const menuTree = props => {
    return (
        <li className="treeview">
            <a href>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
                <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
                {props.children}
            </ul>
        </li>
    )
}

export default menuTree