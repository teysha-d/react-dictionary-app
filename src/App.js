import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="Title">DICTIONARY CORNER</div>
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="gold" />
        </main>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://x.com/Teysha_D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teysha Darden
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/teysha-d/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://react-shecodes-weather-app.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
