import React from 'react';
import { Jumbotron } from './JumbotronComponent';
import { Location } from './LocationComponent';
import { Merchandise } from './MerchandiseComponent';
import { Follow } from './FollowComponent';
import { Content } from './ContentComponent';

export const Home = () => {
    return (
        <>
        <Jumbotron />
        <Location />
        <Merchandise />
        <Follow />
        <Content />
        </>
      );
}