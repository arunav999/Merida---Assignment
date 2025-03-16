import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  return (
    <>
      <main className="container">
        <section className="input-section">
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
          <Button>Submit</Button>
        </section>

        <section className="table-section">TABLE</section>
      </main>
    </>
  );
}
