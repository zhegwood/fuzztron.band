<script setup
  lang="ts">
  import { ref } from 'vue';

  const expanded = ref(false);
</script>
<template>
  <div class="fixed top-0 left-0 right-0 z-10 bg-white">
    <div class="flex items-center justify-center gap-4 py-2 bg-purple-300 py-sm-4 flex-nowrap">
      <div>
        <img src="@/assets/images/FuzzTV48.png" alt="TV" class="block h-12 sm:hidden tv-image" />
        <img src="@/assets/images/FuzzTV96.png" alt="TV" class="hidden h-24 sm:block lg:hidden tv-image" />
        <img src="@/assets/images/FuzzTV144.png" alt="TV" class="hidden h-36 lg:block tv-image" />
      </div>
      <div>
        <img src="@/assets/images/Fuzzlogo48.png" alt="Fuzztron" class="block h-12 sm:hidden fuzztron-image" />
        <img src="@/assets/images/Fuzzlogo96.png" alt="Fuzztron"
          class="hidden h-24 sm:block lg:hidden fuzztron-image" />
        <img src="@/assets/images/Fuzzlogo144.png" alt="Fuzztron" class="hidden h-36 lg:block fuzztron-image" />
      </div>
    </div>
    <menu class="flex items-center justify-end h-10 border-t border-b sm:hidden">
      <button type="button" class="block w-6 h-6 mr-2" @click="expanded = !expanded">
        <svg v-if="!expanded" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
          viewBox="0 0 50 50">
          <path
            d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z">
          </path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
          <path
            d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z">
          </path>
        </svg>

      </button>
    </menu>
    <ul v-if="expanded" class="flex flex-col gap-3 p-4 border-b">
      <li>
        <RouterLink :to="{ name: 'home' }" class="block text-lg hover:underline" @click="expanded = false">
          Bio
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'booking' }" class="block text-lg hover:underline" @click="expanded = false">
          Booking
        </RouterLink>
      </li>
      <!--
      <li>
        <RouterLink :to="{ name: 'music' }" class="block hover:underline" @click="expanded = false">
          Music
        </RouterLink>
      </li>
      -->
      <li>
        <RouterLink :to="{ name: 'videos' }" class="block text-lg hover:underline" @click="expanded = false">
          Videos
        </RouterLink>
      </li>
      <li>
        <a href="https://www.instagram.com/fuzztron_band/" class="block text-lg hover:underline" target="_blank"
          @click="expanded = false">
          Instagram
        </a>
      </li>
    </ul>
    <menu class="justify-center hidden py-2 border-t border-b sm:flex grow">
      <ul class="flex flex-row gap-4">
        <li>
          <RouterLink :to="{ name: 'home' }" class="hover:underline">
            Bio
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'booking' }" class="hover:underline">
            Booking
          </RouterLink>
        </li>
        <!--
        <li>
          <RouterLink :to="{ name: 'music' }" class="hover:underline">
            Music
          </RouterLink>
        </li>
        -->
        <li>
          <RouterLink :to="{ name: 'videos' }" class="hover:underline">
            Videos
          </RouterLink>
        </li>
        <li>
          <a href="https://www.instagram.com/fuzztron_band/" class="hover:underline" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </menu>
  </div>
</template>
<style scoped
  lang="scss">
  .tv-image {
    aspect-ratio: 4 / 3;
  }

  .fuzztron-image {
    aspect-ratio: 5 / 1;
  }
</style>
