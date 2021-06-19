<template>
  <div class="background">
    <!--button type="button" @click="write(); dataCount();">送信</button-->
    <!--p v-if="isFinished">あなたは【世界一堅牢なセキュリティ】を突破した【{{ count }}】人目のハッカーです。</p-->
    <!-- ステージ1 (ベーグルと犬) -->
    <RecaptchaDialogs v-if="isShowDialogs1"
    target-name='ベーグル' stage-num='1' image-name1='bagel1.jpg' image-name2='dog1.jpg' image-name3='bagel2.jpg' image-name4='dog2.jpg'
    image-name5='bagel3.jpg' image-name6='dog3.jpg' image-name7='bagel4.jpg' image-name8='dog4.jpg' image-name9='bagel5.jpg'
    @success="isShowDialogs2 = true;" @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>
    <!-- ステージ2 (フライドチキンとラブラドードル) -->
    <RecaptchaDialogs v-if="isShowDialogs2"
    target-name='フライドチキン' stage-num='2' image-name1='chicken1.jpg' image-name2='labradoodle1.jpg' image-name3='chicken2.jpg' image-name4='labradoodle2.jpg'
    image-name5='chicken3.jpg' image-name6='labradoodle3.jpg' image-name7='chicken4.jpg' image-name8='labradoodle4.jpg' image-name9='chicken5.jpg'
    @success="isShowDialogs3 = true;" @giveUp="reset(); isGiveUp = true;">
    </RecaptchaDialogs>
    <!-- ステージ3 (マシュマロと柴犬) -->
    <RecaptchaDialogs v-if="isShowDialogs3"
    target-name='焼マシュマロ' stage-num='3' image-name1='marshmallow1.jpg' image-name2='shiba1.jpg' image-name3='marshmallow2.jpg' image-name4='shiba2.jpg'
    image-name5='marshmallow3.jpg' image-name6='shiba3.jpg' image-name7='marshmallow4.jpg' image-name8='shiba4.jpg' image-name9='marshmallow5.jpg'
    @success="isShowDialogs4 = true;" @giveUp="reset(); isGiveUp = true;">
    </RecaptchaDialogs>
    <!-- ステージ4 (ネコとアイス) -->
    <RecaptchaDialogs v-if="isShowDialogs4"
    target-name='ネコ' stage-num='4' image-name1='cat1.jpg' image-name2='ice1.jpg' image-name3='cat2.jpg' image-name4='ice2.jpg'
    image-name5='cat3.jpg' image-name6='ice3.jpg' image-name7='cat4.jpg' image-name8='ice4.jpg' image-name9='cat5.jpg'
    @success="isShowDialogs5 = true;" @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>
    <!-- ステージ5 (チワワとマフィン) -->
    <RecaptchaDialogs v-if="isShowDialogs5"
    target-name='チワワ' stage-num='5' image-name1='chihuahua1.jpg' image-name2='muffin1.jpg' image-name3='chihuahua2.jpg' image-name4='muffin2.jpg'
    image-name5='chihuahua3.jpg' image-name6='muffin3.jpg' image-name7='chihuahua4.jpg' image-name8='muffin4.jpg' image-name9='chihuahua5.jpg'
    @success="isShowDialogs6 = true;" @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>
    <!-- ステージ6 (モップとシープドッグ) -->
    <RecaptchaDialogs v-if="isShowDialogs6"
    target-name='モップ' stage-num='6' image-name1='mop1.jpg' image-name2='sheepdog1.jpg' image-name3='mop2.jpg' image-name4='sheepdog2.jpg'
    image-name5='mop3.jpg' image-name6='sheepdog3.jpg' image-name7='mop4.jpg' image-name8='sheepdog4.jpg' image-name9='mop5.jpg'
    @success="isShowDialogs7 = true;" @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>
    <!-- ステージ7 (キウイフルーツとたわし) -->
    <RecaptchaDialogs v-if="isShowDialogs7"
    target-name='キウイフルーツ' stage-num='7' image-name1='kiwi1.jpg' image-name2='tawashi1.jpg' image-name3='kiwi2.jpg' image-name4='tawashi2.jpg'
    image-name5='kiwi3.jpg' image-name6='tawashi3.jpg' image-name7='kiwi4.jpg' image-name8='tawashi4.jpg' image-name9='kiwi5.jpg'
    @success="isShowDialogs8 = true;" @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>
    <!-- ステージ8 (小峠英二とその他のスキンヘッド) -->
    <RecaptchaDialogs v-if="isShowDialogs8"
    target-name='小峠英二' stage-num='8' image-name1='kotouge1.jpg' image-name2='skinhead1.png' image-name3='kotouge2.png' image-name4='skinhead2.jpg'
    image-name5='kotouge3.jpg' image-name6='skinhead3.jpg' image-name7='kotouge4.jpg' image-name8='skinhead4.jpg' image-name9='kotouge5.png'
    @success="isShowDialogs9 = true;" @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>
    <!-- ステージ9 (スキマスイッチとその他のアフロ) -->
    <RecaptchaDialogs v-if="isShowDialogs9"
    target-name='スキマスイッチ' stage-num='9' image-name1='sukima1.jpg' image-name2='afro1.jpg' image-name3='sukima2.jpg' image-name4='afro2.jpg'
    image-name5='sukima3.jpg' image-name6='afro3.jpg' image-name7='sukima4.jpg' image-name8='afro4.jpg' image-name9='sukima5.png'
    @success="isShowDialogs10 = true;"  @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>
    <!-- ステージ10 (ふじとその他のりんご) -->
    <RecaptchaDialogs v-if="isShowDialogs10"
    target-name='ふじ' stage-num='10' image-name1='fuji1.jpg' image-name2='apple1.jpg' image-name3='fuji2.jpg' image-name4='apple2.jpg'
    image-name5='fuji3.jpg' image-name6='apple3.jpg' image-name7='fuji4.jpg' image-name8='apple4.jpg' image-name9='fuji5.jpg'
    @success="reset(); writeClearUsers(); isFinished = true;" @giveUp="reset(); isGiveUp = true">
    </RecaptchaDialogs>

    <!-- 終了ダイアログ -->
    <FinishedDialogs v-if="isFinished" :clearCount="this.clearCount" @restart="receive()"></FinishedDialogs>
    <!-- ギブアップダイアログ -->
    <GiveUpDialogs v-if="isGiveUp" :giveUpCount="this.giveUpCount" @restart="receive()"></GiveUpDialogs>

  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import RecaptchaDialogs from '~/components/RecaptchaDialogs.vue'
