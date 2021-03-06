
// Get the navigation to work in mobile
document.addEventListener('DOMContentLoaded', () => {
    const $navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navBurgers.length > 0) {
        $navBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});