import React, { useContext, useRef } from "react";
import { ListContext } from "../context";
import { EDIT_TYPE } from "../context/type";
const EditModal = () => {

    const { editItem, dispatch, theme } = useContext(ListContext)
    const modalRef = useRef(null)
    const formRef = useRef(null)

    const editHandler = (evt) => {
        evt.preventDefault();
        const data = evt.target.elements;
        const body = {
            id: editItem.id,
            name: data.name.value,
            age: data.age.value,
            subscription: data.subscription.value,
            employment: data.employment.checked,
        }

        dispatch({ type: EDIT_TYPE, payload: body });
        modalRef.current.click();
        formRef.current.reset();
    }

    return (
        <div>
            <div className='modal fade' id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className={`modal-content ${theme}`}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit {editItem.name}</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={editHandler} ref={formRef}>
                                <input required type="text" className="form-control mt-3" placeholder='Name' name="name" defaultValue={editItem.name} />
                                <input required type="number" className="form-control mt-3" placeholder='Age' name="age" defaultValue={editItem.age} />
                                <select className='form-control mt-3' name='subscription' defaultValue={editItem.subscription}>
                                    <option value="Subscribed">Subscribed</option>
                                    <option value="Not subscribed">Not subscribed</option>
                                    <option value="Other">Other</option>
                                </select>

                                <div className='mt-3 d-flex '>
                                    <input type="checkbox" className='mx-2' style={{ width: '20px' }} id='emp' name='employment' defaultChecked={editItem.employment} />
                                    <label htmlFor="emp">Employed</label>
                                </div>

                                <div className="d-flex justify-content-end border-top mt-3 pt-2">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" ref={modalRef}>Close</button>
                                    <button type="submit" className="btn btn-primary ms-2" >Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal;