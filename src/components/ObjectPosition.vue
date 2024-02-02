<template>
<div class="wrapper">
  <h3>Objec-position</h3>
  <img id="object-position-1" src="/playGround.svg" alt="MDN Logo" />
</div>
</template>

<style>


.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8rem;
}

img {
  width: 100%;
  height: 300px;
  border: 1px solid black;
  background-color: silver;
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
  animation: ping-pong 3s ease infinite;
  /* animation-timing-function: var(--ease-elastic-in-out-1); */
}

</style>
