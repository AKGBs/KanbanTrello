<template>
    <html>
    <head>
        <link href="http://fonts.googleapis.com/css?family=Reenie+Beanie:regular" rel="stylesheet" type="text/css">
    </head>
    <body>
    <div id="app">
        <Board/>
    </div>
    </body>
    </html>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Board from './components/Board.vue';

    @Component({
        components: {
            Board,
        },
    })

    export default class App extends Vue {
    }
</script>

<style lang="scss">
</style>
