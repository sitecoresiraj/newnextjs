import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { Field, Text } from '@sitecore-jss/sitecore-jss-react';

type RootRenderingProps =  ComponentProps &{
  fields: {
      items: ChildRenderingProps[];
  }
}

type ChildRenderingProps = {
  fields: {
      Title: Field<string>;
  }
}

const RootRenderingComponent = (props: RootRenderingProps) => (
  <div>
    
    <ul>
      { props.fields.items.map((item, i) => (
        <li key={i}>
           <Text field={item.fields.Title} />
        </li>
      ))}
    </ul>
  </div>
);

export default RootRenderingComponent;