(function () {
    const openingBtn = document.querySelector(".sidebar-burger");
    const closingBtn = document.querySelector(".sidebar-close");
    const sidebar = document.querySelector(".sidebar");

    openingBtn.addEventListener("click", function () {
        sidebar.classList.add("sidebar--opened");
    });

    closingBtn.addEventListener("click", function () {
        sidebar.classList.remove("sidebar--opened");
    });

})()