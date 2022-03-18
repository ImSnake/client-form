<template>

  <div v-if="isLoaded" class="elz cnnClientWrap mAuto pV48 pH24">

      <HeaderLogo />

      <div class="elz d-block mAuto wmx640">

        <ClientProcess />

        <ClientTitle />

        <ClientForm />

      </div>

  </div>

</template>

<script>
import ClientForm from '@/components/ClientForm.vue';
import ClientProcess from '@/components/ClientProcess.vue';
import ClientTitle from '@/components/ClientTitle.vue';
import HeaderLogo from '@/components/HeaderLogo.vue';

export default {
  name: 'Home',

  components: {
    ClientForm,
    ClientProcess,
    ClientTitle,
    HeaderLogo
  },

  created() {
    this.$store.dispatch('fetchAppStates');
    this.$store.dispatch('fetchMeetingData');
    this.$store.dispatch('fetchUserData');
  },

  computed: {
    isLoaded() {
      if (this.$store.state.appStates && this.$store.state.userData && this.$store.state.meetingData) {
        document.getElementById('connection').classList.remove('hydraLoader');
        console.log(this.$store.state);
        return true;
      }
      return false;
    }
  }

}
</script>

<style scoped>

</style>
