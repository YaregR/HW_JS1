
let btnHide = document.querySelector('.btn-hide');
let btnShow = document.querySelector('.btn-show');
let wnd = document.querySelector('.window');


btnHide.addEventListener ('click', function (event) {
    wnd.classList.remove ('window');
    wnd.classList.add ('window-hidden');
});
    
btnShow.addEventListener ('click', function (event) {
    wnd.classList.remove ('window-hidden');
    wnd.classList.add ('window');
});

