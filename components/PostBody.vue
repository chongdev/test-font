<template>
  <div>
    <!-- <p>{{ $t('text1') }}</p> -->
    <!-- <span class="txt-span">text-justify</span> -->
    <p>{{ $t('text2') }}</p>
    <p>{{ $t('text3') }}</p>
    <div>
      <button type="submit" class="style1-btn button button-block">{{ $t('Share') }}</button>
    </div>
  </div>
</template>

<style>
.txt-span {
  font-size: 12px;
  color: #999;
}
.txt-span + .txt-justify {
  margin-top: 3px;
}
.txt-justify {
  text-align: justify;
}
.button {
  color: #fff;
  text-align: center;
  user-select: none;
  background-color: #0280fb;
  border: 1px solid #0280fb;
  padding: 0.375rem 0.75rem;

  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  display: block;
  width: 100%;
}
</style>
