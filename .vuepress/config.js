module.exports = {
  /**
   * 主题设置
   */    
  themeConfig: {
    /**
     * 导航栏加入 tab 
     */    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      /**
       * ! 外链这个直接就跳转错误
       */    
      { text: 'Panx', link: 'http://xiaojingxiuxiu.com/' },
    ],
    /**
     * 侧边栏加入 tab 
     */    
    sidebar: [
      '/',
      ['/sdk', 'SDK'],
      ['/guide/', '指导ReadMe是首页index'],
      {
        title: '指导展开',
        /**
         * 可否收缩 false 则一直展开 
         */   
        collapsable: true,
        children: [
          '/guide/',
          '/guide/2d_glass'
        ]
      },
    ]
  }
}