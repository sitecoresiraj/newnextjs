import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type SirajComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    title: Field<string>;
    description: Field<string>;
  };
};

const SirajComponent = (props: SirajComponentProps): JSX.Element => (
  <div>
    <p>SirajComponent Component</p>
    <Text field={props.fields.heading} />
    <Text tag="h1" field={props.fields.title} />
    <Text tag="p" field={props.fields.description} />
  </div>
);

export default withDatasourceCheck()<SirajComponentProps>(SirajComponent);
