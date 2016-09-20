/**
 * Created by Reziko on 9/2/2016.
 */
var add = function () {
    var x;
    var y;
    this.obj = this;
    this.setx=function (val) {
        x=val;
    }
    this.sety=function (val) {
        y=val;
    }

    this.getx=function () {
        return x;
    }
    this.gety = function () {
        return y;
    }
    this.addition =function () {
        return x + y;
    }
}

console.log('Hello WOrld');
add.prototype.multiply = function () {
    return this.getx() * this.gety();
}
//var obj = new add()

var obj1 = new add();
    obj1.setx(2);
    obj1.sety(5);

var obj2 = new add();
    obj2.setx(6);
    obj2.sety(7);

console.log(obj2.getx());

obj1.sub = function () {
    return obj1.gety()- obj1.getx();
}
console.log(obj1.addition());
console.log(obj1.sub());

//console.log(obj2.sub()); throw error cose we didn't define obj2

var obj2 = new add();
console.log(obj2.getx()); // indefined
console.log(obj1.multiply());
console.log(obj2.multiply());

function login() {
    var credentials=[{
        'email':'bald@gmail.com',
        'password':'password'
    },
        {'email':'',
        'password':''},
        {
            'email':'',
            'password':''
        }
    ];

    this.validation = function () {
        var email = $('#email').val();
        var pass = $('#password').val();
        for (var i =0 ;i< credentials.length; i++){
            if(credential[i].email == email && credentials[i].password == pass){

            }else {
                //Throw Error msg
            };
        };
    }

}