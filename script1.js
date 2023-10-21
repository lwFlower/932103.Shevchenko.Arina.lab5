const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');

const btn1 = document.querySelector('#openModal1');
const btn2 = document.querySelector('#openModal2');
const btn3 = document.querySelector('#openModal3');

btn1.onclick = function (){
    modal1.style.display = 'block';
};

btn2.onclick = function (){
    modal2.style.display = 'block';
};

btn3.onclick = function (){
    modal3.style.display = 'block';
};

window.onclick = function (event){
    if (event.target == modal1){
        modal1.style.display = 'none';
        }
    if (event.target == modal2){
        modal2.style.display ="none";
        }
    if (event.target == modal3){
        modal3.style.display ="none";
        }
};