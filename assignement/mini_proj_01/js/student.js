/**
 * Created by Reziko on 8/30/2016.
 */

var studentArray=[];

function addStudent(e){

    e.preventDefault();

    var gender = "";
    var radios = document.getElementsByName('gender');
    var checkeditem = false;

    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            checkeditem = true;
            break;
        }
    }

    if (checkeditem == false)//validate the gender
    {
        $('#genderLbl').addClass('error');
        $('#gendErr').html('select gender').addClass('error');

    }
    else
    {
        $('#genderLbl').removeClass('error');
        $('#gendErr').html('');

    }

    var first_name = $('#fname').val();// how to read a value from text boxe
    if(first_name.length == 0){
        $('#firstNameLbl').addClass('error');
        $('#fnameErr').html('First Name Can Not Be Empty').addClass('error');
    }
    else {
        $('#firstNameLbl').removeClass('error');
        $('#fnameErr').html('').removeClass('error');
    }
    
    var last_name =$('#lname').val();
    if(first_name.length == 0){
        $('#lastNameLbl').addClass('error');
        $('#lnameErr').html('Last Name Can Not Be Empty').addClass('error');
    }
    else {
        $('#lastNameLbl').removeClass('error');
        $('#lnameErr').html('').removeClass('error');
    }
    
    var address = $('#adress').val();
    if(first_name.length == 0){
        $('#addressLbl').addClass('error');
        $('#addressErr').html('Address Can Not Be Empty').addClass('error');
    }
    else {
        $('#addressLbl').removeClass('error');
        $('#addressErr').html('').removeClass('error');
    }

    var city = $('#cities').val();
    if(first_name.length == 0){
        $('#cityLbl').addClass('error');
        $('#cityErr').html('City not filed').addClass('error')
    }
    else {
        $('#cityLbl').removeClass('error');
        $('#cityErr').html('').removeClass('error');
    }

    var country = $('#countries').val();
    if(first_name.length == 0){
        $('#countryLbl').addClass('error');
        $('#countError').html('Country not filed').addClass('error');
    }
    else {
        $('#countryLbl').removeClass('error');
        $('#countError').html('').removeClass('error');
    }

    var phone = $('#phone').val();
    if(first_name.length == 0){
        $('#phoneLbl').addClass('error');
        $('#phonError').html('City not filed').addClass('error');
    }
    else {
        $('#phoneLbl').removeClass('error');
        $('#phonError').html('').removeClass('error');
    }

    var person={
        'first':document.getElementById('fname').value,
        'lname':document.getElementById('lname').value,
        'gender': gender,
        'addres': document.getElementById('adress').value,
        'city':   document.getElementById('cities').value,
        'country':document.getElementById('countries').value,
        'phone':document.getElementById('phone').value
        
           
    }
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

        htmlContents+='</tr>';
    }
    htmlContents+='</table>';
   // document.getElementById('display').innerHTML=htmlContents;
    $('#display').html(htmlContents); //jquery code replce JS code

}


 $(document).ready(function(){
     $('#first').hide();
     $('#second').hide();
    // $('#btn1').click(function () {  //
    //     addStudent(e));
     $('#btn1').on('click ',function () {
        alert("Hello");
     });

     $('#firstbtn').on('click',function () {

         $('#first').show();
     });
     $('#secbtn').on('click',function () {
         $('#second').show();
     });

     $('#thirdbtn').on('click',function () {
         $('#firstbtn').trigger('click');
         $('#secbtn').trigger('click');
     });
     $('#btn4').on('click',function () {
         $('#first_name').addClass('error');

     });
     $('#btn5').on('click',function () {
         $('#first_name').removeClass('error');
     });


});



