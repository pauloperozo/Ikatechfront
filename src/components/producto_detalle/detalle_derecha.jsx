///////////////////////////////////////////////////////////////
import _ from 'lodash'
///////////////////////////////////////////////////////////////
const DetalleDer = () => {

    const randimg = ()=> {
        const img = _.sample(["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg"])
        return `img/zapatos/${img}`
    }

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
                <h3>Zapatilla Hombre Pelikan</h3>
                <span style={precio}>$00.000</span>
                <span style={secundario}>Cod De Producto Zap-005</span>
            </div>

            <div className="col-md-4" style={margin} >
                <span style={general}>Color</span>
                <img style={img_principal} src={randimg()} className="img-fluid" alt="Wild Landscape" />
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