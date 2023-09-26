import React, { useContext, useRef } from 'react'
import { ListContext } from '../context';
import { INSERT_TYPE } from '../context/type';
const Insert = () => {

    const { theme, setTheme, dispatch } = useContext(ListContext);
    const insertRef = useRef(null)

    const insertHandler = (evt) => {
        evt.preventDefault();
        const data = evt.target.elements;
        const body = {
            id: new Date().getTime(),
            name: data.name.value,
            age: data.age.value,
            subscription: data.subscription.value,
            employment: data.employment.checked,
        }

        dispatch({ type: INSERT_TYPE, payload: body })
        insertRef.current.reset();

    }

    return (
        <div>
            <div className={`d-flex justify-content-between align-items-center ${theme}`}>
                <h3>Insert Row</h3>

                <div>
                    <input type="checkbox" className="checkbox" id="checkbox" checked={theme === 'dark'? false: true} onChange={(evt) => setTheme(evt.target.checked? 'light': 'dark')}/>
                    <label htmlFor="checkbox" className="checkbox-label">
                        <i className="fas fa-sun"></i>
                        <i className="fas fa-moon"></i>
                        <span className="ball"></span>
                    </label>
                </div>
            </div>

            <form onSubmit={insertHandler} ref={insertRef}>
                <input required type="text" className="form-control mt-3" placeholder='Name' name="name" />
                <input required type="number" className="form-control mt-3" placeholder='Age' name="age" />
                <select className='form-control mt-3' name='subscription'>
                    <option value="Subscribed">Subscribed</option>
                    <option value="Not subscribed">Not subscribed</option>
                    <option value="Other">Other</option>
                </select>

                <div className='mt-3 d-flex '>
                    <input type="checkbox" className='mx-2' style={{ width: '20px' }} id='emp1' name='employment' />
                    <label htmlFor="emp1">Employed</label>
                </div>

                <button className='btn mt-3 btn-success btn-block w-100' type='submit'>Insert</button>

            </form>
            <hr />


        </div>
    )
}

export default Insert