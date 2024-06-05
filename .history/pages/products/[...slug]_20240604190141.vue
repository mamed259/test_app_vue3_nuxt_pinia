<script setup>
import { storeToRefs } from "pinia";

const userList = useUserListStore();
const { getUserById } = storeToRefs(userList);
</script>

<template>
  <p>User 2: {{ getUserById(naradi) }}</p>
</template>
