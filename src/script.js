$(document).ready(function(){
    var toggle = document.querySelector('.nav-toggle');
    var oldHeight;
    var newHeight;
    toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
        $(".header__column").toggle();
    })();
});
