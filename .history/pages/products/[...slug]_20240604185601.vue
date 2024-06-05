<template>
  <p>User 2: {{ getUserById(naradi) }}</p>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserListStore } from "./store";

const userList = useUserListStore();
const { getUserById } = storeToRefs(userList);
</script>
