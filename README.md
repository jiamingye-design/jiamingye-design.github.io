# 个人作品集网站 — 骨架说明

这是一个**零构建工具**的静态网站骨架：只有 HTML / CSS / JS 文件，
没有 Jekyll、没有 Node、没有数据库。改文件、push 到 GitHub，就能通过
GitHub Pages 免费上线，手机和电脑都能访问。

## 文件结构

```
portfolio-site/
├── index.html              About / 首页
├── portfolio.html          作品集缩略图网格
├── project-example.html    单个项目详情页模板（复制它来新建项目）
├── publications.html       发表论文列表
├── news.html                动态 / 新闻
├── assets/
│   ├── css/style.css       全站样式（改这里=改全站视觉）
│   ├── js/main.js          导航、Lightbox、轮播、悬停预览的逻辑
│   ├── img/                 放你的图片
│   └── pdf/                 放你的 PDF（论文、图纸、报告）
└── README.md
```

## 三步部署到 GitHub Pages（免费）

1. 在 GitHub 上新建一个仓库，命名为 `你的用户名.github.io`
   （这个特定命名格式会让 GitHub 自动把它当作个人主页）。
2. 把这个文件夹里的所有文件上传到该仓库的根目录
   （网页上传或 `git push` 都可以，网页上传更适合新手：
   打开仓库页面 → Add file → Upload files → 拖进去 → Commit）。
3. 进入仓库 Settings → Pages，Source 选择 `main` 分支 / `root` 目录 → Save。
   等 1–2 分钟，你的网站就会在
   `https://你的用户名.github.io` 上线。

如果你想用自己买的域名（如 `yourname.com`），在同一个 Pages 设置页面里填入
Custom domain 即可，GitHub 会给你 DNS 配置说明。

## 怎么替换成你自己的内容

- **文字**：直接在对应的 `.html` 文件里搜索中文占位符（比如"替换为..."）并改掉。
- **图片**：把图片放进 `assets/img/`，然后把对应 `<div class="thumb">...</div>`
  或 `.g-item` 换成：
  ```html
  <img src="assets/img/你的图片.jpg" alt="项目描述">
  ```
  记得先把图片转成 **WebP 或压缩过的 JPG**（推荐用免费工具 squoosh.app），
  否则大量高清照片会让手机端加载很慢。
- **PDF**：放进 `assets/pdf/`，然后把 `pdf-link` 或 publications 里的
  `href="#"` 换成 `href="assets/pdf/你的文件.pdf"`。
- **新建一个作品集项目**：复制 `project-example.html`，改名（比如
  `project-02.html`），改里面的内容，再回到 `portfolio.html` 里
  新增一张卡片、把链接指向这个新文件。

## 已经内置的三种"动画/交互"效果（对应你参考的 Lay Theme 功能，全部免费开源）

| 效果 | 用的库 | 在哪个文件里 |
|---|---|---|
| 点击图片放大查看（Lightbox） | [GLightbox](https://biati-digital.github.io/glightbox/) | `project-example.html` 里的 `.gallery` |
| 轮播（Carousel） | [Swiper](https://swiperjs.com/) | `project-example.html` 里的 `.carousel-wrap` |
| 鼠标悬停显示预览图（Image Hover） | 自己写的 30 行 JS，见 `assets/js/main.js` | `project-example.html` 底部"相关项目"区块，也可以加到 `portfolio.html` 的文字链接上 |

这三个库都是通过 CDN 链接直接引入的（在 `project-example.html` 的
`<head>` 和 `</body>` 前能看到），不需要安装任何东西。

## 关于全屏滑动 / 无限画布缩放（Scroll Slider）

这两个更"实验性"的效果没有默认加进骨架里，因为：
1. 对内容的排版要求更严格，容易在手机端出问题；
2. 建议先把基础内容和图片填满，再决定是否需要。

如果之后想加，可以告诉我，我再帮你在具体某个项目页里加
`fullPage.js`（整屏切换）或 `panzoom.js`（缩放平移）。

## 视觉设计说明（方便你理解/微调 `style.css`）

- 背景：暖白纸色 `#F3F1EA`；文字：接近黑的墨色 `#18170F`
- 强调色：克制的苔藓绿 `#3E5A45`，只用在 hover、当前页、标签上
- 字体：标题用 **Fraunces**（有个性的衬线体），正文用 **Inter**，
  索引号/年份/分类标签用等宽字体 **IBM Plex Mono**
  （呼应"研究数据/索引"的学术感）
- 版式参考了 lab-v.be / axellevertommen.be 的极简画廊风格：
  左侧固定极简导航 + 大留白 + 图片为主角
