import React from 'react';

class SideNavbarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: ['Product', 'Demo Scripts', 'Customers', 'Sales Team', 'Demos', 'Settings']
        };
    }
    render() {
        return (
            <div className="layout--side--navbar">
                <ul>
                    {this.state.itemList.map(function (title, index) {
                        return <li key={index}>{title}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
export default SideNavbarComponent;
