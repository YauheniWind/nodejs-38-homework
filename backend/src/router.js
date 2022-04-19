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

router.on('POST', '/image/upload', (req, res, params) => {
  // TODO file upload 
  res.end(JSON.stringify({
    code: 200
  }))
})

module.exports = router
