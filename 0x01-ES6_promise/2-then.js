/*
export default async (promise) => {
    try {
        await promise;
        return {status: 200, body: 'success'};
    } catch (error) {
        return new Error();
    }
    finally {
        console.log('Got a response from the API');
    }
}
*/

export default (promise) => 
    promise
        .then(() => {
            return {status: 200, body: 'success'}
        }
        )
        .catch (() => {
            return new Error();
        })
        .finally (() => {
            console.log('Got a response from the API');
});