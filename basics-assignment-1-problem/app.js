const app = Vue.createApp({
  data() {
    return {
      myName: "Chase Kelly",
      myAge: 25,
      imageLink:
        "https://i.pinimg.com/originals/43/34/64/4334642b9fad260cc116ffae231f1e28.png",
    };
  },
  methods: {
    outputNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
    addToAge() {
      const newAge = this.myAge + 5;
      return newAge;
    },
  },
});

app.mount("#assignment");
