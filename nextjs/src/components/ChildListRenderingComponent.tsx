import React from 'react';

const ChildListRenderingComponent = (fields: any) => (
  <div>
    <h1>{fields.Title.value}</h1>
  </div>
);

export default ChildListRenderingComponent;