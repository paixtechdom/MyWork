import { Link } from "react-router-dom"

export const Dashboard = () => {
    const DashboardPerformance = [
        {
            title: 'Projects',
            value: 10,
            percentage: '+3',
            desc: 'from 28 days ago'
        },
        {
            title: 'Ideas',
            value: 3,
            percentage: '+80',
            desc: 'from 28 days ago'
        },
        {
            title: 'Followers',
            value: 30,
            percentage: '+23',
            desc: 'from 28 days ago'
        },
        {
            title: 'Reach',
            value: 300,
            percentage: '+80',
            desc: 'from 28 days ago'
        },
        {
            title: 'Appeared in Searched',
            value: 3,
            percentage: '-23',
            desc: 'from 28 days ago'
        },
        {
            title: 'Viewed my profile',
            value: 2,
            percentage: '-80',
            desc: 'from 28 days ago'
        },
        {
            title: 'Engagements',
            value: 4000,
            percentage: '+300',
            desc: 'from 30 days ago'
        },
        {
            title: 'Collaborations',
            value: 12,
            percentage: '-20',
            desc: 'from 29 days ago'
        },
    ]

   
    /*  followers, reach, engagements, collaborations
        ideas, projects,  
        help on how to improve your... etc 
    */
    

    return(
        <div className="flex mb-9 pb-9 flex-col">
            <div className="grid grid-cols-2 p-3 gap-1 w-full">
                {
                    DashboardPerformance.map((performance, key) => (
                        <div className="flex flex-col w-full bg-fade p-2 px-3 gap-1 rounded-xl relative" key={key}>
                            <p className="small-lg w-9/12">{performance.title}</p>
                                <p className="text-2xl">{performance.value}</p>
                                <p className={`absolute right-0 bg-white p-1 rounded-l-xl smaller font-bold ${performance.percentage.includes('-') ? 'text-red' : 'text-green-700'}`}>{performance.percentage}%</p>
                                <p className="small">{performance.desc}</p>
                           
                        </div>
                    ))
                }
            </div>
          
        </div>
    )

}