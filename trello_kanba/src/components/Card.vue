<template>
    <div @click="zoom"
         v-bind:class="class_list()">
        <p>{{data.name}}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        props: {
            data: {
                required: true,
            },
        },
    })
    export default class Card extends Vue {
        public isZoomed: boolean = false;

        public zoom() {
            this.isZoomed = !this.isZoomed;
        }

        private class_list() {
            return [
                'postit',
                {zoomed: this.isZoomed},
                {rotated_postit: !this.isZoomed},
            ];
        }
    }
</script>

<style lang="css">
    .postit p {
        word-break: break-word;
        font-size: 0.8vh;
    }

    .postit {
        float: left;
        overflow: hidden;
        line-height: 0.9;

        width: 4vw;
        height: 4vw;
        padding: 5px;

        background: #ffc;

        -moz-box-shadow: 2px 2px 3px rgba(33, 33, 33, 1);
        -webkit-box-shadow: 2px 2px 3px rgba(33, 33, 33, .7);
        box-shadow: 2px 2px 3px rgba(33, 33, 33, .7);
        transition: transform 250ms;
        font-family: "Reenie Beanie", arial, sans-serif;
        z-index: 0;
    }

    .rotated_postit:nth-child(even) {
        -o-transform: rotate(4deg);
        -webkit-transform: rotate(4deg);
        -moz-transform: rotate(4deg);
        position: relative;
        top: 5px;
    }

    .rotated_postit:nth-child(3n) {
        -o-transform: rotate(-3deg);
        -webkit-transform: rotate(-3deg);
        -moz-transform: rotate(-3deg);
        position: relative;
        top: -5px;
    }

    .rotated_postit:nth-child(5n) {
        -o-transform: rotate(5deg);
        -webkit-transform: rotate(5deg);
        -moz-transform: rotate(5deg);
        position: relative;
        top: -10px;
    }

    .zoomed {
        position: relative;
        transform: scale(5.0);
        z-index: 5;
    }

</style>
