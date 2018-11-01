import {AuthenticationService} from './authentication-service';
import {ConfigurationLoader} from './configuration-loader';

new ConfigurationLoader().load();
console.log(`Is Logged in ${new AuthenticationService().isLoggedIn}`);
