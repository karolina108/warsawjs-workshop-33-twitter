<template>
    <b-card
    class="mb-2"
  >
    <b-card-text>
      {{ tweet.body }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
    name: "Tweet",
    props: {
        tweet: {
            id: String,
            body: String
        }
    }
}
</script>

<style>

</style>
