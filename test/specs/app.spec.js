// @ts-check
import { assert } from 'chai';
import { mount } from '@vue/test-utils';
//import nock from 'nock';

import App from "@/components/app";
import TweetList from "@/components/tweet-list";

suite('App', () => {

    it('should render a single TweetList item', () => {
        const wrapper = mount(App, {
            stubs: {
                "b-card": true,
                "b-card-text": true,
            }
        });
        assert.ok(wrapper.contains(TweetList));
    })

    it('function fetchTweets() exists', () => {
        const wrapper = mount(App, {
            stubs: {
                // mockowanie całego tweeta
                Tweet: true
            }
        });

        // szukamy, gdzie jest fetchTweets()
        // console.log("wrapper", wrapper)
        // console.log('--------------------------------------')
        // console.log("wrapper vm", wrapper.vm);
        // console.log('--------------------------------------')
        // console.log("wrapper element", wrapper.element);
        // console.log('--------------------------------------')
        // console.log("wrapper options", wrapper.options);
        // console.log('--------------------------------------')

        // sprawdzamy, czy fetchTweets() jest funkcją:
        assert.isFunction(wrapper.vm.fetchTweets);
    })

    // nie działa z powodu braku modułu fs; nie wiadomo czemu
    it.skip('should fetch tweets from external source via HTTP request', async () => {
        const wrapper = mount(App, {
            stubs: {
                Tweet: true
            }
        });

        nock('http://localhost:3000')
            .get('/tweets')
            .reply(200, [
                {id: "1", body: "Tweet"}
            ]);

        const ft = wrapper.vm.fetchTweets;
        const response = await ft();
        console.log(response); // JSON
        assert.lengthOf(response, 1);
    })
})