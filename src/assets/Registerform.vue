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
			<button class="button is-primary" @click='register'>Submit</button>
		 </div>
	</div>
</template>
<script>
import router from './../router.js'
export default{
    data(){
        return {
          username:'',
          message:''
        }
    },
    methods:{
        register(){
        	if(this.username != ''){
	            this.$ajax.post('http://127.0.0.1:3000/register',this.$qs.stringify({
	                username : this.username
	            })).then(res=>{
	                if(res.data.code==1){
	                  sessionStorage.setItem('name',this.username);
	                  setTimeout(function(){
	                      router.push("/thingspage")
	                  },500)
	                }else{
	                  this.message = res.data.ms
	                }
	            })
	        }
	        else{
           		this.message = 'no name is here'
         	}
        }
    }
}
</script>