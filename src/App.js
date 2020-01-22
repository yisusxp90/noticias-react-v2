import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import axios from 'axios';
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

    // definir la categoria y noticas
    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState({});

    useEffect(() => {
        const consultarAPI = async () => {
            const key = "741b6a9d01d44e92845ca5ca47eb42d3";
            const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${key}`;
            const respuesta = await axios.get(url);
            guardarNoticias(respuesta.data.articles);
        };
        consultarAPI();
    }, [categoria]);

    return (
        <Fragment>

            <Header titulo="Noticias"/>
                <div className="container white">
                <Formulario
                    guardarCategoria={guardarCategoria}
                />
                <ListadoNoticias noticias={noticias}/>
            </div>
        </Fragment>
    );
}

export default App;
