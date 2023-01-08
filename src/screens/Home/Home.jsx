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
      </div>
    </div>
  );
}
