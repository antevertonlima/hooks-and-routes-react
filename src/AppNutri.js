import React, {useState, useEffect} from 'react';
import './style.css'

function App() {
    //criando uma state
    const [nutri, setNutri] = useState([]);

    //criando meu useEffect que ficara responsavel por
    //popular a state nutri apartir de uma API sempre que recarregar a pagina
    useEffect(()=>{

        function loadApi() {
            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

            fetch(url)
            .then((r)=> r.json())
            .then((json)=>{
                setNutri(json);
            })
        }

        loadApi();
    },[])
    
    return(
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>
            {
                nutri.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo">{item.titulo}</strong>

                            <img src={item.capa} alt={item.id} className="capa" />
                            <p className="subtitulo">
                                {item.subtitulo}
                            </p>
                            <a className="botao">Acessar</a>
                        </article>
                    )
                })
            }
            
        </div>
    );
}

export default App;