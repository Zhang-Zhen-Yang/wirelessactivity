/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:36:06 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:36:06 
 */
export default function install (Vue) {
    Vue.filter('pri', function (value) {
        // return value;
        if (isNaN(value) || (value == '')) return '0.00';
        let resultval = Math.round(value * 100) / 100;
        let result = resultval.toString().split('.');
        if (!result[1]) {
            return result + '.00';
        }
        return (result[0] + '.') + (result[1] + '00').slice(0, 2);
    });
    // 时间格式化 例：2017-03-09 09:28
    Vue.filter('datetime', function (value) {
        if (!value) {
            return '';
        }
        var date = new Date(value);
        return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)+' '+('0'+date.getHours()).slice(-2)+':'+('0'+date.getMinutes()).slice(-2);
    });
};
