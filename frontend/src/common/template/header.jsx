import React from "react"

const header = () => {
    return (
        <header className="main-header">
            <a href="/#/" className="logo">
                <span className="logo-mini">
                    <i className="fa fa-money" />
                </span>
                <span className="logo-lg">
                    <i className="fa fa-money"></i>
                    <b> My</b> Money
                </span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
            </nav>
        </header>
    )
}

export default header