import React from "react";
import "./styles.css";
import MyClass from "./componentClass";

export default function App() {
  return (
    <div className="App">
      <MyClass name="aseem" />
      <MyClass name="another name" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
