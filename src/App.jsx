import { useForm } from "react-hook-form";
import { useState } from "react";
import _ from "lodash";

function App() {
  const { register, handleSubmit } = useForm();
  const [apostou, setApostou] = useState(false);
  const [viraCarta, setViraCarta] = useState("");
  const [jaEscolheu, setJaEscolheu] = useState(false);
  const [premio, setPremio] = useState(0);
  const [nome, setNome] = useState("");
  const [palas, setPalas] = useState(
    _.shuffle(["adidas", "nox", "compass", "siux"])
  );

  const [marcas, setMarcas] = useState(
    _.shuffle(["adidas", "nox", "compass", "siux"])
  );

  function apostaJogo(data) {
    console.log(data);
    let valorGanho = data.aposta * 2;
    let jogador = data.nome;
    setApostou(true);
    setPremio(valorGanho);
    setNome(jogador);
    //console log
    // console.log(marcas);
    // console.log(palas);
  }

  function clicaPala(escolha) {
    if (apostou) {
      //log
      console.log(escolha);
      console.log(marcas);
      console.log(palas);
      //log
      setViraCarta(escolha);
      setJaEscolheu(true);
    }
  }

  function resetaTudo() {
    setApostou(false);
    setViraCarta("");
    setJaEscolheu(false);
    setNome("");
    setPremio(0);
    setMarcas(_.shuffle(["adidas", "nox", "compass", "siux"]));
    setPalas(_.shuffle(["adidas", "nox", "compass", "siux"]));
  }

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="./logo.png"
                alt="Logo"
                width="50"
                height="40"
                className="d-inline-block me-3"
              />
              Jogo da memória
            </a>
          </div>
        </nav>
        <div className="card text-center mt-3 w-75 mx-auto">
          <form
            className="card-header"
            onSubmit={handleSubmit(apostaJogo)}
            onReset={resetaTudo}
          >
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome do Apostador"
                  disabled={apostou}
                  required
                  {...register("nome")}
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Valor R$"
                  min={1}
                  step={1}
                  disabled={apostou}
                  required
                  {...register("aposta")}
                />
              </div>
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={apostou}
                >
                  Apostar
                </button>
              </div>
              <div className="col">
                <button type="reset" className="btn btn-primary">
                  Jogar Novamente
                </button>
              </div>
            </div>
          </form>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="text-primary">
                  Memorize a posição das raquetes de padel.
                </h5>
              </div>
              <div className="col">
                {apostou && (
                  <h5>Onde está raquete da marca: {marcas[0].toUpperCase()}</h5>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">{/* <p>importar aqui a fig</p> */}</div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <button
                  onClick={() => clicaPala(palas[0])}
                  disabled={jaEscolheu}
                >
                  {apostou ? (
                    <img
                      src={
                        viraCarta == palas[0]
                          ? "./" + palas[0] + ".png"
                          : "./costas.png"
                      }
                    />
                  ) : (
                    <img src={"./" + palas[0] + ".png"} />
                  )}
                </button>
              </div>
              <div className="col mb-3">
                <button
                  onClick={() => clicaPala(palas[1])}
                  disabled={jaEscolheu}
                >
                  {apostou ? (
                    <img
                      src={
                        viraCarta == palas[1]
                          ? "./" + palas[1] + ".png"
                          : "./costas.png"
                      }
                    />
                  ) : (
                    <img src={"./" + palas[1] + ".png"} />
                  )}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <button
                  onClick={() => clicaPala(palas[2])}
                  disabled={jaEscolheu}
                >
                  {apostou ? (
                    <img
                      src={
                        viraCarta == palas[2]
                          ? "./" + palas[2] + ".png"
                          : "./costas.png"
                      }
                    />
                  ) : (
                    <img src={"./" + palas[2] + ".png"} />
                  )}
                </button>
              </div>
              <div className="col mb-3">
                <button
                  onClick={() => clicaPala(palas[3])}
                  disabled={jaEscolheu}
                >
                  {apostou ? (
                    <img
                      src={
                        viraCarta == palas[3]
                          ? "./" + palas[3] + ".png"
                          : "./costas.png"
                      }
                    />
                  ) : (
                    <img src={"./" + palas[3] + ".png"} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer text-body-secondary">
            {jaEscolheu ? (
              marcas[0] == viraCarta ? (
                <h5 className="text-success">
                  Parabéns {nome}! Você acertou e ganhou R$
                  {premio.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  .
                </h5>
              ) : (
                <h5 className="text-danger">
                  Ahh que pena {nome}, infelizmente você perdeu...
                </h5>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
