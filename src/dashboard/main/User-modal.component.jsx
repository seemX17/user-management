import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddUserIcon from '../../assets/add-user-icon.svg';
import Form from 'react-bootstrap/Form'
import { addUser } from '../../shared/services/user.service';

class UserModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            showModal: false,
            email: '',
            role: ''
        }
    }
    render() {
        return (
            <Modal className="addUser--modal" size="lg" show={this.state.showModal} onHide={() => { this.handleClose() }}>
                <Modal.Body className="row p-0 m-0">
                    <div className="col-md-5 left-section">
                        <img className="add-user-img mt-4" src={AddUserIcon} alt="add user icon" />
                        <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius porro veniam dolores voluptatum quasi recusandae repudiandae expedita in maiores dignissimos inventore, ratione necessitatibus, ad fugiat. Dicta perspiciatis aliquid repellat sit.</p>
                    </div>
                    <div className="col-md-7 p-4">
                        <h2 >User Information</h2>
                        <Form className="mt-5" onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="font-weight-bold">Email id of user</Form.Label>
                                <Form.Control type="email" required value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group className="mt-4" controlId="exampleForm.ControlSelect1">
                                <Form.Label className="font-weight-bold">Role</Form.Label>
                                <Form.Control as="select" value={this.state.role} required className="w-50" onChange={this.handleChange}>
                                    <option>Admin</option>
                                    <option>Owner</option>
                                    <option>Sales</option>
                                </Form.Control>
                            </Form.Group>
                            <Button className="add-button float-right mx-2 px-5 mt-5 py-2" type="submit">
                                Add
                            </Button>
                            <Button className="cancel-button float-right mx-2 px-5 mt-5 py-2" onClick={() => { this.handleClose() }}>
                                Cancel
                             </Button>

                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
    handleChange(event) {
        switch (event.target.type) {
            case 'select-one':
                this.setState({ role: event.target.value });
                break;
            default:
                this.setState({ email: event.target.value });
                break;
        }

    }
    handleSubmit(event) {
        let userObj = {
            user: this.state.email,
            lastSignedIn: "",
            role: this.state.role
        }
        let addUserFunc = addUser(userObj);
        addUserFunc.then((data) => {
            this.handleClose();
        });
        event.preventDefault();
    }
    handleClose() {
        this.setState({ showModal: false })
    }
    componentDidMount() {
        this.setState({ showModal: this.props.show });
    }
    handleShow() {
        this.setState({ showModal: true })
    }
}

export default UserModalComponent;