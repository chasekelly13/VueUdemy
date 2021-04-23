const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.coutner = 0;
      }
    },
    //   name(value) {
    //     if (value === "") {
    //       this.fullName = "";
    //     } else {
    //       this.fullName = value + " " + this.lastName;
    //     }
    //   },
    //   lastName(value) {
    //     if (value === "") {
    //       this.fullName = "";
    //     } else {
    //       this.fullName = this.name + " " + value;
    //     }
    //   },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
