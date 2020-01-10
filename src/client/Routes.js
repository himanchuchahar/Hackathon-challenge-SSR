/** 
 * Routes file to handle url requests
*/

import JobList from './containers/jobList/jobList.map';
import JobDetail from './containers/jobDetails/jobDetails.map'
import NotFound from './containers/notFound/notFound.container'


export default [{
        ...JobList,
        path: '/',
        exact: true
    },{
        path: '/jobdetail/:id',
        ...JobDetail
        
    },{
        ...NotFound
    }

]