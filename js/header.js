const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const categories = document.getElementsByClassName('category');

// menuBtn Click Event

menuBtn.addEventListener( 'click', () => {

    menuBtn.classList.toggle( 'on' );
    sideMenu.classList.toggle( 'on' );

} );

// Category Click Event

for ( let category of categories ) {

    const text = category.querySelector( '.text' );
    
    // masking text 자동화
    const textSpan = category.querySelector( '.text span' );
    const maskSpan = category.querySelector( '.mask span' );
    maskSpan.textContent = textSpan.textContent;

    text.addEventListener( 'click', ( e ) => {

        const textHeight = text.clientHeight;
        const subCategoriesHeight = category.querySelector( '.sub-categories' ).clientHeight;

        if ( category.classList.contains( 'on' ) ) {

        category.classList.remove( 'on' );
        category.style.height = textHeight + 'px';
        return;

        }

        category.classList.add( 'on' );
        category.style.height = category.clientHeight + subCategoriesHeight + 'px';
        return;

    } );

};