///////////////////////////////////////////////////////////////
import DetalleDer from './detalle_derecha'
import DetalleIzq from './detalle_izquierda'
import Texto from './texto'
///////////////////////////////////////////////////////////////
const ProductoDetalle = () => {

    return (
        <div>
            <hr className="hr" />

            <div className="row">
            <span>Hush Puppies / Calazados / Zapatillas Hombre</span>
                <div className="col-md-1"></div>

                <div className="col-md-6">
                    <DetalleIzq/>        
                </div>

                <div className="col-md-1"></div>


                <div className="col-md-4">
                    <DetalleDer/>
                </div>

            </div>

            <Texto/>

        </div>
    )
}
///////////////////////////////////////////////////////////////
export default ProductoDetalle
///////////////////////////////////////////////////////////////



