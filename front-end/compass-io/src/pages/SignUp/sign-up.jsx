import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import SignUpVolunteer from './SignUpVolunteer/sign-up-volunteer';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import SignUpOng from './SignUpOng/sign-up-ong';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// import { Container } from './styles';

export function Rtif({boolean, ...props}) {
  const { children } = props;
  if (boolean)
      return (
              {...children}
      );
  return null;
}

export default function SignUp() {
  return (
    <div>
        <Navbar />
        <LabelWelcome labelTitle="Bem vindo ao Compass.io" labelText="Preencha o formulário para realizar o cadastro"/>
        <ToggleButtonGroup>

          <ToggleButton>Sou Voluntário</ToggleButton>
          <ToggleButton>Sou uma ONG</ToggleButton>
        </ToggleButtonGroup>
        <Rtif boolean={false}>
          <SignUpVolunteer />
        </Rtif>
        <Rtif boolean={true}>
          <SignUpOng />
        </Rtif>

      </div>
  );
};
