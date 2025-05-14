#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const cwd = process.cwd(); // 取得目前所在資料夾
const vscodeDir = path.join(cwd, ".vscode");
const settingsPath = path.join(vscodeDir, "settings.json");

const settingsContent = {
  "files.associations": {
    "LICENSE": "plaintext"
  }
};

if (!fs.existsSync(vscodeDir)) {
  fs.mkdirSync(vscodeDir);
  console.log("成功建立 .vscode 資料夾");
}

fs.writeFileSync(settingsPath, JSON.stringify(settingsContent, null, 2));
console.log("成功建立 .vscode/settings.json 檔案並寫入設定");

// ==== 建立 .gitignore 檔案 ====
const gitignorePath = path.join(cwd, '.gitignore');
const gitignoreContent = `.vscode/

.DS_Store
Thumbs.db
desktop.ini
.markdownlint.json

*.tmp
*.bak
*.swp
*.rar
*.zip
*.7z
`;

fs.writeFileSync(gitignorePath, gitignoreContent);

console.log('成功建立 .gitignore 檔案');

// ==== 建立 LICENSE 檔案 ====
const licensePath = path.join(cwd, 'LICENSE');
const licenseContent = `MIT License

Copyright (c) 2025 unoya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
`;

fs.writeFileSync(licensePath, licenseContent);
console.log('成功建立 LICENSE 檔案');

// === 如果沒有 README.md 就自動建立 ===
const readmePath = path.join(cwd, 'README.md');
if (!fs.existsSync(readmePath)) {
  const readmeContent = 'This is an automatically created description file, please edit the content yourself.\n';
  fs.writeFileSync(readmePath, readmeContent);
  console.log('成功建立 README.md 檔案');
} else {
  console.log('已存在 README.md 檔案，忽略建立。');
}

// === 建立 .markdownlint.json 檔案 ===
const markdownlintPath = path.join(cwd, '.markdownlint.json');
const markdownlintContent = `{
    "MD013": false,
    "MD033": {
        "allowed_elements": [
            "table",
            "th",
            "tr",
            "td",
            "a",
            "br",
            "details",
            "summary",
            "span",
            "strong",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6"
        ]
    }
}
`;
fs.writeFileSync(markdownlintPath, markdownlintContent);
console.log('成功建立 .markdownlint.json 檔案');
