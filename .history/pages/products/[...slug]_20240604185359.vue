<script setup>
import { storeToRefs } from "pinia";
import { useUserListStore } from "./store";

const userList = useUserListStore();
const { getUserById } = storeToRefs(userList);
// note you will have to use `getUserById.value` to access
// the function within the <script setup>
</script>

<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>
