import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
        const result = res.map(item => {
            return item.body || [item.firstName, item.lastName].join(' ');
        }).join(' ');
        console.log(result);
    })
    .catch(() => {
        console.log('Signup system offline');
    });
}
