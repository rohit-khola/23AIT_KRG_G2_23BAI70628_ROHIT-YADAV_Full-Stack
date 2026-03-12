import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import AuthProtected from "./Route";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={
            <AuthProtected><Dashboard/></AuthProtected>}/>
      </Routes>
    </BrowserRouter>
  );
}