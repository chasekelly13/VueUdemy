const app = Vue.createApp({
  data() {
    return {
      input: "",
      finishedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("AHHHH! Alert!");
    },
    registerInput(event) {
      this.input = event.target.value;
    },
    finishInputFunc() {
      this.finishedInput = this.input;
    },
  },
});

app.mount("#assignment");
