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
  into,dropDown, highlight,attach,timeField,evaluate,scrollTo,clear,checkBox, clearHighlights
} =require('taiko')
const path = require('path');
const { get } = require('http');
async function Click(element, type, relativeLocator) {
  try{
  const selector = getSelector(element, type);
  await selector.exists(500,100);
  if (relativeLocator === undefined) {
    await highlight(selector);
    await clearHighlights()
    await click(selector,{ waitForNavigation: true, navigationTimeout: process.env.actionTimeout});
  } else {
    await highlight(selector);
    await click(selector,{ waitForNavigation: true, navigationTimeout: process.env.actionTimeout}, relativeLocator);
  }
}
catch(e){
  console.log(e);
}
}

async function EvaluateClick(element) {
  try{
    await scrollTo(element);
    await highlight(element);
    await evaluate(element, (el) => el.click())
}
catch(e){
  console.log(e);
}
}

async function Write(value,type,element,relativeLocator) {

  try{
  const selector = getSelector(element, type);
  if (relativeLocator === undefined) 
  {
    await selector.exists();
    await write(value,selector);
  } 
  else 
  {
    await relativeLocator.exists();
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
}
catch(e){
  console.log(e);
}
}
async function Clear(element,type,relativeLocator)
{
  try{
  const selector = getSelector(element, type);
  if (typeof relativeLocator === 'undefined') {
    await selector.exists();
    await clear(textBox(selector));
  } else {
    await selector.exists();
    await clear(textBox(selector));
  }
}
catch(e){
  console.log(e);
}
}
async function Dropdown(dropdown,value)
{
  try{
  await dropDown(dropdown).select(value);
  }
  catch(e){
    console.log(e);
  } 
}
async function pressEnter(){
  try{
  await press('Enter',{ waitForNavigation: true, navigationTimeout: process.env.actionTimeout })}
  catch(e){
  } 
}
async function Timefield(element,value)
{
  try{
  await highlight(element);
  await timeField(element).select(value);
  }
  catch(e){
  } 
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
    Write:Write,
    Clear:Clear,
    Attach:Attach,
    EvaluateClick:EvaluateClick,
    Dropdown:Dropdown,
    Timefield:Timefield,
    rightClick:clickRight,
    doubleClick:clickDouble,
    pressEnter:pressEnter,
    pressAndReleaseElement1:pressAndReleaseElement1,
    pressAndReleaseElement2:pressAndReleaseElement2,
    pressAndReleaseElement:pressAndReleaseElement

}
