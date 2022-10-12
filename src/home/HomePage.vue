<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" />
    </div>
    <div class="get-started">
      <a href="">{{msg}}</a>
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
