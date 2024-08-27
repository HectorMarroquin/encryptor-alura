import {  decryptText, encryptText, handleCopyText } from "./usecases";

const textInput = document.querySelector('#textoIngresado');
const textOutput = document.querySelector('.resultado-texto');
const encryptButton = document.querySelector('.btn-blue');
const decryptButton = document.querySelector('.btn-grey');
const imageSearch = document.querySelector('#image-muneco');
const resultBox = document.querySelector('.presentacion__textarea__resultado');

let copyButton = document.createElement('button');
copyButton.classList.add('image-muneco', 'btn');
copyButton.setAttribute('id', 'copy-text');
copyButton.textContent = 'Copy';

const addCopyButton = () => {
    resultBox.appendChild(copyButton);
    copyButton.addEventListener('click', handleCopyText(resultBox, textOutput ));
};

encryptButton.addEventListener('click', () => {
    const encryptedText = encryptText(textInput.value);
    textOutput.innerText = encryptedText;
    imageSearch.style.display = 'none';

    if (!document.querySelector('#copy-text')) {
        addCopyButton();
    }
});

decryptButton.addEventListener('click', () => {
    const decryptedText = decryptText(textInput.value);
    textOutput.innerText = decryptedText;
    imageSearch.style.display = 'none';
});

