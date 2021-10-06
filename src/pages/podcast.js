import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class Podcast extends React.Component {

    render() {

        const siteTitle = "Craig Jones"
        const siteDescription = "The developer portfolio site of Craig Jones"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main" >
                    <h1>Best Boys Anime Podcast</h1>
                    <p>In my spare time I have been running a podcast with my best friend for about 6 months now. This has required me to learn a lot of skills I didn't have previously and has opened up a lot of opportunities for me.</p>
                    <p>The skills and knowledge I have acquired range from hardware setup, lighting and audio recording to video editing, social media marketing and small merchandising. I have become rather good at promotional effort</p>
                </div>

            </Layout>
        );
    }

}

export default Podcast;