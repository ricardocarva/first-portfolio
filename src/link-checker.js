// const linkChecker = require('link-checker');

// function main() {
//   const options = {
//     filterLevel: linkChecker.HtmlUrlChecker.ALL,
//     excludeExternalLinks: true, // Set this to true to exclude external links
//   };

//   const checker = new linkChecker.HtmlUrlChecker(options, {
//     link: (result) => {
//       if (result.broken) {
//         console.error('Broken link:', result.url.resolved);
//       }
//     },
//     end: () => {
//       console.log('Link checking completed.');
//     },
//   });

//   checker.enqueue('http://localhost'); // Change this to your website URL
// }

// main();

const {SiteChecker} = require('broken-link-checker');

const siteChecker = new SiteChecker(options)
  .on('error', (error) => {})
  .on('robots', (robots, customData) => {})
  .on('html', (tree, robots, response, pageURL, customData) => {})
  .on('queue', () => {})
  .on('junk', (result, customData) => {})
  .on('link', (result, customData) => {})
  .on('page', (error, pageURL, customData) => {})
  .on('site', (error, siteURL, customData) => {})
  .on('end', () => {});

siteChecker.enqueue(siteURL, customData);