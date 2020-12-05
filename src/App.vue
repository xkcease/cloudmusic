<template>
    <div id="app">
        <Topbar />
        <router-view />
        <Foot />
        <Player />
    </div>
</template>

<script>
    import Topbar from './components/Topbar';
    import Foot from './components/Foot';
    import Player from './components/Player';

    export default {
        components: {
            Topbar,
            Foot,
            Player
        }
    }
</script>

<style>
    body {
        background: #f5f5f5;
    }
</style>