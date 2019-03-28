
export default function(name) {
let template = `
<a-link :href="data.list[0].link">
	<div class="${name}">
		<img src="https://img.wonbao.net/wonbao-wireless/collection/collection01.png">
	</div>
</a-link>`;


let style =`
.${name}{
	background-color: orange;
}
.${name} img{
	width: 100%;
	vertical-align:middle;
}`;
	return {
		template,
		style,
	}
}
