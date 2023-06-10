'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modalHidden = document.querySelector('.modal');
const overlayHidden = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const openModal = function ()
{
    modalHidden.classList.remove('hidden');
    overlayHidden.classList.remove('hidden');
};

const closeModal2 = function ()
{
    modalHidden.classList.add('hidden');
    overlayHidden.classList.add('hidden');
};

for(let i=0; i < showModal.length; i++)
    showModal[i].addEventListener('click', openModal);

closeModal.addEventListener('click', closeModal2);
overlayHidden.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e)
{
    if(e.key === 'Escape' && !modalHidden.classList.contains('hidden'))
    closeModal2();
});




