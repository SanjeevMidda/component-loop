import "./index.css";

function App() {
  let numbers = [];

  for (let index = 1; index < 202; index++) {
    numbers.push(index);
  }

  console.log(numbers);

  return (
    <div className="App">
      <div className="container">
        {numbers.map((item) => {
          return <h1>{item}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
