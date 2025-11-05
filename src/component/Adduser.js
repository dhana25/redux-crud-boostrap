import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { adduser } from "../Redux/Action";
import { toast } from "react-toastify";

const Adduser = () => {

    const [name,namechange] = useState('');
    const [email,emailchange] = useState('');
    const [phone,phonechange] = useState('');
    const [role,rolechange] = useState('staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const userObj = {name,email,phone,role}
        dispatch(adduser(userObj))
        toast.success("Added new user!!!")
        navigate('/list')
        //console.log(userObj)
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header">
                        <h3>Add User</h3>
                    </div>
                    <div className="card-body" style={{textAlign:'left'}}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input value={name} onChange={(e)=>namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                             <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input value={email} onChange={(e)=>emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                             <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input value={phone} onChange={(e)=>phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                             <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label">Role</label>
                                    <select className="form-control" value={role} onChange={(e)=>rolechange(e.target.value)}>
                                        <option value="admin">Admin</option>
                                        <option value="staff">staff</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{textAlign:'left'}}>
                        <button className="btn btn-success" type="submit">Submit</button> | 
                            <Link to={'/list'} className="btn btn-danger">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Adduser;