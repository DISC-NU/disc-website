export interface TreeNode {
  name: string;
  value?: number;
  children?: TreeNode[];
}

export const generateRandomData = (
  depth: number = 0,
  breadth: number = 5
): TreeNode => {
  const node: TreeNode = { name: `Node ${depth}-${breadth}` };
  if (depth < 3) {
    node.children = Array.from({ length: breadth }, (_, i) =>
      generateRandomData(depth + 1, Math.max(2, Math.floor(Math.random() * 5)))
    );
  } else {
    node.value = Math.floor(Math.random() * 1000000) + 100000;
  }
  return node;
};
