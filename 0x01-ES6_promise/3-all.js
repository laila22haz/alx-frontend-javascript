import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    const upload = uploadPhoto();
    const create = createUser();
    Promise.all([upload, create])
    .then((res) => {
        console.log(res.map(item => {
            return item.body || [item.firstName, item.lastName].join(' ');
        }).join(' '));
    })
    .catch((err) => {
        console.log('Signup system offline')}
    );
}
