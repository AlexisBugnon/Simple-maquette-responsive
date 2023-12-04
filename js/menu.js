const menu = {

    init:function(){
        document.querySelector('.burger-icon').addEventListener('click', menu.handleBurgerClicked);
    },

    handleBurgerClicked:function(e){
        const navElement = document.querySelector('.nav.top');
        navElement.classList.toggle('--displayed');
    },

}

document.addEventListener('DOMContentLoaded', menu.init);