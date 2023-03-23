const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const categories = document.getElementsByClassName('category');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('on');
  sideMenu.classList.toggle('on');
});

for (let category of categories) {
  category.addEventListener('click', function() {
    if (category.classList.contains('on')) {
      category.classList.remove('on');
      return;
    }

    for (let cat of categories) {
      cat.classList.remove('on');
    }
    category.classList.add('on');
  })
}