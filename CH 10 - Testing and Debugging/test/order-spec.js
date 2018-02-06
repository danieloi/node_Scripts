//from 'Injecting Dependencies with rewire' video

var expect = require('chai').expect;
var rewire = require('rewire');
var order = rewire('../lib/order');

describe('Ordering Items', function() {
    beforeEach(() => {
        this.testData = [
            {sku: 'AAA', qty: 10},
            {sku: 'BBB', qty: 0},
            {sku: 'CCC', qty: 3},
        ];

        order.__set__('inventoryData', this.testData); //swaps out real data for mock data;
    });

    it('order an item when there are enough in stock', (done) => {
        order.orderItem('CCC', 3, () => {
            done();
        });
    });
});