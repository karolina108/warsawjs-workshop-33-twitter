// @ts-check
import { assert } from 'chai'
import { mount } from '@vue/test-utils'

import TweetList from "@/components/tweet-list";
import Tweet from "@/components/tweet";

suite('TweetList', () => {

    it('TweetList should contain at least one Tweet item', () => {
        const wrapper = mount(TweetList, {
            propsData: {
                tweets: [
                    {id: '1', body: 'test tweet 1'},
                    {id: '2', body: 'test tweet 2'}
                ]
            },
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(Tweet));
    })

})