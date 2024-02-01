<script setup lang="ts">
import { onMounted } from 'vue';
import {  RouterView } from 'vue-router'
import playGround from '@/assets/playGround.svg'
import Logo from './components/icons/Logo.vue';
import {notify} from './utils/';
onMounted(() => {
  const switcher = document.querySelector('#theme-switcher')!
const doc = document.firstElementChild!

switcher.addEventListener('input', e =>
  setTheme((<any>e).target.value))

const setTheme = (theme:string ) =>
  doc.setAttribute('color-scheme', theme)
})
notify(playGround)

</script>

<template>
  <header>
    <Logo />
    <h3 class="brand">CSS PlayGround</h3>
    <form id="theme-switcher">
    <div>
      <input type="radio" checked id="light" name="theme" value="light">
      <label for="light">Light</label>
    </div>
    <div>
      <input type="radio" id="dark" name="theme" value="dark">
      <label for="dark">Dark</label>
    </div>
    <div>
      <input type="radio" id="dim" name="theme" value="dim">
      <label for="dim">Dim</label>
    </div>
    <div>
      <input type="radio" id="grape" name="theme" value="grape">
      <label for="grape">Grape</label>
    </div>
    <div>
      <input type="radio" id="choco" name="theme" value="choco">
      <label for="choco">Choco</label>
    </div>
  </form>
  </header>
 
  <RouterView />
</template>

<style scoped>
 header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: var(--size-8);
  max-height: 100vh;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
  transition-property: box-shadow, transform;
  transition-duration: 350ms;
  transition-timing-function: ease;
  svg {
    fill: var(--brand);
    width: var(--size-6);
    height: var(--size-6);
    opacity: 0;
    animation: var(--animation-fade-in) forwards,
      var(--animation-slide-in-up) forwards;
    animation-timing-function: var(--ease-squish-4);
  }
  #theme-switcher {
    color: var(--text-2);
  }

}
header:is(:hover, :focus) {
  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
}


form {
  display: flex;
  gap: var(--size-5);

  & > div {
    display: inline-flex;
    align-items: center;
    gap: var(--size-2);
  }
}
.brand {
  color: var(--brand);
}
</style>
