import React from 'react';
import { useTheme } from '@material-ui/styles';
import {  Card, CardContent, CardHeader, Divider, Grid, Typography, } from '@material-ui/core';
import { gridSpacing, } from '../../../../store/constant';

import ReactAudioPlayer from 'react-audio-player';
import AsmrFlashlightSound from '../../../../assets/audio/ASMR-Bright-Light-Triggers-_Click-Sounds_-Gentle-Eye-Tests-&-Instructions-64-kbps.mp3';

const soundStyles = {
    width: '285px',
};

const AsmrFlashlightCard = (props) => {
    const theme = useTheme();

    return (
        <Card>
          <CardHeader
              title={
                  <Typography component="div" className="card-header">
                      ASMR Flashlight Sound <i>(64 kbps)</i>
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
                                  ASMR Bright Light Triggers *Click Sounds* 
                                  Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                              </label>
                              <ReactAudioPlayer
                                  // id="firstAudioPlayer"
                                  src={AsmrFlashlightSound}
                                  loop
                                  controls
                                  style={soundStyles}
                              />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                              <label>
                                ASMR Bright Light Triggers *Click Sounds* 
                                Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                              </label>
                              <ReactAudioPlayer
                                  src={AsmrFlashlightSound}
                                  loop
                                  controls
                                  style={soundStyles}
                              />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                              <label>
                                ASMR Bright Light Triggers *Click Sounds* 
                                Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                              </label>
                              <ReactAudioPlayer
                                src={AsmrFlashlightSound}
                                loop
                                controls
                                style={soundStyles}
                              />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                            <label>
                              ASMR Bright Light Triggers *Click Sounds* 
                              Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                            </label>
                            <ReactAudioPlayer
                              src={AsmrFlashlightSound}
                              loop
                              controls
                              style={soundStyles}
                            />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                            <label>
                              ASMR Bright Light Triggers *Click Sounds* 
                              Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                            </label>
                            <ReactAudioPlayer
                              src={AsmrFlashlightSound}
                              loop
                              controls
                              style={soundStyles}
                            />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                            <label>
                              ASMR Bright Light Triggers *Click Sounds* 
                              Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                            </label>
                            <ReactAudioPlayer
                              src={AsmrFlashlightSound}
                              loop
                              controls
                              style={soundStyles}
                            />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                            <label>
                              ASMR Bright Light Triggers *Click Sounds* 
                              Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                            </label>
                            <ReactAudioPlayer
                              src={AsmrFlashlightSound}
                              loop
                              controls
                              style={soundStyles}
                            />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container alignItems="center" spacing={1}>
                          <Grid item xs={12}>
                            <label>
                              ASMR Bright Light Triggers *Click Sounds* 
                              Gentle Eye Tests & Instructions <i>(64 kbps)</i>
                            </label>
                            <ReactAudioPlayer
                              src={AsmrFlashlightSound}
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

export default AsmrFlashlightCard;
