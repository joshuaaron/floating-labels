import './style.scss';

const splitByLetter = (text: string) =>
    [...text].map((text, idx) => {
        const node = document.createElement('span');
        node.textContent = text;
        node.style.setProperty('--index', `${idx}`);
        return node;
    });

const els = document.querySelectorAll('[data-split]');
els.forEach((label) => label.replaceChildren(...splitByLetter(label.textContent!)));
