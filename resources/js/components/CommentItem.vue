<template>
    <div class="comment-item">
        <router-link :to="{name: 'comment', params: {id: comment.id}}" class="comment-item__link">
            <div class="comment-item__wrapper">
                <div class="comment-item__name">
                    <span>name: </span>{{ comment.name }}
                </div>
                <div class="comment-item__text">
                    <span>text: </span>{{ comment.text }}
                </div>
                <div class="comment-item__row">
                    <div class="comment-item__col">
                        <span>date: </span>{{ comment.date }}
                    </div>
                    <div class="comment-item__col">
                        <span>id: </span>{{ comment.id }}
                    </div>
                </div>
            </div>
        </router-link>
        <div class="comment-item__remove-wrapper">
            <button @click="removeComment" class="comment-item__remove">Удалить</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "CommentItem",
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapActions([
            'fetchComments',
            'deleteComment'
        ]),
        removeComment() {
            this.deleteComment({ id: this.comment.id })
            .then(() => {
                this.fetchComments();
            })
        }
    }
}
</script>

<style scoped lang="scss">
.comment-item {
    padding: 16px;
    border: 1px solid lightgray;
    border-radius: 6px;
    position: relative;
    &__link {
        display: block;
        text-decoration: none;
        color: #000000;
    }
    &__remove-wrapper {
        position: absolute;
        right: 16px;
        top: 16px;
    }
    span {
        color: darkgray;
        font-size: 14px;
    }
    &__name {
        font-size: 18px;
        margin-bottom: 8px;
        padding-right: 70px;
    }
    &__text {
        margin-bottom: 6px;
    }
    &__row {
        display: flex;
        flex-wrap: wrap;
        margin: -6px;
        justify-content: space-between;
    }
    &__col {
        padding: 6px;
    }
}
</style>
