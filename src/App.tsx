import "./App.css";
import Quiz from "./components/quiz";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={800} />
      <Quiz />
    </>
  );
}

export default App;
