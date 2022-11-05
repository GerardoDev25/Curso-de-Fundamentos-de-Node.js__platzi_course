const fs = require('fs');

function read(path, cb) {
  fs.readFile(path, (err, data) => {
    cb(data.toString());
  });
}

function write(path, content, cb) {
  fs.writeFile(path, content, (err) => {
    err ? console.error('no se a escrito', err) : console.log('escrito correctamente');
  });
}

function del(path, cb) {
  fs.unlink(path, (err) => {
    err ? console.error('no se pudo borrar', err) : console.log('borrado correctamente');
  });
}

// write(__dirname + '/file.txt', 'this is a new phase', console.log);
read(__dirname + '/file.txt', console.log);
// del(__dirname + '/file.txt', console.log);
