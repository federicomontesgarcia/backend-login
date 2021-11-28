const mongoose=require('mongoose')

URI=('mongodb://localhost/udemy')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true,
    //useFindAndModifi:false
})
    .then(db=>console.log('base de datos conectada'))
    .catch(error=>console.log(error))

    module.exports=mongoose