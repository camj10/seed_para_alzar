import React from 'react'
import { Formik, Form, Field } from 'formik'; 
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true;
const Salir = ({ onSubmit }) => {
    const navigate = useNavigate();
    const salir = async(values, actions) => {
        try {
            const respuesta = await axios.get(`http://localhost:8000/api/usuario/salir`, values);
            // const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/usuario/login`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Cerrado correctamente",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            }
        } catch (error) {
            console.log(values);
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }
    return (
        <>
            <div to='/register'>Saliendo</div>
        </>
    )
}

export default Salir