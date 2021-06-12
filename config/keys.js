if(process.env.NODE_ENV==='production'){
  module.exports = require('./prod')
}else{
  module.exports = require('./dev')
}

// module.exports = {
//   JWT_KEY: 'jbcsahbfvbgsfbvsbnfsjfjsbvfbvsbvcbvsfvsvbfbvbvfzvcbvfsvfvsv',
//   MONGOURI:
//     'mongodb+srv://urls:shivam1998@cluster0.e8vox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// };