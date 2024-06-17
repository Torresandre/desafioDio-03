import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./page/feed";
import { CreateUser } from "./page/create/index";
import { Home } from './page/home'
import { Login } from './page/login'
import { GlobalStyle } from './Style/global';

export default function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<CreateUser  />} />
     </Routes >
    </Router>
  );
}
