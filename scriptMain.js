const pagePath = window.location.pathname;
const pageName = `${pagePath.substring(1)}`;
function navLinkActive() {
    let navItemNum = document.getElementsByClassName("nav-link");

    for (let navItem of navItemNum) {
        let itemHref = navItem.getAttribute("href");
        if (itemHref == pageName) {
            navItem.classList.add("active");
        }
    }
}

function dropdownItemActive() {
    let dropdownItemNum = document.getElementsByClassName("dropdown-item");

    for (let dropdownItem of dropdownItemNum) {
        let itemHref = dropdownItem.getAttribute("href");
        if (itemHref == pageName) {
            dropdownItem.classList.add("active");
            let travelDropdown = document.getElementById("travelDropdown");
            console.log(travelDropdown);
            travelDropdown.classList.add("active");
        }
    }
}

function waitForElement(selector, callback) {
    if (document.querySelector(selector)) {
        callback();
    } else {
        setTimeout(() => waitForElement(selector, callback), 500);
    }
}

waitForElement("#navBar", navLinkActive);
waitForElement("#navBar", dropdownItemActive);