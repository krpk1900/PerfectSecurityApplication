<template>
  <v-dialog v-model="privacyPolicy" width="510" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">Privacy Policy</a>
    </template>
    <v-card>
      <v-card-title class="light-blue text-h3 font-weight-black white--text">ベーグル</v-card-title>
      <v-card-subtitle class="light-blue text-body-1 font-weight-black white--text" style="padding: 0 24px 5px !important;">
        のタイルをすべて選択してください。<br>
        すべて選択し終わったら[確認]をクリックしてください。<br>
        <span style="color: #dc3545 !important;" class="font-weight-bold">
          {{ wrongText }}
        </span>
      </v-card-subtitle>
      <v-card-actions style="margin-top: 5px;">
        <span class="picture-area">
          <img src="bagel1.jpg" width="150px" @click="isSelected1=!isSelected1" :class="{ selected: isSelected1}">
        </span>
        <span class="picture-area">
          <img src="dog1.jpg" width="150px" @click="isSelected2=!isSelected2" :class="{ selected: isSelected2}">
        </span>
        <span class="picture-area">
          <img src="bagel2.jpg" width="150px" @click="isSelected3=!isSelected3" :class="{ selected: isSelected3}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <span class="picture-area">
          <img src="dog2.jpg" width="150px" @click="isSelected4=!isSelected4" :class="{ selected: isSelected4}">
        </span>
        <span class="picture-area">
          <img src="bagel3.jpg" width="150px" @click="isSelected5=!isSelected5" :class="{ selected: isSelected5}">
        </span>
        <span class="picture-area">
          <img src="dog3.jpg" width="150px" @click="isSelected6=!isSelected6" :class="{ selected: isSelected6}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <span class="picture-area">
          <img src="bagel4.jpg" width="150px" @click="isSelected7=!isSelected7" :class="{ selected: isSelected7}">
        </span>
        <span class="picture-area">
          <img src="dog4.jpg" width="150px" @click="isSelected8=!isSelected8" :class="{ selected: isSelected8}">
        </span>
        <span class="picture-area">
          <img src="bagel5.jpg" width="150px" @click="isSelected9=!isSelected9" :class="{ selected: isSelected9}">
        </span>
      </v-card-actions>
      <v-card-actions>
        <v-icon class="icon text-h3">mdi-refresh</v-icon>
        <v-icon class="icon text-h3">mdi-headset</v-icon>
        <v-icon class="icon text-h3">mdi-information-outline</v-icon>
        <v-btn @click="check" class="light-blue text-body-1 font-weight-bold white--text btn" tile width="170px" height="45px">確認</v-btn>
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
    isSelected1: false,
    isSelected2: false,
    isSelected3: false,
    isSelected4: false,
    isSelected5: false,
    isSelected6: false,
    isSelected7: false,
    isSelected8: false,
    isSelected9: false,
    wrongText: '　'
  }),
  methods: {
    check () {
      console.log('aaa')
      if( this.isSelected1 && !this.isSelected2 && this.isSelected3 && !this.isSelected4 && this.isSelected5
          && !this.isSelected6 && this.isSelected7 && !this.isSelected8 && this.isSelected9) {
        this.wrongText = '　'
      } else {
        this.wrongText = '間違っています。'
      }
    }
  }
}
</script>
