
import './App.css';
import Welecome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>안녕하세요</h1>
      <Welecome username={"유관우"} age={33}></Welecome>
      <Welecome username={"홍길동"} age={33}></Welecome>
      <Welecome username={"둘리"} age={33}></Welecome>
      <Welecome username={"도우너"} age={33}></Welecome>
    </div>
  );
}
export default App;


// ctrl + / : 자동 주석 처리