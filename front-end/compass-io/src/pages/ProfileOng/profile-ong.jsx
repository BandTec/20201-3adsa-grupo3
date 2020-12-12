import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import AboutOng from '../../components/AboutOng/about-ong';
import Button from '@material-ui/core/Button';
import CarouselVacancy from '../../components/CarouselVacancy/carousel-vacancy';
import Rating from '../../components/Rating/rating';
import CardProfileOng from '../../components/CardProfileOng/card-profile-ong';
import InputFile from '../../components/InputFile/input-file';
import ImgVolunteer from '../../assets/images/child-img.jpg';
import AlertCard from '../../components/AlertCard/alert-card';
import Footer from '../../components/Footer/footer';

import { render } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

import UsuarioJuridicoService from '../../services/usuario-juridico-service';
import ArquivoService from '../../services/arquivo-service';

import './profile-ong.css';

const useStyles = makeStyles({
  outlineBtn: {
    width: "15%",
    border: "2.5px solid #1975FF",
    color: "#1975FF",
    fontWeight: 600,
    margin: "1rem 0",
  }
});

async function renderPerfil() {
  let usuarioJuridicoService = new UsuarioJuridicoService();
  const resposta = await usuarioJuridicoService.getUsuarioJuridicoById(1);
  let vagaInfos = resposta.data[0];
  console.log(vagaInfos);

  //getFoto()

  /*let DescricaoVaga = document.getElementsByName("descricaoVaga")[0];
  DescricaoVaga.innerHTML = vagaInfos.descricao;
  let ong = document.getElementsByName("ong")[0];
  ong.children.item(1).children.item(0).innerText=vagaInfos.fkUsuarioJuridico.nomeOng;
  ong.children.item(1).children.item(1).innerText=vagaInfos.fkUsuarioJuridico.descricaoOng;
  ong.children.item(1).children.item(2).innerText="www.google.com.br";
  debugger
  let vaga = document.getElementsByName("vaga")[0];
  vaga.children.item(1).children.item(1).innerText=vagaInfos.dataInicio;
  vaga.children.item(2).children.item(1).innerText=vagaInfos.dataFim;
  vaga.children.item(3).children.item(1).innerText=vagaInfos.fkEndereco.logradouro + ', ' + vagaInfos.fkEndereco.numeroEndereco + ' - ' + vagaInfos.fkEndereco.bairro + ', ' + vagaInfos.fkEndereco.cidade + ' - ' + vagaInfos.fkEndereco.estado + ', ' + vagaInfos.fkEndereco.cep;
*/
}

window.onload = renderPerfil();

<<<<<<< HEAD
export default function ProfileOng() {
=======
async function trocarFoto() {
  try {
    let usuarioJuridicoService = new UsuarioJuridicoService();

    let foto = document.getElementById("editarFoto").files[0];
    let formDataFoto = new FormData();
    formDataFoto.set("foto", foto);
  
    let id = parseInt(sessionStorage["userId"])
    let response = await usuarioJuridicoService.uploadFoto(id, formDataFoto);

    if (response.status == 201) {
      getFoto();
    }
    render(<AlertCard message="Foto atualizada" severity="success"/>, document.getElementById("alertArea"));
  } catch (error) {
    let errorString = `${error}`;
    render(<AlertCard message={errorString} severity="error"/>, document.getElementById("alertArea"));
  }
}

async function getFoto() {
  debugger;
  let usuarioJuridicoService = new UsuarioJuridicoService();
  let id = parseInt(sessionStorage["userId"])
  
  let fotoResponse = await usuarioJuridicoService.getFoto(id);
  let imgOng = document.getElementById("imgOng");
  imgOng.src = "data:image/png;base64," + fotoResponse.data;
}

async function baixarArquivo() {
  let userId = parseInt(sessionStorage["userId"]);
  let usuarioAtual = await new UsuarioJuridicoService().getUsuarioJuridicoById(userId);
  let nomeOng = usuarioAtual.data[0].nomeOng;

  window.location.href=`http://localhost:8080/arquivos/arquivo01?nomeDoArquivo=TodasAsVagas&nomeDaOng=${nomeOng}&isCsv=false`;
}

async function subirArquivo() {
  
  let arquivo = document.getElementById("inputFile").files[0];
  let formDataFile = new FormData();
  formDataFile.set("file", arquivo);

  await new ArquivoService().subirArquivo(formDataFile);
  window.location.href="http://localhost:3000/profile/ong";
}

export default function ProfileOng(props) {
>>>>>>> 98c8e5553ea9f8ff6351b76b14f30490ef1b4724

  function ClickDirection(){
    window.location.href = "/register";
  }

  const classes = useStyles();
  return (
    <section>
      <div id="alertArea"></div>
      <div className="containerProfileOng">
        <AboutOng nameOng="TETO Brasil"
            infoOng="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, accusantium cupiditate incidunt laboriosam aspernatur. Placeat ut maxime facilis molestias pariatur!" 
            link="www.google.com.br"
            width="600"/>
<<<<<<< HEAD
        <Button variant="outline" onClick={ClickDirection} className={classes.outlineBtn}>+Cadastrar Vaga</Button>
=======
        <div className="flex flex-column mg-t-16 width-15pg">
          <InputFile id="editarFoto" text="Editar foto" callBack={trocarFoto}/>
        </div>
          <Button variant="outline" onClick={ClickDirection} className={classes.outlineBtn}>+Cadastrar Vaga</Button>
>>>>>>> 98c8e5553ea9f8ff6351b76b14f30490ef1b4724
        <div className="vacancyCarousel">
          <h1>Vagas Abertas</h1>
          <CarouselVacancy />
          <Button onClick={baixarArquivo}>Baixar arquivo de vagas TXT</Button>
          <InputFile id="inputFile" text="Importar arquivo" callBack={subirArquivo}/>
        </div>
        <div className="ratings">
          <Rating isOngProfile 
            imgVolunteer={ImgVolunteer} 
            nameVolunteer="Iago Roani de Lima" 
            ageVolunteer="21 anos" 
            professionVolunteer="Automação"
            schoolVolunteer="Cursando Superior" 
            liveInVolunteer="Suzano,SP,Brasil"/>
        </div>
        <div className="flex justcon-sb">
          <CardProfileOng isContact location="R. Rodrigues, 116 - Vila Zat, São Paulo - SP, 02977-025"
          contact="contato.teto@teto.com.br" website="https://www.techo.org/" instagram="@teto.br" 
          facebook="Ver perfil"/>
          <CardProfileOng is htHelp />
        </div>

      </div>
    </section>
  );
};
