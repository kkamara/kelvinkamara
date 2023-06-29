import React from 'react';
import { makeStyles, Grid, Card, CardHeader, CardContent, Hidden, Typography, Divider, LinearProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Helmet, } from 'react-helmet'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import DescriptionTwoTone from '@material-ui/icons/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@material-ui/icons/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@material-ui/icons/CalendarTodayTwoTone';

import SalesLineCardData from './chart/sale-chart-1';

import RevenuChartCardData from './chart/revenu-chart';

import { 
  MetalMixCard,
  TinnitusCalmerCard,
  AnnoyingSoundCard,
  AnnoyingSound2Card,
  MusicRadioCard,
  TalkingRadiosCard,
} from './SoundCard';
import LatestorderCard from './LatestorderCard';

import { gridSpacing } from '../../../store/constant';

const useStyles = makeStyles((theme) => ({
    arrowicon: {
        '& svg': {
            width: '20px',
            height: '20px',
            verticalAlign: 'top',
        },
    },
    flatcardbody: {
        padding: '0px !important',
        '& svg': {
            width: '40px',
            height: '40px',
        },
    },
    flatcardblock: {
        padding: '25px 25px',
        borderLeft: '1px solid' + theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            borderLeft: 'none',
            borderBottom: '1px solid' + theme.palette.background.default,
        },
        [theme.breakpoints.down('sm')]: {
            borderBottom: '1px solid' + theme.palette.background.default,
        },
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
}));

const Default = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
      <>
        <Helmet><title>Kelvin Kamara - Soundscape, background noise app. To focus on your task and entertainment. I recommend earphone use.</title> </Helmet>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={3} sm={6} xs={12}>
                        <MetalMixCard                        
                            color={theme.palette.warning.main}
                        />
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <AnnoyingSoundCard
                            color={theme.palette.error.main}
                        /> 
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <MusicRadioCard
                            primary="290+"
                            secondary="Page Views"
                            color={theme.palette.success.main}
                            footerData="10k daily views"
                            iconPrimary={DescriptionTwoTone}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    <Grid item lg={3} sm={6} xs={12}>
                        <AnnoyingSound2Card
                            color={theme.palette.primary.main}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={8} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={gridSpacing} direction="column">
                                    <Grid item xs={12}>
                                        <TinnitusCalmerCard
                                            chartData={SalesLineCardData}
                                            title="Sales Per Day"
                                            percentage="3%"
                                            icon={<TrendingDownIcon />}
                                            footerData={[
                                                {
                                                    value: '$4230',
                                                    label: 'Total Revenue',
                                                },
                                                {
                                                    value: '321',
                                                    label: 'Today Sales',
                                                },
                                            ]}
                                        />
                                    </Grid>
                                    <Hidden only="sm">
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardContent className={classes.flatcardbody}>
                                                    <Grid container alignItems="center" spacing={0}>
                                                        <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                            <Grid container alignItems="center" spacing={1}>
                                                                <Grid item>
                                                                    <Typography variant="subtitle2" align="left">
                                                                        We can do it and
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item sm zeroMinWidth>
                                                                    <Typography variant="h5" className={classes.texterror} align="right">
                                                                        it's not just do it.
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                            <Grid container alignItems="center" spacing={1}>
                                                                <Grid item>
                                                                    <Typography variant="subtitle2" align="left">
                                                                        What are they
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item sm zeroMinWidth>
                                                                    <Typography variant="h5" className={classes.textsuccess} align="right">
                                                                        tryna tell ya?
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TalkingRadiosCard chartData={RevenuChartCardData} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        PTSD Healing <i>(64kbps)</i>
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Direct</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    80%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={80} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Social</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    50%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={50} color="secondary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Referral</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    20%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={20} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Bounce</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    60%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={60} color="secondary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Internet</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    40%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={40} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={12}>
                <LatestorderCard title="Latest Order" />
            </Grid> */}
        </Grid>
      </>
    );
};

export default Default;
