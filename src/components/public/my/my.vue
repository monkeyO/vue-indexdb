<template>
    <div class="content">
        <div class="logo">
            <img :src="logo"/>   
        </div>
        <ul class="table-view">
            <li class="table-view-cell" v-for="item in infoData">
                <a class="navigate-right">
                    {{item.tittle}}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "v-top",
    data() {
        return {
            con: "信息",
            infoData:[
                {"tittle":"个人信息"},
                {"tittle":"修改手机号码"}    
            ],
            logo:"/src/assets/images/logo.png"
        }
    },
    components: {
       
    },
    methods: {
        hide(params) {
            this.showFlag = false;
            console.log("信息" + params);
        }
    }
}
</script>
<<style lang="stylus">
    @import './my.styl';
</style>
