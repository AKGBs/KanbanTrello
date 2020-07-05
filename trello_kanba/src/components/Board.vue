<template>
    <div>
        <BoardSelector @loaded-board="onLoadBoard"></BoardSelector>
        <table class="board">
            <tr>
                <th v-for="l in lists">{{l}}</th>
            </tr>
            <tr>
                <td v-for="l in lists"></td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import BoardSelector from '@/components/BoardSelector.vue';

    @Component({
        components: {
            BoardSelector,
        },
    })
    export default class Board extends Vue {
        public lists: string[] = ['Prova1', 'Prova2', 'Prova3'];

        public onLoadBoard(lists: [{ id: string, name: string }]) {
            this.lists = lists.map((x: any) => {
                return x.name;
            });
        }
    }
</script>

<style lang="css">
    .board {
        width: 100%;
        height: 85vh;
    }

    .board td {
        border: 1px solid black;
        height: 100%;
    }

    .board th {
        border: 1px solid black;
    }
</style>
