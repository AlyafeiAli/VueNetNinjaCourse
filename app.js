const app = Vue.createApp({
  // function
  data() {
    return {
      title: "Harry Potter",
      author: "J.K. Rowling",
      date: 2001,
      age: 0,
    };
  },
  methods: {
    changeTitle() {
      this.title =
        this.title == "Harry Potter" ? "Cursed Child" : "Harry Potter";
    },
  },
});
app.mount("#app"); //control everthing inside the div with this ID
