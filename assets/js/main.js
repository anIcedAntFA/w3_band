// Lấy ra thẻ button mà user click lên
const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add("open");
}

// Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function hideBuyTickets() {
    modal.classList.remove("open");
}

// Lặp qua từng thẻ button và lắng nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showBuyTickets);
}

// Nghe hành vi click vào button close
modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function () {
    event.stopPropagation();
});

// Mobile
// Open/Close mobile menu
const header = document.getElementById("header");
const mobileMenu = document.getElementById("js-mobile-menu");
const headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    let isClosed = header.clientHeight === headerHeight;

    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

// Auto close when clicking menu items
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