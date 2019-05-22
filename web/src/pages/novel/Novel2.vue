	<template>
		<div class="article">
			<Nav></Nav>
			<h2>js获取当前时间</h2>
			<p>1、引入jquery(前面文章有介绍)</p>
			<P>2、引入bootstrap</P>
			<P>安装bootstrap，使用命令<span>npm install bootstrap --save-dev</span></P>
			<P>安装成功后，能够在package.json文件夹中看到bootstrap这个模块。这时候需要在main.js中添加如下内容：</P>
			<P><span>import 'bootstrap/dist/css/bootstrap.min.css'</span></P>
			<P><span>import 'bootstrap/dist/js/bootstrap.min'</span></P>
		</div>			
	</template>
	<script>
import Nav from '../../components/Nav.vue'
	export default{
		name:'Novel2',
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