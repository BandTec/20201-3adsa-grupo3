import React from 'react';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Button from '@material-ui/core/Button';
import Image from '../../../components/Image/image';
import imgOngSingup from '../../../assets/images/img-ong-singup.jpg';
import imgEyePassword from '../../../assets/images/img-eye-password.png';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import ComboBox from '../../../components/ComboBox/combo-box';

import './sign-up-ong.css';

// import { Container } from './styles';

export default function SignUp() {
  return (
    // <div>Cadastro voluntário</div>

<section>
      <div className="container">
        <span className="loginImage">
            <Image width="640" className="childrenImage" height="950" src={imgOngSingup} />
        </span>

        <span className="textImageOng">Encontre aqui os voluntários ideais que <br/>
            <span className="yellowWord">você precisa</span>.
        </span>

        <div className="formOng">
        <form className="loginForm">
          <div className="inputInfPessoal">
           <label className="label-title">Informações Institucionais</label>
          </div>

          <div className="inputInfPessoal">
            <InputLine title="Nome da Instituição" type="text" placeholder="Ex: Sonhar Acordado"/>
          </div>

          <div className="inputInfPessoal">
            <InputLine title="CNPJ" type="text" placeholder="XX.XXX.XXX/XXXX-XX"/>
          </div>

          <div className="inputInfPessoal">          
            <InputLine title="Telefone de Contato" type="text" placeholder="(XX)XXXXX-XXXX"/>
          </div>

          <div className="inputInfPessoal">
            <h3>Endereço</h3>
            <InputLine title="Logradouro" type="text" placeholder="Nome da Rua/Avenida/Alameda"/>
          </div>

          <div className="inputBairro">
            <InputLine id="numeroForm" title="Número" type="text" placeholder="XXXX"/>
            <InputLine id="bairroForm" title="Bairro" type="text" placeholder="Ex: Centro"/>
          </div>

          <div className="inputCep"> 
            <InputLine title="CEP" type="text" placeholder="XXXXX-XXX"/>
            <ComboBox labelTitle="Estado" nomeItem1="AC" nomeItem2="DF" nomeItem3="MG" nomeItem4="RJ"
            nomeItem5="SP"/>
            <ComboBox labelTitle="Cidade" nomeItem1="Guaianazes" nomeItem2="Guarulhos" nomeItem3="Mogi das Cruzes" nomeItem4="São Paulo"
            nomeItem5="Suzano"/>
          </div>

          <div className="inputInfPessoal"> 
            <ComboBox labelTitle="Causa" nomeItem1="Animais" nomeItem2="Crianças" nomeItem3="Deficientes" nomeItem4="Desempregados"
            nomeItem5="Imóveis"/>
            <Button id="btnAdd" variant="contained" color="primary">+ Adicionar Causa</Button>
          </div>

        </form>
        
        <form className="infContaForm">
            
          <div className="inputLogin">
          <LabelTitleForm title="Informações da Conta"/>
          </div>

          <div className="inputInfPessoal">
            <InputLine title="Email" type="text" placeholder="Ex: sonhar.acordado@email.com"/>
          </div>

          <div className="inputSenha">
            <InputLine title="Senha(mínimo de 8 dígitos)" type="password" placeholder="********"/>
          </div>

          <div className="inputSenha">
            <InputLine title="Confirmar Senha" type="password" placeholder="********"/>
          </div>

        </form>

        <div className="checkboxOng">
        <Checkbox></Checkbox>
        <span>Li e concordo com os <b className="blueWord">termos</b></span>
        </div>
        
        <Button id="btnVoltarOng" variant="contained" color="primary">Voltar</Button>
        <Button id="btnCadastrarOng" variant="contained" color="primary">Cadastrar</Button>

        </div>

      </div>
    </section>
  );
};