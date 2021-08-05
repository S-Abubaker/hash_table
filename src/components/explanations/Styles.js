import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    explanations : {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column'
        
    },
    subTitle : {
        alignItems: 'center',
        fontSize: '3vw',
        fontFamily: 'Montserrat, san-serif'
        
    },
    singleMeaning : {
        color: 'white',
        marginBottom: 5
    },
    audio : {
        width: '100%',
        marginBottom: 30
    }
})

export default useStyles;