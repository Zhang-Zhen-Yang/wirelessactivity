const getStyle = (obj)=>{
	let {
		bgBody,
		bgBlock,
		bgBtn,
		bgLight,
		colorPrice,
		colorPrevPrice,
		colorLight,
		colorBorder,
		colorTitle,
	} = obj || {};
	if(!obj){
		return '';
	}
		
	let result = `
.wireless{
	background-color:${bgBody};
}
.color-price{
	color: ${colorPrice};
}
.color-prev-price{
	color: ${colorPrevPrice};
}
.bg-theme{
	background-color: ${bgBtn};
}
.bg-block{
	background-color: ${bgBlock};
}
.border-theme{
	border:1px solid ${colorBorder};
}
.goods-title{
	color: ${colorTitle};
}

/*单列宝贝---------------------------------*/
.one-row{

}
.one-row .price-block:after{
	background-color: ${bgBtn}!important;
}

/* 双列宝贝------------------------------ */
.two-row{

}
.two-row .price-block:after{
	background-color: ${bgBtn};
	color: white;
}
/* 九宫格宝贝 ----------------------------*/
.three-row .goods-title{
	/* color: white!important;*/
}
.goods-title-bg{

}

/*左右图文-------------------------------*/
.one-row-horizontal .buy{
	/*background-color: rgb(0, 255, 13);*/
}
.one-row-horizontal .price{
	/*color: orange;*/
}
.one-row-horizontal .pre-price{
	/*color: pink;*/
}
.one-row-horizontal .buy:after{
	content: '立即购买'!important;
}

/*倒时计 */
.count-down{

}



/*海报*/
.poster{

}

/*轮播*/
.swipe{

}

/*优惠券*/
.coupon{
	
}
.coupon-list-item:after{
	background-color: ${bgBtn}!important;
}

/* 爆款推荐*/
.hot-item{

}
/* 搭配套餐*/
.promotion-meal{
	
}
.promotion-meal-wrap .price-block:after{
	background-color: ${bgBtn}!important;
	color: white;
}

/*选项卡---------------------------------*/
.tab-title-active{
	background-color: ${bgBtn}!important;
}
.tab-title-inactive{
	color: ${bgBtn}!important;
	background-color: ${bgLight}!important;
}`;
result = `
.wireless{
	background-color:${bgBody};
}`
	return result;
}
export default getStyle;
