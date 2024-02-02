<template>
<div class="wrapper">
  <div class="emoji" tabindex="0">🐶</div>
  <div class="emoji" tabindex="0">🐱</div>
  <div class="emoji" tabindex="0">🐢</div>
</div>
</template>

<style>
.emoji {
  font-size: 6em;
  filter: grayscale(100%);
  transition: filter 450ms ease;
}

.emoji:is(:hover, :focus) {
  filter: grayscale(0%) drop-shadow(0 8px 8px rgba(0, 0, 0, 0.5));
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
}

/* Decorative styles */
/* body {
  display: grid;
  place-items: center;
} */

</style>
