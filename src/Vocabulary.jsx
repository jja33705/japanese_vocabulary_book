import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Vocabulary = () => {
    const params = useParams();

    const [vocabulary, setVocabulary] = useState({});

    const getVocabulary = async () => {
        const vocabulary = await (await fetch(`http://localhost:3001/vocabularys/${params.vocabularyId}`)).json();
        setVocabulary(vocabulary);
    };

    useEffect(() => {
        getVocabulary();
    }, []);

    return (
        <div>
            <h3>{vocabulary.title}</h3>
            <ul>
                {vocabulary.words && vocabulary.words.map((word, index) => 
                    <li key={index}>{word.korean} {word.japanese}</li>
                )}
            </ul>
        </div>
    );
};

export default Vocabulary;