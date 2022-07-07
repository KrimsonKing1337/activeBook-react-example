import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { mainSelectors } from 'store/main';

import './Achievement.scss';

export const Achievement = () => {
  const bgColor = useSelector(mainSelectors.achievementToastBgColor);

  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      closeButton={false}
      theme="colored"
      toastStyle={{ backgroundColor: bgColor }}
    />
  );
};
