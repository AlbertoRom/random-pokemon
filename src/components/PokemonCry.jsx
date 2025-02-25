export const PokemonCry = ({ cry }) => {
    return (
        <audio controls>
            <source src={cry} type="audio/ogg" />
        </audio>
    );
}