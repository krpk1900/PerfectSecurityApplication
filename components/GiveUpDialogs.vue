<template>
  <v-dialog v-model="isShowDialog" width="600" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>

      <v-card-text class="red lighten-1 font-weight-black white--text" align="center" style="padding-top: 20px; font-size: 27px;">
        セキュリティの突破に失敗しました
      </v-card-text>
      <v-card-text class="text-body-1 font-weight-black" style="padding-top: 20px; font-size: 20px !important;" align="center">
        あなたは世界一堅牢なセキュリティに破れた<br>
        <br><br>
        <span style="font-size: 100px !important;" class="red--text text--lighten-1">{{this.giveUpCount}}</span>
        人目の負け犬ハッカーです。
      </v-card-text>

      <div style="text-align: center;">
        <img src="lock.svg" width="250px" >
      </div>

      <div style="text-align: center; padding-bottom: 10px;">
        <v-btn :href="shareMessage()" target="_blank" style="text-transform: none; font-size: 25px;" class="red lighten-1 white--text font-weight-bold" x-large>
          <v-icon style="font-size: 35px; margin-right: 5px;">mdi-twitter</v-icon>Twitterでシェアする
        </v-btn>
      </div>

      <div style="text-align: center; padding-bottom: 10px;">
        <v-btn @click="send()" style="text-transform: none; font-size: 25px;" class="red lighten-1 white--text font-weight-bold" x-large>
          はじめから
        </v-btn>
      </div>

    </v-card>
  </v-dialog>
</template>

<style>
</style>

<script>
export default {
  data: () => ({
    isShowDialog: true,
  }),
  methods: {
    shareMessage () {
      return `https://twitter.com/share?url=https://perfectsecurityapplication.web.app/%0a&via=krpk1900_dev&related=krpk1900_dev&hashtags=世界一セキュリティが堅牢なアプリ,クソアプリ%0a&text=あなたは【世界一堅牢なセキュリティ】に破れた【${this.giveUpCount}】人目の負け犬ハッカーです。%0a`
    },
    send () {
      console.log('send()が呼ばれました。')
      this.$emit("restart", true);
    }
  },
  props: {
    giveUpCount: {
      type: Number,
      default: 1900
    },
  }
}
</script>
