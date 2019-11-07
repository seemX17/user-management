import React from 'react';
import { Link } from 'react-router-dom';

class SideNavbarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: ['Product', 'Demo Scripts', 'Customers', 'Sales Team', 'Demos', 'Settings'],
            isActiveId: 0
        };
    }
    render() {
        return (
            <div className="layout--side--navbar">
                <ul>
                    {
                        this.state.itemList.map((title, index) => {
                            let routePath = `/${title.toLowerCase().replace(/\s/g, '')}`;
                            return <li key={index} className={(this.state.isActiveId === index) ? 'navigation--active' : ''} onClick={() => this.setActive(index)}>
                                <Link to={routePath} >
                                    {title}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
    setActive(position) {
        if (this.state.isActiveId === position) {
            this.setState({ isActiveId: null })
        } else {
            this.setState({ isActiveId: position })
        }
    }
}
export default SideNavbarComponent;
