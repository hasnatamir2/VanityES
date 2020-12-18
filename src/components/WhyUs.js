import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@material-ui/core'
import './style.css'

function WhyUs() {
    return (
        <div id="whyUs"  className="whyUs">
            <h3 className="heading">Why play from us?</h3>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
            >
                <Grid item sm={4} xs={12}>
                    <div className=" whyUs-tile">
                        <FontAwesomeIcon className="whyUs-icon" icon={['fas', 'gamepad']}/>
                        <h4 className="reason">Games</h4>
                        <p className="desc">A large number of games</p>
                    </div>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <div className=" whyUs-tile">
                        <FontAwesomeIcon className="whyUs-icon" icon={['fas', 'users']}/>
                        <h4 className="reason">Community</h4>
                        <p className="desc">Play with international Community</p>
                    </div>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <div className=" whyUs-tile">
                        <FontAwesomeIcon className="whyUs-icon" icon={['fas', 'money-bill-wave']}/>
                        <h4 className="reason">Cash Price</h4>
                        <p className="desc">Win from a big cash pool</p>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default WhyUs
