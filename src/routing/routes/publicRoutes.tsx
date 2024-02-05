import { RouteObject } from 'react-router-dom';
import React from 'react';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import Home from '../../pages/public/Home/Home';

export const defaultPublicPath = '/tabs';

export const publicRoutes: RouteObject[] = [
  {
    element: <PageLayout />,
    path: '/',
    children: [
      {
        path: '/tabs/:id?',
        element: <Home />,
      },
    ],
  },
];
