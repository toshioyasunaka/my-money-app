import React from 'react'
import Menu from './menu'

const sidebar = props => {
    return (
        <aside className='main-sidebar'>
            <section className="sidebar">
                <Menu />
            </section>
        </aside>
    )
}

export default sidebar