import React from "react";
import ReactDOM from "react-dom/client";
//import { Greeting, UserCard, TransactionCard } from "./Greeting";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { App } from "./App";
//import SignInSide  from './SignInSide.tsx'

const root = ReactDOM.createRoot(document.getElementById("root")!);

/*const App = () => {
  const person = {
    name: 'juan',
    age: 23,
    job: 'developer'
  }
  return (
    <div>
      <h1>{ JSON.stringify(person)}</h1>
    </div>
  )
}*/

root.render(
  <>
    <App />
  </>
);
