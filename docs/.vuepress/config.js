module.exports = {
    base: '/zh.axios.org/',
    lang: 'zh-CN',
    title: 'axios',
    description: '一个让java更容易发送HTTPS',
    themeConfig: {
        navbar: [
          {
            text: '配置',
            link: '/guide/',
          },
          {
            text: '提出问题',
            link: 'https://github.com/xiao-akatsuki/axios/issues'
          },
          {
            text: '参与项目',
            link: 'https://github.com/xiao-akatsuki/axios/pulls'
          },
          {
            text: '版本',
            children: [
              {
                text: '1.0.0',
                link: '/',
              },
            ]
          }
        ],  
        sidebar: [
          '/guide/README.md',
          '/guide/MinimalExample.md',
          '/guide/POSTRequests.md'
        ],
        sidebarDepth: 2,
        logo: 'https://xiao-akatsuki.github.io/axios.org/logo/logo.png',
        repoLabel:'axios',
        repo: 'xiao-akatsuki/axios',
        editLink: false,
        darkMode: false,
    },
}