import Field from './Field.js';

export default function Playboard(props) {
    const {fieldStatus, onProductDelete} = props

    return (
        <section id="playboard">
            {fieldStatus.map((field, index) => {
                return (
                    <Field
                        id={index}
                        key={index}
                        fieldStatus={fieldStatus}
                        onProductDelete={onProductDelete}
                    ></Field>
                );
            })}
        </section>
    )
}
