$(document).ready(function(){
    getTask();
    
 });

function getTask(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var data = JSON.parse(this.responseText);
            getTodoList(data);
        }
    };
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

function checkedIn()
{
    debugger;
    const promise1 = new Promise((resolve, reject) => {
        var boxes = $('input[type="checkbox"]').filter(function() {
            return this.checked && !this.disabled;
            }).length;
            

        resolve(boxes);
        });
        
        promise1.then((value) => {
            if(value == 5){
                alert("congrats you have completd 5 Congrats. 5 Tasks have been Successfully Completed .");
            }
        //console.log(value);
        // expected output: "Success!"
        });
}


function getTodoList(data){
    debugger;
    console.log(data);
    data.forEach( function(obj){
    $('#container').append('<input class="check-box" id="c' + obj.id +'" name="task" onChange="checkedIn()" class="form-check-input" type="checkbox"><span class="checkmark">' + obj.title +'</span><br/>');
   if(obj.completed){
    $('#c' + obj.id).prop('checked',true);
    $('#c' + obj.id).prop('disabled',true);
   }
    });
}


