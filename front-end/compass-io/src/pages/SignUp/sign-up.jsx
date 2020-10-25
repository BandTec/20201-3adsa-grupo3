import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import SignUpVolunteer from './SignUpVolunteer/sign-up-volunteer';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import SignUpOng from './SignUpOng/sign-up-ong';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <div>
        <Navbar />
        <LabelWelcome labelText="Preencha o formulário para realizar o cadastro"/>
        {/*<SignUpVolunteer />*/}
        <SignUpOng/>
      </div>
  );
};