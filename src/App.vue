<template>

  <div class="elz cnnClientWrap mAuto pV48 pH24">

      <Header />

      <div v-if="dataIsReady" class="elz d-block mAuto wmx640">

        <OrderStatuses />

        <template v-if="isFinished">

          <div>ОЦЕНКА!</div>

        </template>

        <template v-else>

          <ClientTitle />

          <ClientForm />

        </template>

      </div>

  </div>

</template>

<script>
import Header from '@/components/Header.vue';
import OrderStatuses from '@/components/OrderStatuses.vue';
import ClientTitle from '@/components/ClientTitle.vue';
import ClientForm from '@/components/ClientForm.vue';


export default {
  name: 'Home',

  components: {
    Header,
    OrderStatuses,
    ClientTitle,
    ClientForm
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
