import "./App.css";
import useAxios from "./UseAxios";

function App() {
  const { data, loading, error1 } = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="App">
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.phone}</h1>
          </div>
        );
      })}

      {loading && <h1>Loading...</h1>}
      {error1 && <h1>{error1}</h1>}
    </div>
  );
}

export default App;
