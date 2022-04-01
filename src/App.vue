<template>

  <div class="elz cnnClientWrap mAuto pV48 pH24">

      <Header />

      <div v-if="dataIsReady" class="elz d-block mAuto wmx640">

        <Statuses />

        <template v-if="isFinished">

          <Estimation />

        </template>

        <template v-else>

          <Title />

          <Contacts />

        </template>

      </div>

  </div>

</template>

<script>
import Header     from '@/components/Header.vue';
import Statuses   from '@/components/Statuses.vue';
import Title      from '@/components/Title.vue';
import Contacts   from '@/components/Contacts.vue';
import Estimation from "@/components/Estimation";


export default {
  name: 'Home',

  components: {
    Header,
    Statuses,
    Title,
    Contacts,
    Estimation
  },

  async created() {
    const orderId = this.$store.state.orderId;
    await this.$store.dispatch('fetchOrderDetails', orderId);
    await this.$store.dispatch('fetchCustomerData', this.$store.state.orderDetails.customerSDId);
    await this.$store.dispatch('fetchConnectionStatuses');
    this.$store.state.readyState = true;
    document.getElementById('connection').classList.remove('hydraLoader');
    setInterval(()=> this.$store.dispatch('fetchOrderDetails', orderId) , 30000);
  },

  computed: {
    dataIsReady() {
      return this.$store.state.readyState;
    },

    isFinished() {
      return +this.$store.state.orderDetails.connectionStatusId === 5;
    }
  }

}
</script>

<style scoped>

</style>
