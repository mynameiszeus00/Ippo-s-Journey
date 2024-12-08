$(".dropdown-trigger").dropdown();
document.addEventListener('DOMContentLoaded', function () {
    // Initialize dropdown
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElems, { constrainWidth: false });

    // Initialize sidenav
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
