<template>
  <v-dialog v-model="isShowDialog" width="510" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="light-blue white--text">

      <v-card-title class="text-h3 font-weight-black" style="width: 410px; display: inline-block;">{{ targetName }}</v-card-title>
      <span class="font-weight-black text-h6" style="display: inline-block; width: 80px; vertical-align: top; margin-top: 10px;">({{ stageNum }}/10)</span>
      <v-card-subtitle class="text-body-1 font-weight-black white--text" style="padding: 0 24px 5px !important;">
        のタイルをすべて選択してください。<br>
        すべて選択し終わったら[確認]をクリックしてください。<br>
        <span style="color: #dc3545 !important;" class="font-weight-bold">
          {{ wrongText }}
        </span>
      </v-card-subtitle>
      </div>

      <v-card-actions style="margin-top: 5px;">
        <span class="picture-area">
          <img :src="imageName1" width="150px" @click="isSelected1=!isSelected1" :class="{ selected: isSelected1}">
        </span>
        <span class="picture-area">
          <img :src="imageName2" width="150px" @click="isSelected2=!isSelected2" :class="{ selected: isSelected2}">
        </span>
        <span class="picture-area">
          <img :src="imageName3" width="150px" @click="isSelected3=!isSelected3" :class="{ selected: isSelected3}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <span class="picture-area">
          <img :src="imageName4" width="150px" @click="isSelected4=!isSelected4" :class="{ selected: isSelected4}">
        </span>
        <span class="picture-area">
          <img :src="imageName5" width="150px" @click="isSelected5=!isSelected5" :class="{ selected: isSelected5}">
        </span>
        <span class="picture-area">
          <img :src="imageName6" width="150px" @click="isSelected6=!isSelected6" :class="{ selected: isSelected6}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <span class="picture-area">
          <img :src="imageName7" width="150px" @click="isSelected7=!isSelected7" :class="{ selected: isSelected7}">
        </span>
        <span class="picture-area">
          <img :src="imageName8" width="150px" @click="isSelected8=!isSelected8" :class="{ selected: isSelected8}">
        </span>
        <span class="picture-area">
          <img :src="imageName9" width="150px" @click="isSelected9=!isSelected9" :class="{ selected: isSelected9}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" class="icon text-h3">mdi-refresh</v-icon>
          </template>
          <span>ヒント：前問の解答との配置関係</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" class="icon text-h3">mdi-headset</v-icon>
          </template>
          <span>諦める場合ロボットとみなします。</span>
        </v-tooltip>
        <!--v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" class="icon text-h3">mdi-information-outline</v-icon>
          </template>
          <span>このアプリについて</span>
        </v-tooltip-->
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-dialog v-model="isShowPolicy" width="600" hide-overlay>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" class="icon text-h3">mdi-information-outline</v-icon>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2 font-weight-black" style="display: block;">このアプリについて
                    <v-icon style="float: right;" @click="isShowPolicy = false">mdi-close</v-icon>
                  </v-card-title>
                  <v-card-text style="margin-top: 20px;">
                    1.このアプリは<a href="https://www.google.com/recaptcha/about/" target="_blank" rel="noopener noreferrer">Google reCAPTCHA</a>のパロディであり、
                    <a href="https://www.google.com/recaptcha/about/" target="_blank" rel="noopener noreferrer">本家reCAPTCHA</a>とは関係ありません。<br>
                    2.このアプリでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用し、データの収集のためにCookieを使用しています。
                    この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
                    この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Googleアナリティクスサービス利用規約</a>や
                    <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">Googleポリシーと規約</a>をご覧ください。<br>
                    3.このアプリで使用しているコンテンツは
                    <a href="https://twitter.com/KYSdane/status/1196084961289261058?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1196084961289261058%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2FKYSdane2Fstatus2F1196084961289261058widget%3DTweet" target="_blank" rel="noopener noreferrer">@KYSdaneさんの投稿</a>・
                    <a href="https://twitter.com/marugotoaomori/status/1364772606650572802?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1364772606650572802%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Fmarugotoaomori2Fstatus2F1364772606650572802widget%3DTweet" target="_blank" rel="noopener noreferrer">@marugotoaomoriさんの投稿</a>・
                    <a href="https://front-row.jp/_ct/17135189" target="_blank" rel="noopener noreferrer">FRONTROWの記事</a>を参考に作成させていただきました。<br>
                    4.何かお気づきの点がございましたら、<a href="https://twitter.com/krpk1900_dev" target="_blank" rel="noopener noreferrer">@krpk1900_dev</a>までご連絡ください。
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </template>
          <span>このアプリについて</span>
        </v-tooltip>

        <v-btn @click="giveUp(); writeGiveUpUsers();" class="light-blue text-body-1 font-weight-bold white--text btn" tile width="100px" height="45px">諦める</v-btn>
        <v-btn @click="check" class="light-blue text-body-1 font-weight-bold white--text btn" tile width="150px" height="45px">確認</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
  .icon {
    margin: 0 10px;
  }
  .btn {
    margin: 0 0 0 auto;
  }
  .selected {
    opacity: 0.7;
  }
  .picture-area {
    display: inline-block;
    width: 150px;
    height: 150px;
    margin: -5px 5px;
    background-color: royalblue;
    cursor: pointer;
  }
