
<template>
    <div>
        <TweetList :tweets="tweets"/>
    </div>
</template>

<script>
import TweetList from "@/components/tweet-list";
export default {
    name: "App",
    components: {
        TweetList
    },
    data(){
        return {
            tweets: []
        }
    },
    methods: {
        async fetchTweets() {
            const url = 'http://localhost:3000/tweets'
            try {
                const response = await fetch(url);
                return await response.json();
            } catch (err) {
                console.log(err);
            }
        }
    },
    async mounted(){
        this.tweets = await this.fetchTweets();
    }
}
</script>

<style>
</style>
