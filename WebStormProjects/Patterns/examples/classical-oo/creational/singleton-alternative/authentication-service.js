let instance = null;

export class AuthenticationService {
    constructor() {
        if (instance != null) {
            return instance;
        }
        instance = this;
        this.isLoggedIn = false;
        console.log('Creating Authentication Service');
    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    static getInstance() {
        if (instance == null) {
            instance = new AuthenticationService();
        }
        return instance;
    }
}
