import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import FormPage from "./pages/FormPage.jsx";
import PostPage from "./pages/PostPage.jsx";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<FormPage/>}/>
          <Route path='post' element={<PostPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
