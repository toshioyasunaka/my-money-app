import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {reduxForm, Field, formValueSelector} from 'redux-form'

import { init } from "./billingCycleActions";
import LableAndInput from "../common/form/lableAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
    calculateSummary() {
        const sum = (t, v) => t + v

        return {
            sumOfCredits: this.props.credits.map((credit) => +credit.value || 0).reduce(sum),
            sumOfDebits: this.props.debits.map(debit => +debit.value || 0).reduce(sum)
        }
    }

    render() {
        const {handleSubmit, readOnly, credits, debits} = this.props
        const {sumOfCredits, sumOfDebits} = this.calculateSummary()

        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LableAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name="month" component={LableAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name="year" component={LableAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <Summary credit={sumOfCredits} debit={sumOfDebits} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} 
                        field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debits} readOnly={readOnly} 
                        field='debits' legend='Débitos' showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits'),
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)