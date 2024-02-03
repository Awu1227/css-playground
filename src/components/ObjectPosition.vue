<template>
  <div class="wrapper">
    <h3>Object-position</h3>
    <img id="object-position-1" :src="logo" alt="MDN Logo" />
  </div>
</template>
<script setup lang="ts">
import {computed, } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import smallLog from '/dvd-32.svg'
import largeLog from '/dvd.svg'

const isSmallScreen = useMediaQuery('(max-width: 800px)')

const logo = computed(() => {
  return isSmallScreen.value ? smallLog : largeLog
})
</script>
<style>

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4rem;
  h3 {
    color: var(--brand);
    margin: 1rem 0;
  }
}

img {
  width: 80vw;
  height: 30vw;
  border: 1px solid black;
  background-color: #25255c;
  margin-right: 1em;
  object-fit: none;
}
@keyframes ping-pong {
  25% {
    object-position: 50% 0%
    }
  50% {
    object-position: 100%
    }
  75% {
    object-position: 50% 100%
  }
  0%,100% {
    object-position: 0%
  }
}
#object-position-1 {
  animation: ping-pong 10s linear infinite;
  /* animation-timing-function: var(--ease-elastic-in-out-1); */
}
</style>
