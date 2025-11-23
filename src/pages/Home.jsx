import { Link, NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/712413/pexels-photo-712413.jpeg')`,
          backgroundSize: "cover", // equivalente a objectFit: 'cover'
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >   
      <div className="text-center text-white p-5">
        <h1>Lo store più grande d'Italia</h1>
        <p>Prodotti per uomo e donna, dall'abbigliamento all'elettronica. <br />Scopri tutti i nostri prodotti.</p>
          <Link className="btn btn-primary btn-lg" to={"/prodotti"}>Vai ai prodotti</Link>
      </div>
      </div>
    </>
  );
}
