///////////////////////////////////////////////////////////////
import _ from 'lodash'
import recurso from '../../resources/index'
///////////////////////////////////////////////////////////////
const Card = () => {

    const item  =  _.sample(recurso)
    const items =  _.sampleSize(recurso,3)


    const div = {"border":"none"} 
    const but = {"width": "100%","background-color": "#7a4a58"}

    const img_principal = {"width":"250px","height": "200px","margin":"auto","display":"block","padding": "10px"}
    const img_secundarias = {"width":"125px","height": "100px","margin":"auto","display":"block"}


    return (
       <>
                <img style={img_principal} src={`img/zapatos/${item.foto}`} className="img-fluid" alt="Wild Landscape" />
                <div className="card" style={div}>
                    <div className="card-body">
                        
                        <div className="row">                
                            {items.map( item =><div className="col-md-4"><img src={`img/zapatos/${item.foto}`} style={img_secundarias} className="img-fluid" alt="Wild Landscape" /></div> )}
                        </div>

                        <h5 className="card-title text-center"> {item.nombre} </h5>
                        <p className="card-text text-center">$ {item.precio.toFixed(2)}</p>
                        <button type="button" style={but} className="btn btn-primary">Agregar Al Carrito</button>
                    </div>
                </div>
       </>
    )
}
///////////////////////////////////////////////////////////////
export default Card
///////////////////////////////////////////////////////////////



