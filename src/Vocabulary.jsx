import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Vocabulary = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [vocabulary, setVocabulary] = useState({});

    const getVocabulary = async () => {
        const vocabulary = await (await fetch(`http://localhost:3001/vocabularys/${params.vocabularyId}`)).json();
        setVocabulary(vocabulary);
    };

    const onClickDeleteVocabularyButton = async () => {
        await (await fetch(`http://localhost:3001/vocabularys/${params.vocabularyId}`, {
            method: 'DELETE',
        })).json();
        navigate('/');
    }

    useEffect(() => {
        getVocabulary();
    }, []);

    return (
        <div>
            <h3>{vocabulary.title}</h3>
            <button onClick={onClickDeleteVocabularyButton}>삭제</button>
            <ul>
                {vocabulary.words && vocabulary.words.map((word, index) => 
                    <li key={index}>{word.korean} {word.japanese}</li>
                )}
            </ul>
        </div>
    );
};

export default Vocabulary;