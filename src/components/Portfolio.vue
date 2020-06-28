<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card :disabled="card.link !== '' ? false : true" outlined elevation="14" shaped>
              <a :href="card.link">
                <v-img
                  :src="card.src"
                  :lazy-src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="500px"
                  :href="card.link"
                >
                  <v-card-title v-text="card.title" :class="card.class"></v-card-title>
                  <v-card-text v-text="card.tag" class="subtitle-1"> </v-card-text>
                  <v-card-text v-text="card.subtext" class="body-1"> </v-card-text>
                </v-img>
              </a>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Portfolio',

  data: () => ({
    cards: [
      {
        class: 'display-2 font-weight-bold ml-5 disabled',
        title: 'ポートフォリオ',
        tag: '',
        src: '/images/home.jpg',
        link: '',
        subtext: '',
        flex: 12
      },
      {
        class: 'display-1 ml-5',
        title: 'TaskSlider',
        tag: 'Vue.js + Firebase + Vuetify',
        src: '/images/task.jpg',
        link: 'https://fir-test-2503c.web.app/',
        subtext: 'ポモドーロタイマー付きタスク管理アプリ',
        flex: 6
      },
      {
        class: 'display-1 ml-5',
        title: 'Boober',
        tag: 'Ruby on Rails + Bootstrap4 + aws',
        src: '/images/book.jpg',
        link: 'https://boober-iyefvtwh-27069184.herokuapp.com/',
        subtext: '書籍感想アプリ',
        flex: 6
      },
      {
        class: 'display-1 ml-5',
        title: 'Github',
        src: '/images/git.jpg',
        link: 'https://github.com/pod5926',
        subtext: '',
        flex: 12
      }
    ]
  })
}
</script>
