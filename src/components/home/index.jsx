///////////////////////////////////////////////////////////////
import HeaderSuperior from '../header_superior'
import HeaderInferior from '../header_inferior'
import HeaderMenu from '../header_menu'
import ProductoDetalle from '../producto_detalle'
import ListadoSuperior from '../listado_superior'
import ListadoInferior from '../listado_inferior'
import Footer from '../footer'
///////////////////////////////////////////////////////////////
const Home = () => {

    return (
        <div>
            <HeaderSuperior/>
            <HeaderInferior/>
            <HeaderMenu/>
            <ProductoDetalle/>
            <span class="d-block p-2 bg-light text-dark"> Completa Tu Look </span>
            <ListadoSuperior/>
            <span class="d-block p-2 bg-light text-dark"> Producto Recomendados </span>
            <ListadoInferior/>
            <Footer />
        </div>
    )
}
///////////////////////////////////////////////////////////////
export default Home
///////////////////////////////////////////////////////////////