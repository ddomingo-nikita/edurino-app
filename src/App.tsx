import "./App.css";
import { Route, Switch } from "wouter";
import { Home } from "./view/Home/Home.tsx";
import { BestTesters } from "./view/BestTesters/BestTesters.tsx";
import { FirstTask } from "./view/FirstTask/FirstTask.tsx";
import { InccorectAnswer } from "./view/IncorrectAnswer/InccorectAnswer.tsx";
import { CorrectAnswer } from "./view/CorrectAnswer/CorrectAnswer.jsx";

function App() {
  return (
    <Switch>
      <Route path={"/"}>
        <Home />
      </Route>
      <Route path={"/best-testers"}>
        <BestTesters />
      </Route>
      <Route path={"/demo-game"}>
        <FirstTask />
      </Route>
      <Route path={"/demo-game/incorrect/:number"}>
        <InccorectAnswer />
      </Route>
      <Route path={"/correct"}>
        <CorrectAnswer />
      </Route>
    </Switch>
  );
}

export default App;
