<template>
    <div id="app">
        <topbar></topbar>
        <router-view />
        <foot></foot>
    </div>
</template>

<script>
    import Topbar from './components/Topbar';
    import Foot from './components/Foot';

    export default {
        components: {
            Topbar,
            Foot,
        }
    }
</script>

<style>
    body {
        background: #f5f5f5;
    }
</style>