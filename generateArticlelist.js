// articlelist.jsを生成するスクリプト

const fs = require('fs');
const dir = './public/article/'
fs.readdir(dir, function(err, files){
    if(err) throw err;
    let fileList = files.filter(function(file){
        return fs.statSync(dir + file).isFile() && /.*\.md$/.test(file);
    });

    // 出力JSONの生成
    let output = [];
    for(let file in fileList){
        const data = fs.readFileSync(dir + fileList[file], {encoding: 'utf-8'});
        const property = data.match(/<!--([\s\S]+?)-->/);
        const array = JSON.parse(property[1]);
        array.path = fileList[file];
        
        if(output.length === 0){
            output.push(array);
        } else {
            // 日付順にソートする
            for(let i=0; i<output.length; i++){
                if(new Date(output[i].date) > new Date(array.date)){
                    output.splice(i, 0, array);
                    break;
                } else if(i == output.length-1){
                    output.push(array);
                    break;
                }
            }
        }
    }
    fs.writeFileSync('./src/articlelist.js', "export const list = " + JSON.stringify(output.reverse()));
});