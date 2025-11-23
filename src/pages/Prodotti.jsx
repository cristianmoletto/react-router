import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setProdotti(resp.data));
  }, []);

  return (
    <div className="container">
      <div className="row text-center my-5">
        <h1 className="my-5">Elenco Prodotti</h1>
        {prodotti.map((prodotto) => (
          <div className="col-10 col-md-6 col-lg-3 text-center mx-auto" key={prodotto.id}>
            <Link
              className="text-decoration-none"
              to={"/dettaglio-prodotto/" + prodotto.id}
            >
              <div className="card my-4">
                <img
                  src={prodotto.image}
                  className="card-img"
                  style={{
                    height: "150px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  alt=""
                />
                <div className="fw-bold p-3">{prodotto.title}</div>
                <div className="card-text p-2">{prodotto.description.slice(0,80)}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
