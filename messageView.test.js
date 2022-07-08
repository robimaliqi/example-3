/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
  });

  it('clicks the hide button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    //Show the message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    //Then hide the message
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    //Assert that the message element is not on the page
    expect(document.querySelector("#message")).toBeNull();
  });
});