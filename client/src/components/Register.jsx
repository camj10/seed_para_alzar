import React from 'react'
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true;
const Register = ({ onSubmit }) => {
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword:''
    }
    const register = async(values, actions) => {
        try {
            const respuesta = await axios.post(`http://localhost:8000/api/usuario`, values);
            // const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/usuario/login`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "Registro correcto",
                    showConfirmButton: false,
                    timer: 1500
                })
    
                actions.resetForm(initialValues);
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

        <div className="container">
        <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        onSubmit={register}
                    >
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                        {/* {({ errors, touched }) => ( */}
                        <Form>
                            <div className="form-floating mb-3">
                                <Field name="name" className="form-control " placeholder="Ingrese su nombre de usuario" />
                                <label for="floatingInput">User name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field name="email" className="form-control " type="email" placeholder="Ingrese email" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field name="password" className="form-control" placeholder="Ingrese contraseña" type="password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field name="confirmPassword" className="form-control" placeholder="Ingrese contraseña" type="password"/>
                                <label for="floatingPassword">Confirm password</label>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
                            </div>
                        </Form>
                        {/* )} */}
                    </div>
                    
                </div>
            </div>
        </div>
        </Formik>
        </div>
    )
}

export default Register