import React from "react";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      <main>
        <div className="input-container">
          <Input type="text" id="name">
            Task Name
          </Input>
          <Input textarea id="description">
            Task Description
          </Input>
          <Input type="date" id="dueDate">
            Due Date
          </Input>
        </div>
      </main>
    </>
  );
}
