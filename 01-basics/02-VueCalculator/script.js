import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootAppComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      number1: 0,
      number2: 0,
      // result: 0,
      pick: null,
    };
  },
  computed: {
    result() {
      if (this.pick === 'sum') {
        return this.number1 + this.number2;
      } else if (this.pick === 'subtract') {
        return this.number1 - this.number2;
      } else if (this.pick === 'multiply') {
        return this.number1 * this.number2;
      } else if (this.pick === 'divide') {
        return this.number1 / this.number2;
      }
      return 0;
    },
  },
  // methods: {
  //   sum() {
  //     this.result = parseInt(this.number1) + parseInt(this.number2);
  //   },
  //   subtract() {
  //     this.result = this.number1 - this.number2;
  //   },
  //   multiply() {
  //     this.result = this.number1 * this.number2;
  //   },
  //   divide() {
  //     this.result = this.number1 / this.number2;
  //   },
  // },
});
const app = createApp(RootAppComponent);
const vm = app.mount('#app');
