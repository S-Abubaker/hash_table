import React from 'react'
import useStyles from './Styles'

const Explanations = ({ word, lang, meanings }) => {
    const classes = useStyles()
    return (
        <div className={classes.explanations}>
            { meanings[0] && word && lang === 'en' &&
                <audio 
                className={classes.audio}
                controls
                src={ meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } 
                style={{ backgroundColor: '#fff', borderRadius: 10 }}>
                    Audio not supported
                </audio>
            }
            {word === '' ?
             <span className={classes.subTitle}>Type into the search bar</span> :
              meanings.map((explanation) => explanation.meanings.map((item) => item.definitions.map((def) => (
                  <div className={classes.singleMeaning}>
                      <b style={{ fontSize: '25px' }}>{def.definition}</b>
                      <br/>
                      {def.synonyms && <span>
                        <b>Synonyms: </b><i>{def.synonyms.map((s) => `${s},`)}</i>
                      </span> }
                      <br/>
                      { def.example && <span>
                          <b>Example: </b><i>{def.example}</i>
                      </span> }
                      <hr style={{ backgroundColor: 'black', width: '100%' }}/>
                      <br/>
                  </div>
              ))))}
        </div>
    )
}

export default Explanations
