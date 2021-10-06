import React from 'react'
import { Link } from 'gatsby'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                            <Link to="github.com" className="icon fa-github">
                                <span className="label">
                                    Github
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:craigjones2506@gmail.com" className="icon fa-envelope-o">
                                <span className="label">Email</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
