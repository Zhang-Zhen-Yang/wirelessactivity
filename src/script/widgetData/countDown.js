
export default function(name) {
let template = `
<aspect :ratio="0.15">
    <div class="${name}" style="width:100%;height:100%;background-color:white;font-size:13px;">
        <v-center :css="{width: '100%',height: '100%', color: '#d60934'}">
            <span class="count-down-display" v-if="step!= 2">
                距{{data.name}}{{ step == 0 ? '开始' : '结束'}} 
                <count-num :num="day||0"/>天<countNum :num="hours||0"/>小时<countNum :num="minutes||0"/>分钟<count-num :num="seconds||0"/>秒
            </span>
            <span class="" v-else>
                活动已结束
            </span>
        </v-center>
    </div>
</aspect>`;


let style =`
.${name} .count-num{
    /*margin-left: 5px;*/
    background-color: #d60934;
   
}`;
	return {
		template,
		style,
	}
}