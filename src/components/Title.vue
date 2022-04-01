<template>
  <div class="elz d-block al-center p16 lh15 bor1 r3 bg bg-success bgA10 br br-success">
    <div v-if="customer.name" class="elz d-block">{{ customer.name }}&nbsp;{{ customer.patronymic }},</div>
    <div class="elz d-block fn12">
      <div class="elz d-block mB16">Компания «ВВК Телеком» рада видеть Вас в числе своих клиентов!</div>

      <template v-if="meeting.responsibleName" >
        <div class="elz d-block"><b class="bold">{{ meeting.date }}</b> в <b class="bold">{{ meeting.time }}</b> к вам приедет наш инженер <b class="bold">Иванов Иван Иванович</b></div>
        <div class="elz d-block mB16">Контактный номер: {{ meeting.phone }}</div>
      </template>

      <div class="elz d-block">Для ускорения процедуры подключения отправьте нам вашу контактную информацию:</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",

  computed: {
    customer() {
      return this.$store.state.customerData;
    },
    meeting() {
      return this.$store.state.orderDetails.meetingData;
    }
  },

  methods: { }

}
</script>

<style scoped>

</style>
