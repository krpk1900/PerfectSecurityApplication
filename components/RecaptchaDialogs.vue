<template>
  <v-dialog v-model="isShowDialog" width="510" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="light-blue white--text">

      <v-card-title class="text-h3 font-weight-black" style="width: 440px; display: inline-block;">{{ targetName }}</v-card-title>
      <span class="font-weight-black text-h6" style="display: inline-block; width: 50px; vertical-align: top; margin-top: 10px;">({{ stageNum }}/5)</span>
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
    wrongText: '　'
  }),
  methods: {
    check () {
      if( this.isSelected1 && !this.isSelected2 && this.isSelected3 && !this.isSelected4 && this.isSelected5
          && !this.isSelected6 && this.isSelected7 && !this.isSelected8 && this.isSelected9) {
        this.wrongText = '　';
        this.isShowDialog = false;
        this.$emit('success')
      } else {
        this.wrongText = '間違っています。'
      }
    },
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
