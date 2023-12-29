import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { POST_SUBADMIN_PROGRESS } from '../../../redux-saga/subadmin/action/action'

const Subadmin = () => {

    const [formdata,setformdata]=useState({})
    const dispatch=useDispatch()

    const changedata=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const submitdata=()=>{
        console.log(formdata);
        dispatch({type:POST_SUBADMIN_PROGRESS,payload:formdata})
    }

    return (
        <div className='container py-4'>
            <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add
                </button>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Enter Your Name <span className='text-danger'>*</span></label>
                                <input type="text" onChange={changedata} name='subadmin_name' className="form-control" id="exampleFormControlInput1" placeholder="Your Name" required/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label  fw-semibold">UserName <span className='text-danger'>*</span></label>
                                <input type="text" onChange={changedata} name='username' className="form-control" id="exampleFormControlInput2" placeholder="Your UserName" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label  fw-semibold">Password <span className='text-danger'>*</span></label>
                                <input type="password" onChange={changedata} name='password' className="form-control" id="exampleFormControlInput3" placeholder="*******" required />
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={submitdata} data-bs-dismiss="modal" className="btn btn-outline-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subadmin
