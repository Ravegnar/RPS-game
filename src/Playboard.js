import Field from './Field.js';

export default function Playboard({statuses, onAction}) {

    return (
        <section id="playboard">
            {statuses.map((status, index) => (
                <Field
                    id={index}
                    key={index}
                    status={status}
                    onAction={onAction}
                ></Field>
            ))}
        </section>
    )
}