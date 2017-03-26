var list = document.getElementById('list'),
    add = document.getElementById('addElem'),
    listElemNumber = document.getElementsByTagName('li');

add.addEventListener('click', function () {
    list.innerHTML += '<li><i class="fa-li fa fa-plus-square"></i>item ' + listElemNumber.length + '</li>';
});