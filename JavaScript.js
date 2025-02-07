const textarea = document.getElementById('textarea');
const charCountDisplay = document.getElementById('charCount');
const maxChars = 250;
const msg_area = document.getElementById('message_container');

textarea.addEventListener('input', function () {
    const currentLength = textarea.value.length;

    charCountDisplay.textContent = `${currentLength} / ${maxChars}`;

    if (currentLength >= maxChars) {
        textarea.classList.add('limit');
        charCountDisplay.classList.add('limit');
        

    } else {
        textarea.classList.remove('limit');
        charCountDisplay.classList.remove('limit');
        
    }
});