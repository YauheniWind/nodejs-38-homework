const fs = require('fs')
const path = require('path')
const router = require('find-my-way')()

router.on('GET', '/cats', (req, res, params) => {
    res.end(JSON.stringify([
        {
            id: 1,
            name: 'Murzik',
            age: 30
        },
        {
            id: 2,
            name: 'Vasya',
            age: 15
        },
    ]))
})

router.on('GET', '/pets/images', (req, res, params) => {
    const imagePath = fs.readdir('/Users/evgenijgravdin/Desktop/nodejs-38-homework/frontend/images', function (err, data) {
        if (err) {
            throw err
        }
        data.map(imageName => {
            return path.resolve('/Users/evgenijgravdin/Desktop/nodejs-38-homework/frontend/images', imageName)
        })
    })
    console.log(1111, imagePath)
    res.end(imagePath)
})

router.on('POST', '/image/upload', (req, res, params) => {
    // TODO file upload 
    res.end(JSON.stringify({
        code: 200
    }))
})

module.exports = router
