<template>
  <div id="default-modal" v-if="store.modal" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-6xl max-h-full z-50">
          <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 min-h-[600px]">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Panel Modal
                  </h3>
                  <button type="button" @click="store.modal = false" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
              <div class="p-4 md:p-5 space-y-4">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Application runs here
                  </p>
                  <p>
                    <!-- possible to use web components inside -->
                    <!-- <example-widget></example-widget> -->
                  </p>
              </div>
          </div>
      </div>
        <div class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
  </div>

</template>

<script setup>
import { panelStore } from '@/stores/store'

const store = panelStore()
</script>


<style lang="scss">
.test-class {
  text-align: center;
}
</style>
