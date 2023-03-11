///////////////////////////////////////////////////////////////
import _ from 'lodash'
///////////////////////////////////////////////////////////////
const DetalleIzq = () => {

    const randimg = ()=> {
        const img = _.sample(["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg"])
        return `img/zapatos/${img}`
    }

    const img_principal = {"width":"500px","height": "400px","margin":"auto","display":"block"}
    const img_secundarias = {"width":"125px","height": "100px","margin":"auto","display":"block"}


    return (
        <div>

            <span>
                <img style={img_principal} src={randimg()} class="img-fluid" alt="Wild Landscape" />
            </span>

            <hr className="hr hr-blurry" />
            <div className="row">
                    <div className="col-md-2"><img style={img_secundarias} src={randimg()} className="img-fluid" alt="Wild Landscape" /></div>
                    <div className="col-md-2"><img style={img_secundarias} src={randimg()} className="img-fluid" alt="Wild Landscape" /></div>
                    <div className="col-md-2"><img style={img_secundarias} src={randimg()} className="img-fluid" alt="Wild Landscape" /></div>
                    <div className="col-md-2"><img style={img_secundarias} src={randimg()} className="img-fluid" alt="Wild Landscape" /></div>
                    <div className="col-md-2"><img style={img_secundarias} src={randimg()} className="img-fluid" alt="Wild Landscape" /></div>
                    <div className="col-md-2"><img style={img_secundarias} src={randimg()} className="img-fluid" alt="Wild Landscape" /></div>
            </div>

        </div>

    )

}
///////////////////////////////////////////////////////////////
export default DetalleIzq
///////////////////////////////////////////////////////////////