export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      antd: true,
      dva: true,
      // locale: {
      //   enable: true,
      // }
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: 'puzzlecards',
        component: './PuzzleCardsPage'
      },
      {
        path: '/',
        component: 'Helloworld',
      },
      {
        path: '/helloworld',
        component: 'Helloworld'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
      // pathRewrite: { "^/dev": "" }
    },
  }
}