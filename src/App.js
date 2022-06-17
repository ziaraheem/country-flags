import "./App.css";
import { useEffect, useState } from "react";
import New from "./components/New";
//import Quiz from "./components/Quiz";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
    )
      .then((response) => response.json())
      .then((_data) => {
        //const shuffledArr = shuffle(_data);
        setData(_data);
      });
  }, []);

  return <div>{data ? <New data={data} /> : "Loading.."}</div>;
}
export default App;
// function shuffle(a) {
//   var j, x, i;
//   for (i = a.length - 1; i > 0; i--) {
//     j = Math.floor(Math.random() * (i + 1));
//     x = a[i];
//     a[i] = a[j];
//     a[j] = x;
//   }
//   return a;
// }

// export default App;
