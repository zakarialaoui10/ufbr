export default function Pags({ slug }) {
    const items = slug.split('/');

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
