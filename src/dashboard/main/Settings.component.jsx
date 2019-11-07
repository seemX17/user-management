import React from 'react';
import Table from 'react-bootstrap/Table';
import { getUsers, deleteUser } from '../../shared/services/user.service';
import deleteIcon from '../../assets/delete-icon.svg';
import UserModalComponent from './User-modal.component';

class SettingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.showModalref = React.createRef();
    this.state = {
      userList: [],
    }
  }
  render() {
    return (
      <div className="settings--container">
        <UserModalComponent ref={this.showModalref}/>
        <button className="button-add mt-4 py-1" onClick={()=> this.showModal()}>Add User</button>
        <div className="table-container text-center mt-5 w-75">
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Last Signed In</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.userList.map((userItem, index) => {
                  return <tr key={userItem.id}>
                    <td>{userItem.id}</td>
                    <td>{userItem.user}</td>
                    <td>{userItem.lastSignedIn}</td>
                    <td>{userItem.role}</td>
                    <td>
                      <img className='deleteIcon' src={deleteIcon} alt="delete icon" onClick={() => this.removeUser(userItem.id)} />
                    </td>
                  </tr>
                })
              }

            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.addInitialData(); //for testing purpose only
    let getUserFunc = getUsers();
    getUserFunc.then((data) => {
      this.setState({ userList: JSON.parse(data) })
    });
  }

  removeUser(id) {
    let deleteUserFunc = deleteUser(id);
    deleteUserFunc.then((data) => {
      this.setState({ userList: data })
    });
  }
  addInitialData() {
    let obj = [
      {
        user: 'Suresh K',
        lastSignedIn: Date.now(),
        role: 'Owner',
        id: 1
      },
      {
        user: 'Vikram',
        lastSignedIn: Date.now(),
        role: 'Admin',
        id: 2
      },
      {
        role: 'Sales',
        id: 3
      },
      {
        role: 'Sales',
        id: 4
      }
    ]
    localStorage.setItem('users', JSON.stringify(obj));
  }
  showModal(){
    debugger;
    this.showModalref.current.handleShow();
    //this.setState({showModal: true})
  }
}
export default SettingsComponent;
