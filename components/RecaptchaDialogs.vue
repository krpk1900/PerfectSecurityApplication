<template>
  <v-dialog v-model="privacyPolicy" width="510" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">Privacy Policy</a>
    </template>
    <v-card>
      <v-card-title class="light-blue text-h3 font-weight-black white--text">ベーグル</v-card-title>
      <v-card-subtitle class="light-blue text-body-1 font-weight-black white--text" style="margin-bottom: 10px;">
        のタイルをすべて選択してください。<br>
        すべて選択し終わったら[確認]をクリックしてください。
      </v-card-subtitle>
      <v-card-actions>
        <span class="picture-area">
          <img src="bagel1.jpg" width="150px" @click="isBagel1=!isBagel1" :class="{ selected: isBagel1}">
        </span>
        <span class="picture-area">
          <img src="dog1.jpg" width="150px" @click="isDog1=!isDog1" :class="{ selected: isDog1}">
        </span>
        <span class="picture-area">
          <img src="bagel2.jpg" width="150px" @click="isBagel2=!isBagel2" :class="{ selected: isBagel2}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <span class="picture-area">
          <img src="dog2.jpg" width="150px" @click="isDog2=!isDog2" :class="{ selected: isDog2}">
        </span>
        <span class="picture-area">
          <img src="bagel3.jpg" width="150px" @click="isBagel3=!isBagel3" :class="{ selected: isBagel3}">
        </span>
        <span class="picture-area">
          <img src="dog3.jpg" width="150px" @click="isDog3=!isDog3" :class="{ selected: isDog3}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <span class="picture-area">
          <img src="bagel4.jpg" width="150px" @click="isBagel4=!isBagel4" :class="{ selected: isBagel4}">
        </span>
        <span class="picture-area">
          <img src="dog4.jpg" width="150px" @click="isDog4=!isDog4" :class="{ selected: isDog4}">
        </span>
        <span class="picture-area">
          <img src="bagel5.jpg" width="150px" @click="isBagel5=!isBagel5" :class="{ selected: isBagel5}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <v-icon class="icon text-h3">mdi-refresh</v-icon>
        <v-icon class="icon text-h3">mdi-headset</v-icon>
        <v-icon class="icon text-h3">mdi-information-outline</v-icon>
        <v-btn class="light-blue text-body-1 font-weight-bold white--text btn" tile width="170px" height="45px">確認</v-btn>
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
  }
</style>

<script>
export default {
  data: () => ({
    privacyPolicy: true,
    isBagel1: false,
    isBagel2: false,
    isBagel3: false,
    isBagel4: false,
    isBagel5: false,
    isDog1: false,
    isDog2: false,
    isDog3: false,
    isDog4: false,
  })
}
</script>
