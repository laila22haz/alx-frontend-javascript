export default (success) => 
success ? Promise.resolve({status: 200, body: 'Success'}) : 
Promise.reject(new Error('The fake API is noworking currently'));
