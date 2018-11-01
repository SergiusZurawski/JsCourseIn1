function error() {
    console.log('Error fetching data');
}

// *** Rework to simplify with builder pattern

const base = 'http://localhost:8080/api';

// Getting hello from server
fetch(base + '/hello')
    .then((res) => res.json())
    .then((data) => {
        console.log("Replied with: " + data.message)
    })
    .catch(error);

// Posting my name
fetch(base + '/mynameis/EamonnBoyle', {method: 'POST'})
    .then((res) => res.json())
    .then((data) => {
        console.log("Replied with: " + data.message)
    })
    .catch(error);

// Putting my name
fetch(base + '/howdy', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'firstname': 'Eamonn',
        'lastname': 'Boyle'
    }})
    .then((res) => res.json())
    .then((data) => {
        console.log("Replied with: " + data.message);
    })
    .catch(error);

// Deleting my worries
fetch(base + '/worries', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify([
        'Nuclear Winter',
        'Asteroids',
        'Pickles'
    ])})
    .then((res) => res.json())
    .then((data) => {
        console.log("Replied with: " + data.message);
    })
    .catch(error);