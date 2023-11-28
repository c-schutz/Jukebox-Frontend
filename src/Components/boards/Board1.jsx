import Clock from "../core/Clock";
import ScrollQueue from "../core/ScrollQueue/ScrollQueue";
import "./Board1.css";

function Board1() {
  return (
    <div>
      <header>
        <h1 className="center">Jukebox</h1>
      </header>
      <body>
        <div>
          <Clock></Clock>

          <ScrollQueue></ScrollQueue>
        </div>
      </body>
    </div>
  );
}

export default Board1;
