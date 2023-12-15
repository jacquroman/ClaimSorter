import "./App.css";
import {useState, useEffect} from "react";
import {fetchData} from "./api.js"
import Filter from "./Filter.js"
import Card from "./Card.js"

const App = () => {

  const [data, setData] = useState({});
  const [results, setResults] = useState([]);


  useEffect(()=> {
    fetchData().then((response) => {
      setData(response);

      console.log("results ", response.results);
      setResults(response.results);
    });
  }, []);

  useEffect(()=>{
    console.log("Cards have been set by results: ", results);
  }, [results]);



  return (
    <div className="App">
      <h1>FDA Recalls</h1>
      <h3>Updated {data?.meta?.last_updated || null}</h3>
      <p>{data?.meta?.disclaimer || null}</p>
      <Filter results={results} setResults={setResults}/>
      <div className="results">
        {results.map((card, index) => {
          return <Card key={index} card={card}/>
        })}
      </div>
    </div>
  );
};

export default App;
