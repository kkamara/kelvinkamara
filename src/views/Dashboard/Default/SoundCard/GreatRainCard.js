import React from 'react';
import { Card, CardContent, CardHeader, Divider, Grid, Typography, } from '@material-ui/core';
import { gridSpacing, } from '../../../../store/constant';

import ReactAudioPlayer from 'react-audio-player';
import GreatRainSound from '../../../../assets/audio/Great-sound-of-rain-in-a-tin-roof-64-kbps.mp3';

const soundStyles = {
    width: '285px',
};

const GreatRainCard = (props) => {
    return (
        <Card>
          <CardHeader
            title={
              <Typography 
                component="div" 
                className="card-header"
              >
                Great Rain Sound <i>(64kbps)</i>
              </Typography>
            }
          />
          <Divider />
          <CardContent>
              <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                            <label>
                              Great sound of rain in a tin roof <i>(64kbps)</i>
                            </label>
                            <ReactAudioPlayer
                              src={GreatRainSound}
                              loop
                              controls
                              style={soundStyles}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <label>
                                Great sound of rain in a tin roof <i>(64kbps)</i>
                            </label>
                            <ReactAudioPlayer
                              src={GreatRainSound}
                              loop
                              controls
                              style={soundStyles}
                            />
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </CardContent>
      </Card>
    );
};

export default GreatRainCard;
