import { Container } from '@material-ui/core'
import React from 'react'
import Explanations from '../explanations/Explanations'
import Header from '../header/Header'
import useStyles from './Styles'

const Layout = ({ lang, setLang, word, setWord, meanings }) => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg' className={classes.root}>
            <Header lang={ lang } setLang={ setLang } word={word} setWord={setWord}/>
            {meanings && <Explanations lang={ lang } word={word} meanings={meanings} />}
        </Container>
    )
}

export default Layout
