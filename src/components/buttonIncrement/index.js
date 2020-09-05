import React, {useState} from 'react';

export default () => {
    const [contador, setContador] = useState(0);

    return(
        <div>
            <label>
                Contador:
                <input type="number" readOnly value={contador}></input>
                <button onClick={e => setContador(contador+1)}>Incrementar</button>
                <button onClick={e => setContador(contador-1)}>Decrementar</button>
            </label>
        </div>
    );

    // function incrementar(){
    //     setContador(contador + 1);
    // }
    
    // return(
    //     <div>
    //         <label>
    //             Contador:
    //             <input type="number" readOnly value={contador}></input>
    //             <button onClick={incrementar}>Incrementar</button>
    //         </label>
    //     </div>
    // );

};