<template>
  <div class="elz d-block mB48 mT32 lh15">
    <div class="elz d-block fn12">
      <div class="elz d-block d-flex a-X">
        <template v-for="(item, idx) in $options._timeLine" :key="idx">
          <div :class="states[idx] === 1 ? 'sel' : ''" class="elz p-rel d-flex a-X showSelOut">
            <div :class="states[idx] === 1 ? $options._states.st1.circle : states[idx] === 2 ? $options._states.st2.circle : $options._states.st0.circle"
              class="elz p-rel d-flex a-X rRound bor2 uAspect x1y1 w48">
              <div :class="states[idx] === 1 ? $options._states.st1.icon : states[idx] === 2 ? $options._states.st2.icon : $options._states.st0.icon"
                class="elz p-rel d-block mskBef mskBef-contain s24 cFillBef bgBef-CC" :style="item.icon"></div>
            </div>
            <div class="elz elzTriangle bordered pi-T mT8 pad1 tr-T p-abs borBef8 borAft8 brBef br-ok fn fn-primary fnL5 showSelIn"></div>
          </div>
          <div v-if="idx !== 'fifth'" :class="states[idx] === 2 ? $options._states.st2.border : $options._states.st0.border" class="elz d-block growX rRound h2 mH2"></div>
        </template>
      </div>
      <div class="elz d-block al-center">
        <div class="elz descriptionItem d-block p12 mT16 r3 bg bg-primary bgL5 br br-ok bor1">
          <div class="elz d-block fn16 fn fn-ok">{{ $options._timeLine[currentState].title }}</div>
          <div class="elz d-block fn fn-ok">{{ $options._timeLine[currentState].text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientProcess",

  data() {
    return {
      timer: "",
    };
  },

  _states: {
    st0: {
      circle: 'br br-primary brL-10 brLInvD',
      icon: 'fn fn-primary fnL-15 fnLInvD',
      border: 'bg bg-primary bgL-10 bgLInvD'
    },
    st1: {
      circle: 'br br-ok',
      icon: 'fn fn-ok',
      border: ''
    },
    st2: {
      circle: 'br br-ok bg bg-ok',
      icon: 'fn fn-ok-t',
      border: 'bg bg-ok'
    },
  },

  _timeLine: {
    first: {
      icon: "--elzMsk: url('/style/icons/question.svg');",
      title: 'Согласование',
      text: 'Решаем Ваши вопросы, а могли бы ведь и отдохнуть'
    },
    second:  {
      icon: "--elzMsk: url('/style/icons/cog.svg');",
      title: 'Проработка',
      text: 'Прорабатываем вашего соседа, чтобы тот не быковал'
    },
    third:  {
      icon: "--elzMsk: url('/style/icons/truck.svg');",
      title: 'Специалист в пути',
      text: 'Дождитесь нас, мы обязательно доедем'
    },
    fourth:  {
      icon: "--elzMsk: url('/style/icons/hammer-wrench.svg');",
      title: 'Ведутся работы',
      text: 'Сверлим стены Вам и Вашему соседу, возможно и вашего соседа тоже'
    },
    fifth:  {
      icon: "--elzMsk: url('/style/icons/checkmark2.svg');",
      title: 'Подключение выполнено',
      text: 'Наслаждайтесь интернетом от Наука-Связь'
    },
  },

  created() {
    const app = this;
    this.timer = setInterval(function () {
      app.$store.dispatch('fetchAppStates')
    }, 10000);
  },

  computed: {
    states() {
      return this.$store.state.appStates;
    },

    currentState() {
      let currentState = 'first';
      for (const [key, value] of Object.entries(this.states)) {
        if (value === 1) {
          currentState = key;
        }
      }
      return currentState;
    }
  },

  methods: {
    cancelAutoUpdate() {
      clearInterval(this.timer);
    }

  },

  beforeUnmount() {
    this.cancelAutoUpdate();
  }

}
</script>

<style scoped>

</style>
