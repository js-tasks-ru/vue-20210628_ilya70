import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootAppComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    count() {
      this.counter++;
    },
  },
});

const app = createApp(RootAppComponent);

const vm = app.mount('#app');

window.vm = vm;
