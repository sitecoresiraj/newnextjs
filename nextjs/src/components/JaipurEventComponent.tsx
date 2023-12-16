import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type JaipurEventComponentProps = {
    fields: {
    name: Field<string>,
    description: Field<string>,
    location: Field<string>  
    };
}

const JaipurEventComponent = (props: JaipurEventComponentProps): JSX.Element => (
    <div>
    <Text field={props.fields.name} />
    <RichText field={props.fields.description} />
    <Text field={props.fields.location} />
    </div>
);

export default JaipurEventComponent;
