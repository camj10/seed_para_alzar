import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Reponer from '../../components/Reponer'
import logo from '../../assets/img/imgSoja.jpg'
import Restar from '../../components/Restar'

const Seed = () => {
    const [seed, setSeed] = useState([]);//un arreglo vacio
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api`);
            setSeed(respuesta.data);
        }
        getData();

    }, [])
    return (
        <div className='home'>
            <div>
                <div className='titleSeed'>
                    <div>
                        <h1>Seed manager</h1>
                    </div>
                    <div>
                        <h2>Your perfect seed manager</h2>
                    </div>
                </div>
                <div className='btnSeed2'>
                    <button type="button" className="btn btn-danger">
                        <Link to={'/logout'}>Logout</Link>
                    </button>
                </div>
            </div> 
            <div>
                <div>
                <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Variedad</th>
                                <th scope="col">Semilla</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Nivel de stock</th>
                                <th scope="col"> Agregar stock</th> 
                                <th scope="col"> Restar stock</th> 
                                {/* Tiene que ser un boton */}
                                <th scope="col">Descripcion</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> 
                                <td>Hola</td>
                                <td>Hola</td>
                                <td>Hola</td>
                                <td>Hola</td>
                                <td>{seed.stockcritico<(seed.cantidad)?<span className='status C1'>Correcto</span>:(seed.cantidad===0)?<span className='status C2'>Agotado</span>:<span className='status C3'>Critico</span>}</td>
                                <td><Reponer id={seed.id} unidadesA={seed.cantidad}/></td>
                                <td><Restar id={seed.id} unidadesA={seed.cantidad}/></td>
                                <td>Hola</td>
                                <td> 
                                <button className="btn btn-light">
                                    <Link to={`/seed/${seed._id}/edit`}>Editar</Link>
                                </button>
                                </td>
                                <td> 
                                    <button className="btn btn-light">
                                        <Link to={`/seed/${seed._id}`}>Detalle</Link>
                                    </button>
                                </td>
                            </tr> 
                            {
                                seed.map((seed,index)=>{
                                    <tr key={index}> 
                                    <tr>
                                        <td>{seed.fecha}</td>
                                        <td>{seed.variedad}</td>
                                        <td>{seed.semilla}</td>
                                        <td>{seed.cantidad}</td>
                                        <td>{seed.stockcritico<(seed.cantidad)?<span className='status C1'>Correcto</span>:(seed.cantidad===0)?<span className='status C2'>Agotado</span>:<span className='status C3'>Critico</span>}</td>
                                        <td><Reponer id={seed.id} unidadesA={seed.cantidad}/></td>
                                        <td>
                                            <Restar id={seed.id} unidadesA={seed.cantidad}/>
                                        </td>
                                        <td>{seed.descripcion}</td>
                                        <td> 
                                            <Link to={`/seed/${seed._id}/edit`}>Editar</Link>
                                        </td>
                                        <td> 
                                            <Link to={`/seed/${seed._id}`}>Detalle</Link>
                                        </td>
                                    </tr>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>  
                </div> 
            </div>
            <div className='btnSeed1'>
                    <button  type="button" className="btn btn-btn btn-light" >
                        <Link to={'/seed/new'}>Add new seed</Link>
                    </button>
            </div>
            {/* <div className='imgseed'> 
                <div>
                <img src={logo} className='imgSoja'></img>
                </div>
            </div> */}
        </div>
    )
}

export default Seed