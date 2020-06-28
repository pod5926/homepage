<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card>
              <v-img
                :src="card.src"
                :lazy-src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.4)"
                height="500px"
              >
                <v-card-title v-text="card.title" :class="card.class"></v-card-title>
              </v-img>
              <template v-if="card.tag">
                <v-btn icon @click="card.show = !card.show">
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </template>
              <v-expand-transition>
                <div v-show="card.show">
                  <v-divider></v-divider>
                  <v-card-text class="text-justify text-h6" v-html="card.subtext"></v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    cards: [
      {
        class: 'display-2 font-weight-bold ml-5',
        title: 'プロフィール',
        tag: false,
        src: '/images/profile.jpg',

        flex: 12
      },
      {
        class: 'display-1 font-weight-bold ml-5',
        title: '自己PR',
        tag: true,
        src: '/images/pr.jpg',
        subtext:
          '■達成意欲<br>プログラミングの経験、基礎知識がない状態で入学し、理解ができないことが多々ありましたが、自宅で開発環境を作成し、復習、参考書を活用した自己学習のおかげで、クラス内で上位をキープすることができました。<br>訓練校で学んだ知識をベースに、自宅ではRuby、Ruby on Rails、HTML、CSSの勉強を毎日2時間継続して取り組み、自作のWEBアプリケーションを作成するなど積極的なスキルアップに取り組みました。<br><br>3月よりProgate,UdemyにてPHP,Laravelの学習。<br>6月よりUdemy教材「超Vue.js 2 完全パック - もう他の教材は買わなくてOK！ <br>(Vue Router, Vuex含む)」修了<br><br>■コミュニケーション能力<br>訓練校の卒業制作では、JSP + Java + Servlet + DB を利用したECサイトをウォーターフォール型開発で経験し、チームリーダーとして制作の進捗管理、指示しました。<br>接客業での経験をいかし、硬い空気にならないよう、積極的にチームメンバーとの情報共有、コミュニケーションを心がけました。',
        link: '',
        show: false,
        flex: 6
      },
      {
        class: 'display-1 ml-5',
        title: 'スキル',
        tag: true,
        src: '/images/git.jpg',
        subtext:
          '■東京都立城南職業能力開発センター<br>・Java,JSP<br>・DB,Oracle<br>・C<br>・HTML<br>・CSS<br><br>■独学<br>・Ruby,Ruby on Rails<br>・PHP,Laravel<br>・JavaScript,Vue.js<br>・DB,MySQL,Firestore<br><br>',
        link: 'https://github.com/pod5926',
        show: false,
        flex: 6
      }
    ]
  })
}
</script>
