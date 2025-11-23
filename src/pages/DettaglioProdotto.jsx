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
          setDataFound(true);
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

      {dataFound === true && (
        <>
          <button
            className="btn btn-outline-secondary btn-sm mx-3"
            onClick={() => navigate("/prodotti")}
          >
            ◄ Torna ai prodotti
          </button>
          <div className="container text-center my-5">
            <h2 className="my-1">
              {dettagli.title}
            </h2>
            <span className="badge rounded-pill text-bg-secondary mb-5">{dettagli.category}</span>
            <br />
            <img src={dettagli.image} alt="" style={{height: "300px"}}/>
            <h3 className="my-3">${dettagli.price.toFixed(2)}</h3>
            <p className="mb-5">{dettagli.description}</p>
            {/* <p className="my-3 text-warning">Voto dei clienti: {dettagli.rating.rate}/5</p> */}
            <Link 
            className={`btn btn-outline-secondary mx-3 ${id <= 1 ? 'disabled' : ''}`}
            to={"/dettaglio-prodotto/" + (parseInt(id) - 1)}
            >
              Prodotto precedente
            </Link>
            <Link
            className={`btn btn-dark mx-3 }`}
              to={"/dettaglio-prodotto/" + (parseInt(id) + 1)} 
            >
              Prodotto successivo
            </Link> 
          </div>
        </>
      )}
    </>
  );
}
