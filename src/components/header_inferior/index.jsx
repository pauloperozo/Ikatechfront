
///////////////////////////////////////////////////////////////
const HeaderInferior = () => {

    const texto = {"color":" #7a4a58"}

    return (
    <nav class="navbar navbar-light bg-light">
            
        <div class="container-fluid">
            <a class="navbar-brand"></a>
            <form class="d-flex input-group w-auto">
            <input
                type="search"
                class="form-control rounded"
                placeholder="Buscar"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
            </form>
        </div>

        <div class="container-fluid">
            <a class="navbar-brand"></a>
            <span class="input-group-text border-0" style={texto}>
                Envios Gratis Para Pedidos Superiores a 300.000$  
            </span>
        </div>

    </nav>
    )
}
///////////////////////////////////////////////////////////////
export default HeaderInferior
///////////////////////////////////////////////////////////////