import "./App.scss";
import Button from "./components/Button";

function App() {
  // scss 사용
  const onClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="App">
      {/* scss 사용 */}
      <div className="buttons">
        <Button size="large" color="pink" onClick={onClick}>
          버튼
        </Button>
        <Button>버튼</Button>
        <Button size="small" color="gray">
          버튼
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          버튼
        </Button>
        <Button>버튼</Button>
        <Button size="small" color="gray">
          버튼
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          버튼
        </Button>
        <Button>버튼</Button>
        <Button size="small" color="gray">
          버튼
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" fullWidth color="gray">
          BUTTON
        </Button>
        <Button size="large" fullWidth color="pink">
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
