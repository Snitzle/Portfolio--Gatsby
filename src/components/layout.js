import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Header />
                        <div className="col-12 col-md-8">
                        {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Template
