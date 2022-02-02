<template>
  <div>
    <div class="meta">
      <h1 class="meta-h1">{{style.title}}</h1>
      <div class="mb3">
        <div class="meta-label">Header:</div>
        <div>
          <div class="h1">{{style.topicTitle}}</div>
          <span>bold 600</span><br />
          <span>font-size: 24</span>
        </div>
        <div class="meta-data"></div>
      </div>

      <div class="mb3">
        <div class="meta-label">Body:</div>
        <div class="meta-h1">
          <div class="h1">{{style.bodyTitle}}</div>
          <span>Light 300</span><br />
          <span>font-size: 16</span>
        </div>
      </div>
    </div>

    <div :class="className">
      <post-header :class="`${style.className}-header`" />
      <post-body :class="`${style.className}-body`" />
    </div>
  </div>
</template>

<script>
    export default {
        props: ['style'],

        created(){
            // title', 'topicTitle', 'bodyTitle', 'className
            // this.style.
        }
    }
</script>