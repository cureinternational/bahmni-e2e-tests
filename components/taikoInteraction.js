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
  into,dropDown, highlight,attach
} =require('taiko')

async function Click(element, type, relativeLocator) {
  try{
  const selector = getSelector(element, type);
  await selector.exists();
  if (typeof relativeLocator === 'undefined') {
    await highlight(selector);
    await click(selector,{ waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
  } else {
    await highlight(selector);
    await click(selector, relativeLocator,{ waitForNavigation: true, navigationTimeout: process.env.actionTimeout });
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
  if (typeof relativeLocator === 'undefined') {
    await selector.exists();
    await write(value,selector);
  } else {
    await relativeLocator.exists();
    await write(value,relativeLocator);
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
  } 
}

async function Attach(filePath,element){
  await attach(path.join(filePath), to($(element)), { force: true });
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
    Attach:Attach,
    EvaluateClick:EvaluateClick,
    Dropdown:Dropdown,
    rightClick:clickRight,
    doubleClick:clickDouble,
    pressAndReleaseElement1:pressAndReleaseElement1,
    pressAndReleaseElement2:pressAndReleaseElement2,
    pressAndReleaseElement:pressAndReleaseElement

}
