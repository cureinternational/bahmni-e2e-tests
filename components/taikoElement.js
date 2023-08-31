'use strict';
const {waitFor} =require('taiko')
const taikoInteraction=require('./taikoInteraction')
async function isPresent(element)
{
    return await element.exists(500, 1000)
}

async function waitToPresent(element)
{
    await waitFor(async () => (await element.exists(500,1000)))
}
async function waitNotToPresent(element)
{
    await waitFor(async () => !(await element.exists(500,1000)))
}
async function elementDisabled(element,type)
{
    var selector=taikoInteraction.getSelector(element,type)
    await selector.isDisabled()
}
module.exports = {
    isPresent: isPresent,
    waitToPresent: waitToPresent,
    waitNotToPresent:waitNotToPresent,
    elementDisabled: elementDisabled
}