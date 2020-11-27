import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/home';
import SignIn from './pages/SignIn/sign-in';
import SignUp from './pages/SignUp/sign-up';
import ProfileOng from './pages/ProfileOng/profile-ong';
import ProfileVolunteer from './pages/ProfileVolunteer/profile-volunteer';
import Vacancies from './pages/Vacancies/vacancies';
import VacancySpecific from './pages/VacancySpecific/vacancy-specific';
import VacancyRegister from './pages/VacancyRegister/vacancy-register';

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/vacancies" component={Vacancies}/>
        {/* <Route path="/vacancy/{parametro?}" component={VacancySpecific}/> */}
        <Route path="/vacancy" component={VacancySpecific}/>
        <Route path="/profile/ong" component={ProfileOng}/>
        {/* <Route path="/profile/ong/{parametro?}" component={ProfileOng}/> */}
        <Route path="/profile/volunteer/{parametro?}" component={ProfileVolunteer}/>
        <Route path="/register" component={VacancyRegister}/>
      </Switch>
    </BrowserRouter>
  );
};