<script setup lang="ts"></script>

<template>
  <div class="greetings">
    <h1 class="green">You'r books!</h1>
    <h3>
      This project is built using <br />
      <a href="#" target="_blank" rel="noopener">Vue 3</a> and
      <a href="#" target="_blank" rel="noopener">Laravel 10</a>. In a short time?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
