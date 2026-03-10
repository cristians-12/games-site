import GameCard from "./game-card";

export default function GameContainer({games}){
    return(
        <div className="flex flex-wrap gap-5 justify-center">
            {
                games.length > 0 
                ? (
                    games.map(
                        game=>(
                            <GameCard
                                backgroundColor={game.dominant_color}
                                title={game.name}
                                image={game.background_image}
                                id={game.id}
                                key={game.id}
                            />
                        )
                    )
                )
                : <h2>No hay juegos</h2>
            }
        </div>
    )
}