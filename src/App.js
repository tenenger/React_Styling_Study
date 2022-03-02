import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

function App() {
  // scss 사용
  const onClick = (e) => {
    console.log(e.target);
  };

  // css module 사용
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    // input type이 checkbox인 경우 e.target.checked를 하면 true인지 false값을 반환한다.
    setChecked(e.target.checked);
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

      {/* css module 사용 */}
      <CheckBox checked={checked} onChange={onChange}>
        다음 약관에 모두 동의
      </CheckBox>
    </div>
  );
}

export default App;
