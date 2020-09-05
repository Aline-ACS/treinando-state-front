import React from 'react';
import ButtonIncrement from './components/buttonIncrement';
import Table from './components/table';
import Brands from './components/apiIntegration/brands';
import Products from './components/apiIntegration/products';

function app(){
    return(
        <div>
            <h1>Treinando State</h1>
            <ButtonIncrement/>
            <Table/>
            <Brands/>
            <Products/>
        </div>
    );
}

export default app;