<script setup lang="ts">
import BasicButton from '@/components/BasicButton.vue'
import { type HeroBlock } from '@/types/components'

const { title, subtitle, button } = defineProps<HeroBlock>()
</script>

<template>
  <div class="heroContainer">
    <h1 class="title">{{ title }}</h1>
    <h3 v-if="subtitle" class="subtitle">{{ subtitle }}</h3>
    <div v-if="button && button.text && button.url" class="buttonContainer">
      <BasicButton :url="button.url" :text="button.text" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.heroContainer {
  @include baseContainer;
  background-color: $base_color;
  .title {
    @include h1;
  }
  .subtitle {
    @include h3;
  }
}
</style>
