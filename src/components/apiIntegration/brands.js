import React, { useState, useEffect } from 'react';
import api from '../../api';

export default () => {
    const [name, setName] = useState('');
    const [marcas, setMarcas] =useState([]);

    async function sendBrand() {
        await api.post('/brands', {
            name
        })
        .then((response) => setMarcas([...marcas, response.data.brand]))
        .catch((error) => console.log(error));
        setName('');
    }

    useEffect(() => {
        api.get('/brands')
        .then((response) => setMarcas(response.data.brands))
        .catch((error) => console.log(error));
    }, [])

    return(
        <>
            <div>
                <h3>Cadastro de Marcas</h3>
                    <label>
                        Nome:
                        <input value={name} onChange={e => setName(e.target.value)}></input>
                    </label>
                    <button onClick={sendBrand}>Cadastrar Marca</button>
            </div>
            <div>
                <ul>
                    {marcas.map((marca) => <li key={marca.uid}>{marca.name}</li>)}
                </ul>
            </div>
        </>
    );
}