</style>

<script>
import firebase from '@/plugins/firebase'
let database = firebase.database()
export default {
  data: () => ({
    isShowDialog: true,
    isSelected1: false,
    isSelected2: false,
    isSelected3: false,
    isSelected4: false,
    isSelected5: false,
    isSelected6: false,
    isSelected7: false,
    isSelected8: false,
    isSelected9: false,
    wrongText: '　',
    isShowPolicy: false,
    giveUpCount: 0,
  }),
  methods: {
    check () {
      if( this.isSelected1 && !this.isSelected2 && this.isSelected3 && !this.isSelected4 && this.isSelected5
          && !this.isSelected6 && this.isSelected7 && !this.isSelected8 && this.isSelected9) {
        this.wrongText = '　';
        this.isShowDialog = false;
        this.$emit('success')
      } else {
        this.wrongText = '間違っています。ヒント：左下のアイコン'
      }
    },
    giveUp () {
      this.isShowDialog = false;
      this.$emit('giveUp')
    },
    writeGiveUpUsers () {
      database.ref("giveUpUsers").push({
        id: "id",
      });
      console.log('ギブアップしたユーザーをデータベースに書き込みました。')
    },
    /*readGiveUpUsers () {
      database.ref("giveUpUsers").once('value', parent => {
        this.giveUpCount = parent.numChildren();
        console.log(`RecaptchaDialogsのgiveUpCountは${this.giveUpCount}`)
      });
      this.$emit('giveUpCount', this.giveUpCount)
      //console.log(`RecaptchaDialogsのgiveUpCountは${this.giveUpCount}`)
    },*/
  },
  props: {
    targetName: {
      type: String,
      default: 'エラーが起きてます'
    },
    stageNum: {
      type: String,
      default: '1'
    },
    imageName1: {
      type: String,
      default: 'error.jpg'
    },
    imageName2: {
      type: String,
      default: 'error.jpg'
    },
    imageName3: {
      type: String,
      default: 'error.jpg'
    },
    imageName4: {
      type: String,
      default: 'error.jpg'
    },
    imageName5: {
      type: String,
      default: 'error.jpg'
    },
    imageName6: {
      type: String,
      default: 'error.jpg'
    },
    imageName7: {
      type: String,
      default: 'error.jpg'
    },
    imageName8: {
      type: String,
      default: 'error.jpg'
    },
    imageName9: {
      type: String,
      default: 'error.jpg'
    },
  }
}
</script>
