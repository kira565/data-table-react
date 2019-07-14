import React from 'react'
import {Field, reduxForm} from 'redux-form'

const required = value => value ? undefined : 'Обязательное поле';
const maxLength = max => value => value && value.length > max ? `Необходимо ввести ${max} символов или меньше` : undefined;
const maxLengthName = maxLength(15);
const maxLengthLastName = maxLength(20);
const maxLengthTel = maxLength(12);
const number = value => value && isNaN(Number(value)) ? 'Необходимо ввести числовое значние' : undefined;
const string = value => value && !/^[а-яА-ЯёЁa-zA-Z]+$/.test(value) ? 'Не корректно введены данные' : undefined;
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Некорректный email' : undefined;

const renderField = ({input, label, type, meta: {touched, error, warning}}) => {

    return <div>
        <div className={"form-group"}>
            <label>{label}</label>
            <input className={(touched && ((error && "form-control is-invalid")))
            || (touched && (!error && "form-control is-valid"))
            || "form-control"} {...input} placeholder={label} type={type}/>
            {touched && ((error && <span style={{color: 'red', fontWeight: 'bold'}}>{error}</span>)
                || (warning && <span style={{color: 'red', fontWeight: 'bold'}}>{warning}</span>))}
        </div>
    </div>
};



const AddDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field validate={[required, number]} name={'id'} label="ID" component={renderField} type="text" className="form-control"
               id="formGroupExampleInput"
               placeholder="Enter user ID..."/>
        <Field validate={[maxLengthName, string]} name={'firstName'} component={renderField} label="First Name" type="text" className="form-control"
               id="formGroupExampleInput2"
               placeholder="Enter user first name..."/>
        <Field validate={[maxLengthLastName, string]} name={'lastName'} component={renderField} label="Second Name" type="text" className="form-control"
               id="formGroupExampleInput2"
               placeholder="Another input..."/>
        <Field validate={email} name={'email'} component={renderField} label="Email" type="text" className="form-control"
               id="formGroupExampleInput2"
               placeholder="Enter user last name..."/>
        <Field validate={[maxLengthTel, number]} name={'phone'} component={renderField} label="Phone" type="text" className="form-control"
               id="formGroupExampleInput2"
               placeholder="Enter phone number..."/>
        <button disabled={props.pristine} className="btn btn-primary btn-lg btn-block">ADD to the table</button>
    </form>
};

const DataAddReduxForm = reduxForm({form: 'addForm'})(AddDataForm);

class DataAddBlock extends React.Component {
    handleSubmit = (formData) => {
        const {dataAddedSuccessful} = this.props;
        this.props.addUserToDataBase(formData);
        dataAddedSuccessful();
    };

    render() {
        return <DataAddReduxForm {...this.props} onSubmit={this.handleSubmit}/>
    }
}


export default DataAddBlock