import "./App.css";
import { MetricGraph } from "./MetricGraph/MetricGraph";
import "normalize.css";
import { HashRouter as AppRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppRouter>
      <Routes>
        <Route path="/" element={<MetricGraph />} />
      </Routes>
    </AppRouter>
  );
}

export default App;
