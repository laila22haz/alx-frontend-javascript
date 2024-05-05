import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
    const returnPromises = await Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(fileName)
    ]);
    //console.log(returnPromises);
    return returnPromises.map((item) => {
        return {
            status: item.status,
            value: item.value || String(item.reason)
        }
    }) 
}

export default handleProfileSignup;