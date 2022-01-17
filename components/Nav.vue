<template>
  <div class="nav-wrap">
    <div class="nav-container">
      <div class="nav">
        <div class="nav-item">
          <NuxtLink to="/">Compare</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/style1">Style 1</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/style2">Style 2</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/style3">Style 3</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style leng="scss" scopd>
.nav-wrap {
  background: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  padding: 12px;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  right: 0;
}
.nav-container {
  /*max-width: 400px;*/
  margin: 0 auto;
}
.nav {
  display: flex;
  
  /* flex-wrap: wrap;border: 1px solid #0280fb; */
  /* border-radius: 5px; */
}
.nav-item {
   /* flex-grow: 1;
  max-width: 100%; */
  flex: 0 0 128px;
}

.nav-item a {
  text-align: center;
  display: block;
  padding: 5px 12px;
  text-decoration: none;
  border: 1px solid #0280fb;
  background-color: #fff;
  color: #0280fb;
  margin-left: -1px;
}

.nav-item:first-child a {
  /* border-left: none; */
  border-radius: 6px 0 0 6px;
}

.nav-item:last-child a {
  border-radius: 0 6px 6px 0;
}

.nav-item .nuxt-link-exact-active {
  background-color: #0280fb;
  color: #fff;
}
</style>
