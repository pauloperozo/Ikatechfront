const DetalleDer = () => {

    const general = {"display": "block"}
    const boton = {"width": "75%"}
    const padding = {"padding": "10px"}
    
    const  cuadrito = {
        "background-color": "#e3e3e3",
        "margin": "10px"
    }

    const margin = {margin:"10px"}

    return (
      
        <div className="text-left" style={padding}>

            <div style={margin}>
                <h3>Zapatilla Hombre Pelikan</h3>
                <span style={general}>$00.000</span>
                <span style={general}>Cod De Producto Zap-005</span>
            </div>

            <div className="col-md-4" style={margin} >
                <span style={general}>Color</span>
                <img style={padding}src="https://www.oppfrance.com/wp-content/uploads/2020/03/1_9a3ccc77-a041-4d15-b1fa-98c79df75610.jpg" className="img-fluid" alt="Wild Landscape" />
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