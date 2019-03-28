const fragment = {
	top: `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	<div id="app">
		<wireless
			:data="data"
			:activeIndex="activeIndex"
		/>
	</div>

	<script src="http://cdn.staticfile.org/vue/2.5.17/vue.js"></script>
	<script src="http://localhost:8080/dist/widget.js"></script>
	<!--<script src="./widget.js"></script>-->
	<script>
		var data = window.parent.project.$store.state.data;
	`,
	bottom: `
	</script>
	<script>
		var app = new Vue({
			el: '#app',
			data: {
				activeIndex: -1,
				data: data,
			},
			methods: {
				
			},
			mounted: function(){
				
			}
		})
		
	</script>
</body>
</html>`,
	getHtml(code) {
		return `${this.top}${this.bottom}`
	}
}
export default fragment;