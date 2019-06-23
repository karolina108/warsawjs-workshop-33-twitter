// @ts-check
import { assert } from 'chai'
import { mount } from '@vue/test-utils'

import TweetList from "@/components/tweet-list";
import Tweet from "@/components/tweet";

suite('TweetList', () => {

    it('TweetList should contain at least one Tweet item', () => {
        const wrapper = mount(TweetList);
        assert.ok(wrapper.contains(Tweet));
    })

})