import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root : {
        height: '35vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    header : {
        fontSize: '6vw',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif'
    },
    textFields : {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    search : {
        width: '45%'
    },
    select : {
        width: '30%'
    },
    signOut : {
        position: 'absolute',
        top: 0,
        right: 20,
        marginTop: 10
    }

})

export default useStyles;