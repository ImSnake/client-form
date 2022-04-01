<template>
  <div @input="setRating" class="elz d-block lh15">

    <template v-for="(question, index) in $store.state.questionList" :key="index">
      <div class="elz d-block al-center mT48">
        <div class="elz d-block">
          <div class="elz d-block">{{ question.text }}</div>
        </div>
        <div class="elz d-flex a-X mT8">
          <div class="elz d-flex dir-xRev">
            <template v-for="(star, idx) in stars" :key="idx">
              <input :name="`poll${index+1}`" :id="`poll${index+1}_star${star}`" :data-question-key="index+1" :data-rating="star" class="uPollRadio" type="radio" >
              <label :for="`poll${index+1}_star${star}`" class="elz uPollIcons d-flex a-X s36 cur-pointer opAct07">
                <span class="elz uPollIcon inselected p-abs d-block mskBef s24 cFillBef bgBef-CC" style="--elzMsk: url('/style/icons/star.svg');"></span>
                <span class="elz uPollIcon hover p-abs d-block mskBef s24 cFillBef bgBef-CC fn fn-orange" style="--elzMsk: url('/style/icons/star.svg');"></span>
                <span class="elz uPollIcon selected p-abs d-block mskBef s24 cFillBef bgBef-CC fn fn-orange" style="--elzMsk: url('/style/icons/star3.svg');"></span>
              </label>
            </template>
          </div>
        </div>
      </div>
    </template>

  </div>

  <div class="elz d-flex a-X mT48">
    <input class="elz d-block al-center r3 h48 pH32 w240 cur-pointer opAct07 bg bg-ok fn fn-ok-t" type="submit" value="Отправить">
  </div>
</template>

<script>


export default {
  name: "Estimation",

  setup() {
    return {
      stars: [5,4,3,2,1]
    }
  },

  methods: {
    setRating(e) {
      console.log(e.target);
    }
  }
}
</script>

<style scoped>

</style>
