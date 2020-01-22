import React from 'react';
import Noticia from "./Noticia";

const ListadoNoticias = ({noticias}) => {

    if(Object.keys(noticias).length === 0) return null;

    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))};
        </div>
    );
};

export default ListadoNoticias;