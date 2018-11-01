import {User} from './user';
import {NameReverseUserDecorator} from './name-reverse-user-decorator';
import {PasswordEncoderUserDecorator} from './password-encoder-user-decorator';
import {loggingProxy} from './logging-proxy';

function outputUser(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Password: ${user.password}`);
}

let user = new User('Bob', 'Bobson', 'tiger14');

// Decorate with a logging proxy, name reverser and password encoder
let decoratedUser = user;

outputUser(user);
outputUser(decoratedUser);

decoratedUser.setFirstName('Robert');
decoratedUser.password = '16JollyRavers';
decoratedUser.login();

console.log('-------');

outputUser(user);
outputUser(decoratedUser);