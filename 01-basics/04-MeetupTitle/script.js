import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const fetchMeetupById = (meetupId) => {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
};

const RootAppComponent = defineComponent({
  name: 'MeetupTitle',
  data() {
    return {
      id: 0,
      meetupTitle: '',
    };
  },
  watch: {
    id(meetupId) {
      fetchMeetupById(meetupId).then((meetup) => {
        this.meetupTitle = meetup.title;
      });
    },
  },
  methods: {
    // showTitle(number) {
    //   this.fetchMeetupById(number).then((meetup) => {
    //     this.meetupTitle = meetup.title;
    //   });
    // },
  },
});

const app = createApp(RootAppComponent);

const vm = app.mount('#app');

window.vm = vm;

// Требуется создать Vue приложение
