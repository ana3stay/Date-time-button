function GetJson()
{   

    Data = new Date();

    let user = {
        "time": String(Data.getHours()).padStart(2, '0')+':'+String(Data.getMinutes()).padStart(2, '0')+':'+String(Data.getSeconds()).padStart(2, '0'),
        "date": String(Data.getDate()).padStart(2, '0')+'.'+String(Data.getMonth()+1).padStart(2, 0)+'.'+Data.getFullYear()
    }

    let response = fetch('http://localhost:3000/users', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    });

    setTimeout(function(){ 
        location.reload(); 
    }, 1000);
}   
function DeleteJson(id)
{
    let response = fetch('http://localhost:3000/users/'+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    setTimeout(function(){
        location.reload();
    }, 1000);
}

function UpdateJson(id)
{   
    Data = new Date();

    let user = {
        "time": String(Data.getHours()).padStart(2, '0')+':'+String(Data.getMinutes()).padStart(2, '0')+':'+String(Data.getSeconds()).padStart(2, '0'),
        "date": String(Data.getDate()).padStart(2, '0')+'.'+String(Data.getMonth()+1).padStart(2, 0)+'.'+Data.getFullYear()
    }

    let response = fetch('http://localhost:3000/users/'+id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    setTimeout(function(){
        location.reload();
    }, 1000);
}   


let elements = document.getElementById('elements');
let request = fetch('http://localhost:3000/users')
.then(response => response.json())
.then(commits => commits.forEach(element => {
    elements.innerHTML +='<p><span>время:'+element.time+' дата:'+element.date+'</span>'+ 
    '<button onclick="DeleteJson('+element.id+')">Удалить</button>'+
    '<button onclick="UpdateJson('+element.id+')">Обновить</button></p>';
}));
