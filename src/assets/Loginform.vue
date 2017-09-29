<template>
	<div class="field">
		<label class="label">Username</label>
		<div class="control has-icons-left has-icons-right">
		<input class="input is-success" type="text" v-model="username" placeholder="Your name please" name="username">
		<span class="icon is-small is-left">
			<i class="fa fa-user"></i>
		</span>
		<span class="icon is-small is-right">
			<i class="fa fa-check"></i>
		</span>
		</div>
		<div class="control">
      <p>{{message}}</p>
			<button class="button is-primary" @click='login'>Submit</button>
		 </div>
	</div>
</template>
<script>
import router from './../router.js'
export default {
    data(){
      return {
        username:'',
        message:''
      }
    },
    // mounted(){
    //   if(sessionStorage.getItem('name')){
    //     this.$router.push("/thingspage")
    //   }
    // },
    methods:{
      login(){
         if(this.username!=''){
              this.$ajax.post('http://127.0.0.1:3000/login',this.$qs.stringify({
                    username : this.username
                })).then(res=>{
                    if(res.data.code==1){
                      sessionStorage.setItem('name',this.username);
                      setTimeout(function(){
                          router.push("/thingspage")
                      },500)
                    }else{
                      this.message = "go to new user page to get your name in."
                    }
                })
         }else{
           this.message = 'who are you';
         }
      }
    }
}
</script>