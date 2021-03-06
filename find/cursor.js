var MongoClient = require('mongodb').MongoClient

// mongoimport -d course -c grades grades.json
MongoClient.connect('mongodb://127.0.0.1:27017/course', function (err, db) {
	if (err) throw err
	var query = { 'grade': 90 }
	var cursor = db.collection('grades').find(query)
	
	cursor.each(function (err, doc) {
		if (err) throw err

		if (doc == null) return db.close()

		console.dir(doc.student + ' got ' + doc.grade + ' from ' + doc.assignment + '!')
	})
})
