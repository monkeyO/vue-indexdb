
var routes =[{
            path: '/',
            name:"home",
            component:require('./components/home/home.vue')
            // component(resolve){
            //     require.ensure(['./components/home/home.vue'],()=>{
            //          resolve(require('./components/home/home.vue')); 
            //       }
            //  )}
        },
        {
            path:'/list',
            name:"list",
            component:require('./components/list/list.vue')
            // component(resolve){
            //     require.ensure(['./components/list/list.vue'],()=>{
            //          resolve(require('./components/list/list.vue'));
            //     }
            // )}
        },
        {
            path:'/user',
            name:"user",
            component:require('./components/user/user.vue')
            // component(resolve){
            //     require.ensure(['./components/user/user.vue'],()=>{
            //         resolve(require('./components/user/user.vue'));
            //     }
            // )}

        },
        { 
            path:'/add',
            name:"add",
            component:require('./components/add/add.vue')
        },
        {
            path:'/card',
            name:"card",
            component:require('./components/public/card/card.vue')
        }
]
export default routes;