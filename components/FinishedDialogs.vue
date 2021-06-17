<template>
  <v-dialog v-model="isShowDialog" width="600" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>

      <v-card-text class="light-blue font-weight-black white--text card-title" align="center">
        セキュリティの突破に<br class="br-sp">成功しました
      </v-card-text>
      <v-card-text class="text-body-1 font-weight-black" style="padding-top: 20px; font-size: 20px !important;" align="center">
        あなたは世界一堅牢な<br class="br-sp">セキュリティを突破した<br>
        <br><br>
        <span style="font-size: 100px !important;" class="light-blue--text">{{this.clearCount}}</span>
        人目の<br class="br-sp">凄腕ハッカーです。
      </v-card-text>

      <div style="text-align: center;">
        <img src="unlock.png" width="150px" >
      </div>

      <div style="text-align: center; padding-bottom: 10px;">
        <v-btn :href="shareMessage()" target="_blank" class="light-blue white--text font-weight-bold btn" x-large>
          <v-icon style="font-size: 35px; margin-right: 5px;">mdi-twitter</v-icon>Twitterでシェアする
        </v-btn>
      </div>

      <div style="text-align: center; padding-bottom: 10px;">
        <v-btn @click="send()" class="light-blue white--text font-weight-bold btn" x-large>
          はじめから
        </v-btn>
      </div>

    </v-card>
  </v-dialog>
</template>

<style>
@media screen and (max-width: 480px) {
  .card-title {
    padding-top: 20px !important;
    font-size: 27px;
    line-height: 35px;
  }
  .btn {
    text-transform: none !important;
    font-size: 22px !important;
    width: 300px;
  }
}
@media screen and (min-width: 481px) {
  .card-title {
    padding-top: 20px !important;
    font-size: 30px;
  }
  .br-sp {
    display: none;
  }
  .btn {
    text-transform: none !important;
    font-size: 25px !important;
    width: 360px;
  }
}
</style>

<script>
export default {
  data: () => ({
    isShowDialog: true,
  }),
  methods: {
    shareMessage () {
      return `https://twitter.com/share?url=https://perfectsecurityapplication.web.app/%0a&via=krpk1900_dev&related=krpk1900_dev&hashtags=世界一セキュリティが堅牢なアプリ,クソアプリ%0a&text=あなたは【世界一堅牢なセキュリティ】を突破した【${this.clearCount}】人目の凄腕ハッカーです。%0a`
    },
    send () {
      console.log('send()が呼ばれました。')
      this.$emit("restart", true);
    }
  },
  props: {
    clearCount: {
      type: Number,
      default: 1223
    },
  }
}
</script>
