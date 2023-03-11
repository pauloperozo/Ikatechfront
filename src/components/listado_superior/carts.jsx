///////////////////////////////////////////////////////////////
import _ from 'lodash'
///////////////////////////////////////////////////////////////
const Card = () => {

    const randimg = ()=> {
        const img = _.sample(["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg"])
        return `img/zapatos/${img}`
    }


    const div = {"border":"none"} 
    const but = {"width": "100%","background-color": "#7a4a58"}

    const img_principal = {"width":"250px","height": "200px","margin":"auto","display":"block","padding": "10px"}
    const img_secundarias = {"width":"125px","height": "100px","margin":"auto","display":"block"}


    return (
       <>
                <img style={img_principal} src={randimg()} className="img-fluid" alt="Wild Landscape" />
                <div className="card" style={div}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4"><img src={randimg()} style={img_secundarias} className="img-fluid" alt="Wild Landscape" /></div>          
                            <div className="col-md-4"><img src={randimg()} style={img_secundarias} className="img-fluid" alt="Wild Landscape" /></div>          
                            <div className="col-md-4"><img src={randimg()} style={img_secundarias} className="img-fluid" alt="Wild Landscape" /></div>          
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



