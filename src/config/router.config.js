// eslint-disable-next-line
export const asyncRouterMap = [{
        path: '/',
        name: 'Index',
        hidden: true,
        component: () => import('@/views/Index'),
        meta: {
            title: '首页',
        }
    }, {
        path: '/post',
        name: 'Post',
        hidden: true,
        component: () => import('@/views/Post'),
        meta: {
            title: '文章页',
        }
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export const constantRouterMap = [{
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/exception/404')
}]