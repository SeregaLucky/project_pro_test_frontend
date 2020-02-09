const isAuthenticated = state => state.auth.isAuth;
const userName = state => state.auth.user.name;

export default { isAuthenticated, userName };
