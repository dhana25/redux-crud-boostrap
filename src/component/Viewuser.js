import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchgetuserobj } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Viewuser = () => {
    const uobj = useSelector((state) => state.user.userobj);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchgetuserobj(id))
    }, [])
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h3>View User Detail</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="container">
                            {/* <div class="profile-header">
                                <img src="https://via.placeholder.com/120" alt="User Photo"/>
                                    <h2>John Doe</h2>
                                    <p>Software Engineer</p>
                            </div> */}

                            <div class="user-info">
                                <h3>User Details</h3>
                                <p><span>ID:</span> {uobj.id}</p>
                                <p><span>Email:</span> {uobj.name}</p>
                                <p><span>Phone:</span> {uobj.phone}</p>
                                <p><span>Role:</span> {uobj.role}</p>
                                <p><span>Email:</span> {uobj.email}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={'/list'} className="btn btn-danger" >Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Viewuser;