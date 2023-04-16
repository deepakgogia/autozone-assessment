import React from 'react';
import { Page } from './Page';
import { styleLoadingScreen } from './LoadingScreen.style';
import { CircularProgress } from '@mui/material';

export const LoadingScreen = () => {
    const classes = styleLoadingScreen();
    return (
        <Page
            className={classes.root}
            id='static-loader'
        >
            <CircularProgress />
        </Page>
    );
}