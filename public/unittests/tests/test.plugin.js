/* global jQuery, QUnit */
/* eslint no-plusplus:0 */
/**
 * @description Basic Unit test example for the jQuery plugin using qUnit
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
QUnit.test('Simple plugin test', (assert) => {
  // Simple assertion to determine if the p lub
  assert.equal(
    typeof jQuery().animateContent,
    'function',
    'Ensure the the custom function has been added to the jQuery namespace.'
  );
});
