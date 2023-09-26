import React from 'react'
import TableItem from './TableItem'
import { ListContext } from '../context'
const Table = () => {

    const { state, theme } = React.useContext(ListContext)

    return (
        <table className={`table  ${theme}`}>
            <thead>
                <tr className={`${theme === 'dark' && 'opc'}`}>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Subcription</th>
                    <th scope="col">Employment</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map(item => {
                        return <TableItem item={item} key={item.id}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default Table