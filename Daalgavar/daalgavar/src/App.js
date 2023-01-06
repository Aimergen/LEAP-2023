import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const styles={
  h1: {
    fontSize: 60,
    margin: 20,
  },
  h2: {
    fontSize: 40,
    margin: 20,
  }
};
function App() {
  return (
    <>
    <header>
        <h1 style={styles.h1}>Welcome to component and props corner</h1>
    </header>

    <main>
      {/* title */}
      <section>
        <h2 style={styles.h2}>React</h2>
        <h2 style={styles.h2}>JavaScript Library</h2>
        <p> John Sedrick</p>
        <p></p>
        <p>Jan 4, 2023</p>
      </section>

      <section>
        <h3>Tech stack:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      <section>
      </section>
    </main>

    <footer>

    </footer>
    </>
  );
}

export default App;
