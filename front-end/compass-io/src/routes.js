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
        <Route path="/:userId" exact component={Home}/>
        <Route path="/:userId/signin" component={SignIn}/>
        <Route path="/:userId/signup" component={SignUp}/>
        <Route path="/:userId/vacancies/" component={Vacancies}/>
        <Route path="/:userId/register" component={VacancyRegister}/>
        <Route path="/:userId/vacancy/:vacancyId" component={VacancySpecific}/>
        <Route path="/:userId/profile/ong/:profileId" component={ProfileOng}/>
        <Route path="/:userId/profile/volunteer/:profileId" component={ProfileVolunteer}/>
      </Switch>
    </BrowserRouter>
  );
};