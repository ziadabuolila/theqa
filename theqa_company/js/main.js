// menu
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
btnMenu.addEventListener('click', function() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
// contect
function toggleForm() {
    var form = document.querySelector('.contact-form');
    var button = document.querySelector('.btn-show');
    form.style.display = 'block';
    button.style.display = 'none';
}