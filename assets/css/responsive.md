### Mobile
Cho thanh menu hien thi doc xuong
```CSS
@media (max-width: 740px) {
    #nav > li { 
        display: block;
    }
}
```
Do the #header la div co thuoc tinh overflow (an doi tuong con khi tho ra khoi doi tuong cha) default la visible (hien!) => Them thuoc tinh hidden vao #header
```CSS
#header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 46.5px;
    background-color: #000;
    z-index: 1; /* Prevent header dive into image slider */
    overflow: hidden;
}
```
An nut search
```CSS
@media (max-width: 740px) {
    #header .search-btn {
        display: none;
    }
}
```
Lam nut mobile menu hien
```HTML
<!-- Search button -->
<div class="mobile-menu-btn pull-right">
    <i class="menu-icon ti-menu"></i>
</div>
```
```CSS
#header .search-btn,
#header .mobile-menu-btn {
    padding: 0 21px;
}
#header .mobile-menu-btn:hover {
    background-color: #ccc;
}
#header .mobile-menu-btn:hover .menu-icon {
    color: #000;
}
#header .menu-icon,
#header .search-icon {
    font-size: 20px;
    line-height: 46.5px;
}
```
Lam hieu ung bat tat mobile menu
```Javascript
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
```
Auto close when clicking menu items
```JS
const menuItems = document.querySelectorAll("#nav li a[href*='#']");

for (let i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function () {
        header.style.height = null;
    }
}
```