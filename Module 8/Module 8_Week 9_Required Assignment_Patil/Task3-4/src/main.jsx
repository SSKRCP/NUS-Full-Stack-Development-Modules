import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GreetingComponent from "./Components/GreetingComponent";
import ToDoList from "./Components/ToDoList";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GreetingComponent name="Alice" />
    <ToDoList />
  </StrictMode>
);
