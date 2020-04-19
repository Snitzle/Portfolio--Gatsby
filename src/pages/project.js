import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class projectSingle extends React.Component {

    render () {

        const siteTitle = "Craig Jones"
        const siteDescription = "The developer portfolio site of Craig Jones"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet> 

                <div id="main" >
                    <h1>Test Project</h1>
                </div>

            </Layout>
        );
    }

}

export default projectSingle;