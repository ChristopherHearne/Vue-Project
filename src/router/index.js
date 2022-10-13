import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../home/HomePage.vue'
import RobotBuilder from '../build/RobotBuilder.vue'
import PartInfo from '../parts/PartInfo.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import RobotHeads from  '../parts/RobotHeads.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import RobotBases from '../parts/RobotBases.vue'

export default createRouter({ // Order of routes is important, it wont know the browse-route if it was below the :id route
    history: createWebHashHistory(), 
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/build',
        name: 'RobotBuilder',
        component: RobotBuilder,
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
    },]
})