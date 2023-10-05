const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  process.env["PUPPETEER_SKIP_CHROMIUM_DOWNLOAD"] = "true";

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(120000);
  const htmlContent = `
  <!DOCTYPE html>
<html>
<head>
    <title>Random HTML Content</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a random HTML content example:</p>
    
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo at felis malesuada interdum.</p>
        <p>Nulla facilisi. In vestibulum scelerisque ligula, a hendrerit quam aliquet sit amet.</p>
    </div>
    
    <a href="https://example.com">Visit Example.com</a>
</body>
</html>

  `;

  await page.setContent(htmlContent);

  await page.screenshot({ path: "output.png" });

  await browser.close();
})();
