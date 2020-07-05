<template>
    <div>
        <BoardSelector @loaded-board="onLoadBoard"></BoardSelector>
        <table class="table">
            <tr>
                <th v-for="l in lists">{{l.name}}</th>
            </tr>
            <tr>
                <td v-for="l in lists">
                    <Card v-for="c in l.cards" :data="c" :key="c.id"/>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import BoardSelector from '@/components/BoardSelector.vue';
    import Card from '@/components/Card.vue';

    @Component({
        components: {
            BoardSelector,
            Card,
        },
    })
    export default class Board extends Vue {
        public lists: [] = [];

        public onLoadBoard(lists: []) {
            this.lists = lists;
        }
    }
</script>

<style lang="css">
    .container {
        /*height: 90vh;*/
    }

    .table {
        height: 85vh;
        max-height: 85vh;
        table-layout: fixed;
    }

    .table td {
        border: 1px solid black;
        height: 80vh;
        vertical-align: top;
    }

    .table th {
        padding: 5px;
        border: 1px solid black;
        text-wrap: normal;
        font-size: 2vh;
        text-align: center;
        vertical-align: center;
    }
</style>
