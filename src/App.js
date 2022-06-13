import "./App.css";
import { useEffect, useState } from "react";
import Display from "./components/Display";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
    )
      .then((response) => response.json())
      .then((_data) => {
        console.log("data --> ", _data);
        setData(_data);
      });
  }, []);

  return (
    <div>
      {" "}
      <p>{data ? <Display data={data} /> : "Loading.."}</p>
    </div>
  );
}

export default App;
