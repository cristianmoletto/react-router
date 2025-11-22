import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => 
        setProdotti(resp.data));
  }, []);

  return (
    <div className="container">
      <div className="row-col text-center my-5">
        <h1 className="my-5">Elenco Prodotti</h1>
        <div className="col-4 text-center mx-auto">
        {prodotti.map((prodotto) => (
        <Link className="text-decoration-none" key={prodotto.id}>
          <div className="card my-4" >
            <img src={prodotto.image} className="card-img" style={{height: '150px', objectFit:'cover',objectPosition: "top"}} alt=""/>
            <div className="card-header">{prodotto.title}</div>
            <div className="card-text">{prodotto.description}</div>
          </div></Link>
        ))}
        </div>
      </div>
    </div>
  );
}
