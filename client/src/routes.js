import { lazy } from "react";

const Dashboard = lazy(() => import("./Views/Dashboard"));
const AdminList = lazy(() => import("./Views/Admin/AdminList"));
const AdminCreate = lazy(() => import("./Views/Admin/AdminCreate"));
const EditorList = lazy(() => import("./Views/Editor/EditorList"));
const EditorCreate = lazy(() => import("./Views/Editor/EditorCreate"));
const QuestionCreate = lazy(() => import("./Views/Question/QuestionCreate"));
const QuestionList = lazy(() => import("./Views/Question/QuestionInfo"));
const QuizCatList = lazy(() => import("./Views/QuizCat/QuizCatInfo"));
const QuizCatCreate = lazy(() => import("./Views/QuizCat/QuizCatCreate"));
const Results = lazy(() => import("./Views/Result/Results"));
const UpdateUser = lazy(() => import("./Views/Settings/UpdateUser"));



export const Routers = [
    {
        path: "/base",
        component: Dashboard,
        exact: true
    },
    {
        path: "/dashboard",
        component: Dashboard,
        exact: true
    },
    {
        path: "/admin",
        component: AdminList,
        exact: true
    },
    {
        path: "/admin/create",
        component: AdminCreate,

    },
    {
        path: "/admin/list",
        component: AdminList,

    },
    {
        path: "/editor",
        component: AdminList,
        exact: true
    },
    {
        path: "/editor/list",
        component: EditorList,

    },
    {
        path: "/editor/create",
        component: EditorCreate,

    },
    {
        path: "/quiz-cat",
        component: QuizCatList,
        exact: true
    },
    {
        path: "/quiz-cat/list",
        component: QuizCatList,

    },
    {
        path: "/quiz-cat/create",
        component: QuizCatCreate,

    },
    {
        path: "/question",
        component: QuestionList,
        exact: true
    },
    {
        path: "/question/list",
        component: QuestionList,

    },
    {
        path: "/question/create",
        component: QuestionCreate,

    },
    {
        path: "/result",
        component: Results,
        exact: true
    },
    {
        path: "/result/info",
        component: Results,

    },
    {
        path: "/settings",
        component: UpdateUser,
        exact: true
    },
    {
        path: "/settings/userInfo",
        component: Results,

    },
]
