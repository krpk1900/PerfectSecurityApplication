<template>
  <v-dialog v-model="privacyPolicy" width="520" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">Privacy Policy</a>
    </template>
    <v-card>
      <v-card-title class="light-blue text-h3 font-weight-black white--text">ベーグル</v-card-title>
      <v-card-subtitle class="light-blue text-body-1 font-weight-black white--text">
        のタイルをすべて選択してください。<br>
        すべて選択し終わったら[確認]をクリックしてください。
      </v-card-subtitle>
      <v-card-actions>
        <img src="bagel1.jpg" width="150px" class="picture">
        <img src="dog1.jpg" width="150px" class="picture">
        <img src="bagel2.jpg" width="150px" class="picture">
      </v-card-actions>
      <v-card-actions>
        <img src="dog2.jpg" width="150px" class="picture">
        <img src="bagel3.jpg" width="150px" class="picture">
        <img src="dog3.jpg" width="150px" class="picture">
      </v-card-actions>
      <v-card-actions>
        <img src="bagel4.jpg" width="150px" class="picture">
        <img src="dog4.jpg" width="150px" class="picture">
        <img src="bagel5.jpg" width="150px" class="picture">
      </v-card-actions>
      <v-card-actions>
        <v-icon class="icon text-h3">mdi-refresh</v-icon>
        <v-icon class="icon text-h3">mdi-headset</v-icon>
        <v-icon class="icon text-h3">mdi-information-outline</v-icon>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
  .picture {
    margin: 5px;
  }
  .icon {
    margin: 0 10px;
  }
</style>

<script>
export default {
  data: () => ({
    privacyPolicy: true,
  })
}
</script>
