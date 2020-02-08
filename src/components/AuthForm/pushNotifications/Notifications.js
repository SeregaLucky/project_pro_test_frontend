import React from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.minimal.css';

const NOTIFICATIONS_ROOT = document.querySelector('#notification');

const Notifications = () =>
  createPortal(<ToastContainer />, NOTIFICATIONS_ROOT);

export default Notifications;
