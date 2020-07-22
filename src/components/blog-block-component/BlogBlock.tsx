import React, { ReactNode } from 'react';
import './blog-block.styles.css';

import AnchorLinks from '../shared/anchor-links/AnchorLinks';

interface IBlogBlockProp {
  heading: string;
  children: ReactNode;
}
const BlogBlock: React.FC<IBlogBlockProp> = ({ heading, children }) => {
  return (
    <div id="blog-block">
      <div className="blog-block-container">
        <h3 className="section-heading">{heading}</h3>
        {children}
        <AnchorLinks>All property news</AnchorLinks>
      </div>
    </div>
  );
};

export default BlogBlock;
