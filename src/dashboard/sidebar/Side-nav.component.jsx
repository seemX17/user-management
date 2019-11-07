import React from 'react';
import { Link } from 'react-router-dom';

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
                    {
                        this.state.itemList.map(function (title, index) {
                            let routePath = `/${title.toLowerCase().replace(/\s/g,'')}`;
                            return <li key={index}><Link to={routePath} > {title} </Link></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default SideNavbarComponent;
