import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Users() {
    const [users, setUsers] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
        console.log(data);
        setUsers(data.users);

    };
    const deleteUser = (id) =>{
       
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
}
    useEffect(() => {
        getData();
    }, [users])
    return (
        <>
        <Link to={'/create'} className='btn btn-primary'>create</Link>
        <div className="row">

            {users.map(user => {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6 my-5">

                    <div class="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{user.userName}</h5>
                                <p class="card-text">{user.email}</p>
                                <p class="card-text">{user.phone}</p>
                                <Link to={`/details/${user._id}`} className="btn btn-primary">Details</Link>
                                <button className="btn btn-danger ms-5" onClick={()=>deleteUser(user._id)}>Delete</button>
                            </div>
                    </div>
                    </div>
                )
            }
        )}
        </div>
        </>
    )
}
