import React from 'react'

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
                            I focus on Wordpress and Java. 
                            I'm currently transitioning out
                            of frontend and into fullstack.
                        </p>
                        
                    </div>
                    <Footer />
                </div>
            </header>
        )
    }
}

export default Header
