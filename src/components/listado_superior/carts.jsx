
///////////////////////////////////////////////////////////////
const Card = () => {

    const img = {"padding": "10px"}
    const div = {"border":"none"} 
    const but = {"width": "100%"}

    return (
       <>
                <img style={img}src="https://www.oppfrance.com/wp-content/uploads/2020/03/1_9a3ccc77-a041-4d15-b1fa-98c79df75610.jpg" className="img-fluid" alt="Wild Landscape" />
                <div className="card" style={div}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4"><img src="https://www.oppfrance.com/wp-content/uploads/2020/03/1_9a3ccc77-a041-4d15-b1fa-98c79df75610.jpg" className="img-fluid" alt="Wild Landscape" /></div>          
                            <div className="col-md-4"><img src="https://www.oppfrance.com/wp-content/uploads/2020/03/1_9a3ccc77-a041-4d15-b1fa-98c79df75610.jpg" className="img-fluid" alt="Wild Landscape" /></div>          
                            <div className="col-md-4"><img src="https://www.oppfrance.com/wp-content/uploads/2020/03/1_9a3ccc77-a041-4d15-b1fa-98c79df75610.jpg" className="img-fluid" alt="Wild Landscape" /></div>          
                        </div>
                        <h5 className="card-title text-center">Zapatos Hombres </h5>
                        <p className="card-text text-center">$ 00.00</p>
                        <button type="button" style={but} className="btn btn-primary">Agregar Al Carrito</button>
                    </div>
                </div>
       </>
    )
}
///////////////////////////////////////////////////////////////
export default Card
///////////////////////////////////////////////////////////////



