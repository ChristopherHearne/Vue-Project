<script setup>
</script>

<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" />
    </div>
    <div class="get-started">
      <router-link to="/build">Get started building your first robot</router-link>
    </div>
  </div>
</template>

<style scoped>
.home{
  text-align: center;
}

.robot{
  height: 300px; 
}
</style>
