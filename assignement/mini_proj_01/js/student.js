/**
 * Created by Reziko on 8/30/2016.
 */

var studentArray=[];



function addStudent(e){

    e.preventDefault();
    var gender = "";

    var radios = document.getElementsByName('gender');
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }

    var person={
        'first':document.getElementById('fname').value,
        'lname':document.getElementById('lname').value,
        'gender': gender,
        'addres': document.getElementById('@dress').value,
        'city':   document.getElementById('cities').value,
        'country':document.getElementById('countries').value,
        'phone':document.getElementById('phone').value
        
           
    };
    studentArray.push(person);
    document.contact.reset();
}

console.log(studentArray);

function traversArray(e) {

    e.preventDefault();
    var htmlContents='<table class="table table-bordered table-hover" ><tr><th>Name</th>'
                               +'<th>Gender</th>'
                               +'<th>Address</th>'
                               +'<th> city</th>'
                               +'<th>Country</th>'
                               +'<th>Phone Number</th>' +

                             '</tr>';
    for (var i=0; i<studentArray.length; i++){
        htmlContents+='<tr><td>'+ studentArray[i].lname+','+studentArray[i].first+'</td>';
        htmlContents+='<td>'+studentArray[i].gender+'</td>';
        htmlContents+='<td>'+studentArray[i].addres+'</td>';
        htmlContents+='<td>'+studentArray[i].city +'</td>';
        htmlContents+='<td>'+studentArray[i].country +'</td>';
        htmlContents+='<td>'+studentArray[i].phone +'</td>';

        htmlContents+='</tr>'
    }
    htmlContents+='</table>';
    document.getElementById('display').innerHTML=htmlContents

}