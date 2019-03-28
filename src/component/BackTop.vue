<template>
    <div id="backTop" @click="scrollTop" :class="{backTopShow: backTopShow}" title="返回顶部">    
        <span></span>
    </div>
</template>

<script>

export default {
    name: 'backTop',
    data () {
        return {
            backTopShow: false
        };
    },
    computed: {
        /* backTopShow () {
            return this.$store.state.backTopShow ? 1 : 0;
        } */
    },
    methods: {
        scrollTop () {
            var currentScrollTop = this.scrollContent.scrollTop;
            // document.body.scrollTop=document.documentElement.scrollTop=0;
            let distance = currentScrollTop / 10;
            let cur = 0;
            let fn = () => {
                setTimeout(() => {
                    cur++;
                    // console.log(cur);
                    this.scrollContent.scrollTop = currentScrollTop - distance * cur;
                    this.scrollContent.scrollTop = currentScrollTop - distance * cur;
                    if (cur < 10) {
                        fn();
                    }
                }, 10);
            };
            fn();
            // this.$store.commit('increment');
        },
        checkShow () {
            let currentScrollTop = this.scrollContent.scrollTop;
            if (currentScrollTop > 100) {
                this.backTopShow = true;
            } else {
                this.backTopShow = false;
            }
        }
    },
    created () {
    },
    mounted() {
        this.scrollContent = document.querySelector('#scroll-content');
        this.scrollContent.addEventListener('scroll', this.checkShow);
    }
};
</script>

<style>
#backTop{
    width:45px;
    height:45px;
    position:absolute;
    right:15px;
    bottom:-50px;
    background-color:#111;
    opacity:0.9;
    cursor:pointer;
    color:#ffffff;
    line-height:50px;
    transition:all 0.2s ease-in-out;
    text-align:center;
    border-radius:1px;
    background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1130 1024' xmlns='http://www.w3.org/2000/svg' width='35.313' height='32'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M326.064 672.882H207.76v342.337h-88.596V672.882H1.126v-72.268h324.938v72.268zm30.781 140.522c0-64.953 18.96-117.815 56.878-158.589 37.919-40.773 88.015-61.16 150.291-61.16 59.242 0 106.93 19.718 143.064 59.153 36.134 39.435 54.201 90.112 54.201 152.03 0 64.596-18.78 117.012-56.342 157.25-37.562 40.24-86.766 60.358-147.614 60.358-59.421 0-107.689-19.494-144.804-58.484-37.116-38.989-55.674-89.175-55.674-150.558zm92.878-4.818c0 40.328 9.725 73.294 29.175 98.9 19.45 25.606 46.127 38.41 80.03 38.41 34.618 0 61.562-12.268 80.834-36.804 19.271-24.535 28.907-57.502 28.907-98.9 0-43.183-9.368-77.309-28.104-102.38-18.737-25.07-45.145-37.606-79.228-37.606-34.617 0-61.873 12.847-81.77 38.543-19.896 25.695-29.844 58.974-29.844 99.837zm470.01 62.097v144.536h-88.327V600.614H974.07c103.139 0 154.707 43.718 154.707 131.154 0 42.469-15.569 76.506-46.706 102.112-31.138 25.606-70.083 37.874-116.834 36.803h-45.502zm0-201.548v133.83h38.276c51.926 0 77.89-22.572 77.89-67.718 0-44.075-25.696-66.112-77.087-66.112h-39.078zM648.037 56.821C615.79 24.817 588.794 0 572.25 0h-12.36c-16.543 0-43.542 24.816-75.785 56.82L271.29 302.98c-41.849 41.978-37.84 116.33 41.478 116.33h506.604c79.315 0 83.324-74.352 41.477-116.33L648.036 56.82z' fill='%23FF0037'/%3E%3C/svg%3E");
    background-repeat:no-repeat;
    background-position:center;
    background-size: 30px auto;
}
#backTop:hover{
    /*background-color:#f7342a;*/
    opacity:1;
}
#backTop.backTopShow{
    bottom: 15px;
}

</style>