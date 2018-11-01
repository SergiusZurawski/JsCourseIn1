const characters = 'abcdefghijklmnopqrstuvwxyz 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const characterCount = characters.length;

function encode(data, shift) {
    let chars = data. split('');
    let encodedChars = chars.map(x => {
        let index = characters.indexOf(x);
        if (index === -1) {
            return x;
        }
        return characters[(index + shift + characterCount) % characterCount];
    });
    return encodedChars.join('');
}

function decode(data, shift) {
    return encode(data, -shift);
}

// Decorate the user class so setting the password
// encodes it beofre setting on the decorated object.
// Getting should also decode the password
export class PasswordEncoderUserDecorator {
}
