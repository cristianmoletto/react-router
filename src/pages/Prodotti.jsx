import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Prodotti() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => 
        // console.log(resp.data))
        setProdotti(resp.data));
  }, []);

  return (
    <div className="container">
      <div className="row-col text-center my-5">
        <h1 className="my-5">Elenco Prodotti</h1>
        {prodotti.map((prodotto) => (
          <div className="card my-4" key={prodotto.id}>
            <img src={prodotto.image} className="card-img" style={{height: '150px', objectFit:'cover',objectPosition: "top"}} alt=""/>
            <div className="card-header">{prodotto.title}</div>
            <div className="card-text">{prodotto.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
