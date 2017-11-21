<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link
            to="/"
            class="navbar-item">
            Adonation
          </nuxt-link>
          <div class="burger navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu navbar-end">
          <nuxt-link
            to="/"
            class="navbar-item"
            active-class="is-active"
            exact>
            Home
          </nuxt-link>
          <nuxt-link
            to="/blog"
            class="navbar-item"
            active-class="is-active">
            Blog
          </nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted: function () {
    let navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
      // Add a click event on each of them
      navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          let target = $el.dataset.target
          let $target = document.getElementById(target)
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }
}
</script>

<style>
.navbar-brand .navbar-item {
  color: #EA001E;
  font-size: 2rem;
  font-weight: bold;
}
</style>
