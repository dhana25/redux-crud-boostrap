import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUserlist, removeUser } from "../Redux/Action"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Userlist = (prop) => {
    useEffect(() => {
        prop.loaduser()
    }, [])

    const handledelete = (id) => {
        if(window.confirm('Do you Want to delete?')){
            prop.removeuser(id)
            prop.loaduser()
            toast.success("User deleted !!!")
        }
    }
    return (
        prop.user.loading ? <div><h2>Loading...</h2></div> :
            prop.user.errmessage ? <div><h2>{prop.user.errmessage}</h2></div> :
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h3>User List</h3>
                        </div>
                        <div className="card-body">
                            <Link to={'/adduser'} className="btn btn-primary" style={{ float: 'right' }}>Add User(+)</Link><br></br><br></br>
                            <table className="table table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>ROLE</th>
                                        <th>PHONE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {prop.user.userlist &&
                                        prop.user.userlist.map((item) =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.role}</td>
                                                <td>{item.phone}</td>
                                                <td><button className="btn btn-primary">View</button> | <Link to={'/updateuser/' + item.id} className="btn btn-success">Edit</Link> |
                                                    <button className="btn btn-danger" onClick={() => handledelete(item.id)}>Delete</button></td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    )
}

const mapStatetoprop = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchtooprop = (dispatch) => {
    //console.log(dispatch(fetchUserlist()))
    return {
        loaduser: () => dispatch(fetchUserlist()),
        removeuser : (id) => dispatch(removeUser(id))
    }
}

export default connect(mapStatetoprop, mapDispatchtooprop)(Userlist);