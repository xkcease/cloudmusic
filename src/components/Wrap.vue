<template>
    <a-layout-content class="wrap">
        <slot></slot>
    </a-layout-content>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    .wrap {
        width: 980px;
        min-height: 700px;
        height: 100%;

        border: {
            left: 1px solid #d3d3d3;
            right: 1px solid #d3d3d3;
        }

        margin: 0 auto;
        background: #fff;
        overflow: hidden;
    }
</style>