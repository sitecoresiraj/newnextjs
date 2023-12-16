import { Field, Item, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Carousel } from 'react-responsive-carousel';

type ProductComponentProps = ComponentProps & {
    fields: {
        name: Field<string>,
        description: Field<string>,
        price: Field<string>,
        images: Item[]
    };
}

const ProductComponent = (
    props: ProductComponentProps
): JSX.Element => {
    const { images } = props.fields;
    return(
        <Carousel>
            {images.map((item) => (
                <div>
                    <img src={item.url} alt={item.name}/>
                </div>
            ))}
        </Carousel>
    );
}

export default withDatasourceCheck()<ProductComponentProps>(
    ProductComponent
  );;
