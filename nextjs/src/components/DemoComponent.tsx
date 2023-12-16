import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

type DemoComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const DemoComponent = (props: DemoComponentProps): JSX.Element => (
  <div>
    <p>NextJs Carousel</p>
    <Text field={props.fields.heading} />
    <Carousel>
                  <div>
                      <img src="/data/media/img/1.png" alt="image1"/>
                      <p className="legend">Image 1</p>
                  </div>
                  <div>
                      <img src="/data/media/img/2.png" alt="image2" />
                      <p className="legend">Image 2</p>
                  </div>
                  <div>
                      <img src="/data/media/img/3.png" alt="image3"/>
                      <p className="legend">Image 3</p>
                  </div>
                  <div>
                      <img src="/data/media/img/4.png" alt="image4"/>
                      <p className="legend">Image 4</p>
                  </div>
                  <div>
                      <img src="/data/media/img/5.png" alt="image5"/>
                      <p className="legend">Image 5</p>
                  </div>
              </Carousel>
  </div>
);

export default withDatasourceCheck()<DemoComponentProps>(DemoComponent);
