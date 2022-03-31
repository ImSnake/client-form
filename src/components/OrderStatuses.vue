<template>
  <div class="elz d-block mB48 mT32 lh15">
    <div class="elz d-block fn12">
      <div class="elz d-block d-flex a-X">
        <template v-for="(item, index) in statuses" :key="index">
          <div :class="+item.statusId === currentStatus ? 'sel' : ''" :title="item.description" class="elz p-rel d-flex a-X cur-help showSelOut">
            <div :class="+item.statusId === currentStatus ? styles.current.circle : +item.statusId < currentStatus ? styles.finished.circle : styles.waiting.circle"
                 class="elz p-rel d-flex a-X rRound bor2 uAspect x1y1 w48">
              <div :class="+item.statusId === currentStatus ? styles.current.icon : +item.statusId < currentStatus ? styles.finished.icon : styles.waiting.icon"
                   class="elz p-rel d-block mskBef mskBef-contain s24 cFillBef bgBef-CC" :style="`--elzMsk: url('/style/icons/${item.iconName}.svg');`"></div>
            </div>
            <div class="elz elzTriangle bordered pi-T mT8 pad1 tr-T p-abs borBef8 borAft8 brBef br-ok fn fn-primary fnL5 showSelIn"></div>
          </div>
          <div v-if="index !== statuses.length -1" :class="+item.statusId < currentStatus ? styles.finished.border : styles.waiting.border" class="elz d-block growX rRound h2 mH2"></div>
        </template>
      </div>
      <div class="elz d-block al-center">
        <div class="elz descriptionItem d-block p12 mT16 r3 bg bg-primary bgL5 br br-ok bor1">
          <div class="elz d-block fn16 fn fn-ok">{{ statusTitle }}</div>
          <div class="elz d-block fn fn-ok">{{ statusComment }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderStatuses",

  setup() {
    return {
      styles: {
        waiting: {
          circle: 'br br-primary brL-10 brLInvD',
          icon: 'fn fn-primary fnL-15 fnLInvD',
          border: 'bg bg-primary bgL-10 bgLInvD'
        },
        current: {
          circle: 'br br-ok',
          icon: 'fn fn-ok',
          border: ''
        },
        finished: {
          circle: 'br br-ok bg bg-ok',
          icon: 'fn fn-ok-t',
          border: 'bg bg-ok'
        }
      }
    }
  },

  computed: {
    currentStatus() {
      return +this.$store.state.orderDetails.connectionStatusId;
    },

    statuses() {
      return this.$store.state.statuses;
    },

    statusComment() {
      return this.$store.state.statuses.find(el => +el.statusId === this.currentStatus)?.comment;
    },

    statusTitle() {
      return this.$store.state.statuses.find(el => +el.statusId === this.currentStatus)?.description;
    },
  }
}
</script>

<style scoped>

</style>
