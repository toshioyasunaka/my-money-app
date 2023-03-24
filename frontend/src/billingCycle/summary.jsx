import React, {Component} from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row"
import ValueBox from "../common/widget/valueBox"

const Summary = (props) => {
    const {credit, debit} = props

    return(
        <Grid cols='12'>
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos'></ValueBox>
                    <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debit}`} text='Total de Débitos'></ValueBox>
                    <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debit}`} text='Valor Consolidado'></ValueBox>
                </Row>
            </fieldset>
        </Grid>
    )
}

export default Summary