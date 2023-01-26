import Input from "./styles/input";
import Button from "./styles/button";
import Global from "./styles/global";
import { AuthProvider } from "./context/authContext";
import { RoutesMain } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Global />
      <Input />
      <Button />

      <ToastContainer />

      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
