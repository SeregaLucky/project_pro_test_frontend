import globalTypes from './globalTypes';

const closeModal = ({ isModalLogoutOpen }) => ({
  type: globalTypes.CLOSE_MODAL,
  payload: { isModalLogoutOpen },
});

export default { closeModal };
