import axios from 'axios';
import React, { useEffect } from 'react'
import { use } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function UpdateUser() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();

  const getUser = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);


    setValue("userName", data.user.userName);
    setValue("email", data.user.email);
    setValue("phone", data.user.phone);



  }
  useEffect(() => {
    getUser();
  }, [])


  const updateUsr = async (data) => {

    const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`, { userName: data.userName });
    if (response.status === 200) {

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/users');
    }
  }


  return (
    <form onSubmit={handleSubmit(updateUsr)}>
      <div className="form-floating mb-3">
        <input type="text" {...register("userName")} className="form-control" id="name" placeholder="" />
        <label htmlFor="name">name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" {...register("email")} className="form-control" id="floatingInput" placeholder="" disabled />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="text" {...register("phone")} className="form-control" id="phone" placeholder="" disabled />
        <label htmlFor="phone">phone</label>
      </div>
      <button className='btn btn-outline-primary'>Update</button>

    </form>

  )
}
