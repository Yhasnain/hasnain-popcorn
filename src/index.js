import React, { useState } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={7} onSetRating={setMovieRating} />
//       <p>THis movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating
      maxRating={5}
      message={["terrible", "normal", "good", "best", "excellent"]}
      color="red"
    /> */}
  </React.StrictMode>
);
