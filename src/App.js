import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="SheCodes Logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="sunset" />
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
            href="https://github.com/teysha-d/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-shecodes-dictionary-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
