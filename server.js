const express = require ('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()


mongoose.connect('mongodb://localhost:27017/blog');


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))



app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article 1',
        createdAt: new Date(), 
        description: 'Test description 1'
    },
    {
        title: 'Test Article  2',
        createdAt: new Date(), 
        description: 'Test description 2'
    }]
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)