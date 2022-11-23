<template>
<div v-if="getComments.length" class="filter-panel" @change="changeHandler">
    <div class="filter-panel__row">
        <div class="filter-panel__col">
            <div class="filter-panel__title"><strong>Сортировка по date</strong></div>
            <label for="date-max">По возрастанию</label>
            <input id="date-max" type="radio" value="max-date" name="filter">
            <label for="date-min">По убыванию</label>
            <input id="date-min" type="radio" value="min-date" name="filter">
        </div>
        <div class="filter-panel__col">
            <div class="filter-panel__title"><strong>Сортировка по id</strong></div>
            <label for="id-max">По возрастанию</label>
            <input id="id-max" type="radio" value="max-id" name="filter">
            <label for="id-min">По убыванию</label>
            <input id="id-min" type="radio" value="min-id" name="filter">
        </div>
        <div class="filter-panel__col">
            <button
                @click="clearFilter"
                class="filter-panel__control"
                :class="{'disable': !getFilter}"
            >
                Сбросить фильтр
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "FilterPanel",
    computed: {
      ...mapGetters([
          'getFilter',
          'getComments',
      ])
    },
    methods: {
        ...mapActions([
            'filterArray',
            'setFilter',
            'clearFilter',
        ]),
        changeHandler(e) {
            const val = e.target.value;
            const [direction, type] = val.split('-');
            this.setFilter({ direction, type });
            this.filterArray();
        }
    }
}
</script>

<style scoped lang="scss">
.filter-panel {
    &__title {
        margin-bottom: 4px;
    }
    &__col {
        &:not(:last-child) {
            margin-bottom: 6px;
        }
    }
    &__control {
        padding: 8px;
        border: 1px solid black;
        color: black;
        background-color: white;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s ease;
        cursor: pointer;
        &:hover {
            border: 1px solid white;
            color: white;
            background-color: black;
        }
        &.disable {
            opacity: 0.7;
            pointer-events: none;
        }
    }

}
</style>
