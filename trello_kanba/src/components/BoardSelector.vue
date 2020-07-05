<template>
    <ul>
        <li>
            <label>Key</label>
            <input type="text" name="key" v-model="key"/>
        </li>
        <li>
            <label>Token</label>
            <input type="text" name="token" v-model="token"/>
        </li>
        <li>
            <label>Id board</label>
            <input type="text" name="idBoard" v-model="idBoard"/>
        </li>
        <li>
            <button @click="loadedBoard">Load board</button>
        </li>
    </ul>
</template>


<script lang="ts">
    import {Component, Emit, Vue} from 'vue-property-decorator';

    @Component
    export default class BoardSelector extends Vue {
        public BASE_PATH: string = 'https://api.trello.com';
        public token: string;
        public key: string;
        public idBoard: string;

        public constructor() {
            super();
            const data = this.$cookies.get('data');
            this.token = data.token;
            this.key = data.key;
            this.idBoard = data.idBoard;
        }

        @Emit()
        public async loadedBoard() {
            this.save_cookies();
            const URL_LISTS = `${this.BASE_PATH}/1/boards/${this.idBoard}/lists?key=${this.key}&token=${this.token}`;
            const URL_CARDS = `${this.BASE_PATH}/1/boards/${this.idBoard}/cards?key=${this.key}&token=${this.token}`;

            const [lists, cards] = await Promise.all([
                fetch(URL_LISTS).then((response) => response.json()),
                fetch(URL_CARDS).then((response) => response.json()),
            ]);

            lists.forEach((l: any) => {
                l.cards = cards.filter((c: any) => l.id === c.idList);
            });

            return lists;
        }

        private save_cookies() {
            this.$cookies.set('data', {
                token: this.token,
                key: this.key,
                idBoard: this.idBoard,
            });
        }

    }
</script>

<style lang="css">
    ul li {
        float: left;
        margin-left: 40px;
        margin-bottom: 10px;
    }
</style>
