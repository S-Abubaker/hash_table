import { createTheme, MenuItem, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import language from '../../data/language'
import useStyles from './Styles'

const Header = ({ lang, setLang, word, setWord }) => {
    const classes = useStyles()

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
          type: 'dark',
        },
      });

    const handleChange = (language) => {
        setLang(language)
        setWord('')
    }  

    return (
        <>
            <div className={classes.signOut}>
                #️⃣ _table
            </div>
            <div className={classes.root}> 
                <Typography className={classes.header}>
                    {word ? `'${word}'` : '' }
                </Typography>
                <div className={classes.textFields}>
                    <ThemeProvider theme={darkTheme} >
                        <TextField
                        className={classes.search} 
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        label='word search'/>
                        <TextField
                        className={classes.select} 
                        id="standard-select-currency"
                        select
                        label="Language"
                        value={lang}
                        onChange={(e) => handleChange(e.target.value) }
                        >
                            {language.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        )
                        </TextField>
                    </ThemeProvider>
                </div>
            </div>
        </>
    )
}

export default Header
