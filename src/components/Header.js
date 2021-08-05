import React from 'react'
import {Link} from 'gatsby';

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <div className="col-12 col-md-4">
                <header id="header">
                    <div class="header-inner__wrapper">
                        <div className="inner">

                            <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                            <h1 class="c-header-inner__title mb-3 text-black">
                                Hi, I'm Craig Jones
                            </h1>

                            <p> 
                                I'm a Full Stack Developer living in Lincoln, England. I have specialised in WordPress and Magento, creating all kind of websites utilizing PHP and modern Front End practices.
                            </p>
                            
                            <p>In my freetime I 3D model using blender, have an interest in C++ and Java and would like to branch out to Laravel with a stronger focus on Back End work in the future.</p>

                            <p>Check my <Link to="/cv" >CV Here</Link></p>

                        </div>
                        <Footer />
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
