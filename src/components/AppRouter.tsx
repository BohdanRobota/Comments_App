import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, RouterNames } from '../router/index';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} Component={route.component} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouterNames.NOT_FOUND} replace />} />
    </Routes>
  );
};
export default AppRouter;
