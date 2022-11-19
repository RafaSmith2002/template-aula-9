/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { WrapperLista } from "./style";

export default function Post() {
  const [postagem, setpostagem] = useState("");
  const [listaDePostagem, setListaDePostagem] = useState([]);

  const addItem = (item) => {  
    if (item) {
      setListaDePostagem((oldValue) => [...oldValue, item]);
    } else {
    alert("Esse campo esta vazio, favor preencher!");
    } 

  };

  const clearItem = (item) => {
    const itemFiltered = listaDePostagem.filter(
      (elemento) => elemento !== item
    );
    setListaDePostagem(itemFiltered);
  };
  
  return (
    <div>
      <input
        onChange={(e) => setpostagem(e.target.value)}
        placeholder="postagem"
      />
      <button onClick={() => addItem(postagem)}>enviar</button>

      {listaDePostagem &&
        listaDePostagem.map((item) => {
          return (
            <WrapperLista>
              <li>{item}</li>
              <button onClick={() => clearItem(item)}>X</button>
            </WrapperLista>
          );
        })}
      {listaDePostagem.length > 0 ? (
        <button onClick={() => setListaDePostagem([])}>LIMPAR LISTA</button>
      ) : (
        "sem porra nenhuma"
      )}  
    </div>
  );
}
