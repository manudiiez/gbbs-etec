import {
  Routes,
  Route,
} from "react-router-dom";
/* --------------------------------- SCREENS -------------------------------- */
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Forums from "./components/forums/Forums"; 
import Forum from "./components/forum/Forum";
import User from "./components/user/User";
import Email from "./components/email/Email";
import UserInfo from "./components/userInfo/UserInfo";
import UserProvider from "./components/context/userContext";

function App() {
  return (
    <div>
      <UserProvider>
        <div style={{ height: 80 }}>
          <NavBar/>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/:id" element={<Forum />} />
            <Route path="/user" element={<User />} />
            <Route path="/email" element={<Email />} />
            <Route path="/email" element={<Email />} />
            <Route path="/user/:id" element={<UserInfo />} />
          </Routes>
        </main>
      </UserProvider> 
      <Footer/>
    </div>
  );
}

export default App;
