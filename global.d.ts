declare module 'react' {
  const React: any;
  export default React;
  export = React;
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
  const Link: any;
  export default Link;
}

declare module 'next/image' {
  const Image: any;
  export default Image;
}

declare module 'lucide-react' {
  export const ArrowRight: any;
  export const CheckCircle2: any;
  export const ShieldCheck: any;
  export const Users: any;
  export const Building: any;
  export const Award: any;
  export const Phone: any;
  export const Mail: any;
  export const MapPin: any;
  export const Clock: any;
  export const ChevronDown: any;
  export const Menu: any;
  export const X: any;
  export const ExternalLink: any;
  export const FileText: any;
  export const Download: any;
  export const Copy: any;
  export const Check: any;
  const all: any;
  export default all;
}
