import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('confirmation of storage = window.sessionStorage', assert => {
    const expected = window.sessionStorage;

    assert.equal(store.storage, expected);
});

test('get and save methods', assert => {
    const a = 'torte';
    const torte = { flavor: 'chocolate' };

    store.save(a, torte);

    const retrieve = store.get(a);

    assert.deepEqual(retrieve, torte);

});