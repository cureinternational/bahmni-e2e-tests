'use strict';
const assert = require('assert');
const { title, text, textBox, toLeftOf, evaluate, waitFor } = require('taiko')
const logHelper = require('../bahmni-e2e-common-flows/tests/util/logHelper');
const gaugeHelper = require('../bahmni-e2e-common-flows/tests/util/gaugeHelper');
var asserTTimeOut=parseInt(process.env.assertTimeOut)
async function assertTitle(userTitle) {
    assert.ok((await title()).includes(userTitle));
  }


  async function assertExists(element) {
    waitFor(1000)
    var check=await element.exists(1000,5000)
    if(!check)
    {
      logHelper.error(element,' is not exists');
      gaugeHelper.takeScreenshot()
      assert.fail(element+' is not exists')
    }
  }

  async function assertNotExists(element) {
    var check=await element.exists(1000,5000)
    if(check)
    {
      logHelper.error(element,' is exists');
      gaugeHelper.takeScreenshot()
      assert.fail(element+' is  exists')
    }
  }

 async function assertTextExists(content) {
    assert.ok(await text(content).exists(1000,5000));
  }

 async function assertTextDoesNotExists(content) {
    assert.ok(!(await text(content).exists(1000, 5000)));
  }

async function assertPageHasSetTimezone() {
    const getTime = await evaluate(() => {
      return new Date(1479579154987).toString();
    });
    assert.equal(getTime, 'Sat Nov 19 2016 13:12:34 GMT-0500 (Eastern Standard Time)');
  }

  async function assertUrl(url) {
    const currentUrl = await currentURL();
    assert.equal(currentUrl, url);
  }

  async function assertCookies() {
    const cookies = await getCookies();
    assert.ok(cookies.length > 0);
  }

  async function assertCookiesWithOptions(arg) {
    const cookies = await getCookies({ urls: [arg] });
    assert.ok(cookies.length > 0);
  }

  async function assertCookieWithInvalidOption(arg) {
    const cookies = await getCookies({ urls: [arg] });
    assert.ok(cookies.length === 0);
  }

  async function assertGeoLocation(longitude, latitude) {
    const geolocation = await evaluate(
      () =>
        new Promise((resolve) =>
          navigator.geolocation.getCurrentPosition((position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }),
        ),
    );
    assert.equal(geolocation.longitude, parseFloat(longitude));
    assert.equal(geolocation.latitude, parseFloat(latitude));
  }

  async function assertWidthAndHeight(width, height) {
    const innerWidth = await evaluate(() => window.innerWidth);
    const innerHeight = await evaluate(() => window.innerHeight);
    assert.equal(innerWidth, width);
    assert.equal(innerHeight, height);
  }

 function assertArray(actual,expected)
  {
    try{
    assert.ok(actual.includes(expected))
    }
    catch(error)
    {
    logHelper.error(`${expected} is not including ${actual}`);
    gaugeHelper.takeScreenshot()
    assert.fail(`${expected} is not including ${actual}`)
    }
  }

function assertArrayPresence(list,value)
{
  var check=list.includes(value)
  if(!check)
  {
    logHelper.error(list,`${value} is not exists`);
    gaugeHelper.takeScreenshot()
    assert.fail(value+' is not present in the list')
  }
}

function assertEquals(actual,expected )
{
  try
  {
  assert.equal(actual,expected)
  }
  catch(error)
  {
    logHelper.error(error);
    gaugeHelper.takeScreenshot()
    assert.fail(`${actual} is not equal to ${expected}`)
  }
}

function assertNotEmpty(text)
{
  try
  {
  assert.notEqual(text,'')
  }
  catch(error)
  {
    logHelper.error(error);
    gaugeHelper.takeScreenshot()
    assert.fail(`${text} is empty`)
  }
}
module.exports={
  assertTitle:assertTitle,
  assertTextExists:assertTextExists,
  assertArrayPresence:assertArrayPresence,
  assertTextDoesNotExists:assertTextDoesNotExists,
  assertPageHasSetTimezone:assertPageHasSetTimezone,
  assertUrl:assertUrl,
  assertCookies:assertCookies,
  assertCookiesWithOptions:assertCookiesWithOptions,
  assertCookieWithInvalidOption:assertCookieWithInvalidOption,
  assertGeoLocation:assertGeoLocation,
  assertWidthAndHeight:assertWidthAndHeight,
  assertArray:assertArray,
  assertExists:assertExists,
  assertNotExists:assertNotExists,
  assertEquals:assertEquals,
  assertNotEmpty:assertNotEmpty
}