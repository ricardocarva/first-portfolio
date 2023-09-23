const HTMLProofer = require('html-proofer');

const proofer = new HTMLProofer({
  directory: '.', // Replace with the path to your built HTML files
  checkExternal: true,
  url-ignore: ['/example-ignore'], // Optional: specify URLs to ignore
});

proofer.run((err, output) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log('Link checker completed successfully.');
  }
});
