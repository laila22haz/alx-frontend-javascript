import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
    const returnPromises = await Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(fileName)
    ]);
    return returnPromises.map((item) => {
        return {
            status: item.status,
            value: item.value || item.reason
        }
    }) 
}

export default handleProfileSignup;