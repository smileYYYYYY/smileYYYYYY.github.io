<template>	
	<div class="article">
		<Nav></Nav>
		<h2>vue引入公共的2种css的方法</h2>
		<p>加公共的css </p>
		<img src="../../assets/vue10.jpg" >
		<p>
			①在main.js中加入<span>@import '../static/css/reset.css'</span>（main.js 是我们的入口文件，主要作用是初始化vue实例并使用需要的插件；App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。所以我将router标示为App.vue的子组件。） 
		</p>			<img src="../../assets/vue11.jpg">
		<p>②在index.html中直接加 <span><link rel="stylesheet" type="text/css" href="static/css/reset.css"> </span></p>
		<img src="../../assets/vue13.jpg">

		<!-- <p>③在app.vue中直接加<span>@import '../static/css/reset.css'</span></p>
		<p>在对应的模板.vue文件中引入</p>
		<img src="../../assets/vue12.jpg"> -->

	</div>		
</template>
<script>
import Nav from '../../components/Nav.vue'
export default{
	name:'Novel1',
	data(){
		return{

		}
	},
	components:{
		Nav
	}
}
</script>
<style scoped>
</style>