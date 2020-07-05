<template>
    <div class="postit"
         @click="zoom"
         v-bind:class="{zoomed: isZoomed}">
        {{data.name}}
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
    }
</script>

<style lang="css">
    .postit {
        float: left;
        overflow: hidden;
        font-size: 8px;
        line-height: 0.9;

        width: 4vw;
        height: 4vw;

        margin: 5px;

        /*font-size: 1vh;*/
        padding: 5px;

        background: #ffc;

        -moz-box-shadow: 2px 2px 3px rgba(33, 33, 33, 1);
        -webkit-box-shadow: 2px 2px 3px rgba(33, 33, 33, .7);
        box-shadow: 2px 2px 3px rgba(33, 33, 33, .7);
        /*transition: transform 750ms;*/
        font-family: "Reenie Beanie", arial, sans-serif;
        z-index: 0;
    }

    .postit:nth-child(even) {
        -o-transform: rotate(4deg);
        -webkit-transform: rotate(4deg);
        -moz-transform: rotate(4deg);
        position: relative;
        top: 5px;
    }

    .postit:nth-child(3n) {
        -o-transform: rotate(-3deg);
        -webkit-transform: rotate(-3deg);
        -moz-transform: rotate(-3deg);
        position: relative;
        top: -5px;
    }

    .postit:nth-child(5n) {
        -o-transform: rotate(5deg);
        -webkit-transform: rotate(5deg);
        -moz-transform: rotate(5deg);
        position: relative;
        top: -10px;
    }

    .zoomed {
        position: fixed;
        transform: scale(5.0);
        z-index: 5;
    }

</style>
