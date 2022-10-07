import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyWord="travel" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Anna Kuzub and is{" "}
            <a
              href="https://github.com/annakuzub/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
            and{" "}
            <a
              href="https://lively-fox-727a67.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
