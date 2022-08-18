import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const VocabularyList = () => {
    const navigate = useNavigate();
    
    const [vocabularyList, setVocabularyList] = useState([]);

    // 단어장 리스트를 가져오는 함수
    const getVocabularyList = async () => {
        const vocabularyList = await (await fetch('http://localhost:3001/vocabularys')).json();
        setVocabularyList(vocabularyList);
    };

    const onClickMakeVocabulary = () => {
        navigate('/makeVocabulary');
    };
    
    // 두번째 매개변수로 빈 배열을 넣으면 컴포넌트가 마운트될때 한번만 실행
    useEffect(() => {
        getVocabularyList();
    }, []);

    return (
        <div>
            <h2>단어장</h2>
            <button onClick={onClickMakeVocabulary}>새로운 단어장 생성</button>
            <ul>
                {vocabularyList.map(vocabulary => 
                    <li key={vocabulary.id}><Link to={`/${vocabulary.id}`}>{vocabulary.title}</Link></li>
                )}
            </ul>
        </div>
    );
};

export default VocabularyList;