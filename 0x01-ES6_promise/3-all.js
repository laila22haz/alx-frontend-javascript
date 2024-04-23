import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
        console.log(res.map(item => {
            return item.body || [item.firstName, item.lastName].join(' ');
        }).join(' '));
    })
    .catch((err) => {
        console.log('Signup system offline')}
    );
}
