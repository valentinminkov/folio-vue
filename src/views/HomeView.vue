<script setup lang="ts">
import HeroBlock from '@/components/HeroBlock.vue'
import { heroBlockDummyData } from '@/dummyData/homepage'
</script>

<template>
  <main>
    <HeroBlock
      :subtitle="heroBlockDummyData?.subtitle"
      :title="heroBlockDummyData.title"
      :button="heroBlockDummyData.button"
    />
  </main>
</template>
