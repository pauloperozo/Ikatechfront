///////////////////////////////////////////////////////////////
const HeaderMenu = () => {

    const perrito = {
        "display": "block",
        "padding-left": "10px",
        "background-color": "#f8f9fa"
    }


    return (

        <div>

            <span style={perrito}>
                <img src="/img/logo.png" width="180" ></img>                
            </span>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <div class="container-fluid">
                    
                    <div class="collapse navbar-collapse" id="navbarLeftAlignExample">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Hombre</a>
                            </li>

                            <li class="nav-item">
                            <a class="nav-link" href="#">Mujer</a>
                            </li>

                            <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                            </li>

                            <li class="nav-item">
                            <a class="nav-link" href="#">Historia</a>
                            </li>


                            <li class="nav-item">
                            <a class="nav-link" href="#">Tiendas</a>
                            </li>

                        </ul>

                    </div>

                    <div class="d-flex align-items-center">
                        <a class="link-secondary me-3" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </div>

                </div>

            </nav>

        </div>
    )
}
///////////////////////////////////////////////////////////////
export default HeaderMenu
///////////////////////////////////////////////////////////////