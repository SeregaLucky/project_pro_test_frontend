const userName = state => state.auth.user.name;
const isModalOpen = state => state.global.modalLogoutOpen;
export default { userName, isModalOpen };
