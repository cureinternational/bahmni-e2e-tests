'use strict';
const {
  link,
  click,
  button,
  rightClick,
  doubleClick,
  mouseAction,
  $,
  SearchElement,
  text,
  near,
  write,
  textBox,
  toRightOf,
  into,dropDown, highlight,
} =require('taiko')
const taikoInteraction=require('./taikoInteraction')
async function isPresent(element)
{
    return await element.exists(500, 1000)
}

async function waitToPresent(element)
{
    await waitFor(async () => (await element.exists()))
}
async function waitNotToPresent(element)
{
    await waitFor(async () => !(await element.exists()))
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