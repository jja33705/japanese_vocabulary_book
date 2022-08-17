import { useState, useEffect } from 'react';
import Vocabulary from './Vocabulary';

const VocabularyList = () => {
    const [vocabularyList, setVocabularyList] = useState([]);

    const getVocabularyList = async () => {
        const vocabularyList = await (await fetch('http://localhost:3001/vocabularys')).json();
        setVocabularyList(vocabularyList);
    };
    
    useEffect(() => {
        console.log('mount됨');
        getVocabularyList();
    }, []);

    return (
        <div>
            <h2>단어장</h2>
            <ul>
                {vocabularyList.map(vocabulary => 
                    <Vocabulary key={vocabulary.id} vocabulary={vocabulary} />
                )}
            </ul>
        </div>
    );
};

export default VocabularyList;