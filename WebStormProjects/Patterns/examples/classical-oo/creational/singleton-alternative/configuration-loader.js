import {AuthenticationService} from './authentication-service';

export class ConfigurationLoader {
    load() {
        console.log('Loading configuration and logging in');
        console.log(`Currently ${AuthenticationService.getInstance().isLoggedIn}`);
        // ...
        AuthenticationService.getInstance().login();
    }
}
