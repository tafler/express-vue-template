<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Стартовый шаблон с MVC структурой и фреймворком express на бэкенде,
      Vue, TypeScript, Stylus, Jest на фронте.</p>
    <button @click="sendAxios">Простой Axios.get запрос для проверки бэкенда</button>
    <br>
    <span v-if="message"> {{ message }} </span>
  </div>
</template>

<script>
import HTTP from '@/helpers/axios';

export default {
  name: 'About',
  data() {
    return {
      message: ''
    };
  },
  methods: {
    sendAxios() {
      HTTP.get('getPost')
      .then((res) => {
        this.message = `axios response: ${res.data}, status: ${res.status}`;
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
