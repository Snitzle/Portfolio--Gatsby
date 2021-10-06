import React from 'react'
import { Link } from 'gatsby'


class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <nav className="nav top-nav bg-black mb-4 mb-md-5">
                <div className="container">
                    <div className="d-flex justify-content-between py-3">
                        <Link to="/" className="text-decoration-none">
                            <p className="text-white mb-0">
                                Craig Jones - Web Developer 
                            </p>
                        </Link>
                        <div className="">
                            <Link to="/cv" className="text-white text-decoration-none me-3">My CV</Link>
                            <Link to="/cv" className="text-white text-decoration-none me-3">Projects</Link>
                            <Link to="/podcast" className="text-white text-decoration-none">Podcast</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Template