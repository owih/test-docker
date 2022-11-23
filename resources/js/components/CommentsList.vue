<template>
    <div class="comments-list">
        <div v-if="getComments.length" class="comments-list__wrapper">
            <div class="comments-list__row" v-for="comment in getComments" :key="comment.id">
                <div class="comments-list__col">
                    <CommentItem :comment="comment" />
                </div>
            </div>
        </div>
        <div v-else-if="getLoading" class="comments-list__loading">
            <div class="comments-list__spinner"></div>
        </div>
        <div v-else class="comments-list__warning">
            Комментариев нет
        </div>
    </div>
</template>

<script>
import CommentItem from "./CommentItem";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "CommentsList",
    data() {
        return {
            comments: [],
        }
    },
    components: {
        CommentItem
    },
    computed: {
        ...mapGetters([
            'getComments', 'getLoading',
        ]),
    },
    methods: {
      ...mapActions([
          "fetchComments",
      ])
    },
    // watch: {
    //   getComments: (val) => {
    //       console.log(val)
    //       this.comments = val;
    //   },
    // },
    mounted() {
        this.fetchComments();
    }
}
</script>

<style scoped lang="scss">
.comments-list {
    &__loading {
        text-align: center;
    }
    &__spinner {
        display: inline-block;
        width: 80px;
        height: 80px;
        &:after {
            content: " ";
            display: block;
            width: 64px;
            height: 64px;
            margin: 8px;
            border-radius: 50%;
            border: 6px solid #000;
            border-color: #000 transparent #000 transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
}
</style>
