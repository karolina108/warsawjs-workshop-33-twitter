<template>
    <div class="TweetList">
        <Tweet 
            v-for="tweet in tweets"
            :key="tweet.id"
            :tweet="tweet">
        </Tweet>
    </div>
</template>

<script>
import Tweet from "@/components/tweet"
export default {
    name: "TweetList",
    components: {
        Tweet
    },
    props: {
        tweets: Array
    },
    mounted(){
        console.log(this.tweets)
    }
}
</script>

<style>

</style>
