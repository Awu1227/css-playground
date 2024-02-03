<template>
  <div class="wrapper">
    <h3>Filter</h3>
    <main>
      <div class="emoji" tabindex="0">🐶</div>
      <div class="emoji" tabindex="0">🍗</div>
      <div class="emoji" tabindex="0">🐢</div>
      <div class="emoji" tabindex="0">🍟</div>
      <div class="emoji" tabindex="0">🐱</div>
      <div class="emoji" tabindex="0">🌭</div>
    </main>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8rem;
  h3 {
    color: var(--brand);
  }
  main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
}
</style>
