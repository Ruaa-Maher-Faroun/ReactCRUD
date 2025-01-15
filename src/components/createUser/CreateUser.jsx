import axios from 'axios';
import React, { useEffect } from 'react'
import { use } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CreateUser() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();


  const addUser = async (data) => {

    const response = await axios.post(`${import.meta.env.VITE_BURL}/users`, data);
    if (response.status === 201) {

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/users');
    }
  }


  return (
    <form onSubmit={handleSubmit(addUser)}>
      <div className="form-floating mb-3">
        <input type="text" {...register("userName")} className="form-control" id="name" placeholder="" />
        <label htmlFor="name">name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" {...register("email")} className="form-control" id="floatingInput" placeholder=""  />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="text" {...register("phone")} className="form-control" id="phone" placeholder=""  />
        <label htmlFor="phone">phone</label>
      </div>
      <div className="form-floating">
        <input type="password" {...register("password")} className="form-control" id="password" placeholder=""  />
        <label htmlFor="phone">password</label>
      </div>
      <button className='btn btn-outline-primary'>Add</button>

    </form>

  )
}
