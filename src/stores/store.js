import { defineStore, createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia());

export const panelStore = defineStore({
  id: "panelStore",
  state: () => ({
    modal:false,
    lang:''
  }),

  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      if(this.counter == 0){
        return
      }
      this.counter--;
    },
  },
});
