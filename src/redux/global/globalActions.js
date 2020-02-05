import globalTypes from './globalTypes';

const openModal = () => ({ type: globalTypes.SET_MODAL_OPEN_TRUE });

const closeModal = () => ({ type: globalTypes.CLOSE_MODAL });

export default { openModal, closeModal };
