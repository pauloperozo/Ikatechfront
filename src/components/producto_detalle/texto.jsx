const Texto = () => {

    const detalle  = {
        margin:"10px"
    }
    
    const titulos = {
        "margin-left":"10px",
        "font-weight": "bold"
    }

    return (
  
        <div style={detalle}>
            
            <span style={titulos}>Detalle Del Producto</span>
            <div class="text-justify">
                <hr class="hr hr-blurry" />
                <p>
                El zapato es un accesorio pedestre de la vestimenta hecho con la intención de proveer protección y comodidad al pie, mientras este realiza varias actividades. Al conjunto de todo tipo de accesorios pedestres se le denomina calzado.
                Los zapatos, como el resto de las prendas, también se diseñan atendiendo a fines estéticos y/u ortopédicos. El diseño de los zapatos ha variado enormemente a través del tiempo y de cultura en cultura, con su apariencia originalmente ligada a sus funciones. Adicionalmente, la moda ha dictado frecuentemente muchos elementos de diseño, como la altura de los tacones y el tejido de estos.
                El calzado contemporáneo varía ampliamente en estilo, complejidad y costo. Una sandalia básica puede consistir en una suela delgada y un amarre simple. Los zapatos de moda pueden estar hechos de materiales muy caros en construcciones complejas y vendidos por miles de dólares el par. Otros zapatos son para propósitos muy específicos, tales como los diseñados para escalada de montañas o esquiar.
                </p>
            </div>

            <span style={titulos}>Tecnologias</span>
            <div class="text-justify">
                <hr class="hr hr-blurry" />
                <p>
                Durante este 2022 se ha producido una importante transformación digital en el sector calzado, existiendo un gran potencial a nivel internacional dentro del sector. El calzado tiene grandes posibilidades de innovación marcado por nuevas tecnologías y nuevas funcionalidades que transformarán significativamente la realidad actual del tejido empresarial.
                Anteriormente estuvimos hablando en este blog sobre el Diseño y visualización de calzado en 3D, con software específicos para dar mayor realismo a nuestros diseños de calzado y así evitar realizar en muchos casos los costosos prototipos físicos, contando con la ventaja de que la mayoría de estos software permiten trabajar posteriormente la parte técnica del ajuste, patronaje y escalado. Pero hoy toca enseñaros como hacer diseño de calzado con CorelDRAW.
                </p>
            </div>

        </div>

    )
}
///////////////////////////////////////////////////////////////
export default Texto
///////////////////////////////////////////////////////////////





