<template>
<div>
	<h1 class="title">All Tasks</h1>
	<input class="input" type="text" v-model="newtask" placeholder="what else to do" name="newtask">
	<button class="button" @click='addtask'>OK</button>
	<ul>
		<li v-for="task in tasks">
			<div class="content">
				{{task.description}}<input type="checkbox" v-model="task.completed">
			</div>
		</li>

	</ul>

	<h1 class="title">Incomplete Tasks</h1>
	<ul>
		<div class="content">
		<li v-for="task in incompleteTasks" v-text="task.description"></li>
		</div>
	</ul>
	<h1 class="title">Complete Tasks</h1>
	<ul>
		<div class="content">
		<li v-for="task in completeTasks" v-text="task.description"></li>
		</div>
	</ul>
</div>
</template>
<script >
export default {
		 data() {
        	return {
				tasks: [
					{description:'1. build views',completed: false},
					{description:'2. build router',completed: false},
					{description:'3. build database and backend api',completed: false},
					{description:'4. config static path for express',completed: false},
					{description:'5. config webpack to build all js file to /dist',completed: false}
				],
				newtask:'',
				data: [],
				username:''
			}
		},
		mounted() {
			this.username = sessionStorage.getItem('name');
			this.$ajax.post('http://127.0.0.1:3000/thingspage',this.$qs.stringify({
	                username : this.username
	            })).then(res=>{
	                if(res.data.code==0){
	                  console.log(res.data.ms)
	                }else{
	                	for(var i=0; i< res.data.leng; i++){
	                			this.tasks.push({description:res.data.data[i].description, completed:res.data.data[i].completed})
	                	}
	                }
	            })
		},
		computed: {
			incompleteTasks() {
				return this.tasks.filter(task => !task.completed);
			},

			completeTasks() {
				return this.tasks.filter(task => task.completed);
			}

		},
		methods: {
			addtask() {
				if(this.newtask!= '') {
					this.tasks.push({description:this.newtask,completed: false})
					this.newtask = ''

				}else{
					console.log('cant find input')
				}
			}
		}


}
</script>

</body>

</html>