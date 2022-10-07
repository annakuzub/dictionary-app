import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyWord="travel"/>
        </main>
        <footer className="App-footer">
          <small>coded by Anna Kuzub</small>
        </footer>
      </div>
    </div>
  );
}
