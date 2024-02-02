<script setup lang="ts">
import { onMounted } from 'vue';
import {  RouterView } from 'vue-router'
import playGround from '@/assets/playGround.svg'
import Logo from './components/icons/Logo.vue';
import Back from './components/icons/Back.vue';
import {notify} from './utils/';
import { confettiSnow } from './utils/confetti';
import router from './router';
import {useRoute} from 'vue-router';
const route = useRoute()
onMounted(() => {
  console.log(router,route);
  
  const switcher = document.querySelector('#theme-switcher')!
  const doc = document.firstElementChild!
  switcher.addEventListener('input', e =>
    setTheme((<any>e).target.value))

  const setTheme = (theme:string ) => {
    doc.setAttribute('color-scheme', theme)

  }
})
notify(playGround)
const backHome = () => {
  router.push('/')
}
</script>

<template>
  <Back class="backLogo" v-if="route.path !== '/'" @click="backHome"/>
  <Logo class="topLogo"/>
  <header>
    <Logo />
    <h3 class="brand"  @click.capture="backHome">CSS PlayGround</h3>
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
.backLogo {
  display: none;
}
.topLogo {
  display: none;
}
 header{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size-8);
  max-height: 100vh;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
  transition-property: box-shadow, transform;
  transition-duration: 350ms;
  transition-timing-function: ease;
  svg {
    position: absolute;
    left: 0;
    fill: var(--brand);
    width: var(--size-6);
    height: var(--size-6);
    opacity: 0;
    animation: var(--animation-fade-in) forwards,
      var(--animation-slide-in-up) forwards;
    animation-timing-function: var(--ease-squish-4);
  }
  #theme-switcher {
    position: absolute;
    right: 10px;
    color: var(--text-2);
  }

}
header:is(:hover, :focus) {
  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
}


form {
  display: flex;
  gap: var(--size-2);

  & > div {
    display: inline-flex;
    align-items: center;
    gap: var(--size-2);
  }
}
.brand {
  color: var(--brand);
  cursor: pointer;
  position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
@keyframes ping-pong {
  50% {
        left: 80%
    }
    0%,100% {
        left: 18%
    }
}
@media (max-width: 800px) {
  .brand {
    display: none;
  }
  header {
   margin-top: 40px;
  }
  header svg {
    display: none;
  }
  .backLogo {
    position: absolute;
    fill: var(--brand);
    width: var(--size-6);
    height: var(--size-6);
    display: block;
    opacity: 0;
    animation: var(--animation-fade-in) forwards,
    var(--animation-slide-in-up) forwards;
    animation-timing-function: var(--ease-squish-4);
  }
  .topLogo {
    position: absolute;
    fill: var(--brand);
    width: var(--size-6);
    height: var(--size-6);
    display: block;
    animation: ping-pong 3s ease infinite;
    animation-timing-function: var(--ease-elastic-in-out-1);
  }
  #theme-switcher {
    position: relative !important;
  }

}

</style>
