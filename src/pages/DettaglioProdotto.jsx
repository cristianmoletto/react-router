import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function DettaglioProdotto() {
  const [dettagli, setDettagli] = useState([]);
  const [dataFound, setDataFound] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Esegui una chiamata API per ottenere i dettagli del prodotto
    axios
      .get(`https://fakestoreapi.com/products/${id}`) // Sostituisci '1' con l'ID dinamico del prodotto
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.length === 0) {
          navigate("/prodotti");
        } else {
          setDettagli(resp.data);
          setDataFound(true)
        }
      })
      .catch((error) => {
        console.error(
          "C'è stato un errore nel recupero dei dettagli del prodotto:",
          error,
          navigate("/prodotti")
        );
      });
  }, [id]);

  return (
    <>
      {dataFound === false && (
        <div className="container text-center my-5">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {dataFound === true && 
        <>
      <Link
        className="btn btn-outline-secondary btn-sm mx-3"
        onClick={() => navigate(-1)}
      >
        ◄ Torna ai prodotti
      </Link>
      <div className="container text-center my-5">
        <h2 className="my-5">
          {dettagli.title}
          <span className="badge text-bg-secondary">{dettagli.category}</span>
        </h2>
        <img src={dettagli.image} alt="" />
        <h3 className="my-3">${dettagli.price}</h3>
        <p className="my-3">{dettagli.description}</p>
        {/* <p className="my-3 text-warning">Voto dei clienti: {dettagli.rating.rate}/5</p> */}
      </div>
        </>
      }    
    </>
  );
}
