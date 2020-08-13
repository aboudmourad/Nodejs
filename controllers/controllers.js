const  { Blog }  = require('../models/Blogs')

const homepage =(request,respnose)=>{
    if (request.method === 'GET') {
        Blog.find()
        .then(result=> respnose.render('index',{ result })
        )
        .catch( err =>console.log(err))
    }
}

const addBlog =(request,respnose)=>{

    if (request.method === 'GET') {
        respnose.render('post')
    }

    if (request.method === 'POST'  ){

        if ( request.body.title.length <= 25 &&  request.body.snippet.length <= 25 && request.body.body.length <= 100){
            const blog = new Blog(request.body)
            blog.save()
                .then( result => respnose.redirect('/'))
                .catch( error => {
                    
                    respnose.render('post', { error } )})
            } else {
                const error = ' title and snippet should be less than 25, body should be less then 100 Char'
                respnose.render('post', {error})
            }
        }


}


const deletePost =(request,respnose)=>{
    console.log(request.params.id, request.method)
   
    Blog.findByIdAndDelete({_id:request.params.id})
        .then( result => respnose.redirect('/'))
        .catch( err => console.log(err))
    
}
const updateBlog =(request,respnose)=>{
    if (request.method === 'GET') {
        Blog.findById(request.params.id)
        .then( result => {
        
            respnose.render('update',{result})})
        .catch( err => console.log(err))
        
    }

    if ( request.method === 'POST'){
        console.log(request.params.id)
        Blog.findByIdAndUpdate({_id:request.params.id})
        .then( result => {
                result.title = request.body.title;
                result.snippet = request.body.snippet;
                result.body = request.body.body;
                result.save()
                    .then( value=>
                        respnose.redirect('/'))
                    .catch ( err=> console.log(err))
            })
        .catch( err => console.log(err))
    }
   
    
}

module.exports={
    homepage,
    addBlog,
    deletePost,
    updateBlog
    
}



