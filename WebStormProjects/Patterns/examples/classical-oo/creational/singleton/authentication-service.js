class AuthenticationService {
    constructor() {
        console.log('Creating Authentication Service');
        this.isLoggedIn = false;
    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }
}

let instance = null;

export const authenticationServiceInstance = () => {
    if (instance == null) {
        instance = new AuthenticationService();
    }
    return instance;
};
