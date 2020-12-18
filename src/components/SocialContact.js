import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@material-ui/core'
import './style.css'

function SocialContact() {
    return (
        <div className="social-media" id="social-media">
        <h3 className="heading">Connect socially with <span>Vanity ES</span></h3>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid 
                    item
                    sm={4}
                    xs={4}
                >
                    <div className="social-contact" id="facebook">
                        <FontAwesomeIcon className="social-icon" id="facebook-icon" icon={['fab', 'facebook']}/>
                        <h5>facebook</h5>
                    </div>
                </Grid>
                <Grid 
                    item
                    sm={4}
                    xs={4}
                >
                    <div className="social-contact" id="instagram">
                        <FontAwesomeIcon className="social-icon" id="instagram-icon" icon={['fab', 'instagram']}/>
                        <h5>instagram</h5>
                    </div>
                </Grid>
                <Grid 
                    item
                    sm={4}
                    xs={4}
                >
                    <div className="social-contact" id="twitter">
                        <FontAwesomeIcon className="social-icon" id="twitter-icon" icon={['fab', 'twitter']}/>
                        <h5>twitter</h5>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SocialContact
