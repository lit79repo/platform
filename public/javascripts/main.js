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

//Animation
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};
var OPTS = {
        fill: 'none',
        radius: 25,
        strokeWidth: { 50: 0 },
        scale: { 0: 1 },
        angle: { 'rand(-35, -70)': 0 },
        duration: 500,
        left: 0, top: 0,
        easing: 'cubic.out' };
      
      
      var circle1 = new mojs.Shape(_extends({},
      OPTS, {
        stroke: 'cyan' }));
      
      
      var circle2 = new mojs.Shape(_extends({},
      OPTS, {
        radius: { 0: 15 },
        strokeWidth: { 30: 0 },
        stroke: 'magenta',
        delay: 'rand(75, 150)' }));
      
      
      document.addEventListener('click', function (e) {
      
        circle1.
        tune({ x: e.pageX, y: e.pageY }).
        replay();
      
        circle2.
        tune({ x: e.pageX, y: e.pageY }).
        replay();
      
      });