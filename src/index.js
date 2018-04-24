import  './css/index.css';
import  './css/other.css';
import axios from 'axios';
import Navigo from 'navigo';
console.log('JavaScript was attached to the page!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
 blockLink();
 initRouting();
 
   
});

const router = new Navigo();

const initRouting = () => {

    router
 .on ({
     'products/home': (params) => {home(); },
     'products/about': (params) => { about(); },
     'products/contact': (params) => { contact();}

 })
 .resolve();

};


 const blockLink = () => {

   const links = document.querySelectorAll('a');

   links.forEach ((element => {

    element.addEventListener('click', (e) => {
        e.preventDefault();
        router.navigate(element.getAttribute('href'))
    });
   }))
};

const home = () => {
    const container = document.querySelector('.container');
    const main = 'http://194.182.69.199:3000/simplepage/main'
    axios
    .get(main)
    .then((result) => { return result.data })
    .then((data) => { 

        container.innerHTML = data;
        
    }) 
}

const about = () => {
    const container = document.querySelector('.container');
    const about = 'http://194.182.69.199:3000/simplepage/about'
    axios
    .get(about)
    .then((result) => { return result.data })
    .then((data) => { 

        container.innerHTML = data;
        
    }) 
}

const contact = () => {
    const container = document.querySelector('.container');
    const contact = 'http://194.182.69.199:3000/simplepage/contact'
    axios
    .get(contact)
    .then((result) => { return result.data })
    .then((data) => { 

        container.innerHTML = data;
        
    }) 
}