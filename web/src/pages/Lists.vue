<template>
	<div>
		<Nav></Nav>
		<Novel></Novel>
	</div>
</template>

<script>
	import Nav from '../components/Nav.vue'
	import Novel from '../components/Novel.vue'
	export default {
		name: 'Lists',
		data() {
			return {

			}
		},
		components: {
			Nav,
			Novel 
		},
		mounted: function() {
			this.demoList()
		},
		methods: {
			demoList: function() {
				$(function() {
					$("#demo .item").click(function() {
						$(this).siblings().removeClass('active_'); // 删除其他兄弟元素的样式
						$(this).addClass('active_'); // 添加当前元素的样式
					});
				});
			}

		}
	}
</script>

<style>
</style>
