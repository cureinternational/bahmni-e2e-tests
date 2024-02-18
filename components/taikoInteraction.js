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
  toLeftOf,
  into,dropDown, highlight,attach,timeField,evaluate,scrollTo,clear,checkBox, clearHighlights,press,confirm,accept, above
} =require('taiko')
const path = require('path');
const { get } = require('http');
const taikoElement = require('./taikoElement');
const taikoAssert = require('./taikoAssert');
const taikoHelper = require('../bahmni-e2e-common-flows/tests/util/taikoHelper');
const gaugeHelper=require('../bahmni-e2e-common-flows/tests/util/gaugeHelper');
const logHelper = require('../bahmni-e2e-common-flows/tests/util/logHelper');
var errorElement='//DIV[@class="message-container error-message-container"]'

async function Click(element, type, relativeLocator) {
  const selector = getSelector(element, type);
  await taikoElement.waitToExists(selector)
  if (relativeLocator === undefined) {
    await scrollTo(selector)
    await click(selector,{navigationTimeout: process.env.actionTimeout,force:true,waitForNavigation:false});
  } else {
    await scrollTo(selector)
    await click(selector,{navigationTimeout: process.env.actionTimeout,force:true,waitForNavigation:false}, relativeLocator);
  }
  await taikoAssert.assertNotExists($(errorElement))
}

async function AlertClick(element, type,text) {
  try{
  const selector = getSelector(element, type);
  await taikoElement.waitToExists(selector)
    confirm(text, async () => await accept())
    await click(selector,{navigationTimeout: process.env.actionTimeout,force:true,waitForNavigation:false});
}
catch(e)
{
  logHelper.error(element,' of type is not clickable');
}
}
async function EvaluateClick(element) {
  try{
    await taikoElement.waitToExists(element)
    await evaluate(element, (el) => el.click())
    await taikoAssert.assertNotExists($(errorElement))

}
catch(e)
{
  logHelper.error(element,' is not getting evaluated');
}
}

async function Write(value,type,element,relativeLocator) {

  try{
  const selector = getSelector(element, type);
  await taikoElement.waitToExists(selector)
  if (relativeLocator === undefined)
  {
    await write(value,selector);
  }
  else
  {
    if(type=='xpath')
    {
      const xpathSelector=getSelector(relativeLocator, type);
      await write(value,xpathSelector);
    }
    else
    {
    await write(value,relativeLocator);
    }
  }
  await taikoAssert.assertNotExists($(errorElement))
}
catch(e){
  logHelper.error(element,' of type is not writable');
}
}
async function Clear(element)
{
  try
  {
    await clear(textBox(element));
  }
catch(e){
  logHelper.error(element,' of type is not clearable');
}
}
async function ScrollTo(element)
{
  try
  {
    await scrollTo(element);
  }
catch(e){
  logHelper.error(element,' is not scrollable');
}
}

async function Dropdown(dropdown,value)
{
  try{
  await dropDown(dropdown).select(value);
  }
  catch(e){
    logHelper.error(dropdown,' of dropdown is not selectable');
  }
}
async function pressEnter(){
  try{
  await press('Enter',{ waitForNavigation: true, navigationTimeout: process.env.actionTimeout })}
  catch(e){
    logHelper.error('Enter is not pressed');
  }
  await taikoAssert.assertNotExists($(errorElement))
}
async function Timefield(element,value)
{
  try{
  await timeField(element).select(value);
  }
  catch(e){
    logHelper.error(element,' of timefield is not selectable');
  }
  await taikoAssert.assertNotExists($(errorElement))
}

async function Attach(filePath,element){
  await attach(path.join(filePath), element, { force: true });
}

function getSelector(element, type) {
  switch (type) {
    case 'link':
      return link(element);
    case 'text':
      return text(element);
    case 'button':
      return button(element);
    case 'near':
      return near(element);
    case 'toRightOf':
      return toRightOf(element);
    case 'toLeftOf':
      return toLeftOf(element);
    case 'below':
      return below(element);
    case 'into':
      return into(textBox(element));
    case 'dropdown':
      return dropDown(element);
    case 'checkbox':
      return checkBox(toLeftOf(element));
    case 'textbox':
      return textBox(element);
    case 'xpath':
      return $(element);
    default:
      return into($(element));
  }
}

async function clickRight(element) {
      await rightClick(element);
  }

async function clickDouble(element) {
      await doubleClick(element);
  }

async function pressAndReleaseElement1(X, Y) {
    await mouseAction($('#button1'), 'press', {
      x: parseInt(X),
      y: parseInt(Y),
    })
    await mouseAction($('#button1'), 'release', {
        x: parseInt(X),
        y: parseInt(Y),
      })
    }

async function pressAndReleaseElement2(X, Y) {
        await mouseAction($('#button4'), 'press', {
          x: parseInt(X),
          y: parseInt(Y),
        });
        await mouseAction($('#button4'), 'release', {
          x: parseInt(X),
          y: parseInt(Y),
        });
      }

async function pressAndReleaseElement(X, Y) {
        await mouseAction('press', {
          x: parseInt(X),
          y: parseInt(Y),
        });
        await mouseAction('release', {
          x: parseInt(X),
          y: parseInt(Y),
        });
      }

module.exports={
    Click:Click,
    AlertClick,AlertClick,
    Write:Write,
    Clear:Clear,
    ScrollTo:ScrollTo,
    Attach:Attach,
    EvaluateClick:EvaluateClick,
    Dropdown:Dropdown,
    Timefield:Timefield,
    rightClick:clickRight,
    doubleClick:clickDouble,
    pressEnter:pressEnter,
    pressAndReleaseElement1:pressAndReleaseElement1,
    pressAndReleaseElement2:pressAndReleaseElement2,
    pressAndReleaseElement:pressAndReleaseElement,
    getSelector:getSelector

}
