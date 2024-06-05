<script setup>
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "~/store/categories";
const store = useCategoriesStore();

const userList = useUserListStore();
const { getUserById } = storeToRefs(userList);
</script>

<template>
  <p>User 2: {{ getUserById(naradi) }}</p>
</template>
