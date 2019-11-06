import React from 'react';
class TopNavBarComponent extends React.Component {
    constructor(){
        super();
        this.state= {
            brandName:'My Application'
        }
    }
    render() {
        return (
            <div className="layout--top--navbar">
                <div className="brand">
                    <h3>AR</h3>
                    <span>{this.state.brandName}</span>
                </div>
                <div className="profile-section">
                    <div className="profile-image">
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
