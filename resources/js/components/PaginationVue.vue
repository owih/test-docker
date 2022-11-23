<template>
<div class="pagination">
    <div class="pagination__row">
        <div class="pagination__col"
             @click="setPage(idx + 1)"
             v-for="(v, idx) in buttons"
             :key="idx"
             :class="{'disabled': idx + 1 === Number(getPage)}"
        >
            {{ idx + 1 }}
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "PaginationVue",
    data() {
      return {
          buttons: 0,
      }
    },
    props: {
        count: {
            type: Number,
            required: true,
        }
    },
    computed: {
      ...mapGetters([
          'getLimit',
          'getPage',
      ])
    },
    mounted() {
        this.countPaginationItems();
    },
    methods: {
        countPaginationItems() {
            this.buttons = Math.ceil(this.count / this.getLimit);
        },
        setPage(page) {
            this.$router.push({ name: 'home', query: { page } });
        }
    },
}
</script>

<style scoped lang="scss">
.pagination {
    &__row {
        display: flex;
        flex-wrap: wrap;
    }
    &__col {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid darkgray;
        transition: all 0.2s ease;
        cursor: pointer;
        &:not(:last-child) {
            border-right-color: transparent;
        }
        &:hover {
            background-color: black;
            color: white;
        }
        &.disabled {
            opacity: 0.6;
            pointer-events: none;
        }
    }
}
</style>
