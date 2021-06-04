<template>
  <v-dialog v-model="privacyPolicy" width="500" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">Privacy Policy</a>
    </template>
    <v-card>
      <v-card-title class="light-blue text-h4 font-weight-black white--text">スキマスイッチ</v-card-title>
      <v-card-subtitle class="light-blue font-weight-black white--text">のタイルをすべて選択してください</v-card-subtitle>
      <v-card-text>
        aaa
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
