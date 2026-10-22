/// <reference types="node" />

declare module 'react' {
  export = React;
  export as namespace React;
  namespace React {
    type ReactNode = any;
    type ReactElement = any;
    type FC<P = {}> = (props: P) => ReactElement | null;
    function useState<T>(initial: T): [T, (val: T | ((prev: T) => T)) => void];
    function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'next/link' {
  import React from 'react';
  interface LinkProps {
    href: string;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module 'next/image' {
  import React from 'react';
  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    priority?: boolean;
    [key: string]: any;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module 'lucide-react' {
  import React from 'react';
  export const ArrowRight: React.FC<any>;
  export const CheckCircle2: React.FC<any>;
  export const ShieldCheck: React.FC<any>;
  export const Users: React.FC<any>;
  export const Building: React.FC<any>;
  export const Award: React.FC<any>;
  export const Phone: React.FC<any>;
  export const Mail: React.FC<any>;
  export const MapPin: React.FC<any>;
  export const Clock: React.FC<any>;
  export const ChevronDown: React.FC<any>;
  export const Menu: React.FC<any>;
  export const X: React.FC<any>;
  export const ExternalLink: React.FC<any>;
  export const FileText: React.FC<any>;
  export const Download: React.FC<any>;
  export const Copy: React.FC<any>;
  export const Check: React.FC<any>;
}
