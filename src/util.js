import React from 'react';
import rehypeReact from 'rehype-react';

export const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler;
