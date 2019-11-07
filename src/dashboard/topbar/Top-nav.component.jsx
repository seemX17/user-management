import React from 'react';
import userImage from '../../assets/user-image.jpg';
class TopNavBarComponent extends React.Component {
    constructor(){
        super();
        this.state= {
            brandName:'User Management'
        }
    }
    render() {
        let profileImageStyle = {backgroundImage:`url(${userImage})`};
        return (
            <div className="layout--top--navbar">
                <div className="brand">
                    <h3>AR</h3>
                    <span>{this.state.brandName}</span>
                </div>
                <div className="profile-section">
                    <div className="profile-image" style={profileImageStyle}>
                    </div>
                    <div className="profile-name">
                        <span className="m-1">Jane Doe</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopNavBarComponent;
