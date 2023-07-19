// alert("Вiтаю Вас на сайтi про Україну!");

// function aa(){
//     var upol = (confirm("Перейти по посиланню?"));
//     if (upol == false){
        
//         window.location="Ukraine2.html";
//         console.log(upol);
        
//     }
    
// }


function aa(event){
    var upol = confirm("Перейти по посиланню?");
    if (upol == true){
    console.log(upol);
    }else{
    
    event.preventDefault();
    return false;
    }
    }


// let ab1 = document.getElementById("content-button1");
// let ab2 = document.getElementById("content1");
// ab1.addEventListener("click", () => {
//     ab2.classList.toggle("princes");
// })

// $(document).ready(function(){
//     var comment = $("<ul id='comment'></ul");
//     $('body').append(comment);

//     $('#button').click(function(){
//         var text = $('#text').val().trim();
//         if(text !== ''){
//             var list = $('<li>' + text + '</li>');
//             comment.append(list);
//             $('#text').val('');
//         }
//     });

//     comment.on('click', 'li,' function(){
//         var list = $(this);
//         if (list.hasClass('my')) {
//             list.hide();
//         } else {
//             list.css('text-decoration', 'line-through').addClass('my');
//             comment.append(listItems);
//         }
//     });
// });


// $(function() {
//     'use strict';

//     function Todo(elem) {

//       this.eList = elem.find('.todo__list');
//       this.eText = elem.find('.todo__text');
//       this.eButton = elem.find('.todo__add');

//       var that = this;
  
//       this.eText.on('input', function () {

//         that.eButton.prop('disabled', !this.value);
 
//       });

//       this.eButton.on('click', function () {
//         var val = that.eText.val();

//         if (val) {

//           that.addItem(val);

//           that.eText.val('');
//           that.eButton.prop('disabled', true);
//         }
//       });

//       this.eList.on('click', '.todo__list-item', function () {
//         var COMPLETED_CLASS = 'todo__list-item_completed_yes';
//         var item = $(this);
        
//         item.hasClass(COMPLETED_CLASS) ?
//           item.removeClass(COMPLETED_CLASS) :
//           item.addClass(COMPLETED_CLASS);
//       });

//       this.eList.on('click', '.todo__list-item-remove', function (e) {

//         $(this).closest('.todo__list-item').remove();
//       });
//     }

//     Todo.prototype.addItem = function(text, isCompleted) {

//       var item = $(
//         '<li class="todo__list-item">'+ 
//           '<span class="todo__list-item-text"></span>' +
//           '<span class="todo__list-item-remove">&#10060;</span>' +
//         '</li>'
//       );

//       if (isCompleted) {

//         item.addClass('todo__list-item_completed_yes');
//       }

//       item.find('.todo__list-item-text').text(text);

//       this.eList.append(item);
//     }

//     var todo = new Todo($('#list'));
//   });

  




window.onload = function(){
    var todolist = [];

// if(localStorage.getItem('todo')!=undefined){
//     // todolist = JSON.parse (localStorage.getItem('todo'));
// }

    document.getElementById('add').onclick = function(){
        var d = document.getElementById('in').value;
        var temp = {};
        temp.todo = d;
        // temp.check = false;
        var i = todolist.length;
        todolist[i] = temp;
        out();
        // localStorage.setItem('todo', JSON.stringify(todolist));
        return false; 
    }

    function out(){
        var out = '';
        for (var key in todolist) {
             out += todolist[key].todo + '<br>';
            // if (todolist[key].check == true){
            //     out += '<input type ="checkbox" checked>';
            // }
            // else{
            //     out += '<input type ="checkbox">';
            // }
           
        }
        document.getElementById('out').innerHTML = out;


}

}
