var sql = require('./connect')
var dbInit = function () {
  sql.connect(function (err) {
    if (err) {
      console.log('fail to connect database')
    }else {
      console.log('success connect database, initialize...')
      sql.query('CREATE TABLE users (user_id int(11) NOT NULL AUTO_INCREMENT, username varchar(30) NOT NULL,PRIMARY KEY (user_id),UNIQUE (username)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;', function (err) {
        !err ? console.log('table users created') : console.log(err)
      })
      sql.query('CREATE TABLE thingsToDo (things_id int(11) NOT NULL AUTO_INCREMENT,username varchar(30) NOT NULL,thingstodo varchar(500) NOT NULL,completed tinyint(1) DEFAULT NULL,create_date datetime DEFAULT NULL,dead_time datetime DEFAULT NULL,PRIMARY KEY (things_id), CONSTRAINT `thingstodo_ibfk_1` FOREIGN KEY (username) REFERENCES users (username)) ENGINE=InnoDB DEFAULT CHARSET=utf8;', function (err) {
        !err ? console.log('thingstodo table created') : console.log(err)
      })
      sql.end()
    }
  })
}
dbInit()
