'use strict';
const {waitFor} =require('taiko');
const taikoInteraction = require('./taikoInteraction');
const asserTTimeOut=parseInt(process.env.asserTTimeOut)
const actionTimeout=parseInt(process.env.actionTimeout)
const logHelper = require('../bahmni-e2e-common-flows/tests/util/logHelper');

async function isPresent(element)
{
    var check=false
    try{
        check= await element.isVisible(200,asserTTimeOut)
    }
    catch(e){
        logHelper.info(element ,' is not present');
    }
    return check;
}

async function isNotPresent(element)
{
    var check=false
    try{
    check= !(await element.isVisible(200,asserTTimeOut))
    }
    catch(e){
        logHelper.info(element ,' is still present');
    }
    return check
}
async function isExists(element)
{
    var check=false;
    check= await element.exists(200,asserTTimeOut)
    if(!check)
        logHelper.info(element ,' is not exists');
    return check;
}

async function isNotExists(element)
{
    var check=false;
        check= !await element.exists(200,asserTTimeOut)
     if(!check)
        logHelper.info(element ,' is exists');
    return check;
}
async function waitToExists(element)
{
    try{
        var isFound = true;
        await waitFor(async () => (
            isFound=await element.exists(200,asserTTimeOut)))
        if(!isFound)
            logHelper.error(element ,' still not Exists');
        }
        catch(e)
        {
            logHelper.info("got exception in wait to exists");
        }
}
async function waitNotToExists(element)
{
    try{
    await waitFor(async () => !(await element.exists(200,asserTTimeOut)))
    }
    catch(e)
    {
        logHelper.info(element ,' still Exists');
    }
}
async function waitToPresent(element)
{
    try{
    var isFound = true;
    do {
        isFound = await element.isVisible(200, asserTTimeOut)
    } while (!isFound)
    }
    catch(e){
        logHelper.info(element ,' still not present');
    }
}

async function waitToEnabled(element)
{
    try{
    var isFound = true;
    do {
        isFound = !await element.isDisabled(200, asserTTimeOut)
    } while (!isFound)
    }
    catch(e){
        logHelper.info(element ,' still not present');
    }
}

async function waitNotToPresent(element)
{
    try{
        var isFound = true;
        do {
            isFound = await element.isVisible(200, asserTTimeOut)
        } while (!isFound)
        }
        catch(e){
            logHelper.info(element ,' still present');
        }
}
async function elementDisabled(element)
{
    var check=false;
    try
    {
    check= await element.isDisabled(200,asserTTimeOut)
    }
    catch(e)
    {
        logHelper.info(element ,' is not disabled');
    }
    return check
}

async function elementEnabled(element)
{
    var check=false;
    try
    {
    check= !(await element.isDisabled(200,asserTTimeOut))
    }
    catch(e)
    {
        logHelper.info(element ,' is enabled');
    }
    return check
}

async function getText(element)
{
    try
    {
    return (await element.text())
    }
    catch(e)
    {
        logHelper.info(element ,' text not found');
    }
}
module.exports = {
    isPresent: isPresent,
    isNotPresent: isNotPresent,
    isExists:isExists,
    isNotExists:isNotExists,
    waitNotToExists:waitNotToExists,
    waitToExists:waitToExists,
    waitToPresent: waitToPresent,
    waitNotToPresent:waitNotToPresent,
    waitToEnabled:waitToEnabled,
    elementDisabled: elementDisabled,
    elementEnabled: elementEnabled,
    getText:getText
}