import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import Nav from './Nav';

let page_path = window.location.pathname;

const render_sidebar = () => {
    
    if (page_path === '/') {
        return <Header />;
    }

}

class Template extends React.Component {


    render() {
        const { children } = this.props

        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">

                        <Header />
                    
                        <div className="col-12 col-md-7 offset-md-1">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Template
