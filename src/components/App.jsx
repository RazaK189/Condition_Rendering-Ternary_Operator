import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;

//using Ternary Operator to evaluate statments in expression form.
//CONDITION? DO IF TRUE: DO IF FALSE
//CONDITION? DO IF TRUE: NULL(DO NOTHING)

//USING &&
//CONDITION && EXPRESSION
//TRUE && EXPRESSION

//EXAMPLE:
// CURRENTTIME > 12 && <H1>HELLO</H1>
