const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

function injectScript(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  if (content.includes("/dashboard-console-capture.js")) return;

  const updated = content.replace(
    "</head>",
    '  <script src="/dashboard-console-capture.js"></script>\n</head>'
  );

  fs.writeFileSync(filePath, updated, "utf-8");
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      return;
    }
    if (entry.isFile() && entry.name.endsWith(".html")) {
      injectScript(fullPath);
    }
  });
}

walk(outDir);