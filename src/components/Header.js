import React from 'react'
import {Link} from 'gatsby';

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div class="header-inner__wrapper">
                    <div className="inner">

                        <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                        <h1 class="c-header-inner__title">
                            Hi, I'm Craig Jones
                        </h1>

                        <p> 
                            I'm a PHP developer with a passion for Java.
                        </p>
                        
                        <ul>
                            <li>
                                {/* <Link to="/cv" >CV</Link> */}
                            </li>
                        </ul>

                    </div>
                    <Footer />
                </div>
            </header>
        )
    }
}

export default Header
