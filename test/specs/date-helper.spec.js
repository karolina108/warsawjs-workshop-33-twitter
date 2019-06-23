import { myDate } from "@/helpers/date-helper";
import { assert } from 'chai';

suite('myDate', () => {
    it('should return null when passed falsy value', () => {
        const dateString = '';
        const input = myDate(dateString);
        const output = null;
        assert.equal(input, output);
    });

    it('should return proper date when pass UTC Date string', () => {
        const dateString = 'Fri Jun 14 2019 17:30:52 GMT+0200 (CEST)';
        const input = myDate(dateString);
        const output = '14.06.2019, 17:30:52';
        assert.equal(input, output);
    });
});