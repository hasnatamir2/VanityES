import React from 'react'

function Header() {
    return (
        <section className="game-intro" >
        <div className="bg-image"></div>
            <div className="game" >
                <h2 className="game-title" >Valorant</h2>
                <h5 className="game-subtitle">A 5v5 character-based tactical shooter</h5>
            </div>
            <button className="button">Participate</button>
        </section>
    )
}

export default Header
