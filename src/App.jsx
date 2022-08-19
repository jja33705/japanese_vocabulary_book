import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import VocabularyList from './VocabularyList';
import Dictionary from './Dictionary';
import Vocabulary from './Vocabulary';
import MakeVocabulary from './MakeVocabulary';
import Header from './Header';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
        <Header />
        <Nav />
        <Routes>
            <Route path="/" element={<VocabularyList />} />
            <Route path="/makeVocabulary" element={<MakeVocabulary />} />
            <Route path="/:vocabularyId" element={<Vocabulary />} />
            <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
    </div>
  );
};

export default App;
