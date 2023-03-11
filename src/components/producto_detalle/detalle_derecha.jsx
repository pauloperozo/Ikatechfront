///////////////////////////////////////////////////////////////
import _ from 'lodash'
import recurso from '../../resources/index'
///////////////////////////////////////////////////////////////
const DetalleDer = () => {

    const item =  _.sample(recurso)

    const general = {"display": "block"}
    const boton = {"width": "75%","background-color": "#7a4a58"}
    const padding = {"padding": "10px"}
    const secundario = {"display": "block","color":"#adb5bd"}
    const precio  = {"display": "block","color": "#7a4a58","font-weight": "bold"}


    const  cuadrito = {
        "background-color": "#e3e3e3",
        "margin": "10px"
    }

    const margin = {margin:"10px"}

    const img_principal = {"width":"250px","height": "200px","margin":"auto","display":"block","padding": "10px"}

    return (
      
        <div className="text-left" style={padding}>

            <div style={margin}>
                <h3>{item.nombre}</h3>
                <span style={precio}> $ {item.precio.toFixed(2)}</span>
                <span style={secundario}>Cod De Producto {item.referencia}</span>
            </div>

            <div className="col-md-4" style={margin} >
                <span style={general}>Color</span>
                <img style={img_principal} src={`img/zapatos/${item.foto}`} className="img-fluid" alt="Wild Landscape" />
            </div>


            <div className="container" style={margin}>

                <span className="text-left" style={general}>Guia De Tallas</span>                 
                <div className="row">
                    <div className="col-md-1 text-center" style={cuadrito}>5</div>
                    <div className="col-md-1 text-center" style={cuadrito}>5.5</div>
                    <div className="col-md-1 text-center" style={cuadrito}>6</div>
                    <div className="col-md-1 text-center" style={cuadrito}>6.5</div>
                    <div className="col-md-1 text-center" style={cuadrito}>7</div>
                </div>
                
                <div className="row">
                    <div className="col-md-1 text-center" style={cuadrito}>6</div>
                    <div className="col-md-1 text-center" style={cuadrito}>7</div>
                    <div className="col-md-1 text-center" style={cuadrito}>3</div>
                    <div className="col-md-1 text-center" style={cuadrito}>4</div>
                    <div className="col-md-1 text-center" style={cuadrito}>5</div>
                </div>

            </div>


            <div className="row" style={margin}>
                    <button className="btn btn-primary" style={boton}>Agregar al Carrito</button>
            </div>

        </div>

    )

}

export default DetalleDer