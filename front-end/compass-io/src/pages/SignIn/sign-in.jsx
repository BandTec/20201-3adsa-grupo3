import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import LabelWelcome from '../../components/LabelWelcome/label-welcome';
import Image from '../../components/Image/image'

import './sign-in.css';
import loginImage from '../../assets/images/children-smile.jpg'

export default function SignIn() {
  return (
    <section>
      <Navbar/>
      <LabelWelcome labelText="Realize aqui o seu login"/>
      <br/>
      <Image width="720" height="480" src={loginImage}/>
    </section>
  );
};