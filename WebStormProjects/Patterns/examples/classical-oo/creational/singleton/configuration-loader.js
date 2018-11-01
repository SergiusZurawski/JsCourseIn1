import {authenticationServiceInstance} from './authentication-service';

export class ConfigurationLoader {
    load() {
        console.log('Loading configuration and logging in');
        console.log(`Currently ${authenticationServiceInstance().isLoggedIn}`);
        // ...
        authenticationServiceInstance().login();
    }
}
