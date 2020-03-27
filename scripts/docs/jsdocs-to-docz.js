const fs = require('fs');
const glob = require('glob');
const {exec} = require('child_process');

async function run(){
  const args = process.argv.slice(2);
  const path = args[0];
  glob(path, (err, files) => {
    files.forEach(file => {
      const fileParentDir = file.substr(0, file.lastIndexOf('/'));
      const packagesName = fileParentDir.substr(fileParentDir.lastIndexOf('/')+1);
      const packageRoute = fileParentDir.replace(/packages\//g, '');
      const packageParent = packageRoute.split('/')[0];
      const capitalizedParent = `${packageParent.charAt(0).toUpperCase()}${packageParent.slice(1)}`;

      const fileName = file.substr(file.lastIndexOf('/')+1);
      const mdxFileName = fileName.replace(/\.(.*)/,'.mdx');
      const markdownFile = `${fileParentDir}/README.md`;
      try {
        const markdownContent = fs.existsSync(markdownFile) ? fs.readFileSync(markdownFile, 'utf-8') : '';
        exec(`jsdoc2md ${file}`, (_, stdout)=>{
          const output = stdout.replace(/<(|\/)code>/g, '');
          const doczInfo = `---\nname: ${packagesName}\nroute: /${packageRoute}\nmenu: ${capitalizedParent}\n---\n`;
          const content = `${doczInfo}\n\n${markdownContent}\n\n${output}`;

          console.log(`writing docz for ${file}`);
          fs.writeFile(`${fileParentDir}/${mdxFileName}`, content, (error) => {
            if(error){
              throw error;
            }
            console.log(`successfully created docs for ${file}`)
          });
        })
      }
      catch (e) {
        console.log('an error occurred ==>', e)
      }
    });
  });
}

run();
