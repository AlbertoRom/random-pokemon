export const PokemonCry = ({ cry }) => {
    return (
        <audio key={cry} controls>
            <source src={cry} type="audio/ogg" />
        </audio>
    );
}