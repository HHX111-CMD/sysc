# 会话日志：邵阳学院新生迎新网站

**日期**：2026-07-03

## Quick Reference
- 邵阳学院、迎新网站、React、Vite、GitHub Pages、SSH、sysc、部署、域名

## Decisions Made
1. 技术栈选 Vite + React 18 + React Router v6 + 纯 CSS3
2. 设计风格：青春活力，橙蓝渐变，响应式
3. 部署平台：GitHub Pages（免费），放弃 Gitee（令牌认证失败 + Pages 需实名）
4. 推送方式：SSH（HTTPS 被墙），生成 ed25519 密钥对
5. 仓库命名：最终定名 `sysc`
6. 暂不买域名，用免费 GitHub Pages 地址

## Key Learnings
- GitHub Pages 部署 React SPA 必须同时配 `vite base` 和 `BrowserRouter basename`
- 中国大陆网络访问 github.com:443 不稳定，SSH 更可靠
- Gitee 个人令牌用于 git 操作经常认证失败，不推荐
- GitHub Actions 偶发 "Deployment failed" 但重跑即可

## Solutions & Fixes
- 页面空白 → 添加 `BrowserRouter basename="/sysc"`
- 无法推送 → 用 SSH 代替 HTTPS，添加公钥到 GitHub
- 资源 404 → vite.config.js 中 `base: '/sysc/'`
- 部署失败 → `gh run rerun` 重跑

## Files Modified
- 创建了完整的 React 项目（28 个文件）
- `src/main.jsx`：添加 BrowserRouter basename
- `vite.config.js`：base 路径多次调整
- `src/pages/Home.jsx`：添加联系电话
- `.github/workflows/deploy.yml`：自动部署配置

## Pending Tasks
- 校园风光页面可换真实图片
- 可添加 dark mode
- 如需更短域名可购买自定义域名

## 联系方式
- 网站地址：https://hhx111-cmd.github.io/sysc/
- 联系电话：15364075803（首页底部）
