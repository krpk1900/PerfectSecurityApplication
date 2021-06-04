<template>
  <v-dialog v-model="privacyPolicy" width="850" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <a class="leftmost-footer-item footer-item" v-bind="attrs" v-on="on" style="color: #099e9e;">Privacy Policy</a>
    </template>
    <v-card>
      <v-card-title class="headline cyan darken-1 font-weight-black white--text" style="display: block;">プライバシーポリシー
        <v-icon style="float: right;" @click="privacyPolicy = false">mdi-close</v-icon>
      </v-card-title>
      <v-card-text style="margin-top: 20px;">
        当ホームページでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。<br>
        Googleアナリティクスはデータの収集のためにCookieを使用しています。<br>
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br>
        この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Googleアナリティクスサービス利用規約</a>や
        <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">Googleポリシーと規約</a>をご覧ください。
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    privacyPolicy: true,
  })
}
</script>
