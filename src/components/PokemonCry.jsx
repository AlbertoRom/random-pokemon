export const PokemonCry = ({ cry }) => {
    return (
        <audio key={cry} controls autoPlay>
            <source src={cry} type="audio/ogg" />
        </audio>
    );
}