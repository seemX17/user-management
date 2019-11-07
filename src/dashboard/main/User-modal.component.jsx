import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddUserIcon from '../../assets/add-user-icon.svg';
import Form from 'react-bootstrap/Form'

class UserModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
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
                        <Form className="mt-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="font-weight-bold">Email id of user</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group className="mt-4" controlId="exampleForm.ControlSelect1">
                                <Form.Label className="font-weight-bold">Role</Form.Label>
                                <Form.Control as="select" className="w-50">
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
    handleClose() {
        this.setState({ showModal: false })
    }
    componentDidMount() {
        this.setState({ showModal: this.props.show });
    }
    handleShow(){
        this.setState({ showModal: true })
    }
}

export default UserModalComponent;