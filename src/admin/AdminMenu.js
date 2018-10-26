import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = props => {
    return (
        <div>
            <div className='list-group'>
                <a href='#' className='list-group-item active'>
                    Selecione uma opção
                </a>
                <Link to='/admin/portfolio' className='list-group-item'>Portfólio</Link>
            </div>
        </div>
    )
}

export default AdminMenu