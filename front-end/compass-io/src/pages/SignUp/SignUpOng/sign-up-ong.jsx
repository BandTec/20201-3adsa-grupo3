import React from 'react';
import InputLine from "../../../components/InputLine/input-line";
import LabelTitleForm from "../../../components/LabelTitleForm/label-title-form";
import Button from '@material-ui/core/Button';
import Image from '../../../components/Image/image';
import ingOngSingup from '../../../assets/images/ing-ong-singup.jpg'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import './sign-up-ong.css';

// import { Container } from './styles';

export default function SignUp() {
  return (
    // <div>Cadastro voluntário</div>

<section>
      <div className="container">
        <span className="loginImage">
            <Image width="640" className="childrenImage" height="1100" src={ingOngSingup} />
        </span>

        <span className="textImageOng">Encontre aqui os voluntários ideais que <br/>
            <span className="yellowWord">você precisa</span>.
        </span>

        <div className="formOng">
        <form className="loginForm">
          <div className="inputInfPessoal">
           <label className="label-title">Informações Institucionais</label>
            <InputLine title="Nome da Instituição" type="text" placeholder="Ex: Sonhar Acordado"/>
            <InputLine title="CNPJ" type="text" placeholder="XX.XXX.XXX/XXXX-XX"/>
            <InputLine title="Telefone de Contato" type="text" placeholder="(XX)XXXXX-XXXX"/>
            <h3>Endereço</h3>
            <InputLine title="Logradouro" type="text" placeholder="Nome da Rua/Avenida/Alameda"/>
            <TextField id="numeroForm" type="text" label="Número" placeholder="XXXX"/>
            <InputLine id="bairroForm" title="Bairro" type="text" placeholder="Ex: Centro"/>
            <InputLine title="CEP" type="text" placeholder="XXXXX-XXX"/>
          </div>
        </form>
        
        <form className="infContaForm">
        <span>
            
          <div className="inputLogin">
          <LabelTitleForm title="Informações da Conta"/>
            <InputLine title="Email" type="text" placeholder="Ex: sonhar.acordado@email.com"/>
            <InputLine title="Senha(mínimo de 8 dígitos)" type="password" placeholder="********"/>
            <InputLine title="Confirmar Senha" type="password" placeholder="********"/>
          </div>

        </span>
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