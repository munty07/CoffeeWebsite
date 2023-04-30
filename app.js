//responsive menu
function myNav() {
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = () => {
        if (nav.style.left == "0%") {
            nav.style.left = "-100%";
            bar.classList.remove("circle");
            bar.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            nav.style.left = "0%";
            bar.classList.add("circle");
            bar.innerHTML = '<i class="far fa-times-circle"></i>';
        }
    }
}
myNav();


//change image - gallery section
let images = document.querySelectorAll(".event img");
let firstImage = document.querySelector(".image-one img");

images.forEach(image => {
    image.addEventListener("click", () => {
        let currentSrc = image.src;
        image.src = firstImage.src;
        firstImage.src = currentSrc;
    });
});


//change menu - menu section
function changeMenu() {
    const menuTitle = document.querySelector('.menu-title h2');
    // const menuItems = document.querySelectorAll('.menu1 h4');
    const menuLink = document.querySelector('.menu-link a');

    if (menuTitle.classList.contains('drinks')) {
        menuTitle.innerText = 'Time for food';
        menuTitle.classList.remove('drinks');
        menuTitle.classList.add('food');

        const menuItems = document.querySelectorAll('.menu1');

        const foodItems = [
            { img: 'img/food/cake.png', title: 'chocolate cake', price: '12 lei' },
            { img: 'img/food/burger.png', title: 'burger', price: '15 lei' },
            { img: 'img/food/croissant.png', title: 'croissant', price: '5 lei' },
            { img: 'img/food/chips.png', title: 'chips', price: '9 lei' },
            { img: 'img/food/cookie.png', title: 'cookie', price: '5 lei' },
            { img: 'img/food/hotdog.png', title: 'hotdog', price: '7 lei' },
            { img: 'img/food/pancakes.png', title: 'pancake', price: '8 lei' },
            { img: 'img/food/sandwich.png', title: 'sandwich', price: '6 lei' },
            { img: 'img/food/muffin.png', title: 'muffin', price: '5 lei' },
            { img: 'img/food/sauce.png', title: 'hot sauce', price: '4 lei' }
        ];

        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            const foodItem = foodItems[i];

            menuItem.querySelector('img').src = foodItem.img;
            menuItem.querySelector('h4').innerHTML = foodItem.title;
            menuItem.querySelectorAll('h4')[1].innerHTML = foodItem.price;
        }

        menuLink.innerText = 'View Drinks';
        menuLink.classList.remove('drinks');
        menuLink.classList.add('food');

    } else {
        menuTitle.innerText = 'Time for Coffee & Drinks';
        menuTitle.classList.remove('food');
        menuTitle.classList.add('drinks');

        const menuItems = document.querySelectorAll('.menu1');

        const drinkItems = [
            { img: 'img/drinks/latte.png', title: 'latte', price: '8 lei' },
            { img: 'img/drinks/milkshake.png', title: 'milkshake', price: '18 lei' },
            { img: 'img/drinks/americano.png', title: 'americano', price: '12 lei' },
            { img: 'img/drinks/cola.png', title: 'coca cola', price: '8 lei' },
            { img: 'img/drinks/macchiato.png', title: 'macchiato', price: '10 lei' },
            { img: 'img/drinks/lemonade.png', title: 'lemonade', price: '15 lei' },
            { img: 'img/drinks/espresso.png', title: 'espresso', price: '9 lei' },
            { img: 'img/drinks/cocktail.png', title: 'cocktail', price: '22 lei' },
            { img: 'img/drinks/cappuccino.png', title: 'cappuccino', price: '8 lei' },
            { img: 'img/drinks/tea.png', title: 'tea', price: '6 lei' }
        ];

        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            const drinkItem = drinkItems[i];

            menuItem.querySelector('img').src = drinkItem.img;
            menuItem.querySelector('h4').innerHTML = drinkItem.title;
            menuItem.querySelectorAll('h4')[1].innerHTML = drinkItem.price;
        }

        menuLink.innerText = 'View Food';
        menuLink.classList.remove('food');
        menuLink.classList.add('drinks');
    }

}