import React from 'react';
import { render } from 'react-dom';
import AboutVolunteer from '../../components/AboutVolunteer/about-volunteer';
import ImgVolunteer from '../../assets/images/volunteer-woman-img.jpg';
import Rating from '../../components/Rating/rating';
import CommentBox from '../../components/CommentBox/comment-box';
import CarouselInterests from '../../components/CarouselInterests/carousel-interests';
import CarouselSkills from '../../components/CarouselSkills/carousel-skills';
import AlertCard from '../../components/AlertCard/alert-card';

import UsuarioFisicoService from '../../services/usuario-fisico-service';
import UsuarioFisicoVagaService from '../../services/usuario-fisico-vaga-service';

import './profile-volunteer.css';
import VagaService from '../../services/vaga-service';

export default class ProfileVolunteer extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    message: '',
    severity: '',
    open: false
  }

  componentDidMount() {
    this.renderPerfil();
    this.getFoto();
    this.getVagasPleiteadas();
  }

  async renderPerfil() {
    let usuarioFisico = new UsuarioFisicoService();
    let resposta = await usuarioFisico.getUsuarioFisicoById(parseInt(sessionStorage["userId"]));
    let voluntarioInfo = resposta.data[0];
    let voluntario = document.getElementsByName("voluntarioCard")[0];
    voluntario.children.item(1).children.item(0).innerText = voluntarioInfo.nome;
    let convertData = new Date(voluntarioInfo.dataNascimento).toLocaleDateString("pt-BR");
    let nascimento = convertData.split('/');
    let hoje = new Date;
    let hojePartes = [hoje.getDate(), (hoje.getMonth() + 1), hoje.getFullYear()];
    console.log(hojePartes);
    let idade;
    if (hojePartes[1] >= nascimento[1]) {
      idade = hojePartes[2] - nascimento[2];
    } else if (hojePartes[0] >= nascimento[0]) {
      idade = hojePartes[2] - nascimento[2];
    } else {
      idade = (hojePartes[2] - nascimento[2]) - 1;
    }
    voluntario.children.item(1).children.item(1).children.item(0).innerText = idade + ' anos';
  }

  getFoto = async () => {
    let usuarioFisicoService = new UsuarioFisicoService();
    let id = parseInt(sessionStorage["userId"])

    let fotoResponse = await usuarioFisicoService.getFoto(id);
    if (fotoResponse != undefined) {
      let imgVolunteer = document.getElementById("imgVolunteer");
      imgVolunteer.src = "data:image/png;base64," + fotoResponse.data;
    }
  }

  trocarFoto = async () => {
    try {
      let usuarioFisicoService = new UsuarioFisicoService();

      let foto = document.getElementById("editarFoto").files[0];
      let formDataFoto = new FormData();
      formDataFoto.set("foto", foto);

      let id = parseInt(sessionStorage["userId"])
      let response = await usuarioFisicoService.uploadFoto(id, formDataFoto);

      if (response.status == 201) {
        this.getFoto();
      }
      this.setState({
        message: "Foto atualizada",
        severity: "success",
        open: true
      })
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }

  getVagasPleiteadas = async () => {
    try {
      let usuarioFisicoVagaService = new UsuarioFisicoVagaService();

      let userIdAsInt = parseInt(sessionStorage["userId"]);
      let userId = userIdAsInt % 2 == 0 ? userIdAsInt : -1;
      if (userId == -1)
        return;

      let vagasDoUsuario = await usuarioFisicoVagaService.getUsuarioFisicoByIdUsuario(userId);

      let contador = 0;
      let ufv;
      do {
        ufv = vagasDoUsuario.data[contador]
        contador++;
      } while (ufv.aprovado != null)

      let img = document.getElementById("vacancyImgId");
      let title = document.getElementById("vacancyTitleId");
      let description = document.getElementById("vacancyDescriptionId");
      let aprovado = document.getElementById("vacancyAprovadoId");

      let vagaService = new VagaService();
      let foto = await vagaService.getFoto(ufv.fkVaga.id);
      img.src = "data:image/png;base64," + foto.data;

      title.innerText = ufv.fkVaga.titulo;
      description.innerText = ufv.fkVaga.descricao;

      if (ufv.aprovado == 1)
        aprovado.innerText = "Aprovado";
      else if (ufv.aprovado == 0)
        aprovado.innerText = "Reprovado";
      else
        aprovado.innerText = "Em avaliação";
    } catch (error) {
      let errorString = `${error}`;
      this.setState({
        message: errorString,
        severity: "error",
        open: true
      })
    }
  }

  fecharAlerta = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false })
  };

  render() {
    return (
      <div classname="containerProfileVolunteer">

        <AlertCard open={this.state.open} message={this.state.message} severity={this.state.severity} onClose={this.fecharAlerta} />

        <AboutVolunteer name="voluntarioCard" imgId="imgVolunteer" editImgVolunteer={this.trocarFoto} className="mg-b-16" nameVolunteer="Victoria Medeiros dos Santos" ageVolunteer="21 anos" professionVolunteer="Enfermeira"
          schoolVolunteer="Cursando Superior" liveInVolunteer="Suzano,SP,Brasil"></AboutVolunteer>
        <div className="">
          <h1>Sobre mim</h1>
        </div>
        <div classname="descriptionVolunteer">
          <CommentBox />
        </div>
        <div>
            </div>
        <div>
        </div>
        <div classname="ratingBox">
          <Rating isVolunteerProfile isAprovadoId="vacancyAprovadoId"
            imgVolunteer={ImgVolunteer} imgId="vacancyImgId"
            vacancyTitle="Marcenaria para construção de móveis" titleId="vacancyTitleId"
            infoVacancy="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Iusto asperiores excepturi cum dolores ipsam delectus minima nesciunt dignissimos, voluptates, 
                        accusantium cupiditate incidunt laboriosam aspernatur. P
                        laceat ut maxime facilis molestias pariatur!" descriptionId="vacancyDescriptionId" />
        </div>
      </div>
    );
  }
};