import './App.css'
import { FollowCard } from './FollowCard'
import { Navigate } from './Navigate'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true 
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas Andrew',
        isFollowing: false
    }
]

export function App () {
    
    return(
        <>
        <header className="head">
            {
                <Navigate></Navigate>
            }
        </header>

        <aside className="App">
        {
            users.map(user => {
                const {userName, name, isFollowing } = user
                return (
                    <FollowCard
                      key={userName}
                      userName={userName}
                      initialIsFollowing={isFollowing}
                    >
                        {name}
                    </FollowCard>
                )
            })
        }
        </aside>
        </>
    )
}