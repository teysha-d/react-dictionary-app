import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
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
