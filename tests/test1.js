fixture('Getting Started')
    .page("https://google.com");

test('My first test', async t => {
    await t.typeText('#APjFqb', "Hello Testcafe");
    await t.click('.gNO89b');
    await t.wait(4000);


});

test('My 2nd test', async t => {
    await t
    .typeText('#APjFqb', "Testcafe")
    .click('.gNO89b')
    .wait(4000);

});
