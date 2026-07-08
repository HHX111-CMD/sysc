# 邵阳学院新生百事通

## 项目概况
- **用途**：新生百事通，以学长身份帮新生解决入学问题。口语化、不官腔，后续可接入校园经济变现。
- **技术栈**：Vite + React 18 + React Router v6 (HashRouter) + 纯 CSS3 动画
- **设计风格**：青春活力，橙蓝渐变配色，响应式三档适配
- **页面**：首页、入学准备、校园生活、避坑指南、专业解读、百问百答（加微信入口）、关于本站
- **开发命令**：`npm run dev`（开发）、`npm run build`（构建）、`npm run preview`（预览）

## 部署信息
- **平台**：GitHub Pages（免费）
- **仓库**：`HHX111-CMD/sysc`
- **公网地址**：https://hhx111-cmd.github.io/sysc/
- **推送方式**：SSH（`git@github.com:HHX111-CMD/sysc.git`）
- **自动部署**：GitHub Actions（`.github/workflows/deploy.yml`），push 到 master 后自动触发
- **Vite 配置**：`base: '/sysc/'`（必须匹配仓库名）
- **路由配置**：`HashRouter`（不用 basename，适配 GitHub Pages 静态托管）

## 文件结构
```
shaoyang-university-guide/
├── index.html
├── vite.config.js              # base: '/sysc/'
├── .github/workflows/deploy.yml
├── CC-Session-Logs/            # 会话日志
├── src/
│   ├── main.jsx                # HashRouter
│   ├── App.jsx                 # 7个页面路由
│   ├── index.css               # 全局样式 + CSS 变量
│   ├── data/content.js         # 所有页面内容数据
│   ├── data/searchIndex.js     # 搜索索引
│   ├── components/             # Navbar, Footer, ScrollReveal, BackToTop, SearchBar
│   └── pages/                  # Home, Prepare, Life, Pitfalls, Majors, QA, About
```

## 最新改动（2026-07-04~05）
- **联系方式统一改为微信**：首页CTA、页脚、关于页面、百问百答全部用📱微信，不再提"电话"
- **校园卡和驾校内容已添加后删除**：用户决定暂不在网站介绍这些业务
- **所有微信入口显示号码 15364075803**，提示"备注新生"

## 校园经济方向

### 业务定位
- **开学主推**：校园卡（电信）、驾校
- **用户意愿**：不出镜做抖音IP，靠截流+网站承接流量

### 竞品分析
- 邵阳学院抖音学长号最大约8000粉（小涛学长 SYXYxiaotao01），赛道无垄断
- 全国参考案例：
  - **曹阳康**（衡阳师范学院）：驾校做到副校长，季度300+学员，年销售额200万
  - **程松**（"百度学长"）：从驾校到校园卡到床品多元变现
- **差异化优势**：用户有网站，其他邵院学长号没有。截流→网站→信任→加微信的链路别人复制不了

### 引流策略
- **主策略**：抖音评论区截流 → 个人主页网站链接 → 网站深度内容建立信任 → 加微信
- **不出镜内容形式**：校园实拍+配音、图文笔记、录屏讲解、盘点对比
- **截流评论原则**：帮人回答问题，不硬广，引导点主页而非直接甩链接

## 部署注意事项
1. **GitHub 推送**：SSH 方式（`git@github.com:HHX111-CMD/sysc.git`）
2. **SSH 密钥**：已生成 `~/.ssh/id_ed25519`，已添加到 GitHub 账号
3. **GitHub Actions 偶发部署失败**：重推一次触发新部署即可
4. **页面空白**：必须同时配置 vite.config.js base 和 HashRouter
5. **Web3Forms 尝试失败**：确认邮件未收到，最终改回直接加微信

## 用户偏好
- 所有交流使用中文
- 用户 GitHub 账号：HHX111-CMD
- 用户联系电话/微信：15364075803
- 不出镜做IP，不主动拍视频，靠截流获取流量

## 待办
- [ ] 网站加图片（用户有现成图片，待放入 public 目录）
- [ ] 微信分享优化（Open Graph 标签）
- [ ] 每个攻略页面底部统一加微信入口
- [ ] 抖音注册账号，开始评论区截流
- [ ] 网站首页加"分享给同学"引导
