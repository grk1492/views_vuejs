const app = new Vue({
  el:'#app',
  data:{
    errors:[],
    username:null,
    email:null,
    password:null
  },
  methods:{
    signUp:function(e) {
      if(this.username && this.email && this.password) return true;
      this.errors = [];
      if(!this.username) this.errors.push("Username required.");
      if(!this.email) this.errors.push("Email required.");
      if(!this.password) this.errors.push("Password required.");
      e.preventDefault();
    }
  }
})



const app2 = new Vue({
  el:'#app2',
  data:{
    errors:[],
    email:null,
    password:null
  },
  methods:{
    login:function(e) {
      if(this.email && this.password) return true;
      this.errors = [];
      if(!this.email) this.errors.push("E-mail required.");
      if(!this.password) this.errors.push("Password required.");
      e.preventDefault();
    }
  }
})

/*function printTime(){
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+':'+mins+':'+secs;
}
setInterval(printTime,1000);*/