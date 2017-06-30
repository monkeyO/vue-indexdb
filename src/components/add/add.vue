<template>
    <div>
        <v-top :tittle="tittle" :show-back-icon="true" v-on:go-back="hide"></v-top>
        <div class="content">
            <form onsubmit="return false">
                <input type="text" placeholder="输入姓名" v-model="name" />
                <input type="text" placeholder="输入手机号码" v-model="tel" />
                <textarea rows="5" placeholder="自我介绍" v-model="introdution">
                </textarea>
                <button class="btn btn-positive btn-block" @click="save">保存</button>
            </form>
        </div>
    </div>
</template>
<script>
import vTop from '../public/top/top.vue'
export default {
    name: "v-add",
    data() {
        return {
            tittle: "添加用户",
            showFlag: false,
            name: "",
            tel: "",
            introdution: "",
            users: [],
            myDB: {
                name: 'univisity',
                version: 4,
                db: null,
                ojstore: {
                    name: 'users',//存储空间表的名字
                    keypath: 'id'//主键
                }
            }
        }
    },
    watch: {
        name(e) {
            return e;
        },
        tel(e) {
            return e;
        },
        introdution(e) {
            return e;
        }
    },
    components: {
        vTop
    },
    mounted() {
        this.$store.dispatch("openDb", this.myDB);
    },
    methods: {
        hide(params) {
            // this.$store.dispatch("closeDB"); 
            if (JSON.parse(params)) {
                window.history.go(-1);
            }
        },
        save() {
            var user = 
             { 
                name:this.name,
                tel: this.tel,
                introdution: this.introdution
            };
            this.$store.dispatch("addUser", {
                db: this.myDB.db,
                name: this.myDB.ojstore.name,
                data: user
            }
            );
        }
    }
}
</script>
<style lang="stylus">
   @import './add.styl';
</style>

// {
//                 id: 3,
//                 name: this.name,
//                 tel: this.tel,
//                 introdution: this.introdution
//             },