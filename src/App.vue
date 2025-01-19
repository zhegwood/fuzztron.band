<script setup
  lang="ts">
  import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
  import type { Ref } from "vue";
  import { RouterView } from "vue-router"
  import MainHeader from "@/components/MainHeader.vue"

  const header = ref<Ref | null>(null);
  const bodyTopPadding = ref<Record<string, string>>({});

  const setTopPadding = async () => {
    await nextTick();
    if (!header.value) {
      return undefined
    }
    const height = header.value.$el.getBoundingClientRect().height;
    bodyTopPadding.value = {
      paddingTop: `${height + 16}px`
    }
  };

  onMounted(() => {
    setTopPadding();
    window.addEventListener('resize', setTopPadding);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', setTopPadding);
  })
</script>

<template>
  <div class="h-screen">
    <MainHeader ref="header" />
    <div class="container px-4 pb-8 mx-auto bg-gray-100 md:px-8" :style="bodyTopPadding">
      <RouterView />
    </div>
  </div>
</template>

<style scoped
  lang="scss"></style>