import FinishedDialogs from '~/components/FinishedDialogs.vue'
import GiveUpDialogs from '~/components/GiveUpDialogs.vue'
let database = firebase.database()
export default {
  componets: {
    RecaptchaDialogs,
    FinishedDialogs,
    GiveUpDialogs,
  },
  data () {
    return {
      clearCount: 0,
      giveUpCount: 0,
      isShowDialogs1: true,//true
      isShowDialogs2: false,
      isShowDialogs3: false,
      isShowDialogs4: false,
      isShowDialogs5: false,
      isShowDialogs6: false,
      isShowDialogs7: false,
      isShowDialogs8: false,
      isShowDialogs9: false,
      isShowDialogs10: false,
      isFinished: false,
      isGiveUp: false,
    }
  },
  methods: {
    // firebase
    writeClearUsers () {
      database.ref("clearUsers").push({
        id: "id",
      });
      console.log('クリアしたユーザーをデータベースに書き込みました。')
    },
    readClearUsers () {
      database.ref("clearUsers").once('value', parent => {
        this.clearCount = parent.numChildren()
        console.log(`clearCount=${this.clearCount}`)
      });
    },
    readGiveUpUsers () {
      database.ref("giveUpUsers").once('value', parent => {
        this.giveUpCount = parent.numChildren()
        console.log(`giveUpCount=${this.giveUpCount}`)
      });
    },
    reset () {
      console.log("すべてfalseにリセット")
      this.isShowDialogs1 = false;
      this.isShowDialogs2 = false;
      this.isShowDialogs3 = false;
      this.isShowDialogs4 = false;
      this.isShowDialogs5 = false;
      this.isShowDialogs6 = false;
      this.isShowDialogs7 = false;
      this.isShowDialogs8 = false;
      this.isShowDialogs9 = false;
      this.isShowDialogs10 = false;
      this.isFinished = false;
      this.isGiveUp = false;
    },
    receive () {
      console.log("受け取りました。")
      this.isShowDialogs1 = true;
      this.isShowDialogs2 = false;
      this.isShowDialogs3 = false;
      this.isShowDialogs4 = false;
      this.isShowDialogs5 = false;
      this.isShowDialogs6 = false;
      this.isShowDialogs7 = false;
      this.isShowDialogs8 = false;
      this.isShowDialogs9 = false;
      this.isShowDialogs10 = false;
      this.isFinished = false;
      this.isGiveUp = false;
    },
  },
  created: function() {
    this.readClearUsers();
    this.readGiveUpUsers();
    console.log('------------------');
    console.log('ディベロッパーツールを使うとは中々腕の立つハッカーですね！');
    console.log('ガチな攻撃は控えていただけると助かります...( ´:ω:` ) ');
    console.log('------------------');
  }
}
</script>

<style scoped>
  .background{
    height: 100vh;
    background-image: url(/background.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #292626;
  }
</style>
