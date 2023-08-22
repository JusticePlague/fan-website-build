<script setup>
defineProps({
  character: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div class="character">
      <h2>{{ character.name }}</h2>
      <span>{{ character.fullname }} on {{ event.date }}</span>
    </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
