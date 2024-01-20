
// сортировка по

const dropdown = document.querySelector(".sorting__dropdown");
const dropdownName = document.querySelector(".sorting__nameh3");


// dropdown.addEventListener("click", function () {
//   dropdownName.classList.toggle("nameh3");

// });



// сортировка пиццы

const pizza = document.querySelectorAll('.pizza');
const sortsClock = document.querySelector('.sorting__name')
let sorts = document.querySelectorAll('.sorting__all')
let actt = sorts[0]



function sortedЗizza () {

  sorts.forEach(function(item) {
    item.addEventListener('click',function() {
      if ( actt == this) {
        this.classList.add('alll');
    
      } else {
        actt.classList.remove('alll');
        this.classList.add('alll');
        actt = this;
      }
    })
  })

  
  sortsClock.addEventListener('click', function (e) {
  if(e.target.tagName !== 'BUTTON') return false
  
  let filterClass = e.target.dataset['f']

  pizza.forEach(function (ee) {
    ee.classList.remove('db')
    if(!ee.classList.contains(filterClass)) {
      ee.classList.add('db')
      
    }
  })
})

}
sortedЗizza()





// выбор пиццы "настройки"


  let extr = document.querySelectorAll('.all')
  let active = extr[0];
  let sizeall = document.querySelectorAll('.all1');
  let active1 = sizeall[0];
  

function settings(ex, ac) {

  

  for( let i = 0; i < ex.length; i++ ){
    ex[i].addEventListener('click', function(){




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