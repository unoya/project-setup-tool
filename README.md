# 使用NPM快速建立全域性安裝程序

需要經常性上傳資料到 GitHub 開新的 repositories 存放時, 總是需要建罝一些必要的新檔案, 我自己使用以下的方式來快速建立, 方便又省時間.

## 前置作業

- 安裝 [Node.js](https://nodejs.org/zh-tw)
- 安裝 [Git](https://git-scm.com/downloads)

## 確認版本號

Node.js 安裝完成後, 打開 windwos 的終端機, 輸入

```bash
node -v
```

它會顯示版本號碼, 例如 v22.14.0

Git 安裝完成後, 打開 Git Bash 終端機, 輸入

``` bash
npm -v
```

它會顯示版本號碼, 例如 10.9.2

## 建立相關檔案

- 請先建立一個自己想要存放套件檔案的目錄, 例如 D:\MyTools
- 開啟 Git Bash , 輸入指令切換到該目錄

  ``` bash
  cd "D:\MyTools"
  ```

  再接著輸入

  ``` bash
  npm init -y
  ```

它會在目前目錄下自動產生一個 package.json 檔案, 預設內容如下:

``` json
{
  "name": "scripts",
  "version": "1.0.0",
  "main": "init-vscode-settings.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

再添加一道指令進去, 如下:

``` json
{
  "name": "scripts",
  "version": "1.0.0",
  "main": "init-vscode-settings.js",
  "bin": {
    "ivs": "init-vscode-settings.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

```

>ivs 這個字串可以自行決定, 例如改成 createit 也可以.
>init-vscode-settings.js 這個字串就使用它預設的.

在目前目錄下(D:\MyTools) 請自行新增一個檔案 init-vscode-settings.js , 內容填入自己想要做的事情, 此範例是我自己要用的, 所以我希望能做到以下的事情:

- 建立一個 .vscode 目錄, 如果不存在就自動建立.
- 在 .vscode 目錄下產生一個 settings.json 檔案, 並且自動填入我想要的內容.
- 自動產生 .gitignore 檔案, 並且自動填入我想要的內容.
- 自動產生 LINCESE 檔案, 並且自動填入我想要的內容.
- 自動產生 README.md 檔案, 並且自動填入我想要的內容.
- 自動產生 .markdownlint.json 檔案, 並且自動填入我想要的內容.

所以, init-vscode-settings.js 檔案就是在設定我們想要做的事情, 通通都寫在這個檔案裡.
當你製作好了之後, D:\MyTools 目錄下應該會有這兩個檔案:

> package.json
> init-vscode-settings.js

## 將指令註冊到全域

開啟 Git Bash , 一樣先切換到 D:\MyTools 目錄, 再輸入

``` bash
npm link
```

它就會依照 package.json 檔案裡指定的 init-vscode-settings.js 檔案名稱作為執行的對象, 日後可直接修改 init-vscode-settings.js 檔案的內容, 不需要再 link 了.

## 測試

接著, 再隨便切換到任何一個目錄(例如 D:\temp), 再輸入

``` bash
ivs
```

因為這個範例裡我是定義用 ivs , 所以輸入這個指令即可執行.
這時候你開啟檔案總管看一下目前的所在目錄, 在目錄裡會看到它自動產生這些東西:

> .vscode 目錄
> &nbsp;&nbsp;&nbsp;&nbsp;└ settings.json 檔案
> .gitignore 檔案
> LINCESE 檔案
> README.md 檔案
> .markdownlint.json 檔案

用這種方式來建立檔案的好處是"不需要記住哪些檔案被遺忘了", 只要好好保存package.json和init-vscode-settings.js檔案即可.
日後在開新專案後, 只要在該目錄下執行一次 ivs 指令就能完成這些煩鎖的事情了.
