<template>

<div class="test-class">
<button type="button" @click="store.modal = !store.modal" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Open Modal</button>
<modal></modal>
</div>

</template>

<script setup>
import { reactive } from 'vue'
import { panelStore } from '@/stores/store'
import { useI18n } from 'vue-i18n'


import  Modal from './Modal.vue'

const { t } = useI18n();
const { locale } = useI18n({ useScope: 'global' });

const store = panelStore()


</script>


<style lang="scss">
.test-class {
  text-align: center;
}
</style>
