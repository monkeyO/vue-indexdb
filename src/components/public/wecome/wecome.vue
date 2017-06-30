<template>
    <div class="content">
        <ul class="table-view">
            <li class="table-view-cell" v-for="item in infoData" @click="selectDetails(item)">
                <a class="navigate-right">
                    <span class="media-object pull-left fa" :class="'fa-'+item.icon"></span>
                    <span class="badge">{{item.num}}</span>
                    {{item.tittle}}
                </a>
            </li>
        </ul>
        <v-detail ref="details" :detailData="detailData"></v-detail>
        <div class="nsr-card-loading">
            <v-loading :hide-loading="isloadingComplete">
            </v-loading>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import VDetail from '../detail/detail.vue';
import VLoading from '../loading/loading.vue';
export default {
    name: "v-wecome",
    data() {
        return {
            detailData: {}
        }
    },
    components: {
        VDetail,
        VLoading
    },
    mounted() {
        this.$nextTick(function () {
            this.fetchData(this);
        })
    },
    computed: mapState({
        infoData: function (state) {
            return state.infoData;
        },
        isloadingComplete: function (state) {
            return state.isloadingComplete;
        }

    }),
    methods: {
        fetchData(progress) {
            this.$store.dispatch("getData", {
                progress: progress,
                refresh: false
            });
        },
        selectDetails(data) {
            this.detailData = data;
            this.$refs.details.show();
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
     @import './wecome.styl';
</style>
