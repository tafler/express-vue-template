<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Interested links</h3>
    <ul>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Vue Awesome</a></li>
      <li><a href="https://expressjs.com/" target="_blank" rel="noopener">Express docs</a></li>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">Vue docs</a></li>
      <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a></li>
    </ul>
    <ul>
      <li><a href="https://bundlephobia.com/" target="_blank" rel="noopener">bundle phobia</a></li>
      <li><a href="https://www.npmtrends.com/" target="_blank" rel="noopener">npm trends</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
