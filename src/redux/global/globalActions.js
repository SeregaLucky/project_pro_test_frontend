import globalTypes from './globalTypes';

const openModal = () => ({ type: globalTypes.SET_MODAL_OPEN_TRUE });

const closeModal = ({ isModalLogoutOpen }) => ({
  type: globalTypes.CLOSE_MODAL,
  payload: { isModalLogoutOpen },
});

export default { openModal, closeModal };
