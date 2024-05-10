import {uploadPhoto, createUser} from './utils.js' ;

export default async function asyncUploadUser() {
    try {
        const promise_array = await Promise.all([uploadPhoto(), createUser()]);
        return {
            photo: promise_array[0],
            user: promise_array[1],
        }
        
    } catch (error) {
        return {
            photo: null,
            user: null,
        }
    }
}
