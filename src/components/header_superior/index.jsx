
///////////////////////////////////////////////////////////////
const HeaderSuperior = () => {

    const barra_01 = {
        "display" : "flex",
        "justify-content": "center",
        "background-color": "#7a4a58"
    }

    const barra_02 = {
        "display" : "flex",
        "justify-content": "right",
        "background-color": "rgb(200 198 203)"
    }


    const barra_01_text = {"color":"white"}
    const barra_02_text = {"color":"#6e6e6f"}

    return (
        <nav className="navbar navbar-light bg-light">

            <div className="container-fluid" style={barra_01}>
                <span className="navbar-text">
                    <h4 style={barra_01_text}>HOT SALE -30% EN SANDALIAS</h4>
                </span>
            </div>

            <div className="container-fluid" style={barra_02}>

                <ol class="breadcrumb" style={barra_02_text}>
                    <li class="breadcrumb-item">
                        <a href="#"> Directorios De Tiendas</a>
                    </li>

                    <li class="breadcrumb-item">
                        <a href="#">Servicio Al Cliente</a>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">
                        <a href="#">Mi Cuenta</a>
                    </li>
                </ol>

            </div>
             
        </nav>
    )
}
///////////////////////////////////////////////////////////////
export default HeaderSuperior
///////////////////////////////////////////////////////////////



