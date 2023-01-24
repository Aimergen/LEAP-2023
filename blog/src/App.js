import Header from './components/Header';
import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom';
import Article from './pages/Article';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles/:id' element={<Article />} />
      </Routes>
      
      {/* <Footer /> */}
      {/* <Counter /> */}
      {/* <ChatScreen /> */}
    </>
  );
}

export default App;
