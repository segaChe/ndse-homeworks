const fs = require('fs');

module.exports = ({dir, file, content}) => {
    const writeOrAppendIntoFile = (file, content) => {
        if (fs.existsSync(file)) {
            fs.appendFile(file, content, (err) => {
                if (err) {
                    throw Error(err);
                }
            });
        }
        else {
            fs.writeFile(file, content, (err) => {
                if (err) {
                    throw Error(err);
                }
            });
        }
    };

    if (fs.existsSync(dir)) {
        writeOrAppendIntoFile(file, content);
    }
    else {
        fs.mkdir(dir, (err) => {
            if (err) {
                throw Error(err);
            }
            writeOrAppendIntoFile(file, content);
        });
    }
}