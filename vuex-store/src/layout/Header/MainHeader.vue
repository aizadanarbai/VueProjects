<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">Logo</div>
      <nav class="header__navigation">
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="header__link" to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
<style scoped lang="scss">
.header {
  background: green;
  &__container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    font-size: 30px;
    color: white;
  }
  &__navigation {
    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      li {
        margin-left: 15px;
        a {
          color: #fff;
          text-decoration: none;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
