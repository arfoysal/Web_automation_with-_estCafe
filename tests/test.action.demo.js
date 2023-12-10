const { Selector } = require("testcafe");

fixture("Action demo test")
    .page("https://trytestingthis.netlify.app");

test("Test click action", async t => {
    await t
        .click("a[href='/contact']")
        .click("a[href='https://github.com/oviyak/Testing']");

})

test("Test type text action", async t => {
    await t
    .typeText('#fname', 'Foysal')
    .typeText('#lname', "Abdur")
});

test("Test double click action", async t => {
    await t
    .doubleClick("button[ondblclick='myFunction()']")
    .expect(Selector('#demo').innerText).eql("Your Sample Double Click worked!");
});

test("Test right click action", async t => {
    await t
    .rightClick("button[ondblclick='myFunction()']");
});

test("Test hover action", async t => {
    await t
    .hover("a[href='/']");
});

test("Test drag and drop action", async t => {
    await t
    .dragToElement("#drag1", "#div1")
});

test("Test scroll into view action", async t => {
    await t
    .scrollIntoView("div[class='footer'] h2:nth-child(1)");
});

test("Test alert/pop-up action", async t => {
    await t
    .setNativeDialogHandler(()=>true)
    .click("button[onclick='alertfunction()']")
    .expect(Selector('#demo').innerText).eql("You Pressed the OK Button!")
    .setNativeDialogHandler(()=>false)
    .click("button[onclick='alertfunction()']")
    .expect(Selector('#demo').innerText).eql("You pressed the Cancel Button!")
});

test("Test take screenshoot action", async t => {
    await t
    .takeScreenshot("scrrenshoot.png");
});
