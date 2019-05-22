<template>
	<div class="box">
		<Nav></Nav>
		<form action="" >
			<ul>
				<li class="item0">
					<lable for="userName">账号：</lable>
				</li>
				<li class="item1">
					<el-input placeholder="请输入内容" v-model="input" clearable id="userName"></el-input>
				</li>
			</ul>
			<ul>
				<li class="item0">
					<lable for="psd">密码：</lable>
				</li>
				<li class="item1">
					<el-input placeholder="请输入密码" v-model="input1" show-password id="psd"></el-input>
				</li>
			</ul>
			<el-row>
				 <el-checkbox v-model="checked">记住密码</el-checkbox>
				<el-button type="success" plain>注册</el-button>
				<el-button type="success" plain>登录</el-button>
			</el-row>
		</form>
		
	</div>
</template>
<script>
	import Nav from '../components/Nav.vue'
	export default {
		name:'Login',
		data() {
			return {
				input:'',
				input1:'',
				 checked: true
			}
		},
		components:{
			Nav
		}
	}
</script>
<style scoped>
	.box{
		padding: 100px 30px 0 0;
	}
	input {
		border: 1px solid #333333;
	}

	ul {
		margin-bottom: 50px;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		
	}
	li{
		list-style: none;
		flex: auto;
		-webkit-flex: auto;
	}
/*        背景动画         */
</style>
