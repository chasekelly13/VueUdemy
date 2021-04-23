const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("Submitted!");
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(arg, lastName) {
      this.name = arg.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
