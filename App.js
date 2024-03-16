import './App.css';
// import { useState ,useEffect} from 'react';
// import Axios from 'axios';
import Data from "./Data"

function App() {
  // const[catFact, setCatFact] = useState("");

  // const FetchCatData = () => {
  //    Axios.get("https://catfact.ninja/fact").then((res) => {
  //       setCatFact(res.data.fact);
  //    });
  // }

  // useEffect(() =>{
  //   FetchCatData();
  // } ,[])

    return (

        <div className='App'>
          <Data/>
            {/* <button onClick={FetchCatData}>Generate Cat Facts</button>
            <p>{catFact}</p> */}
          
        </div>
    );
}
export default App;
