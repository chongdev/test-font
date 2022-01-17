<template>
  <div>
    <Nav />

    <div class="body-container compare-container">
      <div class="row">
        <div class="col">
          <Style1 />
        </div>
        <div class="col">
          <Style2 />
        </div>
        <div class="col">
          <Style3 />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300&family=IBM+Plex+Sans+Thai:wght@600&family=Sarabun:wght@300&family=Source+Sans+Pro:wght@400;600&display=swap");

*,
::after,
::before {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
}

.compare-container {
  min-width: 520px;
}

.body-container {
  width: 100%;
  padding-top: 54px;
  padding-bottom: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /*max-width: 980px;*/
}
.mb3 {
  margin-bottom: 15px;
}

.row {
  display: flex;
  

  /*flex-wrap: wrap;margin-left: -15px;*/
  margin-right: -15px;
}

.col {
  flex: 0 0 480px;
  padding-right: 15px;
}

@media (min-width: 576px){
  .col {
    /*flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    flex: 0 0 auto;
    width: auto;
    max-width: 480px;

    padding-right: 15px;
    padding-left: 15px;*/
  }
}

.style1-header {
  font-family: "IBM Plex Sans Thai", sans-serif;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.35;
}
.style1-body {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 16px;
  line-height: 1.35;
}
.style1 .button {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.style2-header {
  font-family: "IBM Plex Sans Thai", sans-serif;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.35;
}
.style2-body {
  font-family: "Sarabun", sans-serif;
  font-size: 16px;
  line-height: 1.35;
}
.style2 .button {
  font-family: "Sarabun", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.style1 span {
  font-weight: 400;
}

.meta {
  border-bottom: 1px solid #999;
  margin-bottom: 20px;
}
.meta-label {
  color: #777;
  font-size: 13px;
}
.meta .h1 {
  font-weight: 600;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}
.max-w-490 {
  max-width: 490px;
}


.style3-header {
  font-family: "IBM Plex Sans Thai", sans-serif;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.35;
}
.style3-body {
  font-family: "thongtermregular", sans-serif;
  font-size: 16px;
  line-height: 1.35;
  font-weight: normal
}
.style3 .button {
  font-family: "thongtermregular", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal
}

</style>
