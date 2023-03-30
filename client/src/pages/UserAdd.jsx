import React from 'react'
import Register from '../components/Register'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const UserAdd = () => {
    const initialValues = {
        name:'',
        email: '',
        password: '',
    }
const navigate = useNavigate();

    const crearUser = async(values, actions) => {

    try {
        const respuesta = await axios.post(`http://localhost:8000/api/usuario`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GENIAL!!!',
                text: `Se ha agregado perfectamente!`,
            });

            actions.resetForm(initialValues);
            navigate('/')
        }
    } catch (error) {
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
        <hr className='mt-5'/>
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <Register 
                    initialValues={initialValues}
                    botonTexto="Agregar"
                    onSubmit={crearUser}
                />
            </div>
        </div>
    </>
    )
}

export default UserAdd