const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pariente', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(db => console.log('conectado wey :v'))
.catch(err => console.error(err));