import React from 'react'

class AddDataForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };

        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeFn = this.handleChangeFn.bind(this);
        this.handleChangeLn = this.handleChangeLn.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
    }
    handleChangeId(event){
        this.setState({
            id: event.target.value
        })
    }
    handleChangeFn(event){
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLn(event){
        this.setState({
            lastName: event.target.value
        })
    }
    handleChangeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    handleChangePhone(event){
        this.setState({
            phone: event.target.value
        })
    }




    render(){
        return <>
            <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">ID</label>
                <input value={this.state.id} onChange={this.handleChangeId} type="text" className="form-control" id="formGroupExampleInput"
                       placeholder="Enter user ID..."/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">First name</label>
                <input value={this.state.firstName} onChange={this.handleChangeFn} type="text" className="form-control" id="formGroupExampleInput2"
                       placeholder="Enter user first name..."/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Last name</label>
                <input value={this.state.lastName} onChange={this.handleChangeLn} type="text" className="form-control" id="formGroupExampleInput2"
                       placeholder="Another input..."/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Email address</label>
                <input value={this.state.email} onChange={this.handleChangeEmail} type="text" className="form-control" id="formGroupExampleInput2"
                       placeholder="Enter user last name..."/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Phone number</label>
                <input value={this.state.phone} onChange={this.handleChangePhone} type="text" className="form-control" id="formGroupExampleInput2"
                       placeholder="Enter phone number..."/>
            </div>
            <button disabled={(!this.state.id) && (!this.state.phone) && (!this.state.email) && (!this.state.lastName)
            && (!this.state.firstName)} onClick={() => {this.props.addUserToDataBase(this.state);
                this.setState({ id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: ''})
            }} type="button" className="btn btn-primary btn-lg btn-block">ADD to the table</button>
        </form>
            </>
    }
}

export default AddDataForm