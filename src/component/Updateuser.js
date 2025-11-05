import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { edituser, fetchgetuserobj } from "../Redux/Action";

const Updateuser = () => {
    const [idd,idchange] = useState(1);
    const [name,namechange] = useState('');
    const [email,emailchange] = useState('');
    const [phone,phonechange] = useState('');
    const [role,rolechange] = useState('staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const uobj = useSelector((state) => state.user.userobj);

    useEffect(() => {
        dispatch(fetchgetuserobj(id))
    },[])

    useEffect(() => {
       if(uobj){
         idchange(uobj.id)
         namechange(uobj.name)
         emailchange(uobj.email)
         rolechange(uobj.role)
         phonechange(uobj.phone)
       }
    },[uobj])

    const handlesubmit = (e) => {
        e.preventDefault();
        const userObj = {id,name,email,phone,role}
        dispatch(edituser(userObj,id))
        toast.success("Updated user!!!")
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
                                    <label className="form-label">ID</label>
                                    <input value={idd} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
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

export default Updateuser;