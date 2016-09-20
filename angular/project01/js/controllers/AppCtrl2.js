/**
 * Created by Reziko on 9/19/2016.
 */

angular.module('')

/*

*/

app.post('/service/customer/', function(req,res,next){
    try{
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function(err, conn){
            if(err)
            {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else
            {
                var insertSql = "INSERT INTO customer SET ?";
                var insertValues = {
                    "customerid" : reqObj.customerid,
                    "firstname" : reqObj.firstname,
                    "lastname" : reqObj.lastname,
                    "address" : reqObj.address,
                    "city": reqObj.city,
                    "zipcode": reqObj.zipcode,
                    "email": reqObj.email,
                    "phoneno": reqObj.phoneno,
                    "active": reqObj.active
                };


                var query = conn.query(insertSql, insertValues, function (err, result){
                    if(err){
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var name_Id = result.insertId;
                    res.json({"name":name_Id});

                });
            }
        });
    }
    catch(ex){
        console.error("Internal error:"+ex);
        return next(ex);
    }
});
