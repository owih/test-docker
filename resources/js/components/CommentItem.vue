<template>
    <router-link :to="{name: 'comment', params: {id: comment.id}}" class="comment-item">
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
</template>

<script>
export default {
    name: "CommentItem",
    data() {
        return {
            comments: [],
        }
    },
    props: {
        comment: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
.comment-item {
    display: block;
    text-decoration: none;
    color: #000000;
    padding: 16px;
    border: 1px solid lightgray;
    border-radius: 6px;
    span {
        color: darkgray;
        font-size: 14px;
    }
    &__name {
        font-size: 18px;
        margin-bottom: 8px;
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
