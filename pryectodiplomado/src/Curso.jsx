import React from "react";
import PropTypes from "prop-types"




const Curso = ({ title, image, price, profesor, alu1, alu2, alu3, alu4, alu5, horario, aula}) => (

    <>


        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={image} alt={title} />
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">
                    {title}
                </h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">

                        <span className="small">
                            <b><u><strong> <em>Profesor: {profesor}</em></strong></u></b> <br></br><center>Aula:{aula}</center> <br></br>
                            Alumnos: <br></br>
                            -{alu1} <br></br>
                            -{alu2} <br></br>
                            -{alu3} <br></br>
                            -{alu4} <br></br>
                            -{alu5} <br></br> <br></br>
                            <b><center>{horario}</center></b>
                        </span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="uaemex.mx">{price}</a>
                </div>
            </div>
        </article>

    </>


)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontro inforacion",
    image: "https://thumbs.dreamstime.com/x/glowing-red-plexus-abstract-lines-particles-intro-logo-background-backdrop-red-plexus-abstract-lines-particles-intro-logo-147048619.jpg",
    price: "--",
    profesor: "Sin profesor"
}


export default Curso

