import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import VocabularyList from './VocabularyList';
import Dictionary from './Dictionary';
import Vocabulary from './Vocabulary';
import MakeVocabulary from './MakeVocabulary';
import EditVocabulary from './EditVocabulary';
import Header from './Header';
import styles from './App.module.css';


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <main className={styles.main}>
            <Routes>
                <Route path="/" element={<VocabularyList />} />
                <Route path="/makeVocabulary" element={<MakeVocabulary />} />
                <Route path="/editVocabulary/:vocabularyId" element={<EditVocabulary />} />
                <Route path="/:vocabularyId" element={<Vocabulary />} />
                <Route path="/dictionary" element={<Dictionary />} />
            </Routes>
        </main>
    </>
  );
};

export default App;
