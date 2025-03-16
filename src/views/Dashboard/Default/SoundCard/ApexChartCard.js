import React, { useEffect, } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@material-ui/styles';
import { Box, Card, CardContent, CardHeader, Divider, Hidden, Grid, Typography, useMediaQuery } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import { getRandomArbitrary, } from '../../../Utils/Functions';
import { randomTimeIntervalMilliseconds, } from '../../../Utils/Constants';

import ptsdHealing from '../../../../assets/audio/ptsd-healing.mp3';

const soundStyles = {
    width: '100%',
};

const ptsdHealingVolume = 0.10;

const ptsdHealingLengthInSeconds = 60; // 1 hour

const ApexChartCard = (props) => {
    useEffect(() => {
        const fAPlayer1 = document.getElementById("ptsdHealingAudioPlayer1");
        fAPlayer1.currentTime = Math.floor(
            getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
        );
        const fAPlayer2 = document.getElementById("ptsdHealingAudioPlayer2");
        fAPlayer2.currentTime = Math.floor(
            getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
        );
        const fAPlayer3 = document.getElementById("ptsdHealingAudioPlayer3");
        fAPlayer3.currentTime = Math.floor(
            getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
        );
        const fAPlayer4 = document.getElementById("ptsdHealingAudioPlayer4");
        fAPlayer4.currentTime = Math.floor(
            getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
        );
        const interval = setInterval(() => {
            fAPlayer1.currentTime = Math.floor(
                getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
            );
            fAPlayer2.currentTime = Math.floor(
                getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
            );
            fAPlayer3.currentTime = Math.floor(
                getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
            );
            fAPlayer4.currentTime = Math.floor(
                getRandomArbitrary(0, ptsdHealingLengthInSeconds * 60)
            );
        }, randomTimeIntervalMilliseconds);
        return () => clearInterval(interval);
    }, []);

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    const matchDownXs = useMediaQuery(theme.breakpoints.down('xs'));
    const { chartData } = props;

    return (
        <Card>
            <CardHeader
                title={
                    <Typography t="div" className="card-header">
                        Apex Chart Card
                    </Typography>
                }
            />
            <Divider />
            <CardContent>
                <Grid container spacing={2} direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
                    <Grid item xs={12} sm={7} md={12}>
                        <Chart {...chartData} />
                    </Grid>
                    <Hidden only="sm">
                        <Grid item>
                            <Divider />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        container
                        direction={matchDownMd && !matchDownXs ? 'column' : 'row'}
                        justifyContent="space-around"
                        alignItems="center"
                        xs={12}
                        sm={5}
                        md={12}
                    >
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">We can do it and it's not just do it.</Typography>
                                <Typography variant="subtitle1" style={{ color: theme.palette.primary.main }}>
                                    + 16.85%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">What are they tryna tell ya?</Typography>
                                <Box color={theme.palette.success.main}>
                                    <Typography variant="subtitle1" color="inherit">
                                        +45.36%
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">Erm...</Typography>
                                <Typography variant="subtitle1" style={{ color: theme.palette.warning.main }}>
                                    - 50.69%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction={matchDownMd && !matchDownXs ? 'row' : 'column'}>
                        <label>PTSD Healing <i>(64kbps)</i></label>
                        <ReactAudioPlayer
                            id="ptsdHealingAudioPlayer1"
                            src={ptsdHealing}
                            loop
                            controls
                            style={soundStyles}
                            volume={ptsdHealingVolume}
                        />
                        <ReactAudioPlayer
                            id="ptsdHealingAudioPlayer2"
                            src={ptsdHealing}
                            loop
                            controls
                            style={soundStyles}
                            volume={ptsdHealingVolume}
                        />
                        <ReactAudioPlayer
                            id="ptsdHealingAudioPlayer3"
                            src={ptsdHealing}
                            loop
                            controls
                            style={soundStyles}
                            volume={ptsdHealingVolume}
                        />
                        <ReactAudioPlayer
                            id="ptsdHealingAudioPlayer4"
                            src={ptsdHealing}
                            loop
                            controls
                            style={soundStyles}
                            volume={ptsdHealingVolume}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ApexChartCard;
