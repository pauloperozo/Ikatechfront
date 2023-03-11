///////////////////////////////////////////////////////////////
import _ from 'lodash'
import recurso from '../../resources/index'
///////////////////////////////////////////////////////////////
const DetalleIzq = () => {

    const item  =  _.sample(recurso)
    const items =  _.sampleSize(recurso,6)

    const img_principal = {"width":"500px","height": "400px","margin":"auto","display":"block"}
    const img_secundarias = {"width":"125px","height": "100px","margin":"auto","display":"block"}


    return (
        <div>

            <span>
                <img style={img_principal} src={`img/zapatos/${item.foto}`} class="img-fluid" alt="Wild Landscape" />
            </span>

            <hr className="hr hr-blurry" />
            <div className="row">
                {items.map( item => <div className="col-md-2"><img style={img_secundarias} src={`img/zapatos/${item.foto}`} className="img-fluid" alt="Wild Landscape" /></div> )}
            </div>
        </div>

    )

}
///////////////////////////////////////////////////////////////
export default DetalleIzq
///////////////////////////////////////////////////////////////