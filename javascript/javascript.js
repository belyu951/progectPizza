
// сортировка по

const dropdown = document.querySelector(".sorting__dropdown");
const dropdownName = document.querySelector(".sorting__nameh3");

dropdown.addEventListener("click", function () {
  dropdownName.classList.toggle("nameh3");
});

// button добавить

let button = document.querySelectorAll('.pricebutton__button')
let quantity = document.querySelectorAll('.elips')
let act = button[0]
for(let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function (e) {
    for(let p = 0; p < quantity.length; p++){
    quantity[i].classList.add('db1')
  }
})
}

// сортировка пиццы
console.log();

const pizza = document.querySelectorAll('.pizza');
document.querySelector('.sorting__name').addEventListener('click', function (e) {
  if(e.target.tagName !== 'BUTTON') return false;


  let filterClass = e.target.dataset['f']

  pizza.forEach(function (ee) {
    ee.classList.remove('db')
    if(!ee.classList.contains(filterClass)) {
      ee.classList.add('db')
      
    }
  })
})





// выбор пиццы "настройки"







  let prise = document.querySelector('.pricebutton__price');
  let endPrise = document.querySelector('.freebasket__title');

  let extr = document.querySelectorAll('.all')
  let active = extr[0];
  let sizeall = document.querySelectorAll('.all1');
  let active1 = sizeall[0];
  

function settings(ex, ac,) {

  

  for( let i = 0; i < ex.length; i++ ){
    ex[i].addEventListener('click', function(){

      let arr = [];
      let prise = document.querySelectorAll('.pricebutton__price');
      for( let i = 0; i < prise.length; i++ )
    arr.push(prise[i].textContent);
console.log(arr);


      if ( ac == this) {
        this.classList.add('active');

      } else {
        ac.classList.remove('active');
        this.classList.add('active');
        ac = this;
      }
      

      });
  }

}
settings(extr,active);
settings(sizeall,active1);
