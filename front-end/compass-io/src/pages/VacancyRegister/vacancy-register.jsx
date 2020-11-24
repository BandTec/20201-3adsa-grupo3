import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import InputLine from "../../components/InputLine/input-line";
import LabelTitleForm from "../../components/LabelTitleForm/label-title-form";
import Image from '../../components/Image/image';
import Button from '@material-ui/core/Button';
import GirlVolunteerImg from '../../assets/images/girl-volunteer.jpg';
import ComboBox from '../../components/ComboBox/combo-box'

import './vacancy-register.css';

export default function VacancyRegister() {
  return (
    <section>
      <Navbar/>
      <LabelWelcome labelTitle="Detalhes da oportunidade" labelText="Nos ajude a divulgar a sua vaga"/>
      <br/>


      <div className="container">
        <span className="loginImagePart">
          <span className="loginImage">
            <Image width="535" className="childrenImage" height="560" src={GirlVolunteerImg} />
          </span>
          <span className="textImage">
            Fazendo a diferença conforme o seu <br/>
            <span className="yellowWord">perfil</span>.
          </span>
        </span>

        <span className="registerVacancyForm">
            <span className="lblForm">
                <div className="inputLogin">
                    <InputLine title="Título da vaga" type="text" placeholder="O que você busca?"/>
                </div> 
                <div className="inputLogin">
                    <ComboBox labelTitle="Causa" nomeItem1="AC" nomeItem2="DF" nomeItem3="MG" nomeItem4="RJ"
                    nomeItem5="SP" />
                </div>
            </span>

            <span className="lblForm">
                <div className="inputLogin">
                    <InputLine title="Carga Horária" type="text" placeholder="Ex: 4h semanais"/>
                </div> 
                <div className="inputLogin">
                    <InputLine title="Data Início" type="date" placeholder="DD/MM/AAAA"/>
                </div>
                <div className="inputLogin">
                    <InputLine title="Data Fim" type="date" placeholder="DD/MM/AAAA"/>
                </div>
            </span>

          <div className="inputLogin">
            <InputLine title="Descrição" type="text" placeholder="Dê uma breve descrição do trabalho"/>
          </div>
          <div className="lblForm inputLogin">
              <InputLine title="CEP" type="text"  />
              <InputLine title="Logradouro" type="text" />
          </div>
          <div className="lblForm inputLogin">
              <InputLine title="Bairro" type="text"  />
              <InputLine title="Estado" type="text" />
              <InputLine title="Cidade" type="text" />
          </div>
          <div className="btnPage">
            <Button id="btnVoltarOng" variant="contained" color="primary">Voltar</Button>
            <Button id="btnCadastrarOng" variant="contained" color="primary">Cadastrar</Button>
          </div>
        </span>

        

    
      </div>
    </section>
  );
};