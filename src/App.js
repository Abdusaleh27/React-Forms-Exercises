import { useState } from "react";
import BoxList from "./color-box-maker/BoxList";
import Navigation from "./color-box-maker/Navigation";
import TodoList from "./todo-app/TodoList";

function App() {
  const [navigate, setNavigate] = useState(true);
  const displayPage = (firstPage) => {
    setNavigate(() => firstPage);
  };

  return (
    <div className="App">
      <Navigation display={displayPage} />
      {navigate ? <BoxList /> : <TodoList />}
    </div>
  );
}

export default App;
