import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from './MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      state: 'loading',
      error: null,
    };
  },

  watch: {
    meetupId() {
      this.fetchMeetup();
    },
  },

  mounted() {
    this.fetchMeetup();
  },

  methods: {
    fetchMeetup() {
      fetchMeetupById(this.meetupId).then(
        (meetup) => {
          this.meetup = meetup;
          this.state = 'success';
        },
        (error) => {
          this.state = 'error';
          this.error = error.message;
        },
      );
    },
  },

  template: `
    <div class="page-meetup">
      <ui-container v-if="state === 'loading'">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <meetup-view :meetup="meetup" v-else-if="state === 'success'"/>

      <ui-container v-else-if="state === 'error'">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
