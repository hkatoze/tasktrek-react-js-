import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";

const oldTasks = localStorage.getItem("tasks");
function App() {
  const [tasksLocalData, setTaskLocalData] = useState(
    JSON.parse(oldTasks) || []
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksLocalData));
  }, [tasksLocalData]);

  return (
    <>
      <div className="app">
        <AppHeader setTaskLocalData={setTaskLocalData} />
        <AppBody tasks={tasksLocalData} setTaskLocalData={setTaskLocalData} />
      </div>
    </>
  );
}

export default App;
