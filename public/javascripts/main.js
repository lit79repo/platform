let blackTheme = (el) => {
    document.querySelector("body").classList.add('darkmode');
    el.onclick = removeBlackThemed;
}
let removeBlackTheme = (el) => {
    document.querySelector("body").classList.remove('darkmode');
    el.onclick = blackTheme;
} 