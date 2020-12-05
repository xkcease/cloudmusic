<template>
    <div class="home">
        <Carousel :bannersProp="bannersProp" />
        <wrap>
            <div class="l-content">
                <HomeDiscover :itemProps="itemProps" />
                <HomeAlbum />
                <HomeToplist :listProp="listProp" />
            </div>
            <div class="r-content">
                <div></div>
                <div></div>
            </div>
        </wrap>
    </div>
</template>

<script>
import Wrap from '../components/Wrap';
import Carousel from '../components/home/Carousel';
import HomeDiscover from '../components/home/HomeDiscover';
import HomeAlbum from '../components/home/HomeAlbum';
import HomeToplist from '../components/home/HomeToplist';
import axios from 'axios';

export default {
    name: 'Home',
    components: {
        Wrap,
        Carousel,
        HomeDiscover,
        HomeAlbum,
        HomeToplist
    },
    data() {
        return {
            itemProps: [],
            bannersProp: [],
            listProp: {
                upList: [],
                newList: [],
                produceList: []
            }
        };
    },
    beforeRouteEnter(to, from, next) {
        function getBanners() {
            return axios.get('api/banner');
        }

        function getItem() {
            return axios.get('api/personalized?limit=8');
        }

        function getUpList() {
            return axios.get('api/playlist/detail?id=19723756');
        }

        function getNewList() {
            return axios.get('api/playlist/detail?id=3779629');
        }

        function getProduceList() {
            return axios.get('api/playlist/detail?id=2884035');
        }

        Promise.all([
            getBanners(),
            getItem(),
            getUpList(),
            getNewList(),
            getProduceList()
        ]).then(
            ([
                bannersData,
                itemData,
                upListData,
                newListData,
                produceListData
            ]) => {
                next(vm => {
                    vm.bannersProp = bannersData.data.banners;
                    vm.itemProps = itemData.data.result;
                    vm.listProp.upList = upListData.data.playlist.tracks.slice(
                        0,
                        10
                    );
                    vm.listProp.newList = newListData.data.playlist.tracks.slice(
                        0,
                        10
                    );
                    vm.listProp.produceList = produceListData.data.playlist.tracks.slice(
                        0,
                        10
                    );
                });
            }
        );
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.home {
    .l-content {
        width: 730px;
        border-right: 1.5px solid #d3d3d3;
        padding: 20px;
    }

    .r-content {
        width: 250px;
    }
}
</style>
