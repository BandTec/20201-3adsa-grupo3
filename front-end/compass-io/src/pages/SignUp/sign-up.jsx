import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import SignUpVolunteer from './SignUpVolunteer/sign-up-volunteer';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';

// import { Container } from './styles';

export default function SignUp() {
  return (
      <div>
        <Navbar />
        <LabelWelcome />
        <SignUpVolunteer />
      </div>
    );
};