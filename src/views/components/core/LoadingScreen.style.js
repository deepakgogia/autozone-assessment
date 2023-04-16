import { makeStyles } from "@mui/styles";

export const styleLoadingScreen = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        opacity: '0.7',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'none'
    }
}));