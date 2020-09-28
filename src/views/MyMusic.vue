<template>
    <wrap>
        <div class="mw">
            <div class="bg">
                <a class="btn" href="#"></a>
            </div>
        </div>
    </wrap>
</template>

<script>
import Wrap from '../components/Wrap';
export default {
    components: {
        Wrap
    }
};
</script>

<style lang="scss" scoped>
.mw {
    width: 807px;
    height: 268px;
    margin: 0 auto;
    padding-top: 100px;

    .bg,
    .bg .btn {
        background: url(../assets/mymusic.png) no-repeat;
    }

    .bg {
        height: 268px;
        position: relative;

        .btn {
            display: block;
            width: 167px;
            height: 45px;
            position: absolute;
            bottom: 22px;
            right: 158px;
            background-position: 0 9999px;
            cursor: pointer;

            &:hover {
                background-position: 0 -278px;
            }
        }
    }
}
</style>