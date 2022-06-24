import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Clock from 'react-live-clock';
import TransformiyMp3 from "./Audio/Transformiy.mp3"
import AironMen from "./Audio/ACDC_-_Thunderstruck_OST_Iron_Man_2_34294139.mp3"
import PokaSer from "./Audio/Do vstrechi.mp3"
import Malyvka from "./Audio/Malyvka.mp3"
import Kto from "./Audio/Mars2.mp3"
import Nou from "./Audio/NouOtvet.mp3"
import Postro from "./Audio/prj_4609546_19e411f6dbded446139acd2c922727ba_1624449554 (1).mp3"
import SwegiyMusik from "./Audio/Dabro_-_YUnost_69577931.mp3"
import Crezy from "./Audio/GAYAZOV_BROTHER_-_MALINOVAYA_LADA_73214200.mp3"
import Jara from "./Audio/Filatov_Karas_GAYAZOV_BROTHER_-_Poshla_zhara_72992182.mp3"
import annyang from 'annyang'
import ModalDialog from "./ModalDialog";
import { comand } from './commands';
import './index.css';
import "./App.css"

const App = () => {

  const fontSize = "23px"

  const [stateModalDialog, setStateModalDialog] = useState(false)
  const [stateDateTime, setStateDateTime] = useState(false)

  const getStateOpenModalDialog = (state) => setStateModalDialog(state)

  const getStateDateTime = (state) => setStateDateTime(state)

  useEffect(() => {
    if (annyang) {
      var commands = {
        "Привет": AudioTransformiy,
        "Пока": Poka,
        "Давай нашу": AudioMusik,
        "Включи детскую": HayMalyvka,
        "Кто ты": KtoOn,
        "Что ты умеешь": NouOtvet,
        "На чем ты написан": Postroen,
        "Давай свеженькое": Swegee,
        "Малиновая лада": Crezu,
        "Пошла жара": Filatov,
        "Открыть": () => getStateOpenModalDialog(true),
        "Закрыть": () => getStateOpenModalDialog(false),
        "Показать время": () => getStateDateTime(true),
        "Скрыть время": () => getStateDateTime(false)
      }

      annyang.addCommands(commands);
      annyang.setLanguage('ru')
      annyang.start();
    }
  });


  const AudioMusik = () => {
    var audio = new Audio(AironMen);
    audio.src = AironMen
    audio.play();
  }

  const Swegee = () => {
    var audio = new Audio(SwegiyMusik);
    audio.play();
  }

  const Postroen = () => {
    var audio = new Audio(Postro);
    audio.play();
  }

  const NouOtvet = () => {
    var audio = new Audio(Nou);
    audio.play();
  }

  const KtoOn = () => {
    var audio = new Audio(Kto);
    audio.play();
  }

  const HayMalyvka = () => {
    var audio = new Audio(Malyvka);
    audio.play();
  }

  const Poka = () => {
    var audio = new Audio(PokaSer);
    audio.play();
  }

  const AudioTransformiy = () => {
    var audio = new Audio(TransformiyMp3);
    audio.play();
  }

  const Crezu = () => {
    var audio = new Audio(Crezy);
    audio.play();
  }

  const Filatov = () => {
    var audio = new Audio(Jara);
    audio.play();
  }

  const ContainerDateTime = styled.div`
     display: ${stateDateTime ? "block" : "none"};
    box-shadow: 0px 0px 33px -9px #20fcfa;
    border-radius: 38px;
    font-size: 50px;
    padding: 50px;
    color: #20fcfa;
    background-color: black;
    position: fixed;
    bottom: 100px;
    right: 100px;
    z-index: 999;
  `
  return (
    <>
      <div className="Block">
        <div className="Center">
          <div className="zemnoy-shar-vrashchay">
            <div
              onClick={() => getStateOpenModalDialog(true)}
              className="zemnoy-shar"
            >
              <div className="zemnoy-shar-sphere"></div>
              <div className="zemnoy-shar-outer-shadow"></div>
              <div className="zemnoy-shar-worldmap">
                <div className="krugly-globus-back"></div>
                <div className="krugly-globus-front"></div>
              </div>
              <div className="vrashchay-ushchiysya"></div>
            </div>
          </div>
        </div>
      </div>
      <ModalDialog
        action={stateModalDialog}
        getStateOpenModalDialog={getStateOpenModalDialog}
      >
        {comand.map((c, index) => <div>
          <div>
            <span
              style={{
                marginLeft: `${index + 1 < 10 ? "10px" : ""}`,
                color: "rgb(34 245 16)", fontSize: `${fontSize}`
              }}
            >{index + 1})&nbsp;&nbsp;</span>
            <span
              style={{ color: "#10cdf5", fontSize: `${fontSize}` }}
            >
              {c.comandText}
            </span>
            <span style={{ color: "yellow", fontSize: `${fontSize}` }}>----------- </span>
            <span
              style={{ color: "#d744c9", fontSize: `${fontSize}` }}
            >
              {c.comandPrameters}
            </span><span>...</span>
          </div>
        </div>
        )}
      </ModalDialog>
      <ContainerDateTime>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={null} />
      </ContainerDateTime>
    </>
  )
}

export default App

