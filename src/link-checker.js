const linkChecker = require('link-checker');

function main() {
  const options = {
    filterLevel: linkChecker.HtmlUrlChecker.ALL,
    excludeExternalLinks: true, // Set this to true to exclude external links
  };

  const checker = new linkChecker.HtmlUrlChecker(options, {
    link: (result) => {
      if (result.broken) {
        console.error('Broken link:', result.url.resolved);
      }
    },
    end: () => {
      console.log('Link checking completed.');
    },
  });

  checker.enqueue('http://localhost'); // Change this to your website URL
}

main();