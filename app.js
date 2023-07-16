const app = Vue.createApp({
  // function
  data() {
    return {
      title: "Harry Potter",
      author: "J.K. Rowling",
      date: 2001,
      age: 0,
      showBooks: true,
    };
  },
  methods: {
    changeTitle() {
      this.title =
        this.title == "Harry Potter" ? "Cursed Child" : "Harry Potter";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
app.mount("#app"); //control everthing inside the div with this ID
