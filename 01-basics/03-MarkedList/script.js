import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const RootAppComponent = defineComponent({
  name: 'Root',
  data() {
    return {
      emails,
      searchInput: '',
    };
  },
  computed: {
    searchResult() {
      const filter = this.emails.filter((el) => el.toUpperCase().includes(this.searchInput.toUpperCase()));
      if (this.searchInput.length === 0) return [];
      return filter;
    },
    markedItemsIndexes() {
      const f = [];
      for (let i = this.searchResult.length; i--; ) {
        f.push(this.emails.indexOf(this.searchResult[i]));
      }
      return f;
    },
  },
});

const app = createApp(RootAppComponent);

const vm = app.mount('#app');

window.vm = vm;

// From https://jsonplaceholder.typicode.com/comments

// Требуется создать Vue приложение
