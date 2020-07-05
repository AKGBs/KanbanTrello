<template>
    <p class="card">
        {{data.name}}
    </p>
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
    .card {
        float: left;
        overflow: hidden;

        width: 20%;
        height: 5%;

        border: 1px solid black;
        margin-left: 5px;
        margin-right: 5px;

        font-size: 1vh;
        padding: 5px;
    }
</style>
