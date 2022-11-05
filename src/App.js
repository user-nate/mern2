import Counter from "./components/MyCounter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Nathan Sheffels j67q156
      </h2>

      <hr />
      <Counter incBy={1}/><hr />
      <Counter incBy={2} decBy={3}/><hr />
      <MyGitHub /><hr />

    </div>
  );
}

export default App;
