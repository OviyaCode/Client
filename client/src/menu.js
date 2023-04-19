// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const Menu = [
    {
        name:"Dashboard",
        fixMenu:true,
        path:"/dashboard",
        children:[]
    },
    {
        name:"Administrator",
        icon:"",
        path:"/admin",
        children:[
            {
                name:"Admin Details",
                path:"/admin/list",
                icon:"",
            },
            {
                name:"Admin Creation",
                path:"/admin/create",
                icon:"",
            }
        ]
    },
    {
        name:"Editor",
        icon:"",
        path:"/editor",
        children:[
            {
                name:"Editor Details",
                path:"/editor/list",
                icon:"",
            },
            {
                name:"Editor Creation",
                path:"/editor/create",
                icon:"",
            }
        ]
    },
    {
        name:"Quiz Category",
        icon:"",
        path:"/quiz-cat",
        children:[
            {
                name:"Quiz Category Details",
                path:"/quiz-cat/list",
                icon:"",
            },
            {
                name:"Quiz Category Creation",
                path:"/quiz-cat/create",
                icon:"",
            }
        ]
    },
    {
        name:"Questions",
        icon:"",
        path:"/question",
        children:[
            {
                name:"Quiz Category Details",
                path:"/question/list",
                icon:"",
            },
            {
                name:"Question Creation",
                path:"/question/create",
                icon:"",
            }
        ]
    },
    {
        name:"Results",
        icon:"",
        path:"/result",
        children:[
            {
                name:"Results recored",
                path:"/result/list",
                icon:"",
            }
        ]
    },
    {
        name:"Settings",
        icon:"",
        path:"/settings",
        children:[
            {
                name:"Update Profile",
                path:"/settings/user-info",
                icon:""
            }
        ]
    },
    
]
