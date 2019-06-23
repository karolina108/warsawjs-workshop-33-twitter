
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
            tweets: [
                {id: "1", body: "To jest pierwszy tweet ;-)"},
                {id: "2", body: "Code jest super"},
                {id: "3", body: "Mój MacBook jest super"},
                {id: "4", body: "Działa, ale nie wiem dlaczego"}
            ]
        }
    }
}
</script>

<style>

</style>
