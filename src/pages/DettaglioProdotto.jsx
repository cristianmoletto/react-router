import axios from "axios";
import { useEffect, useState } from "react";

export default function DettaglioProdotto() {
  const [dettagli, setDettagli] = useState([]);

  useEffect(() => {
    // Esegui una chiamata API per ottenere i dettagli del prodotto
    axios
      .get(`https://fakestoreapi.com/products/${2}`) // Sostituisci '1' con l'ID dinamico del prodotto
      .then((resp) => (console.log(resp.data), setDettagli(resp.data)))
      .catch((error) => {
        console.error(
          "C'è stato un errore nel recupero dei dettagli del prodotto:",
          error
        );
      });
  }, []);

  return (
    <div className="container text-center my-5">
      <h2 className="my-5">{dettagli.title}<span class="badge text-bg-secondary">{dettagli.category}</span></h2>
      <img src={dettagli.image} alt="" />
      <h3 className="my-3">${dettagli.price}</h3>
      <p className="my-3">{dettagli.description}</p>
      <p className="my-3 text-warning">Voto dei clienti: {dettagli.rating.rate}/5</p>
    </div>
  );
}
