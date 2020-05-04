class AuthenticationService {
    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isLogggedIn() {
        const user = sessionStorage.getItem('authenticatedUser');

        if (!user) {
            return false;
        }

        return true;
    }
}

export default new AuthenticationService();
