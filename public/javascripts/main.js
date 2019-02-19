let blackTheme = (el) => {
        document.querySelector("body").classList.add('darkmode');
        el.onclick = removeBlackThemed;
}
let removeBlackTheme = (el) => {
        document.querySelector("body").classList.remove('darkmode');
        el.onclick = blackTheme;
}
let goFM = () => {
        alert(`
    Щоб зареєструватися просто введіть логін на сторінці яка з'явитися відразу після цих слів який ви б хотіли.
    \n
    Що б увійти просто введіть дані які ви вводили в перший раз.
    `);
        location.href = "/fm";

};
if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported');
        navigator.serviceWorker.register('/javascripts/sw.js')
                .then(function (swReg) {
                        console.log('Service Worker is registered', swReg);
                        swRegistration = swReg;
                })
                .catch(function (error) {
                        console.error('Service Worker Error', error);
                });
} else {
        console.warn('Push messaging is not supported');
        pushButton.textContent = 'Push Not Supported';
}