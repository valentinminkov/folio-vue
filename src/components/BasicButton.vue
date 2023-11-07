<script setup lang="ts">
import { type Button } from '@/types/components'
const { text, url } = defineProps<Button>()
</script>

<template>
  <a :href="url" class="button">{{ text }}</a>
</template>
