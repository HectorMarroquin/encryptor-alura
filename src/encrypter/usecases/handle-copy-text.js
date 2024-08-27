
/**
 * 
 * @param {HTMLElement} resultBox 
 * @param {String} textOutput show in Box 
 */
export const handleCopyText = (resultBox, textOutput ) => {
    const existingMessage = resultBox.querySelector('.copy-message');
    if (existingMessage) {
        resultBox.removeChild(existingMessage);
    }

    const copyMessage = document.createElement('p');
    copyMessage.classList.add('copy-message');
    copyMessage.innerHTML = '';

    navigator.clipboard.writeText(textOutput.innerText).then(() => {
        copyMessage.innerText = 'Text copied to clipboard!';
    }).catch(err => {
        copyMessage.innerText = 'Error copying text';
    });

    resultBox.appendChild(copyMessage);
};