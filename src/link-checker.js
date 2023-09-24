const linkChecker = require('link-checker');

async function main() {
  const result = await linkChecker.check({
    path: '.', // Change this to the directory where your HTML files are located
    // Add any additional configuration options for link-checker here
  });

  if (result.broken.length > 0) {
    console.error('Broken links found:');
    console.error(result.broken);
    process.exit(1); // Exit with a non-zero code to indicate failure
  } else {
    console.log('No broken links found.');
  }
}

main();
