import 'whatwg-fetch'; // let browser that hasn't supported fetch work with fetch

const onSuccess = response => response.json();
const onError = error => console.log(error); //eslint-disable-line no-console
const get = url => fetch(url).then(onSuccess, onError);

export const getUsers = () => get('users');
