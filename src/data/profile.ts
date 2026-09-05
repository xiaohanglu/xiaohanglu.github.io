/**
 * =============================================================================
 * 个人主页展示数据 —— 按需修改下面字段即可（无需改页面组件）
 * =============================================================================
 *
 * displayName
 *   浏览器标题、站点顶栏左上角的名称会用到（与 consts 联动）。
 *
 * headline
 *   一句话简介，显示在首页姓名下方；也会作为全站默认 meta description（SEO 摘要）。
 *
 * bioParagraphs
 *   自我介绍，每一段是一个字符串，会依次渲染成多个段落 <p>。
 *   没有内容时可保留空数组 []；不需要的段删掉即可。
 *
 * avatarUrl
 *   头像地址。可选：
 *   - 公网图片完整 URL，例如 "https://example.com/me.png"
 *   - 或放在仓库 public/ 目录下的文件，例如 "/avatar.png"
 *   留空字符串 "" 则不显示头像。
 *
 * email
 *   联系邮箱，会显示在首页头像卡片下方。
 *
 * socialLinks（可选图标区，与 links 独立）
 *   分别对应 Header / Footer 里 Mastodon、Twitter/X、GitHub 图标；填完整个人主页 URL。
 *   不需要某项时保留空字符串 ""，对应图标不会显示。
 *
 * repositoryLinks
 *   主页 GitHub 仓库卡片展示的项目仓库链接；可按数组格式继续添加。
 */
export const profile = {
	displayName: '凌霄花的个人主页',
	headline: '往事总在回忆时被赋予意义',
	bioParagraphs: [
		'欢迎你来到我的个人主页',
		'我目前就读于南京大学智能软件与工程学院，是一名本科生',
		'这里展示了我的学习笔记和个人项目等等。源文件、源代码均可以从我的 GitHub repo 获取。鉴于我才疏学浅，错误之处还请谅解。',
		'目前的研究兴趣是 LLM-based Automated Program Repair ，感兴趣的朋友欢迎来信交流。',
	] as string[],
	avatarUrl: '/avatar.png',
	email: 'xiaohanglu@qq.com',
	socialLinks: {
		github: 'https://github.com/xiaohanglu',
		mastodon: '',
		twitter: '',
	},
	repositoryLinks: [
		{
			name: 'mini_web_server',
			description: '基于 epoll 的高性能 Web Server',
			href: 'https://github.com/xiaohanglu/mini_web_server',
		},
		{
			name: '个人主页',
			description: '本网站源码',
			href: 'https://github.com/xiaohanglu/xiaohanglu.github.io',
		},
	],

};
