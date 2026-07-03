# 会话日志：修复首次加载空白问题

**日期**：2026-07-03（第2次会话）

## Quick Reference
- HashRouter、首次加载、空白页、BrowserRouter、GitHub Pages

## Decisions Made
- 将 BrowserRouter 改为 HashRouter，解决 GitHub Pages 上首次打开需刷新才能显示内容的问题
- 去掉 basename="/sysc" 配置（HashRouter 不需要）

## Solutions & Fixes
- 问题：首次打开网站显示空白，需刷新后才有内容
- 原因：BrowserRouter + GitHub Pages 静态托管存在兼容问题
- 修复：`src/main.jsx` 中 `BrowserRouter` → `HashRouter`，移除 `basename` prop
- 结果：URL 变为 `https://hhx111-cmd.github.io/sysc/#/`，首次打开即显示

## Files Modified
- `src/main.jsx`：BrowserRouter → HashRouter
- `CLAUDE.md`：更新路由配置说明

## 网站状态
- ✅ 正常运行，公网地址：https://hhx111-cmd.github.io/sysc/
- ✅ 首次加载正常显示
- ✅ 所有页面导航正常
