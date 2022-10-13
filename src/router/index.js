import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../home/HomePage.vue'
import RobotBuilder from '../build/RobotBuilder.vue'
import PartInfo from '../parts/PartInfo.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import RobotHeads from  '../parts/RobotHeads.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import RobotBases from '../parts/RobotBases.vue'
import SidebarStandard from '../sidebars/SidebarStandard.vue'
import SidebarBuild from '../sidebars/SidebarBuild.vue'

export default createRouter({ // Order of routes is important, it wont know the browse-route if it was below the :id route
    history: createWebHistory(), 
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            default: HomePage,
            sidebar: SidebarStandard,
        },
    },
    {
        path: '/build',
        name: 'RobotBuilder',
        components: {
            default: RobotBuilder,
            sidebar: SidebarBuild,
        },
    },
    {
        path: '/parts/browse',
        name: 'Browse',
        component: BrowseParts,
        children: [
            {
                name: 'BrowseHeads',
                component: RobotHeads,
                path: 'heads'
            },
            {
                name: 'BrowseArms', 
                component: RobotArms, 
                path: 'arms'
            }, 
            {
                name: 'BrowseTorsos',
                component: RobotTorsos, 
                path: 'torsos'
            },
            {
                name: 'BrowseBases',
                component: RobotBases, 
                path: 'bases'
            }
        ]
    },
    {
        path: '/parts/:partType/:index',
        name: 'Parts',
        component: PartInfo,
        props: true,
        beforeEnter(to, from, next){ // To is the route trying to be accessed, Next is a check for allowing the new route to be loaded. 
            const isValidId = Number.isInteger(Number(to.params.index))
            next(isValidId) // Route guard for preventing loading a component when our index parameter is incorrect
        }
    },]
})