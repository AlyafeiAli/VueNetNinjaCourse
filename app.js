const app = Vue.createApp({
  // function
  data() {
    return {
      title: "Harry Potter",
      author: "J.K. Rowling",
      date: 2001,
      age: 0,
      showBooks: true,
      x: 0,
      y: 0,
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
    handleEvent(e) {
      console.log(e, e.type);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      // console.log(e, e.type);
    },
  },
});
app.mount("#app"); //control everthing inside the div with this ID
