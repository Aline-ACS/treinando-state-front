import React, {useState} from 'react';

export default () => {
    const [produtos, setProdutos] = useState(['iphone', 'notebook', 'celular', 'tijolo']);
    const [prod, setProd] = useState('');
    
    function verificaProd(){
        setProdutos([...produtos, prod]);
        setProdutos('');
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Produtos</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(
                        (produto) => 
                            <tr key={produto}>
                                <td>{produto}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <label>
                Produto:
                <input value={prod} onChange={e => setProd(e.target.value)}></input>
            </label>
                <button onClick={verificaProd}>Adicionar na Lista</button>
        </div>
    );

};