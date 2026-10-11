# Cloudflare Pages 部署说明

## 1. 构建

```bash
npm install
npm run build
```

构建产物在 `dist/` 目录。

## 2. 部署到 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 进入 **Pages** → **Create a project**。
3. 选择 GitHub 仓库，或直接上传 `dist/`（**Upload assets**）。
4. 构建设置（若使用 Git 集成）：
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 保存并部署。

## 3. 单页应用（SPA）回退

Cloudflare Pages 默认会尝试返回 `404.html`。本项目使用 React Router，请在 Cloudflare Pages 的 **Settings → Functions / Pages → ** 添加一条重定向规则：

```
/* /index.html 200
```

或在项目根目录创建 `_redirects` 文件（上传前复制到 `dist/`）：

```
/*    /index.html   200
```

这样所有未知路径都会由前端 404 页面处理。

## 4. 绑定自定义域名

1. 在 Pages 项目 → **Custom domains** → **Set up a custom domain**。
2. 输入域名（如 `www.novaindustrial.example`）。
3. 按提示添加 DNS 记录。
4. Cloudflare 会自动提供 HTTPS 证书并强制 SSL/TLS 加密。

## 5. 开启 CDN 与 HTTPS

- **CDN**：Cloudflare Pages 默认通过 Cloudflare CDN 分发，无需额外配置。
- **HTTPS**：在域名的 **SSL/TLS** 设置中选择 **Full (strict)** 模式。
- **Always Use HTTPS**：在 **SSL/TLS → Edge Certificates** 中开启。

## 6. 静态资源缓存

`public/_headers` 已配置：

- `/assets/*`、`*.js`、`*.css`、`*.woff2` 等 hashed 资源缓存 1 年（immutable）。
- 图片资源缓存 1 天，方便后续替换。

## 7. 替换占位内容

上线前替换以下占位符：

- `src/config/theme.ts` 中的 `siteUrl`
- `src/config/contact.ts` 中的邮箱、电话、地址
- `src/config/thirdParty.ts` 中的 Formspree endpoint、Clarity ID、GA4 ID
- `public/assets/img/` 中的真实图片

## 8. 404 页面

`src/pages/NotFoundPage.tsx` 已支持中英双语。部署后任意不存在的路径都会显示该页面。

## 9. 注册 Google Search Console 并提交 sitemap

1. 使用自定义域名或 URL 前缀方式将站点添加到 [Google Search Console](https://search.google.com/search-console)。
2. 在 **Sitemaps** 中提交：
   ```
   https://你的域名/sitemap.xml
   ```
3. 等待 Google 抓取。可在 **Pages → Inspect URL** 中手动请求抓取首页。
4. （可选）在 `src/config/theme.ts` 中把 `siteUrl` 改为真实域名后重新构建部署。
