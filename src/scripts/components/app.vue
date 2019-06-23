
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
    async mounted(){
        console.log('app vue is ready');
        const url = 'http://localhost:3000/tweets'

        // make request - old way to do this:
        // fetch(url)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((tweets) => {
        //         this.tweets = tweets;
        //     });

        try {
            const response = await fetch(url);
            const tweets = await response.json();
            this.tweets = tweets;
        } catch (err) {
            console.log(err);
        }

    }
}
</script>

<style>

</style>
