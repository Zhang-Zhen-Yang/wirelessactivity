let demo = {
    "id": 980,
    "title": "4.夏日上新",
    "labels": "年货",
    "attention": 101,
    "domeImage": "https://img.alicdn.com/imgextra/i1/105227988/O1CN01eTAKC228sYG5KZCaQ-105227988.png",
    "result": {
        "weitao": "https://img.alicdn.com/imgextra/i1/105227988/O1CN01eTAKC228sYG5KZCaQ-105227988.png",
        "jiaodian": "https://img.alicdn.com/imgextra/i1/105227988/O1CN01eTAKC228sYG5KZCaQ-105227988.png"
    },
    "code": {
        "global": {
            "title": "夏日上新",
            "bgBody": "rgba(255,255,255,1)",
            "bgBlock": "white",
            "bgBtn": "rgba(76,20,124,1)",
            "bgLight": "white",
            "colorPrice": "rgba(146,29,29,1)",
            "colorLight": "white",
            "colorBorder": "rgba(128,55,88,1)",
            "colorTitle": "rgba(233,49,82,1)",
            "style": "dddddd"
        },
        "style": "\n.action-wrap{\n\tpadding: 5px;\n}\n.action-wrap-sub{\n\tpadding: 0;\n}\n.action-wrap-poster,.action-wrap-favorite,.action-wrap-pageBottom{\n\tpadding: 0;\n}",
        "widgets": [{
            "name": "couponC8413F18F6A00001C5EB113A90F915F1",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i2/105227988/O1CN01j64urA28sYG6Hnfei-105227988.png",
            "id": 112,
            "type": "coupon",
            "template": "\n<div class=\"couponC8413F18F6A00001C5EB113A90F915F1\">\n\t<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n        <tr>\n            <td v-for=\"item,index in data.list\">\n                <!--如果是旺店宝优惠券-->\n                <a-link v-if=\"item.from == 'wb'\" :href=\"item.link\">\n                    <div class=\"coupon-list-item\" >\n                        <div class=\"coupon-price\">{{ item.type == 'Discount' ? (item.discountRate+'折') : (item.type == 'Price' ? (item.decreaseMoney+'元') : (item.type == 'FreePostage' ? '免邮' : '')) }}<\/div>\n                        <div class=\"coupon-details\">{{ item.totalPrice > 0 ? ('满'+item.totalPrice+'元') : '无条件' }}使用<\/div>\n                    <\/div>\n                <\/a-link>\n                <!--如果是官方优惠券-->\n                <a-link v-if=\"item.from == 'promotion'\" :href=\"item.activityUrl\">\n                    <div class=\"coupon-list-item\">\n                        <div class=\"coupon-price\">{{ item.denominations }}<\/div>\n                        <div class=\"coupon-details\">{{ '满'+ item.condition +'元' }}使用<\/div>\n                    <\/div>\n                <\/a-link>\n            <\/td>\n        <\/tr>\n    <\/table>\n    <div v-if=\"data.list.length == 0\" class=\"coupon-null-notice\">\n        无优惠券\n    <\/div>\n<\/div>\n",
            "style": "\n.couponC8413F18F6A00001C5EB113A90F915F1 table {\n    width: 100%;\n}\n.couponC8413F18F6A00001C5EB113A90F915F1 td {\n    width: 33.3%;\n    text-align: center;\n    position: relative;\n}\n.couponC8413F18F6A00001C5EB113A90F915F1 td:first-child {\n    text-align: left;\n}\n.couponC8413F18F6A00001C5EB113A90F915F1 td:last-child {\n    text-align: right;\n}\n/*第三张优惠券*/\n.couponC8413F18F6A00001C5EB113A90F915F1 td {\n    color: #5b9a02;\n}\n.couponC8413F18F6A00001C5EB113A90F915F1 td .coupon-list-item:after{\n    background-color: #b3b89a;\n}\n\n.couponC8413F18F6A00001C5EB113A90F915F1 .coupon-list-item {\n    display: inline-block;\n    width: 98%;\n    position: relative;\n    padding: 3px;\n    text-align: left;\n    background-color: white;\n    border: 1px solid #b3b89a;\n}\n.couponC8413F18F6A00001C5EB113A90F915F1 .coupon-list-item:after {\n    content: '点击领取';\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    top: 0;\n    color: white;\n    height: 100%;\n    width: 2.5em;\n    font-size: 12px;\n    text-align: center;\n    padding: 3px;\n    padding-top: 5px;\n    box-sizing: border-box;\n}\n\n.couponC8413F18F6A00001C5EB113A90F915F1 .coupon-price {\n    font-size: 20px;\n}\n.couponC8413F18F6A00001C5EB113A90F915F1 .coupon-details {\n    font-size: 12px;\n}\n.couponC8413F18F6A00001C5EB113A90F915F1 .coupon-null-notice {\n    text-align: center;\n    padding: 10px;\n    background-color: #ededed;\n}"
        }, {
            "name": "oneRowC8414003413000011D3BFF001F871589",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i2/105227988/O1CN014mXnca28sYG5iXPmY-105227988.png",
            "id": 115,
            "type": "oneRow",
            "template": "\n<div class=\"oneRowC8414003413000011D3BFF001F871589\">\n\t<!--头部-->\n\t<widget-header :title=\"data.title\" :link=\"data.link\" :css=\"{backgroundColor: 'transparent', color: '#000'}\"><\/widget-header>\n\t<empty-layout v-if=\"data.list && data.list.length == 0\" />\n\t<table cellspacing=\"0\" cellpadding=\"0\" v-for=\"item,index in data.list\" style=\"width: 100%;table-layout: fixed;\">\n\t\t<tr>\n\t\t\t<td :style=\"{padding: (index + 1) < data.list.length ? '2.5px 0 15px 0' : '2.5px 0 2.5px 0'}\">\n\t\t\t\t<goods-link :numIid=\"item.num_iid\">\n\t\t\t\t\t<div style=\" width: 100%;overflow: hidden;border:1px solid #b3b89a;\">\n\t\t\t\t\t\t<aspect :css=\"{overflow: 'hidden'}\">\n\t\t\t\t\t\t\t<img :src=\"item.pic_url\" alt=\"\" style=\"width:100%; vertical-align: middle;\">\n\t\t\t\t\t\t<\/aspect>\n\t\t\t\t\t\t<!--宝贝名称-->\n\t\t\t\t\t\t<div v-if=\"data.show_title\" style=\"width: 100%;height: 2em;line-height: 2em;border-top:1px solid #b3b89a;padding:0 5px;font-size: 14px;overflow: hidden;background-color:white;color: #666;\">\n\t\t\t\t\t\t\t{{ item.title }}\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div style=\"border-top: 1px solid #b3b89a;background-color:white;text-align: left; position: relative;\">\n\t\t\t\t\t\t\t<table cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%;table-layout:fixed;\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"color:#5b9a02;padding-left:5px;white-space:nowrap\">\n\t\t\t\t\t\t\t\t\t\t<!--价格-->\n\t\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px\">¥<\/span><span style=\"font-size: 25px;\">{{item.price | pri}}<\/span>\n\t\t\t\t\t\t\t\t\t\t<!--原价-->\n\t\t\t\t\t\t\t\t\t\t<span v-if=\"data.show_prev_price\" style=\"font-size: 16px;margin-left: 5px;text-decoration: line-through;color:#5b9a02\">¥{{item.prev_price | pri}}<\/span>\n\t\t\t\t\t\t\t\t\t<\/td>\n                                    <td style=\"width:40px;border-left:1px solid #b3b89a;\" class=\"car\" >\n                                    <\/td>\n\t\t\t\t\t\t\t\t\t<td style=\"border-left:1px solid #b3b89a;background-color:#8fc248;vertical-align:middle;text-align:center;width:4em;font-size:20px;line-height:1.8em;position:relative;\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: white;\">\n\t\t\t\t\t\t\t\t\t\t\t购买\n\t\t\t\t\t\t\t\t\t\t<\/span>\n\t\t\t\t\t\t\t\t\t<\/td>\n\t\t\t\t\t\t\t\t<\/tr>\n\t\t\t\t\t\t\t<\/table>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/goods-link>\n\t\t\t<\/td>\n\t\t<\/tr>\n\t<\/table>\n<\/div>",
            "style": "\n.oneRowC8414003413000011D3BFF001F871589 .car{\n    background-image: url(\"data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M384 736c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm416-128c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.674 0-32-14.327-32-32s14.326-32 32-32 32 14.327 32 32-14.326 32-32 32zm107.942-638.896c-27.701-34.261-73.735-33.707-84.16-33.104H253.553l-5.959-37.078a32.208 32.208 0 0 0-.55-2.683C241.822 131.351 222.668 96 184 96H96c-17.673 0-32 14.327-32 32s14.327 32 32 32h85.241c1.212 1.706 2.647 4.596 3.486 7.085l71.678 445.993c.145.901.329 1.797.55 2.683 1.695 6.78 11.223 41.673 32.417 62.867C314.033 703.288 348.187 704 352 704h512c17.673 0 32-14.327 32-32s-14.327-32-32-32H352.333c-3.14-.13-12.66-1.581-17.706-6.628-6.26-6.26-12.644-22.351-15.281-31.994L315.268 576h509.584c14.533 0 27.241-9.794 30.944-23.848.314-1.194 31.831-120.639 62.9-222.846 13.325-43.837 9.707-78.896-10.754-104.202zm-50.48 85.589C834.419 386.498 811.167 471.548 800.278 512H304.982l-41.143-256h561.013c.897 0 1.795-.038 2.689-.113 3.54-.3 23.104.145 30.634 9.457 6.038 7.467 5.778 23.996-.713 45.349z' fill='%238fc248'/%3E%3C/svg%3E\");\n    background-size: contain;\n    background-position:center;\n    background-repeat: no-repeat;\n    padding:1px;\n}\n"
        }, {
            "name": "countDownC8413F5AE3B00001408712F0116F16AE",
            "type": "countDown",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i2/105227988/O1CN01biktM128sYG74lMaK-105227988.png",
            "id": 113,
            "template": "\n<aspect :ratio=\"0.15\">\n    <div class=\"countDownC8413F5AE3B00001408712F0116F16AE\" style=\"width:100%;height:100%;background-color:white;\">\n        <v-center :css=\"{width: '100%',height: '100%', color: '#5b9a02'}\">\n            <span class=\"count-down-display\" v-if=\"step!= 2\">\n                距{{data.name}}{{ step == 0 ? '开始' : '结束'}} \n                <count-num :num=\"day||0\"/>天<countNum :num=\"hours||0\"/>:<countNum :num=\"minutes||0\"/>:<count-num :num=\"seconds||0\"/>\n            <\/span>\n            <span class=\"\" v-else>\n                活动已结束\n            <\/span>\n        <\/v-center>\n    <\/div>\n<\/aspect>",
            "style": "\n.countDownC8413F5AE3B00001408712F0116F16AE .count-num{\n    /*margin-left: 5px;*/\n    background-color: #b3b89a;\n\n}"
        }, {
            "name": "tabC8413F75A4D000015AB95742A5108FE0",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i2/105227988/O1CN01qlfGu228sYFyw5euu-105227988.png",
            "id": 114,
            "type": "tab",
            "template": "\n<div class=\"tabC8413F75A4D000015AB95742A5108FE0\">\n\t<tab-temp :data=\"data\" :index=\"index\">\n\t<table cellspacing=\"0\" cellpadding=\"0\" class=\"tab-header\" style=\"width:100%;\">\n\t\t<tr>\n\t\t\t<td v-for=\"item,index in data.list\"\n                :style=\"{border:'1px solid #b3b89a',fontSize: '14px', textAlign:'center',lineHeight: '3em',backgroundColor:data.activeIndex == index ? '#8fc248': 'white', borderRight: (index + 1) < data.list.length ? 'none' : '1px solid #b3b89a'}\" \n                @click=\"data.activeIndex=index\"\n            >\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"tab-item-title\" :style=\"{color: data.activeIndex == index? 'white' : '#5b9a02',}\">\n\t\t\t\t\t\t{{ item.title }}\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/td>\n\t\t<\/tr>\n\t<\/table>\n\t<\/tab-temp>\n<\/div>",
            "style": "\n.tabC8413F75A4D000015AB95742A5108FE0{\n}"
        }, {
            "name": "twoRowC84141209B300001EDCF12FF10601559",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i3/105227988/O1CN01Gp4Wvk28sYG4M3ig7-105227988.png",
            "id": 116,
            "type": "twoRow",
            "template": "\n<div class=\"twoRowC84141209B300001EDCF12FF10601559\">\n\t<widget-header :title=\"data.title\" :link=\"data.link\" :css=\"{backgroundColor: 'transparent', color: '#000'}\"><\/widget-header>\n    <empty-layout v-if=\"data.list && data.list.length == 0\" />\n    <table class=\"two-row\" cellspacing=\"0\" cellpadding=\"0\" style=\" width: 100%;table-layout: fixed;display: inline-block;\">\n    <!-- get2ColArray 是宝贝列表数组 每一个是有 1~3 个 宝贝 -->\n        <tr v-for=\"item,index in get2ColArray\">\n        <td v-for=\"i in item\" style=\"width: 50%;padding: 2.5px;\">\n            <goods-link :numIid=\"i.num_iid\">\n                <div class=\"\" style=\" width: 100%;overflow: hidden;border:1px solid #b3b89a;\">\n                    <aspect :css=\"{overflow: 'hidden'}\">\n                        <img :src=\"i.pic_url\" alt=\"\" style=\"width:100%; vertical-align: middle;\">\n                    <\/aspect>\n                    <!--宝贝名称-->\n                    <div v-if=\"data.show_title\" style=\"width: 100%;height: 2em;line-height: 2em;padding:0 5px;font-size: 14px;overflow: hidden;background-color:white;color: #666;border-top:1px solid #b3b89a;\">\n                        {{ i.title }}\n                    <\/div>\n                    <div class=\"\" style=\"border-top: 1px solid #b3b89a;background-color:white;text-align: left; position: relative;\">\n                        <table cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%;table-layout:fixed;\">\n                            <tr>\n                                <td style=\"color:#5b9a02;padding-left:5px;white-space:nowrap;\">\n                                    <!--价格-->\n                                    <span style=\"font-size: 12px\">¥<\/span><span class=\"\" style=\"font-size: 16px;\">{{item[0].price | pri}}<\/span>\n                                    <!--原价-->\n                                    <span class=\"\" v-if=\"data.show_prev_price\" style=\"font-size:12px;margin-left: 5px;text-decoration: line-through;color: #5b9a02;\">¥{{item[0].prev_price | pri}}<\/span>\n                                <\/td>\n                                <td style=\"background-color:#8fc248;vertical-align:middle;text-align:center;width:3em;line-height:2em;font-size:13px;position:relative;border-left:1px solid #b3b89a;\">\n                                    <span style=\"color:white;\">\n                                        购买\n                                    <\/span>\n                                <\/td>\n                            <\/tr>\n\n                        <\/table>\n                    <\/div>\n                <\/div>\n            <\/goods-link>\n        <\/td>\n        <td v-if=\"!item[1]\"><\/td>\n        <\/tr>\n    <\/table>\n<\/div>",
            "style": "\n.twoRowC84141209B300001EDCF12FF10601559{\n}\n"
        }, {
            "name": "oneRowC8412E82EB2000017B711A8A1FD02400",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i1/105227988/O1CN01buuUWv28sYFycWk3l-105227988.png",
            "id": 101,
            "type": "oneRow",
            "template": "\n<div class=\"oneRowC8412E82EB2000017B711A8A1FD02400\">\n\t<!--头部-->\n\t<widget-header :title=\"data.title\" :link=\"data.link\" :css=\"{backgroundColor: 'transparent', color: '#000'}\"><\/widget-header>\n\t<empty-layout v-if=\"data.list && data.list.length == 0\" />\n\t<table cellspacing=\"0\" cellpadding=\"0\" v-for=\"item,index in data.list\" style=\"width: 100%;table-layout: fixed;\">\n\t\t<tr>\n\t\t\t<td :style=\"{padding: (index + 1) < data.list.length ? '2.5px 0 15px 0' : '2.5px 0 2.5px 0'}\">\n\t\t\t\t<goods-link :numIid=\"item.num_iid\">\n\t\t\t\t\t<div style=\" width: 100%;overflow: hidden;border:1px solid #000;\">\n\t\t\t\t\t\t<aspect :css=\"{overflow: 'hidden'}\">\n\t\t\t\t\t\t\t<img :src=\"item.pic_url\" alt=\"\" style=\"width:100%; vertical-align: middle;\">\n\t\t\t\t\t\t<\/aspect>\n\t\t\t\t\t\t<!--宝贝名称-->\n\t\t\t\t\t\t<div v-if=\"data.show_title\" style=\"width: 100%;height: 2em;line-height: 2em;border-top:1px solid #000;padding:0 5px;font-size: 14px;overflow: hidden;background-color:white;color: #000;\">\n\t\t\t\t\t\t\t{{ item.title }}\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div style=\"border-top: 1px solid #000;background-color:white;text-align: left; position: relative;\">\n\t\t\t\t\t\t\t<table cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%;table-layout:fixed;\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style=\"color:#000;padding-left:5px;\">\n\t\t\t\t\t\t\t\t\t\t<!--价格-->\n\t\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px\">¥<\/span><span style=\"font-size: 25px;\">{{item.price | pri}}<\/span>\n\t\t\t\t\t\t\t\t\t\t<!--原价-->\n\t\t\t\t\t\t\t\t\t\t<span v-if=\"data.show_prev_price\" style=\"font-size: 16px;margin-left: 5px;text-decoration: line-through;color:#666\">¥{{item.prev_price | pri}}<\/span>\n\t\t\t\t\t\t\t\t\t<\/td>\n\t\t\t\t\t\t\t\t\t<td style=\"background-color:#fed900;vertical-align:middle;text-align:center;width:4em;font-size:20px;line-height:1.8em;position:relative;\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: #000;\">\n\t\t\t\t\t\t\t\t\t\t\t购买\n\t\t\t\t\t\t\t\t\t\t<\/span>\n                                        <!--价格左边的三角-->\n                                        <div style=\"position: absolute;width: 0;height: 0;left: -0.65rem;top: .7rem;border: .35rem solid transparent;border-right-color: #eb5955;border-right-color: #fed900;\"><\/div>\n\t\t\t\t\t\t\t\t\t<\/td>\n\t\t\t\t\t\t\t\t<\/tr>\n\t\t\t\t\t\t\t<\/table>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/goods-link>\n\t\t\t<\/td>\n\t\t<\/tr>\n\t<\/table>\n<\/div>",
            "style": "\n.oneRowC8412E82EB2000017B711A8A1FD02400{\n}\n"
        }, {
            "name": "oneRowHorizontalC841415B6720000133EC1EEF1AA08CB0",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i1/105227988/O1CN01xO2Zl528sYG4MeRYV-105227988.png",
            "id": 117,
            "type": "oneRowHorizontal",
            "template": "\n<div class=\"oneRowHorizontalC841415B6720000133EC1EEF1AA08CB0\">\n\t<widget-header :title=\"data.title\" :link=\"data.link\" :css=\"{backgroundColor: 'transparent',color: '#000'}\"><\/widget-header>\n    <empty-layout v-if=\"data.list.length == 0\" />\n    <goods-link v-for=\"item,index in data.list\" :numIid=\"item.num_iid\" :key=\"index\">\n        <div class=\"\" style=\"background-color: white;margin-bottom: 2px;border:1px solid #b3b89a;\">\n            <table>\n                <tr>\n                    <td v-if=\"index % 2 == 1\" class=\"title-block\" height=\"35%\">\n                        <!--宝贝标题-->\n                        <span v-if=\"data.show_title\" style=\"color: #666;font-size: 14px;\">\n                            {{ item.title }}\n                        <\/span>\n                    <\/td>\n                    <td width=\"50%\" rowspan=\"3\">\n                        <img :src=\"item.pic_url\" alt=\"\" style=\"width: 100%;vertical-align: middle\">\n                    <\/td>\n                    <td v-if=\"index % 2 == 0\" class=\"title-block\" height=\"35%\">\n                        <!--宝贝标题-->\n                        <span v-if=\"data.show_title\" style=\"color:#000;font-size: 14px;\">\n                            {{ item.title }}\n                        <\/span>\n                    <\/td>\n        \n                <\/tr>\n                <!--宝贝图片-->\n                <tr>\n                    <td style=\"padding-left:10px;color:#5b9a02;\">\n                        <span style=\"font-size:20px;\">\n                            ¥{{ item.price|pri }} \n                        <\/span>\n                        <span\n                            v-if=\"data.show_prev_price\"\n                            style=\"font-size: 12px;text-decoration: line-through;margin-left: 5px;color:#5b9a02\"\n                        >\n                            ¥{{ item.prev_price|pri }} \n                        <\/span>\n                    <\/td>\n                <\/tr>\n                <tr>\n                    <td> \n                        <table cellspacing=\"0\" cellpadding=\"0\" style=\"border:1px solid #b3b89a;width:100%;table-layout:fixed;\">\n                            <tr>\n                                <td style=\"width: 40px;\" class=\"car\">\n                                    \n                                <\/td>\n                                <td>\n                                    <div style=\"background-color:#8fc248;color:white;padding: 5px 0;text-align:center;\">\n                                        立即购买\n                                    <\/div>\n                                <\/td>\n                            <\/tr>\n                        <\/table>\n                        \n                    <\/td>\n                <\/tr>\n            <\/table>\n        <\/div>\n    <\/goods-link>\n<\/div>",
            "style": "\n.oneRowHorizontalC841415B6720000133EC1EEF1AA08CB0 .car{\n    background-image: url(\"data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M384 736c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm416-128c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.674 0-32-14.327-32-32s14.326-32 32-32 32 14.327 32 32-14.326 32-32 32zm107.942-638.896c-27.701-34.261-73.735-33.707-84.16-33.104H253.553l-5.959-37.078a32.208 32.208 0 0 0-.55-2.683C241.822 131.351 222.668 96 184 96H96c-17.673 0-32 14.327-32 32s14.327 32 32 32h85.241c1.212 1.706 2.647 4.596 3.486 7.085l71.678 445.993c.145.901.329 1.797.55 2.683 1.695 6.78 11.223 41.673 32.417 62.867C314.033 703.288 348.187 704 352 704h512c17.673 0 32-14.327 32-32s-14.327-32-32-32H352.333c-3.14-.13-12.66-1.581-17.706-6.628-6.26-6.26-12.644-22.351-15.281-31.994L315.268 576h509.584c14.533 0 27.241-9.794 30.944-23.848.314-1.194 31.831-120.639 62.9-222.846 13.325-43.837 9.707-78.896-10.754-104.202zm-50.48 85.589C834.419 386.498 811.167 471.548 800.278 512H304.982l-41.143-256h561.013c.897 0 1.795-.038 2.689-.113 3.54-.3 23.104.145 30.634 9.457 6.038 7.467 5.778 23.996-.713 45.349z' fill='%238fc248'/%3E%3C/svg%3E\");\n    background-size: contain;\n    background-position:center;\n    background-repeat: no-repeat;\n    padding:1px;\n}\n"
        }, {
            "name": "swipeC841432824400001561D1BF8112014DE",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i2/105227988/O1CN014oO5UM28sYG5LGuK2-105227988.png",
            "id": 120,
            "type": "swipe",
            "template": "\n<div class=\"swipeC841432824400001561D1BF8112014DE\">\n\t<widget-header :title=\"data.title\" :link=\"data.link\" :css=\"{backgroundColor: 'transparent',color: '#000'}\"><\/widget-header>\n\t<swipe-group  v-if=\"data.list.length > 0\" :style=\"{height: height+'px'}\">\n\t\t<swipe-item class=\"slide\" v-for=\"item, index in data.list\" :key=\"index\">\n            \n\t\t\t<goods-link :numIid=\"item.num_iid\">\n\t\t\t\t<div class=\"\" style=\"position: relative;border:1px solid #b3b89a;\" ref=\"aspectWrap\">\n\t\t\t\t\t<aspect :ratio=\"1\" :css=\"{}\">\n\t\t\t\t\t\t<img :src=\"item.pic_url\" alt=\"\" style=\"width: 100%;height:100%;\">\n\t\t\t\t\t\t<div style=\"position:absolute;left:0;bottom:1px;width:100%;border-bottom:1px solid #b3b89a;\">\n\t\t\t\t\t\t\t<!--宝贝名称-->\n\t\t\t\t\t\t\t<div v-if=\"data.show_title\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%;height: 2em;line-height: 2em;padding:0 5px;font-size: 14px;overflow: hidden;background-color:white;color: #666;border-top:1px solid #b3b89a;\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ item.title }}\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<div style=\"border-top: 1px solid #b3b89a;background-color:white;text-align: left; position: relative;\">\n\t\t\t\t\t\t\t\t<table cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%;table-layout:fixed;\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"color:#5b9a02;padding-left:5px;\">\n\t\t\t\t\t\t\t\t\t\t\t<!--价格-->\n\t\t\t\t\t\t\t\t\t\t\t<span style=\"font-size: 14px\">¥<\/span><span style=\"font-size: 25px;\">{{item.price | pri}}<\/span>\n\t\t\t\t\t\t\t\t\t\t\t<!--原价-->\n\t\t\t\t\t\t\t\t\t\t\t<span v-if=\"data.show_prev_price\" style=\"font-size: 16px;margin-left: 5px;text-decoration: line-through;\">¥{{item.prev_price | pri}}<\/span>\n\t\t\t\t\t\t\t\t\t\t<\/td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"width:40px;border-left:1px solid #b3b89a;\" class=\"car\" >\n                                        <\/td>\n                                        <td style=\"border-left:1px solid #b3b89a;background-color:#8fc248;vertical-align:middle;text-align:center;width:4em;font-size:20px;line-height:1.8em;position:relative;\">\n                                            <span style=\"color: white;\">\n                                                购买\n                                            <\/span>\n                                        <\/td>\n\t\t\t\t\t\t\t\t\t<\/tr>\n\t\t\t\t\t\t\t\t<\/table>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/aspect>\n\t\t\t\t<\/div>        \n\t\t\t<\/goods-link>\n\t\t<\/swipe-item>\n\t<\/swipe-group>\n\t<empty-layout v-if=\"data.list.length == 0\" />\n<\/div>",
            "style": "\n.swipeC841432824400001561D1BF8112014DE{\n\toverflow: hidden;\n}\n.swipeC841432824400001561D1BF8112014DE .swipe-title {\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tpadding: 10px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tbackground-color: rgba(0, 0, 0, 0.2);\n\tfont-size: 14px;\n}\n.swipeC841432824400001561D1BF8112014DE .swipe-prev-price {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 100px;\n}\n.swipeC841432824400001561D1BF8112014DE .swipe-price {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tbackground-color: rgba(0, 0, 0, 0.2);\n\tfont-size: 20px;\n\tpadding: 0 10px;\n}\n.swipeC841432824400001561D1BF8112014DE .car{\n    background-image: url(\"data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M384 736c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm416-128c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.674 0-32-14.327-32-32s14.326-32 32-32 32 14.327 32 32-14.326 32-32 32zm107.942-638.896c-27.701-34.261-73.735-33.707-84.16-33.104H253.553l-5.959-37.078a32.208 32.208 0 0 0-.55-2.683C241.822 131.351 222.668 96 184 96H96c-17.673 0-32 14.327-32 32s14.327 32 32 32h85.241c1.212 1.706 2.647 4.596 3.486 7.085l71.678 445.993c.145.901.329 1.797.55 2.683 1.695 6.78 11.223 41.673 32.417 62.867C314.033 703.288 348.187 704 352 704h512c17.673 0 32-14.327 32-32s-14.327-32-32-32H352.333c-3.14-.13-12.66-1.581-17.706-6.628-6.26-6.26-12.644-22.351-15.281-31.994L315.268 576h509.584c14.533 0 27.241-9.794 30.944-23.848.314-1.194 31.831-120.639 62.9-222.846 13.325-43.837 9.707-78.896-10.754-104.202zm-50.48 85.589C834.419 386.498 811.167 471.548 800.278 512H304.982l-41.143-256h561.013c.897 0 1.795-.038 2.689-.113 3.54-.3 23.104.145 30.634 9.457 6.038 7.467 5.778 23.996-.713 45.349z' fill='%238fc248'/%3E%3C/svg%3E\");\n    background-size: contain;\n    background-position:center;\n    background-repeat: no-repeat;\n    padding:1px;\n}"
        }, {
            "name": "promotionMealC84141D933A00001FEE0BE4B7BEB19E7",
            "p": false,
            "image": "https://img.alicdn.com/imgextra/i1/105227988/O1CN01i3ykIG28sYG3xKVGu-105227988.png",
            "id": 118,
            "type": "promotionMeal",
            "template": "\n<a-link :href=\"data.link\">\n\t<div class=\"promotionMealC84141D933A00001FEE0BE4B7BEB19E7\" style=\"overflow: hidden;background-color: white;padding:5px;\">\n\t\t<div v-if=\"data.title\" style=\"text-align: left;padding: 5px 0 5px 10px;background-color: white;\">\n            <span style=\"font-size: 16px;color: #111111;\">搭配套餐<\/span>\n            <span style=\"font-size: 14px;margin-left: 5px;color: #666666;\">{{data.title}} (共{{data.list.length}}件)<\/span>\n\t\t<\/div>\n        <div style=\"border:1px solid #b3b89a;\">\n            <div style=\"width: 100%;padding: 20px;white-space: nowrap;word-break: nowrap;overflow: auto;\">\n                <template class=\"promotion-meal\" v-for=\"item,index in data.list\">\n                    <!--宝贝图片-->\n                    <img :src=\"item.pic_url\" alt=\"\" style=\"vertical-align:middle; width: 30%;border:1px solid #b3b89a;\">\n                    <!--加号-->\n                    <span class=\"promotion-meal-join-icon\" style=\"font-size: 40px;vertical-align: middle;color: #b3b89a;\" v-if=\"data.list[index+1]\">+<\/span>\n                <\/template>\n                <empty-layout v-if=\"data.list.length == 0\"><\/empty-layout>\n            <\/div>\n            \n            <!--套餐价-->\n            <div style=\"background-color:white;border-top:1px solid #b3b89a;\">\n                <table cellspacing=\"0\" cellpadding=\"0\"  style=\"table-layout: fixed;width:100%;\">\n                    <tr>\n                        <td style=\"color:#5b9a02;padding-left:10px;\">\n                            <!--价格-->\n                            搭配价：<span style=\"font-size: 20px;\">¥{{ data.meal_price | pri }}<\/span>\n                            <!--原价-->\n                            <span style=\"font-size: 14px;margin-left: 10px;text-decoration: line-through;color:#5b9a02;\">{{ data.total_price | pri}}<\/span>\n                        <\/td>\n                        <td style=\"width:40px;border-left:1px solid #b3b89a;\" class=\"car\">\n\n                        <\/td>\n                        <td style=\"background-color: #8fc248;color:white;font-size:18px;text-align:center;vertical-align:middle;width:5em;line-height:2em;position:relative;border-left:1px solid #b3b89a;\">\n                            <span>立即购买<\/span>\n                        <\/td>\n                    <\/tr>\n                <\/table>\n            <\/div>\n        <\/div>\n\t<\/div>\n<\/a-link>",
            "style": "\n.promotionMealC84141D933A00001FEE0BE4B7BEB19E7 .promotion-meal-content::-webkit-scrollbar {\n\twidth: 10px;\n\theight: 10px;\n\toverflow: hidden;\n}\n.promotionMealC84141D933A00001FEE0BE4B7BEB19E7 .car{\n    background-image: url(\"data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M384 736c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm416-128c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm0 128c-17.674 0-32-14.327-32-32s14.326-32 32-32 32 14.327 32 32-14.326 32-32 32zm107.942-638.896c-27.701-34.261-73.735-33.707-84.16-33.104H253.553l-5.959-37.078a32.208 32.208 0 0 0-.55-2.683C241.822 131.351 222.668 96 184 96H96c-17.673 0-32 14.327-32 32s14.327 32 32 32h85.241c1.212 1.706 2.647 4.596 3.486 7.085l71.678 445.993c.145.901.329 1.797.55 2.683 1.695 6.78 11.223 41.673 32.417 62.867C314.033 703.288 348.187 704 352 704h512c17.673 0 32-14.327 32-32s-14.327-32-32-32H352.333c-3.14-.13-12.66-1.581-17.706-6.628-6.26-6.26-12.644-22.351-15.281-31.994L315.268 576h509.584c14.533 0 27.241-9.794 30.944-23.848.314-1.194 31.831-120.639 62.9-222.846 13.325-43.837 9.707-78.896-10.754-104.202zm-50.48 85.589C834.419 386.498 811.167 471.548 800.278 512H304.982l-41.143-256h561.013c.897 0 1.795-.038 2.689-.113 3.54-.3 23.104.145 30.634 9.457 6.038 7.467 5.778 23.996-.713 45.349z' fill='%238fc248'/%3E%3C/svg%3E\");\n    background-size: contain;\n    background-position:center;\n    background-repeat: no-repeat;\n    padding:1px;\n}\n"
        }],
        "list": [{
            "type": "poster",
            "is": "poster",
            "list": [{
                "pic_url": "https://img.alicdn.com/imgextra/i3/105227988/O1CN0116enHL28sYG63i3TJ-105227988.png",
                // "link": ""
            }]
        }, {
            "type": "coupon",
            "is": "couponC8413F18F6A00001C5EB113A90F915F1",
            "list": [{
                "id": 142671,
                "name": "代金券",
                "type": "Price",
                "decreaseMoney": 122,
                "discountRate": 0,
                "totalPrice": 0,
                "startTime": {
                    "date": 23,
                    "day": 5,
                    "hours": 0,
                    "minutes": 0,
                    "month": 10,
                    "seconds": 0,
                    "time": 1542902400000,
                    "timezoneOffset": -480,
                    "year": 118
                },
                "endTime": {
                    "date": 23,
                    "day": 0,
                    "hours": 23,
                    "minutes": 59,
                    "month": 11,
                    "seconds": 0,
                    "time": 1545580740000,
                    "timezoneOffset": -480,
                    "year": 118
                },
                "from": "wb",
                "link": "https://wonbao.ews.m.jaeapp.com/mjsCoupon/index?couponId=142671&userId=105227988"
            }, {
                "id": 142670,
                "name": "代金券",
                "type": "Price",
                "decreaseMoney": 12,
                "discountRate": 0,
                "totalPrice": 0,
                "startTime": {
                    "date": 23,
                    "day": 5,
                    "hours": 0,
                    "minutes": 0,
                    "month": 10,
                    "seconds": 0,
                    "time": 1542902400000,
                    "timezoneOffset": -480,
                    "year": 118
                },
                "endTime": {
                    "date": 23,
                    "day": 0,
                    "hours": 23,
                    "minutes": 59,
                    "month": 11,
                    "seconds": 0,
                    "time": 1545580740000,
                    "timezoneOffset": -480,
                    "year": 118
                },
                "from": "wb",
                "link": "https://wonbao.ews.m.jaeapp.com/mjsCoupon/index?couponId=142670&userId=105227988"
            }, {
                "id": 142668,
                "name": "代金券",
                "type": "Price",
                "decreaseMoney": 10,
                "discountRate": 0,
                "totalPrice": 0,
                "startTime": {
                    "date": 23,
                    "day": 5,
                    "hours": 0,
                    "minutes": 0,
                    "month": 10,
                    "seconds": 0,
                    "time": 1542902400000,
                    "timezoneOffset": -480,
                    "year": 118
                },
                "endTime": {
                    "date": 23,
                    "day": 0,
                    "hours": 23,
                    "minutes": 59,
                    "month": 11,
                    "seconds": 0,
                    "time": 1545580740000,
                    "timezoneOffset": -480,
                    "year": 118
                },
                "from": "wb",
                "link": "https://wonbao.ews.m.jaeapp.com/mjsCoupon/index?couponId=142668&userId=105227988"
            }]
        }, {
            "type": "poster",
            "is": "poster",
            "list": [{
                "pic_url": "https://img.alicdn.com/imgextra/i2/105227988/O1CN01XoWvae28sYG5KLAjj-105227988.png",
                "link": ""
            }]
        }, {
            "type": "oneRow",
            "is": "oneRowC8414003413000011D3BFF001F871589",
            "show_prev_price": true,
            "show_title": true,
            "list": [{
                "title": "矮小个子155cm女装衬衫女长袖职业修身上衣韩版气质格子拼接,",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/105227988/O1CN0128sYEXq4lRzxZzC-105227988.jpg",
                "price": "98.10",
                "prev_price": "109.00",
                "num_iid": 578026982963,
                "num": 0
            }]
        }, {
            "type": "countDown",
            "is": "countDownC8413F5AE3B00001408712F0116F16AE",
            "startDate": 1544749143632,
            "endDate": 1544835543632,
            "name": "活动"
        }, {
            "type": "tab",
            "is": "tabC8413F75A4D000015AB95742A5108FE0",
            "activeIndex": 0,
            "list": [{
                "title": "本周热卖",
                "children": [{
                    "type": "twoRow",
                    "is": "twoRowC84141209B300001EDCF12FF10601559",
                    "show_prev_price": true,
                    "show_title": true,
                    "list": [{
                        "title": "职业装韩版上衣秋装2018衬衫女长袖气质工作服女上班衣服女装",
                        "pic_url": "https://img.alicdn.com/bao/uploaded/i2/105227988/O1CN0128sYEYxPKF2oXxz-105227988.jpg",
                        "price": "80.00",
                        "prev_price": "91.00",
                        "num_iid": 577902709302,
                        "num": 0
                    }, {
                        "title": "矮小个子155cm女装衬衫女长袖职业修身上衣韩版气质格子拼接,",
                        "pic_url": "https://img.alicdn.com/bao/uploaded/i1/105227988/O1CN0128sYEXq4lRzxZzC-105227988.jpg",
                        "price": "98.10",
                        "prev_price": "109.00",
                        "num_iid": 578026982963,
                        "num": 0
                    }]
                }]
            }, {
                "title": "收藏最多",
                "children": [{
                    "type": "oneRow",
                    "is": "oneRowC8412E82EB2000017B711A8A1FD02400",
                    "show_prev_price": true,
                    "show_title": true,
                    "list": [{
                        "title": "矮小个子155cm女装衬衫女长袖职业修身上衣韩版气质格子拼接,",
                        "pic_url": "https://img.alicdn.com/bao/uploaded/i1/105227988/O1CN0128sYEXq4lRzxZzC-105227988.jpg",
                        "price": "98.10",
                        "prev_price": "109.00",
                        "num_iid": 578026982963,
                        "num": 0
                    }]
                }]
            }, {
                "title": "销售最多",
                "children": []
            }]
        }, {
            "type": "poster",
            "is": "poster",
            "list": [{
                "pic_url": "https://img.alicdn.com/imgextra/i3/105227988/O1CN01t4uybC28sYG3yD0tG-105227988.png",
                "link": ""
            }]
        }, {
            "type": "oneRowHorizontal",
            "is": "oneRowHorizontalC841415B6720000133EC1EEF1AA08CB0",
            "show_title": true,
            "show_prev_price": true,
            "list": [{
                "title": "矮小个子155cm女装衬衫女长袖职业修身上衣韩版气质格子拼接,",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/105227988/O1CN0128sYEXq4lRzxZzC-105227988.jpg",
                "price": "98.10",
                "prev_price": "109.00",
                "num_iid": 578026982963,
                "num": 0
            }, {
                "title": "职业装韩版上衣秋装2018衬衫女长袖气质工作服女上班衣服女装",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i2/105227988/O1CN0128sYEYxPKF2oXxz-105227988.jpg",
                "price": "81.90",
                "prev_price": "91.00",
                "num_iid": 577902709302,
                "num": 0
            }],
            "title": ""
        }, {
            "type": "poster",
            "is": "poster",
            "list": [{
                "pic_url": "https://img.alicdn.com/imgextra/i2/105227988/O1CN01XoWvae28sYG5KLAjj-105227988.png",
                "link": ""
            }]
        }, {
            "type": "swipe",
            "is": "swipeC841432824400001561D1BF8112014DE",
            "show_prev_price": true,
            "show_title": true,
            "list": [{
                "title": "秋装上衣韩版BF风衬衣长袖性感宽松秋天大码中长款白衬衫女装",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/105227988/O1CN01WUIyYm28sYFyhx6NP-105227988.jpg",
                "price": "86.40",
                "prev_price": "96.00",
                "num_iid": 583702038632,
                "num": 0
            }, {
                "title": "实拍 秋冬新款 甜美少女百搭宽松字母提花长袖针织毛衣女 9049#",
                "pic_url": "https://img.alicdn.com/bao/uploaded/i3/105227988/O1CN01DATvGb28sYFweVajs-105227988.jpg",
                "price": "58.50",
                "prev_price": "65.00",
                "num_iid": 583500881402,
                "num": 0
            }],
            "title": "fg "
        }, {
            "type": "promotionMeal",
            "is": "promotionMealC84141D933A00001FEE0BE4B7BEB19E7",
            "title": "套餐搭配20180630",
            "meal_price": "500",
            "total_price": "600.00",
            "list": [{
                "pic_url": "https://img.alicdn.com/bao/uploaded/i1/105227988/TB2Z7ofpkOWBuNjSsppXXXPgpXa-105227988.jpg",
                "price": "590",
                "num_iid": "569007602897"
            }, {
                "pic_url": "https://img.alicdn.com/bao/uploaded/i4/105227988/TB2k5WNXSZb61BjSZPfXXaU.pXa_!!105227988.jpg",
                "price": "10",
                "num_iid": "539601068187"
            }],
            "id": 113229,
            "link": "https://wonbao.ews.m.jaeapp.com/meal/index?sellerId=105227988&mealId=113229"
        }, {
            "type": "poster",
            "is": "poster",
            "list": [{
                "pic_url": "https://img.alicdn.com/imgextra/i3/105227988/O1CN01J0KlpY28sYG5KMmcx-105227988.png",
                "link": ""
            }]
        }, {
            "type": "poster",
            "is": "poster",
            "list": [{
                "pic_url": "https://img.alicdn.com/imgextra/i3/105227988/O1CN01fuRrY328sYG5dLize-105227988.png",
                "link": ""
            }]
        }],
        "dragWidgets": {
            "oneRow": {
                "type": "oneRow",
                "require": true,
                "id": 115
            },
            "twoRow": {
                "type": "twoRow",
                "require": true,
                "id": 116
            },
            "threeRow": {
                "type": "threeRow",
                "require": true,
                "id": 123
            },
            "coupon": {
                "type": "coupon",
                "require": true,
                "id": 112
            },
            "countDown": {
                "type": "countDown",
                "require": true,
                "id": 113
            },
            "oneRowHorizontal": {
                "type": "oneRowHorizontal",
                "require": true,
                "id": 117
            },
            "promotionMeal": {
                "type": "promotionMeal",
                "require": true,
                "id": 118
            },
            "marqueeBlock": {
                "type": "marqueeBlock",
                "require": true,
                "id": 121
            },
            "waterfall": {
                "type": "waterfall",
                "require": true,
                "id": 124
            },
            "hotItem": {
                "type": "hotItem",
                "require": true,
                "id": 119
            },
            "groupGoods": {
                "type": "groupGoods",
                "require": true,
                "id": 122
            },
            "swipe": {
                "type": "swipe",
                "require": true,
                "id": 120
            },
            "tab": {
                "type": "tab",
                "require": true,
                "id": 114
            },
            "poster": {
                "type": "poster",
                "require": false,
                "id": null
            },
            "focusImg": {
                "type": "focusImg",
                "require": false,
                "id": null
            },
            "favorite": {
                "type": "favorite",
                "require": true,
                "id": 50
            },
            "pageBottom": {
                "type": "pageBottom",
                "require": true,
                "id": 43
            },
            "codeBlock": {
                "type": "codeBlock",
                "require": false,
                "id": null
            }
        }
    },
    "success": true
}

export default demo;