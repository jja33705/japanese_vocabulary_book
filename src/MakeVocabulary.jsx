import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MakeVocabulary = () => {
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [korean, setKorean] = useState('');
    const [japanese, setJapanese] = useState('');
    const [wordList, setWordList] = useState([]);

    const onSubmitMakeVocabularyForm = async (e) => {
        e.preventDefault();
        
        const newVocabulary = {
            title: title,
            words: wordList,
        };
        
        const submitMakeVocabularyFormResponse = await (await fetch('http://localhost:3001/vocabularys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVocabulary),
        })).json();
        navigate(`/${submitMakeVocabularyFormResponse.id}`);
        console.log(submitMakeVocabularyFormResponse);
    };

    const onClickAddWordButton = () => {
        setWordList([...wordList, { korean: korean, japanese: japanese }])
        setKorean('');
        setJapanese('');
    };

    const onClickDeleteWordButton = (index) => {
        setWordList(wordList.filter((_, i) => i !== index));
    };

    const onChangeTitleInput = (e) => {
        setTitle(e.target.value);
    };

    const onChangeKoreanInput = (e) => {
        setKorean(e.target.value);
    };

    const onChangeJapaneseInput = (e) => {
        setJapanese(e.target.value);
    };

    return (
        <div>
            <h4>단어장 생성</h4>
            <form onSubmit={onSubmitMakeVocabularyForm}>
                <div>
                    <label htmlFor="title">제목</label>
                    <input type="text" id="title" value={title} onChange={onChangeTitleInput}></input>
                </div>
                <div>
                    <label htmlFor="korean">한국어</label>
                    <input type="text" id="korean" value={korean} onChange={onChangeKoreanInput}></input>
                    <label htmlFor="japanese">일본어</label>
                    <input type="text" id="japanese" value={japanese} onChange={onChangeJapaneseInput}></input>
                    <button type="button" onClick={onClickAddWordButton}>단어 추가</button>
                </div>
                <button type="submit">생성</button>
            </form>
            <ul>
                {wordList.map((word, index) => 
                    <div key={index}>
                        <span>{word.korean} {word.japanese}</span>
                        <button type="button" onClick={() => onClickDeleteWordButton(index)}>삭제</button>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default MakeVocabulary;