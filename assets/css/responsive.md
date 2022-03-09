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
Fix bug an ngoai menu items 
```CSS
@media (max-width: 740px) {
    #nav {
        display: block;
    }
}
```
Nut mobile menu bi vang xuong duoi, do #nav chiem het chieu ngang => dung position de fix (#header co position fixed)
```CSS
#header .mobile-menu-btn {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
}
```
Cho hien mobile menu o mode mobile
```CSS
@media (max-width: 740px) {
    #header .mobile-menu-btn {
        display: block;
    }
}
```
Fix bug li cua HOME khong chiem het chieu ngang
```CSS
@media (max-width: 740px) {
    #nav > li:first-child {
        display: inline-block;
    }
}
```

Fix bug an More va khong reload page 
```JS
const menuItems = document.querySelectorAll("#nav li a[href*='#']");

for (let i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");

        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}
```
Lam hien menu items 
```CSS
@media (max-width: 740px) {
    #header {
        overflow: hidden;
    }
    #nav li a {
        padding: 1px 24px;
    }
    #nav .subnav {
        position: initial;
        background-color: #333;
    }
    #nav .subnav a {
        padding: 5px 41px;
        color: #fff;
    }
}
```
Resposive Team and Places
```CSS
@media (max-width: 740px) {
    .s-col-full {
        width: 100%;
    }
    #content .member-img {
        width: 60%;
    }
}
#content .members-list {
    margin-top: 32px; /* 48 - 16 */
}
.places-list {
    margin-top: 16px; /* 32 - 16 */
}
```
```HTML
<div class="col col-third s-col-full mt-16 text-center">
<div class="col col-third s-col-full mt-16">
```
Responsive Contact
```HTML
<div class="col col-half s-col-full contact-info">
<div class="col col-half s-col-full contact-form">

<div class="col col-half s-col-full">
    <input type="text" name="" placeholder="Name" required id="" class="form-control">
</div>

<div class="col col-half s-col-full s-mt-8">
    <input type="email" name="" placeholder="Email" required id="" class="form-control">
</div>

<input class="btn mt-16 pull-right s-full-width" type="submit" value="SEND">
```
```CSS
@media (max-width: 740px) {
    .s-full-width,
    .s-col-full {
        width: 100% !important;
    }
    .s-mt-8 {
        margin-top: 8px !important;
    }
    .contact-form {
        margin-top: 16px;
    }
}
```
Review UX/UI, reponsive Tablet & Mobile
```CSS
@media (max-width: 1023px) {
    #nav .subnav a {
        padding: 5px 12px;
    }

    .btn {
        padding: 16px;
    }

    .contact-info {
        line-height: 2;
    }

    .contact-form .form-control {
        padding: 16px;
        font-size: 16px;
    }

    .contact-submit-btn {
        font-size: 16px;
    }

    .socials-list {
        font-size: 48px;
    }

    #footer .socials-list a {
        margin: 0 8px;;
    }

    #footer .copyright a {
        padding: 12px 0;
        display: inline-block;
    }
}
```
```HTML
<p><i class="ti-mobile"></i>Phone: <a href="tel:+00 151515">+00 151515</a></p>
<p><i class="ti-email"></i>Email: <a href="mailto:mail@mail.com"></a>mail@mail.com</p>
<input class="btn contact-submit-btn mt-16 pull-right s-full-width" type="submit" value="SEND">
```
Fix bugs
Text tren banner kho nhin
```CSS
#slider .text-description {
    text-shadow: 0 0  1px #000;
}
```
Sua file tinh thanh link tuong doi
```CSS
#slider {
    background: url("../img/slider/slider1.jpg") top center / cover no-repeat;
}
```
Dung don vi em cho Media queries

