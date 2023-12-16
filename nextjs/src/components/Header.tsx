import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';

type MyComponentProps = {
    fields: {
    heading: Field<string>,  
    };
}

const Header = (props: MyComponentProps): JSX.Element => (
    <div>
    <Text tag="h2" className="contentTitle" field={props.fields.heading} />
    </div>
);

export default Header;
