import "./home.css";
import TheOffice from "../../assets/the-office-poster.webp";

function Home(){
    return(
    <div className="content">
        <h1 className="title">The office</h1>
        <img className="poster" src={TheOffice} alt="The office poster"></img>
        <div className="text">
            <p className="sinopsis"> 
                The Office (La oficina en Hispanoamérica) es una serie de televisión 
                estadounidense de humor ambientada en una oficina regional de venta 
                de papel radicada en la localidad de Scranton, en Pensilvania 
                (Estados Unidos). Adaptada a partir de la serie británica del 
                mismo nombre, se estrenó en la cadena de televisión estadounidense
                National Broadcasting Company (NBC) el 24 de marzo de 2005. 
                Ha ganado los premios Primetime Emmy y Peabody. Aunque se 
                trata de una obra de ficción, la grabación adopta el formato 
                de falso documental, en el sentido de que los actores a veces 
                miran a cámara e, incluso, se dirigen directamente a ella comentando 
                algunas escenas.
            </p>
            <p className="resume">
                Michael es el gerente de una empresa papelera de Pensilvania en
                la que tiene bajo su mando a personajes como Dwight,
                su asistente; Pam, la recepcionista; Jim, un vendedor, 
                o Ryan, un joven con contrato temporal que pronto se 
                dará cuenta de que en esta compañía nada es lo que parece.

                "The Office" es un 'remake' americano de la exitosa serie británica del 
                mismo título, en la que, bajo un estilo de falso documental, se ofrece 
                un retrato políticamente incorrecto de las relaciones de poder y sumisión
                que se establecen dentro del lugar de trabajo. El cómico Steve Carrell
                ("Pequeña Miss Sunshine"), encabeza el reparto interpretando al 
                histriónico e hiperactivo jefe de la oficina, papel por el que obtuvo
                el Globo de Oro al mejor actor televisivo de comedia. Además, 
                la serie acumula tres premios Emmy (los Oscars de la pequeña pantalla).

                La primera temporada sólo tuvo seis episodios y se filmó en una oficina 
                de verdad. Para escribir la serie, el productor contrató a cuatro
                guionistas: Michael Schur, B.J. Novak, Paul Lieberstein y Mindy Kaling. 
            </p>
        </div>
    </div>
    );
}

export default Home;