<script setup lang="ts">
const fnInside = () => {
  console.log('fnInside')
}

const fnOutside = () => {
  fnInside()
}
</script>

<template>
  <div />
</template>
