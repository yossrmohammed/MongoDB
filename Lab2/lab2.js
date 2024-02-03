////////////[1]//////////////////////
db.products.aggregate([
{
    $group:{
        _id:"$category",
        totalProducts:{$sum:1}
        }
    
    }
])
    
//////////////////////[2]////////////////////////////
    db.products.aggregate([
    {
        $group: {
            _id: "$category",
            maxPrice: { $max: "$price" } } 
            }] )
/////////////////////[3]////////////////////////////
db.users.aggregate([
            {$match:{
                name:"ahmed"
                }
            },
              {  $lookup:{
                    from:"orders",
                    localField:"_id",
                    foreignField:"userId",
                    as:"UserOrder"
                    }
                },
                  {
    $unwind: "$UserOrder"
  },
  {
    $unwind: "$UserOrder.productsIds"
  },
  {
    $lookup: {
      from: "products",
      localField: "UserOrder.productsIds",
      foreignField: "_id",
      as: "UserOrder.productDetails"
    }
  },

            ])
  ////////////////////[4]/////////////////////////////
  db.users.aggregate([
            {$match:{
                name:"ahmed"
                }
            },
              {  $lookup:{
                    from:"orders",
                    localField:"_id",
                    foreignField:"userId",
                    as:"UserOrder"
                    }
                },
                  {
    $unwind: "$UserOrder"
  },
  {
    $unwind: "$UserOrder.productsIds"
  },
  {
    $lookup: {
      from: "products",
      localField: "UserOrder.productsIds",
      foreignField: "_id",
      as: "UserOrder.productDetails"
    }
  },
  {
    $unwind: "$UserOrder.productDetails",
      
    
  },
  {
    $group: {
      _id: "$UserOrder._id",
      totalOrder: { $sum: "$UserOrder.productDetails.price" }
    }
  }, 
  {
    $sort: { totalOrder: -1 }
  },
  {
    $limit: 1
  }
       ])
//////////////////////////////////////////////

mongoimport --uri "mongodb+srv://yossrMohammed:2512000@cluster0.mnqzvw4.mongodb.net/library" --collection book --file /home/yossr/Downloads/books.json --jsonArray
////////////////////////////////////////////////////
 db.book.aggregate([
  {$unwind:"$categories"}, 
  
  {$match:{categories:"Open Source"}},
  {$group:{_id:"$categories",
      count:{$sum:1}
      }}
  
  
  ])
 ///////////////////////////////////////////////
    db.book.aggregate([
  {$unwind:"$authors"}, 
  {$group:{_id:"$authors", count:{$sum:1}}},
  {$sort:{count:-1}},
  {$limit:5}
  
  ])   
  /////////////////////////////////////////////////////
      db.book.aggregate([
  {$unwind:"$authors"}, 
  {$project:{titelAndAuthor:{$concat:['$title'," By ", "$authors"]}}}
  
  ])
/////////////////////////////////////////////
  
