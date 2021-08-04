import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: { 'update:count': null },
  methods: {
    handleCount() {
      this.$emit('update:count', this.count + 1);
    },
  },
  template: `<button type="button" @click="handleCount">{{ count }}</button>`,
});
