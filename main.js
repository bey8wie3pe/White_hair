new Vue({
  el: '#app',
  data: {
    message: '',
    count: 0
  },
  methods: {
    plus() {
      this.message = `髪を${++this.count}本抜きました。`;
    },
    minus(){
      this.message = `髪を${--this.count}本抜きました。`
    }
  }
});
