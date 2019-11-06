import React from 'react';

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: ['Product', 'Demo Scripts', 'Customers', 'Sales Team', 'Demos', 'Settings']
        };
    }
    render() {
        return (
            <div className="layout--left--navigation">
                <ul>
                    {this.state.itemList.map(function (title, index) {
                        return <li key={index}>{title}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
export default SidebarComponent;
