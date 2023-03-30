import { useOutletContext } from 'react-router-dom';
import {Swal} from 'sweetalert2';
import axios from 'axios'
const Restar = ({id, cantidadA})=>{
    const{constanteid}= useOutletContext()|| null ||{};
    const envio = async ()=>{
        try{
            const{value: cantidad} = await Swal.fire({
                title: 'cuantos kg desea restar del stock',
                input:'number',
                inputLabel:'cantidad',
                inputPlaceholder: 'Ingrese la cantidad a ser disminuida',
                inputAttributes: {
                                maxlength: 10,
                                autocapitalize: 'off',
                                autocorrect: 'off'
                                }
            })
            if(Number(cantidad)){
                const actualizacion=await axios.put(`${process.env.MONGO_URL}/api/restar/${id}`,{'cantidad':(Number(cantidad)-cantidadA)})
                constanteid([id])
                console.log(actualizacion)
                console.log(cantidad)
                Swal.fire(`Correcto: ${cantidad}`)
                                }
                
            }
        catch (error){
            console.log(error)
        }
    }
    return(
        <button onClick={envio} className="btn btn-warning"> Restar</button>
    )
}
export default Restar