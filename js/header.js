const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const categories = document.getElementsByClassName('category');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('on');
  sideMenu.classList.toggle('on');
});

// let prevOnCategory;

for (const category of categories) {
  category.addEventListener('click', function() {
    if (category.classList.contains('on')) {
      category.classList.remove('on');
      category.style.height = category.querySelector('.text').clientHeight + 'px';
      return;
    }

    // if (prevOnCategory) {
    //   prevOnCategory.classList.remove('on');
    //   prevOnCategory.style.height = prevOnCategory.querySelector('.text').clientHeight + 'px';
    // }

    category.classList.add('on');
    category.style.height = category.clientHeight + category.querySelector('.sub-categories').clientHeight + 'px';
    // prevOnCategory = category;
  
    return;
  });
};