<template>
  <div class="nav-wrap">
    <div class="nav-container">
      <div class="nav">
        <div class="nav-item">
          <NuxtLink to="/">{{ $t('Compare') }}</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/style1">{{$t('Style')}} 1</NuxtLink>
        </div>
        <!-- <div class="nav-item">
          <NuxtLink to="/style2">Style 2</NuxtLink>
        </div>
        <div class="nav-item">
          <NuxtLink to="/style3">Style 3</NuxtLink>
        </div> -->
        <div class="nav-item">
          <NuxtLink to="/style4">{{$t('Style')}} 4</NuxtLink>
        </div>
      </div>
    </div>

    <div class="nav-controls">
      <div data-bn-type="text" class="css-1f2m600">
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
          English
        </nuxt-link>

        <nuxt-link v-if="$i18n.locale !== 'th'" :to="switchLocalePath('th')">
          ไทย
        </nuxt-link>
      </div>
      <i class="css-8bmaul"></i>
      <!-- <div data-bn-type="text" class="css-1f2m600">THB</div>
      <i class="css-8bmaul"></i> -->
      <svg
        v-if="!darkMode"
        @click="changeMode"
        class="css-5dhyy8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"
        ></path>
      </svg>
      <svg
        v-else
        @click="changeMode"
        class="css-5dhyy8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getDarkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
  data() {
    return {
      darkMode: false,
    };
  },

  methods: {
    changeMode() {
      this.darkMode = !this.darkMode;
      this.$store.dispatch("setDarkMode", this.darkMode);
    },
  },
};
</script>
