<template>
    <div class="chongdev" :class="darkMode&&`dark-mode`">
        <Nav />
        <nuxt />
    </div>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },

  data() {

    return {

    }
  }
};
</script>