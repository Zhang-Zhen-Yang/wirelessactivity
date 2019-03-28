/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:33:10 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-21 13:38:05
 */
import api from './api';
// import mixins from './mixins';
const util = {
	api,
	// 获取请求id，为  new util.getRequestID()
	getRequestID: function () {
        // When asked what this Object is, lie and return it's value
        util.getRequestID.prototype.valueOf = function () { return this.id; };
        util.getRequestID.prototype.toString = function () { return this.id; };
        // Replaced from the original function to leverage the built in methods in
        // JavaScript. Thanks to Robert Kieffer for pointing this one out
        util.getRequestID.prototype.returnBase = function (number, base) {
            return (number).toString(base).toUpperCase();
        };
        // Pull out only certain bits from a very large integer, used to get the time
        // code information for the first part of a UUID. Will return zero's if there
        // aren't enough bits to shift where it needs to.
        util.getRequestID.prototype.getIntegerBits = function (val, start, end) {
            var base16 = this.returnBase(val, 16);
            var quadArray = new Array();
            var quadString = '';
            var i = 0;
            for (i = 0; i < base16.length; i++) {
                quadArray.push(base16.substring(i, i + 1));
            }
            for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
                if (!quadArray[i] || quadArray[i] == '') quadString += '0';
                else quadString += quadArray[i];
            }
            return quadString;
        };
        // pick a random number within a range of numbers
        // int b rand(int a); where 0 <= b <= a
        util.getRequestID.prototype.rand = function (max) {
            return Math.floor(Math.random() * (max + 1));
        };
        util.getRequestID.prototype.createUUID = function () {
            // Loose interpretation of the specification DCE 1.1: Remote Procedure Call
            // since JavaScript doesn't allow access to internal systems, the last 48 bits
            // of the node section is made up using a series of random numbers (6 octets long).
            //
            var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
            var dc = new Date();
            var t = dc.getTime() - dg.getTime();
            var tl = this.getIntegerBits(t, 0, 31);
            var tm = this.getIntegerBits(t, 32, 47);
            var thv = this.getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
            var csar = this.getIntegerBits(this.rand(4095), 0, 7);
            var csl = this.getIntegerBits(this.rand(4095), 0, 7);

            // since detection of anything about the machine/browser is far to buggy,
            // include some more random numbers here
            // if NIC or an IP can be obtained reliably, that should be put in
            // here instead.
            var n = this.getIntegerBits(this.rand(8191), 0, 7) +
                this.getIntegerBits(this.rand(8191), 8, 15) +
                this.getIntegerBits(this.rand(8191), 0, 7) +
                this.getIntegerBits(this.rand(8191), 8, 15) +
                this.getIntegerBits(this.rand(8191), 0, 15); // this last number is two octets long
            this.id = tl + tm + thv + csar + csl + n;
            return tl + tm + thv + csar + csl + n;
        };
        this.id = this.createUUID();
    },
    getQueryString() {
        let result = {};
        let href = window.location.toString();
        let queryString = href.split('?')[1];
        if(queryString) {
            let queryStringList = queryString.split('&');
            if(queryStringList) {
                queryStringList.forEach((item) => {
                    let queryPairing = item.split('=');
                    result[queryPairing[0]] = queryPairing[1];
                });
            }
        }
        return result;
    },
    getHtml() {
        let wirelessCode = document.querySelector('.wireless').outerHTML;
        // console.log(wirelessCode);
        let style = document.querySelectorAll('style');
        let styleCode = Array.from(style).map((item, index)=>{
            return item.outerHTML;
        }).filter((item, index)=>{
            let filtedStrings = ['monaco-editor', 'v-snackbar', 'modal-dialog-mask', 'md-spinner','mx-datepicker'];
            let has = false;
            filtedStrings.forEach((i)=>{
                if(item.indexOf(i) > -1) has = true;
            })
            return !has;
        }).join('');
        let htmlCode = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            ${styleCode}
        </head>
        <body>
            ${wirelessCode}
        </body>
        </html>
        `;
        return htmlCode;
    }
}
export default util;