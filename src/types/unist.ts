export interface UnistNode {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: UnistNode[];
}

export interface UnistTree {
  type: string;
  children: UnistNode[];
}
