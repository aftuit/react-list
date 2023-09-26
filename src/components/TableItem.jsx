import React, { useContext } from 'react'
import { ListContext } from '../context'
import { DELETE_TYPE } from '../context/type'

const TableItem = ({ item }) => {

  const { dispatch, setEditItem } = useContext(ListContext)

  const deleteHandler = (id) => {
    dispatch({ type: DELETE_TYPE, payload: id })
  }

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.subscription}</td>
      <td>{item.employment ? 'Employed' : 'Unemployed'}</td>
      <td>
        <div className="d-flex">
          <button className='btn btn-success mx-1' data-toggle="modal" data-target="#exampleModal" onClick={() => setEditItem(item)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button className='btn btn-danger mx-1' onClick={() => deleteHandler(item.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
      </td>
    </tr>
  )
}

export default TableItem