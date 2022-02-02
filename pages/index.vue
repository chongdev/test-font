<template>
  <div>
    
    <div class="body-container compare-container">
      <div class="row">
          <!-- <div class="col" v-for="(style, i) in styles" :key="i">
            <FontWrap :style="style" />
          </div> -->
        <div class="col">
          <Style1 />
        </div>
        <!-- <div class="col">
          <Style2 />
        </div>
        <div class="col">
          <Style3 />
        </div> -->
        <div class="col">
          <Style4 />
        </div>
        <div class="col">
          <Style41 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){

      let styles = [];

      styles.push({
        title: 'Style 1',
        topicTitle: 'IBM Plex Sans Thai',
        bodyTitle: 'Bai JamJuree',
        className: 'style1',
      }) 

      return {
        styles
      }
    }
  }
</script>