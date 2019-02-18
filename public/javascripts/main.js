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
        location.href="/fm";
    
};