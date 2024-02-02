<script setup lang="ts">
import router from '@/router';
import startConfetti, { confettiSnow } from '@/utils/confetti';
import { onMounted } from 'vue';
 
onMounted(() => {
  startConfetti()

})
const  routerPush = (str: string) => {
  router.push({ path: `/${str}` })
}
const transformerGradient = (index: number) => {
  return `var(--gradient-${index + 1})`
}

const demoList = [
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
  {
    title: 'filter'
  },
]
</script>

<template>
<main>
  <div class="container" id="container">
    <div class="box" v-for="(item,index) in demoList"  @click="routerPush(item.title)" :style="{backgroundImage: transformerGradient(index)}" >
      <h6>filter</h6>
    </div>
  </div>
</main>
</template>
<style scoped>

body {
  font-family: system-ui,-apple-system,sans-serif;
  margin: 2em;
}

.container {
  display: grid;
  align-content: var(--var-align-content);
  justify-content: var(--var-justify-content);
  grid-template-columns: auto auto auto auto auto auto;
  gap: 10px;
  padding: .5em;
  border-radius: 3px;
}


.box {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  background-color: var(--surface-3);
  transition-property: box-shadow, transform;
  transition-duration: 350ms;
  transition-timing-function: ease;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);

  aspect-ratio: 1/1;
  border: 0.5px solid hsla(0deg, 0%, 60%, 0.5);
  color: var(--brand);

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
.box:is(:hover, :focus) {
  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
}

</style>
