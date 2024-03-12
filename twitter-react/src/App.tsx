import { Route, Routes } from "react-router-dom"
import { Beranda } from "./components/beranda"
import { Home } from "./components/home"
import { useEffect } from "react";
import { axios } from "./api/axios";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/user";

function App() {
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      const id = localStorage.getItem('id')
      const response = await axios.get(`/users/${id}`)
      dispatch(setUser(response.data))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beranda" element={<Beranda />} />
      </Routes>
    </>
  )
}

export default App
