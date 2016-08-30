/**
 * Created by Reziko on 8/29/2016.
 */

var person={
    firstName:'Joe',
    lastName:'Doe',
    dob:'12/2/1980',
    age:'36',
    adress:'12th Ave # 210',
    email:'ui@cubic.net',
};

console.log(person.firstName);
console.log(person.lastName);

var htmlContents="<table class='table table-stripped table-hover table-bordered'>"+
                '<tr>'+
                   '<th>First Name</th>'
                    +'<td>'+person.firstName+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<th>Last Name</th>'+
                    '<td>'+person.lastName +'</td>'+
                '</tr>'+
                '<tr>'+
                    '<th>D.O.B</th>'+
                    '<td>'+person.dob +'</td>'+
                '</tr>'+
                 '<tr>'+
                    '<th>Address</th>'+
                    '<td>'+person.adress +'</td>'+
                 '</tr>'+
                 '<tr>'+
                      '<th>Email</th>'+
                      '<td>'+person.email +'</td>'+
                 '</tr>'+
                  '</table>';
function loadPerson(){
    //alert("hello world");
    document.getElementById('person').innerHTML=htmlContents;
};
htmlContents+=