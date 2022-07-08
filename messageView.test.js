/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message', () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    //Act
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    
    inputEl.value = 'This is a test message';

    buttonEl.click();

    //Assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a test message');
  });
  
  xit('clicks the button, clears the message and displays the message underneath', () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    //Act
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    
    inputEl.value = 'This is a test message';

    buttonEl.click();

    //Assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a test message');
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