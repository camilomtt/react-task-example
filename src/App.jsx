import TaskList from "./components/TaskList"
import Taskform from "./components/TaskForm";

import { useState, useEffect } from "react";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto  p-10">
      <Taskform/>
      <TaskList/>

  </div>
  </main>
  );
}
export default App;
