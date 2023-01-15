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
        <div className="howHelp-item">
          <div className="howHelp-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={184}
              height={184}
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
            Você vai conseguir editar seus <br /> vídeos do jeito mais fácil,
            <br />
            rápido e mais atraente.
          </p>
        </div>
      </div>
    </div>
  );
}
