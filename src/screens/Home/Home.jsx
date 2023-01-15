import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <img
        className="bg-elements"
        src="https://i.imgur.com/R3pjiUs.png"
        width={1200}
        alt="background"
        draggable="false"
      ></img>
      <img
        className="bg-elements2"
        src="https://i.imgur.com/630E00X.png"
        width={900}
        alt="background"
        draggable="false"
      ></img>
      <img
        className="bg-elements3"
        src="https://i.imgur.com/AVi0DLy.png"
        alt="background"
        draggable="false"
        width={1200}
      ></img>
      <div className="topArea-text">
        <h1 className="title">EDITE DO JEITO MAIS FÁCIL</h1>
        <h1 className="subTitle">RÁPIDO E SEM DOR DE CABEÇA</h1>
      </div>
      <img
        className="boxImage"
        src="https://i.imgur.com/puL9SeA.png"
        alt="boxmotiontime"
      />
      <div className="infoArea-text">
        <h1 className="infoTitle">O que é o Motion Time?</h1>
        <p className="infosubTitle">
          O Motion Time é um pack de edição super completo, com diversos textos
          <br />
          editáveis, uma variedade de efeitos sonoros, transições, emojis e
          entre vários
          <br />
          outros elementos.
        </p>
      </div>
      <button className="buyButton">VER O PACK POR DENTRO</button>
      <div className="publicArea-container">
        <div className="publicArea-text">
          <h1 className="huh-text">"MAS EDITAR VÍDEO É MUITO DIFÍCIL"</h1>
          <p className="hahah-text">
            EDITAR NUNCA <br />
            FOI TÃO FÁCIL!!!
          </p>
          <h1 className="huh-subText">
            EDITE SEUS VÍDEOS APENAS NO CTRL-C E CTRL-V
          </h1>
        </div>
        <img
          className="boxImage2"
          src="https://i.imgur.com/L2qZZwJ.png"
          alt="publicArea"
        />
      </div>
      <div className="seeWorking-container">
        <h1 className="seeWorking-title">VEJA O MOTION TIME</h1>
        <iframe
          src="https://drive.google.com/file/d/1Ybz1nNptw5hHG4BZXLN6eF_fFDHDiOBu/preview"
          width="880"
          className="seeWorking-video"
          height="500"
          allow="autoplay"
        ></iframe>
        <button className="seeWorking-button">COMPRE AGORA!</button>
      </div>
      <div className="infoAbout-container">
        <div className="infoAbout-top">
          <h1 className="infoAboutSubtitle">IMPORTANTE!</h1>
          <p className="infoAboutTitle">
            INFORMAÇÕES SOBRE
            <br /> O MOTION TIME
          </p>
        </div>
        <p className="infoAbout-p">
          O Motion Time funciona em todos os softwares de edição, incluindo os
          de <br /> celulares também. Porém, para usuários que não usam Premiere
          Pro,
          <br /> apenas vão conseguir utilizar 100 textos <br /> animados ao
          invés de 300.
        </p>
        <img
          className="boxAbout"
          src="https://i.imgur.com/L2qZZwJ.png"
          alt="publicArea"
        />
      </div>
      <div className="whatContains-container">
        <h1 className="whatContains-title">MOTION TIME</h1>
        <h1 className="whatContains-subTitle">O QUE TÊM DENTRO?</h1>
        <div className="topics-div">
          <div className="all-topics-container">
            <div className="topic-list-area">
              <h1 className="topic-indicator">01.</h1>
              <div className="topic-area">
                <h1 className="topic-title">300 TEXTOS ANIMADOS</h1>
                <h1 className="topic-subTitle">
                  300 Textos animados para você não perder tempo fazendo
                  animação e nem quebrando a cabeça.
                </h1>
              </div>
            </div>
            <div className="topic-list-area">
              <h1 className="topic-indicator">03.</h1>
              <div className="topic-area">
                <h1 className="topic-title">150 TRANSIÇÕES</h1>
                <h1 className="topic-subTitle">
                  Mais de 50 transições de diversas formas para você usar no seu
                  vídeo, e não, você não vai nem perder tempo tirando o Chroma
                  Key
                </h1>
              </div>
            </div>
            <div className="topic-list-area">
              <h1 className="topic-indicator">05.</h1>
              <div className="topic-area">
                <h1 className="topic-title">15 LOWER THIRDS</h1>
                <h1 className="topic-subTitle">
                  15 tipos de lower thirds para deixar os seus vídeos mais
                  estilosos.
                </h1>
              </div>
            </div>
          </div>
          <div className="all-topics-container">
            <div className="topic-list-area">
              <h1 className="topic-indicator">02.</h1>
              <div className="topic-area">
                <h1 className="topic-title">+600 EFEITOS SONOROS</h1>
                <h1 className="topic-subTitle">
                  Mais de 50 transições de diversas formas para você usar no seu
                  vídeo, e não, você não vai nem perder tempo tirando o Chroma
                  Key
                </h1>
              </div>
            </div>
            <div className="topic-list-area">
              <h1 className="topic-indicator">04.</h1>
              <div className="topic-area">
                <h1 className="topic-title">+70 EMOJIS 3D ANIMADOS</h1>
                <h1 className="topic-subTitle">
                  70 Emojis animados para você expressar as suas reações no
                  vídeo.
                </h1>
              </div>
            </div>
            <div className="topic-list-area">
              <h1 className="topic-indicator">06.</h1>
              <div className="topic-area">
                <h1 className="topic-title">*BÔNUS* DIVERSOS ELEMENTOS</h1>
                <h1 className="topic-subTitle">
                  Sim, ainda vem um bônus de elementos para você dar aqueles
                  efeitos especiais no seus vídeos.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <button className="whatContains-button">COMPRE AGORA!</button>
      </div>
      <div className="howHelp-container">
        <div className="howHelpTitle-area">
          <h1 className="howHelp-subTitle">INFORMAÇÕES</h1>
          <h1 className="howHelp-title">COMO O MOTION TIME</h1>
          <h1 className="howHelp-title">PODE TE AJUDAR</h1>
        </div>
        <div className="howHelp-list">
          <div className="howHelp-item">
            <div className="howHelp-box">
              <div className="howHelp-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={184}
                  height={184}
                  className="howHelp-svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  fill="#293629"
                >
                  <path
                    d="M462.9 1189.8l-262 262c-4.1 4.4-6.2 9.8-6.2 16s2.1 11.5 6.2 16l103.9 103.5c4.1 4.4 9.4 6.7 15.8 6.7s11.8-2.2 16.2-6.7l126.1-126.1c4.4-4.4 9.8-6.7 16-6.7 6.2 0 11.5 2.2 16 6.7l352.1 352c4.4 4.4 9.8 6.7 16 6.7 6.2 0 11.5-2.2 16-6.7l104.4-102.6c4.4-4.4 6.7-9.8 6.7-16 0-6.2-2.2-11.5-6.7-16L495 1189.7c-4.4-4.1-9.8-6.2-16-6.2-6.3 0-11.6 2.1-16.1 6.3zm-275.3-169.7c-32 0-61.6 7.9-89 23.8s-49 37.4-64.8 64.6-23.8 57-23.8 89.3v444c0 32 7.9 61.6 23.8 89 15.8 27.4 37.4 49 64.8 64.8s57.1 23.8 89 23.8h444c20.4 0 41-3.8 61.7-11.5l-77.3-77.3H143.2c-8 0-15.4-2-22.2-6-6.8-4-12.2-9.4-16.2-16.2-4-6.8-6-14.2-6-22.2v-532.8c0-12.1 4.4-22.6 13.1-31.3s19.2-13.1 31.3-13.1H676c12.1 0 22.6 4.4 31.3 13.1s13.1 19.2 13.1 31.3v119.4l88.8 88.8v-163.9c0-32.3-7.9-62-23.8-89.3-15.8-27.2-37.4-48.8-64.8-64.6-27.4-15.8-57.1-23.8-89-23.8h-444z"
                    transform="matrix(1 0 0 -1 0 1920)"
                  />
                </svg>
              </div>
              <p className="howHelp-text">
                Você vai conseguir editar seus <br /> vídeos do jeito mais
                fácil,
                <br />
                rápido e mais atraente.
              </p>
            </div>
          </div>
          <div className="howHelp-item">
            <div className="howHelp-box">
              <div className="howHelp-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={184}
                  height={184}
                  className="howHelp-svg"
                  viewBox="0 0 119.000000 119.000000"
                  fill="#293629"
                >
                  <path
                    d="M462 1171C233 1113 58 931 15 705c-19-97-19-135 0-227 24-117 76-211 164-298C267 94 345 48 456 20c318-82 638 114 720 440 22 86 14 240-16 327-97 281-416 456-698 384zm257-67c169-42 301-157 370-324 29-68 39-218 22-302-20-93-67-175-145-254C862 122 741 70 602 70c-175 0-330 78-429 218C17 506 45 789 239 973c134 126 307 174 480 131z"
                    transform="matrix(.1 0 0 -.1 0 119)"
                  />
                  <path
                    d="M550 1043c-114-17-196-58-272-134C18 650 165 210 534 147c188-32 388 78 474 260 34 74 36 83 36 183 0 122-20 185-85 272-70 93-157 148-278 174-66 14-84 15-131 7zm44-131c22-5 36 13 36 46 0 18 4 22 18 18 9-3 31-8 47-12 28-6 102-41 135-63 12-8 12-13-4-30-10-11-16-28-14-38 4-23 45-29 67-9 15 14 18 12 39-18 23-34 62-134 62-161 0-9-9-15-24-15-56 0-58-62-2-68 26-3 28-6 21-40-7-41-44-126-68-157-14-19-16-19-34-2-11 9-27 17-36 17-23 0-32-38-13-59 9-10 16-20 16-24 0-12-91-59-142-73-69-18-68-18-68 10s-24 51-45 42c-9-3-18-19-22-36-5-29-8-30-37-25-42 9-143 55-157 71-7 9-6 20 7 38 13 21 14 29 4 41-16 19-39 19-61-1-16-15-19-13-43 23-29 44-56 115-56 149 0 17 6 23 28 26 21 2 28 9 30 31 3 23-1 28-27 33-24 5-31 12-31 29 0 33 27 104 56 148 24 36 27 38 43 23 22-20 45-20 61-1 10 13 10 19-4 33-9 10-16 24-16 30 0 17 87 64 144 77l51 12 10-31c6-17 18-32 29-34z"
                    transform="matrix(.1 0 0 -.1 0 119)"
                  />
                  <path
                    d="M576 824c-13-12-16-39-16-126V588l82-85c45-46 89-82 97-81 7 2 19 11 25 20 9 15-1 29-62 91l-72 72v106c0 122-15 153-54 113z"
                    transform="matrix(.1 0 0 -.1 0 119)"
                  />
                </svg>
              </div>
              <p className="howHelp-text">
                O Motion Time vai te poupar tempo e <br />
                com mais tempo, mais dinheiro
                <br /> você consegue ter.
              </p>
            </div>
          </div>
          <div className="howHelp-item">
            <div className="howHelp-box">
              <div className="howHelp-circle">
                <svg
                  fill="#293629"
                  height={184}
                  width={184}
                  className="howHelp-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 489.9 489.9"
                  xmlSpace="preserve"
                >
                  <path d="M183.85 216.3c33.8-43.1 86.3-70.8 145.4-70.8 8.8 0 17.5.6 26.1 1.8v-39.4c-26.7 24-95.9 41.1-177.2 41.1-80.8 0-149.8-16.9-176.8-40.8v50.7c13.5 55.3 180.6 57.5 182.5 57.4zM1.25 198.5l-.1 51.5c6.5 28.6 66.8 51.8 144.9 56.9 3-24.3 10.8-47.2 22.4-67.6-76.7-1.3-141.4-17.8-167.2-40.8zM1.15 290l-.1 49c.3-.3.6-.6.9-.8 1.9 31.6 69.4 57.5 156.1 61.2-8.7-21.4-13.4-44.7-13.4-69.2v-.1C78.45 326 24.15 310.6 1.15 290zM169.55 422.7c-78.2-1.3-143.9-18.6-168.5-42.2l-.1 46.2c0 34.8 79.3 63 177.2 63 18.7 0 36.7-1 53.6-2.9-25.6-16-47-38-62.2-64.1z" />
                  <ellipse cx={178.15} cy={62.9} rx={177.4} ry={62.9} />
                  <path d="M329.25 170.2c-88.3 0-159.9 71.6-159.9 159.9s71.6 159.8 159.9 159.8 159.9-71.6 159.9-159.9-71.6-159.8-159.9-159.8zm14.6 245.2v10.1c0 8.1-6.5 14.6-14.6 14.6s-14.6-6.5-14.6-14.6v-10.1c-8.5-2.6-16.4-7.3-22.6-13.9-5.5-5.9-5.2-15.1.6-20.6 5.9-5.5 14.8-4.9 20.6.6 6.4 6.1 17 6.8 17.5 6.8 11.3-.8 20.3-10.3 20.3-21.8 0-12-9.8-21.9-21.8-21.9-28.1 0-51-22.9-51-51 0-23.1 15.4-42.6 36.4-48.9v-10.1c0-8.1 6.5-14.6 14.6-14.6s14.6 6.5 14.6 14.6v10.1c8.5 2.6 16.4 7.3 22.6 13.9 5.5 5.9 5.2 15.1-.6 20.6-5.9 5.5-15.6 5.7-20.6-.6-5.3-6.7-17-6.8-17.5-6.8-11.3.8-20.3 10.3-20.3 21.8 0 12 9.8 21.9 21.8 21.9 28.1 0 51 22.9 51 51 0 23.1-15.4 42.6-36.4 48.9z" />
                </svg>
              </div>
              <p className="howHelp-text">
                O Motion Time serve em qualquer tipo de vídeo, para o Youtube,
                Instagram, Tiktok e em outras diversas formas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <h1 className="title">TUDO ISSO POR APENAS</h1>
        <div className="pricing-box">
          <h1 className="pricing-from">DE</h1>
          <h1 className="price-cut">R$ 179.90</h1>
        </div>
        <div className="pricing-updated">
          <h1 className="pricing-from">POR APENAS</h1>
          <div className="conditions-box">
            <h1 className="condition-text">12X DE</h1>
            <h1 className="price-updated">R$ 4,90</h1>
          </div>
          <h1 className="pricing-from">OU R$58,80 À VISTA</h1>
          <p className="warning-text">
            *PROMOÇÃO LIMITADA*
            <br />
            *ACESSO IMEDIATO*
            <br />
            *GARANTIA DE 7 DIAS*
          </p>
        </div>
      </div>
    </div>
  );
}
