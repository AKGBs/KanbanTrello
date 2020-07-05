<template>
    <div class="myrd">
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

    }
</script>

<style lang="css">
    .myrd {
        float: left;
        overflow: hidden;

        width: 29%;
        height: 5%;

        border: 1px solid black;
        margin: 5px;

        font-size: 1vh;
        padding: 5px;
    }
</style>
