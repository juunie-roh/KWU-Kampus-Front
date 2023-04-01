const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const categories = document.getElementsByClassName('category');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('on');
  sideMenu.classList.toggle('on');
});

console.log(categories);

let prevOnCategory;
for (const category of categories) {
  if (category.classList.contains('on')) {
    prevOnCategory = category;
    break;
  }
}

const onClickCategory = () => {
  if (category.classList.contains('on')) {
    category.classList.remove('on');
    return;
  }

  prevOnCategory.classList.remove('on');
  category.classList.add('on');
  prevOnCategory = category;

  return;
}

for (const category of categories) {
  category.addEventListener('click', onClickCategory);
};