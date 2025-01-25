import { useState } from "react"

export function FollowCard ({ children, userName = 'unknown', initialIsFollowing}) {
    const [isFollowing , setIsFollowing] = useState(initialIsFollowing)

    console.log('[FollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir' 
    const buttonClassName = isFollowing ? 'followCard-button is-following' : 'followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return( 
        <article className="followCard">
            <header className="followCard-header">
                <img 
                className="followCard-avatar"
                src= {`https://unavatar.io/${userName}`}
                alt="El avatar Random"/>
                <div className="followCard-info">
                    <strong>{children}</strong>
                    <span className="followCard-header-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside> 
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="followCard-text">{text}</span>
                    <span className="followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}