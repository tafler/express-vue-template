<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Стартовый шаблон с MVC структурой и фреймворком express на бэкенде,
      Vue, TypeScript, Stylus, Jest на фронте.</p>
    <button @click="sendAxios">Простой Axios.get запрос для проверки бэкенда</button>
  </div>
</template>

<script>
import HTTP from '@/helpers/axios';

export default {
  name: 'About',
  data() {
    return {

    };
  },
  methods: {
    sendAxios() {
      HTTP.get('getPost')
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
