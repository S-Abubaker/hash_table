import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";

function App() {
  const [ meanings, setMeanings ] = useState([])
  const [ word, setWord ] = useState('')
  const [ lang, setLang ] = useState('en')


  const dictionary = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`);
      setMeanings(data.data)
    } catch (error) {
      console.log({error_message: error.message})
    }
  };

  useEffect(() => {
    dictionary()
  }, [word, lang]);


  return (
    <div style={{height: '100%', backgroundColor: '#282c34', color: 'white' }}>
      <Layout 
      lang={lang} 
      setLang={setLang} 
      word={word} 
      setWord={setWord} 
      meanings={meanings}/>
      
    </div>
  );
}

export default App;
