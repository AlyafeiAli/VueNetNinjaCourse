const app = Vue.createApp({
  // function
  data() {
    return {
      title: "Harry Potter",
      author: "J.K. Rowling",
      date: 2001,
    };
  },
});
app.mount("#app"); //control everthing inside the div with this ID
