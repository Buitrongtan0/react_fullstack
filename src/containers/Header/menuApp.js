export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-user',
        menus: [   
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name:'menu.admin.manage-doctor',link: '/system/user-doctor'
            },
            {
                name:'menu.admin.manage-admin',link: '/system/user-admin'
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
        
    },
    { //quan ly phong kham 
        name: 'menu.admin.clinic',
        menus: [   
            {
                name: 'menu.admin.magane-clinic', link: '/system/magane-clinic'
            },
      
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
        
    },
    { //quan ly chuyen khoa
        name: 'menu.admin.specialty',
        menus: [   
            {
                name: 'menu.admin.magane-specialty', link: '/system/magane-specialty'
            },
      
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
        
    },
    { //quan ly cam nang
        name: 'menu.admin.hanbook',
        menus: [   
            {
                name: 'menu.admin.magane-hanbook', link: '/system/magane-hanbook'
            },
      
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
        
    },
];