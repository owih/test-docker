<template>
    <div class="comments-list">
        <div v-if="getLoading" class="comments-list__loading">
            <LoadingSpinner />
        </div>
        <div v-else-if="getFiltered.length" class="comments-list__wrapper">
            <div class="comments-list__row">
                <div class="comments-list__col" v-for="comment in getFiltered" :key="comment.id">
                    <CommentItem :comment="comment" />
                </div>
            </div>
        </div>
        <div v-else class="comments-list__warning">
            На странице нет комментариев
        </div>
        <div v-if="!getLoading && getComments.length" class="comments-list__pagination">
            <PaginationVue :count="getComments.length"/>
        </div>
    </div>
</template>

<script>
import CommentItem from "./CommentItem";
import LoadingSpinner from "./LoadingSpinner";
import PaginationVue from "./PaginationVue";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "CommentsList",
    data() {
        return {
            comments: [],
            page: this.$route.query.page || 1,
        }
    },
    components: {
        CommentItem,
        LoadingSpinner,
        PaginationVue
    },
    computed: {
        ...mapGetters([
            'getFiltered',
            'getComments',
            'getLoading',
        ]),
        fetchedComments() {
            return this.getComments
        }
    },
    watch: {
        fetchedComments() { this.filterArray() }
    },
    methods: {
          ...mapActions([
              "fetchComments",
              "setPage",
              'filterArray'
          ]),
    },
    mounted() {
        this.fetchComments();
        this.setPage({ page: this.$route.query.page || 1 })
        this.$watch('$route.query', (query) => {
            this.setPage({ page: query.page })
        })
    },
}
</script>

<style scoped lang="scss">
.comments-list {
    &__loading {
        text-align: center;
    }
    &__col {
        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
    &__pagination {
        margin-top: 24px;
    }
}
</style>
