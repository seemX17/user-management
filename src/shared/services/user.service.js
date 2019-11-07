    export function getUsers(query) {
        return new Promise((resolve, reject) => {
            let storageData = localStorage.getItem('users');
            resolve(storageData);
        });
    }

    export function deleteUser(userId) {
        return new Promise((resolve, reject) => {
            let storedData = localStorage.getItem('users');
            let userArr = JSON.parse(storedData);
            userArr.splice(userId-1, 1);
            localStorage.setItem('users',JSON.stringify(userArr));
            resolve(userArr);
        });
    }

    export function addUser(userData) {
        return new Promise((resolve, reject) => {
            let storageData = localStorage.getItem('users');
            let userArr = JSON.parse(storageData);
            userArr.push(userData);
            localStorage.setItem('users',JSON.stringify(userArr));
            resolve(userArr);
        });
        
    }
