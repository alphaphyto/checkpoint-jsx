import React from "react";
import Carte from "./Carte";
import 'bootstrap/dist/css/bootstrap.min.css';

const firstName = prompt(" ton nom ?"); 
const isFirstNammeProvided = firstName  !== null && firstName.trim() !== "";

function App() {

  return (
    <div>
      <div>
        <p> HELLO , {isFirstNammeProvided ? firstName : 'There'} !</p>
      </div>
      <Carte/>
      <div>
        {
          isFirstNammeProvided && (
            <img width={'250px'} src="/image/buy-1.jpg " alt="image"></img>
          )
        }
      </div>
     </div>
  );
}

export default App;
