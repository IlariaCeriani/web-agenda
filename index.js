const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');


/************************SIGN UP FORM **************/

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newemail').value;
    const username = document.getElementById('newusername').value;
    const pw = document.getElementById('newpw').value;

    const user = {email, username, pw};
    let users = getLocalStorage();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    
})


/******************** LOG IN FORM *****************/

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const pw = document.getElementById('pw').value;

    let users = getLocalStorage();

    const user = users.filter((item) => {
        if(item.username === username && item.pw === pw) {
            return item
        }
    })

    console.log(user);
})


/************************* GET LOCAL STORAGE ******************** */

function getLocalStorage() {
    return localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : [];
}