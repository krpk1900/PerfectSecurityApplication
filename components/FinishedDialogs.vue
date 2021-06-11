<template>
  <v-dialog v-model="isShowDialog" width="510" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>


      <v-card-title class="light-blue text-h5 font-weight-black white--text">
        <!--v-icon class="white--text" style="margin-right: 10px;">mdi-lock-open-variant</v-icon-->
        セキュリティの突破に成功しました
      </v-card-title>
      <v-card-text class="text-body-1 font-weight-black" style="padding-top: 10px; font-size: 20px !important;">
        あなたは、世界一堅牢なセキュリティを突破した<br>
        【{{this.count}}】人目のハッカーです。
      </v-card-text>

      <div style="text-align: center;">
        <img src="unlock.png" width="150px" >
      </div>

      <div style="text-align: center; padding-bottom: 10px;">
        <v-btn :href="shareMessage()" target="_blank" style="text-transform: none" class="light-blue white--text">
          <v-icon>mdi-twitter</v-icon>Twitterでシェア
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
      return `https://twitter.com/share?url=https://sekigae.jp/%0a&via=krpk1900_dev&related=krpk1900_dev&hashtags=世界一堅牢なセキュリティ,クソアプリ%0a&text=あなたは【世界一堅牢なセキュリティ】を突破した【${this.count}】人目のハッカーです。%0a`
    },
  },
  props: {
    count: {
      type: String,
      default: '1223'
    },
  }
}
</script>
