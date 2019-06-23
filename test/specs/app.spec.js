// @ts-check
import { assert } from 'chai'
import { mount } from '@vue/test-utils'

import App from "@/components/app";
import TweetList from "@/components/tweet-list";

suite('App', () => {
    // Mocha nie uruchomi tego testu (it.skip)
    it.skip('should add 2 and 2', () => {
        const input = 2 + 2;
        const output =  4;
        assert.equal(input, output);
    });
    it.skip('should add 4 and 4', () => {
        const input = 4 + 4;
        const output =  8;
        assert.equal(input, output);
    });

    it('should render a single TweetList item', () => {
        const wrapper = mount(App);
        assert.ok(wrapper.contains(TweetList));
    })

})