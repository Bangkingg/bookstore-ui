import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Profil from "./pages/profil";
import Checkout from "./pages/checkout";
import { useState } from "react";
import Detail from "./pages/detail";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function App() {
  const [chart, setChart] = useState([]);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  })

  const addToChart = (item) => {
    const isExist = chart.find((b) => b.id === item.id);

    if (isExist) {
      Toast.fire({
        icon: 'error',
        title: 'Barang sudah ada dikeranjang',
        showConfirmButton: false
      });
    } else {
      setChart([...chart, item]);

      Toast.fire({
        icon: 'success',
        title: 'Barang berhasil ditambahkan',
        showConfirmButton: false
      });
    }
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar chart={chart} />

        <div className="flex-grow-1" style={{ paddingTop: "60px" }}>
          <Routes>
            <Route path="/" element={<Home addToChart={addToChart} />} />
            <Route path="/checkout" element={<Checkout chart={chart} />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/detail/:id" element={<Detail addToChart={addToChart} />} />
          </Routes>
        </div>

      </Router>
      <footer className="footer mt-auto py-3" style={{ backgroundColor: '#222222' }}>
        <div className="container align-center text-center">
          <span className="text-white">&copy; 2025 Litera | All Right Reserved</span>
        </div>
      </footer>
    </div>
  );
}