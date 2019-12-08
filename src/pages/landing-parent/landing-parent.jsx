import React from 'react';

import { Route } from 'react-router-dom';

import Header from '../../components/Header/header';
import Landing from '../landing/landing';
import SignIn from '../signin/signin';

const LandingParent = () => (
    <div className='landing-parent'>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route path='/signin' component={SignIn} />
    </div>
);

export default LandingParent;
