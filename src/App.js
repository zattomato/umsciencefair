import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Events from "./pages/Events";
import JoinUs from "./pages/JoinUs";
import ErrorPage from "./pages/Error";
import SharedLayout from "./components/shared-layout/SharedLayout";
import Donate from "./pages/Donate";
import EventArchive from "./pages/EventArchive";

function App() {
  return (
      <BrowserRouter>
          <SharedLayout>
              <Routes>
                  <Route exact path='/'>
                      <Route index element={<HomePage/>}/>
                      <Route path='About' element={<About/>}/>
                      <Route path='Events' element={<Events/>}/>
                      <Route path='JoinUs' element={<JoinUs/>}/>
                      <Route path='Donate' element={<Donate/>}/>
                      <Route path='EventArchive' element={<EventArchive/>}/>
                      <Route path='*' element={<ErrorPage/>}/>
                  </Route>
              </Routes>
          </SharedLayout>
      </BrowserRouter>
  );
}

export default App;
