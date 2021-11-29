export interface ISEOProps {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  title: string;
}

export interface IMemojiProps {
  height?: number | string;
  width?: number | string;
  ml?: number;
  padding?: number;
}

export interface INavLinkProps {
  fontSize?: number;
  padding?: number;
  onClick?: () => void;
}
