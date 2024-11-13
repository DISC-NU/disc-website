"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { TreeNode, generateRandomData } from "@/lib/treeMapUtils";

interface TreeMapProps {
  width: number;
  height: number;
}

const colorPalette = [
  "#40B4B4", // Base teal
  "#4AC0C0", // Lighter teal
  "#35A3A3", // Darker teal
  "#5ECECE", // Brightest teal
  "#308F8F", // Deepest teal
  "#E6F7F7", // Very light teal
  "#D0F0F0", // Light teal
  "#B9E9E9", // Medium light teala
  "#297777", // darker teal
  "#246666", // very dark teal
  "#1D5555", // deepest teal
  "#4DCCCC", // bright teal
  "#3AA3A3", // medium teal
  "#2E8888", // dark medium teal
];

export default function HeroTreeMap({ width, height }: TreeMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodes, setNodes] = useState<d3.HierarchyRectangularNode<TreeNode>[]>(
    []
  );
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] =
    useState(false);

  const animateNode = (node: d3.HierarchyRectangularNode<TreeNode>) => {
    d3.select(svgRef.current)
      .selectAll("rect")
      .filter((d: any) => d === node)
      .transition()
      .duration(900)
      .ease(d3.easeSinInOut)
      .attr("fill", "#E6F7F7")
      .attrTween("transform", () => {
        return (t) => {
          const scale = 1 + 0.04 * Math.sin(Math.PI * t);
          const offset = 0.02 * Math.sin(Math.PI * t);
          return `translate(${-offset * node.x0}, ${
            -offset * node.y0
          }) scale(${scale})`;
        };
      })
      .transition()
      .duration(900)
      .ease(d3.easeSinInOut)
      .attr("fill", (d: any) => d._colorValue)
      .attrTween("transform", () => {
        return (t) => {
          const scale = 1 + 0.04 * (1 - Math.sin(Math.PI * (t + 0.5)));
          const offset = 0.02 * (1 - Math.sin(Math.PI * (t + 0.5)));
          return `translate(${-offset * node.x0}, ${
            -offset * node.y0
          }) scale(${scale})`;
        };
      });
  };

  useEffect(() => {
    if (!svgRef.current || width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const data: TreeNode = {
      name: "Company",
      children: Array.from({ length: 10 }, (_, i) => generateRandomData(1, 5)),
    };

    const root = d3
      .hierarchy(data)
      .sum((d) => d.value || 0)
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    const treemapLayout = d3
      .treemap<TreeNode>()
      .size([width, height])
      .paddingOuter(1)
      .paddingTop(0)
      .paddingInner(0)
      .round(true);

    treemapLayout(root);

    const allNodes = root.descendants();
    const leaves = root.leaves();
    const sortedLeaves = leaves.sort((a, b) => (b.value || 0) - (a.value || 0));

    const getColorForNode = (
      node: d3.HierarchyNode<TreeNode>,
      index: number
    ) => {
      const normalizedIndex = index / (leaves.length - 1);
      if (normalizedIndex < 0.2) {
        return colorPalette.slice(8, 11)[Math.floor(normalizedIndex * 15)];
      } else if (normalizedIndex < 0.5) {
        return colorPalette.slice(0, 5)[
          Math.floor((normalizedIndex - 0.2) * 10)
        ];
      } else {
        return colorPalette.slice(5, 8)[
          Math.floor((normalizedIndex - 0.5) * 6)
        ];
      }
    };

    sortedLeaves.forEach((node, index) => {
      (node as any)._colorValue = getColorForNode(node, index);
    });

    const cell = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      // @ts-expect-error something with d3
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    cell
      .append("rect")
      // @ts-expect-error something with d3
      .attr("width", (d) => d.x1 - d.x0)
      // @ts-expect-error something with d3
      .attr("height", (d) => d.y1 - d.y0)
      .attr("fill", (d: any) => d._colorValue)
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .style("transition", "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)");
    // @ts-expect-error something with d3
    setNodes(root.leaves());
  }, [width, height]);

  useEffect(() => {
    if (nodes.length === 0) return;
    const animateInitialNodes = async () => {
      const largerNodes = nodes
        .sort((a, b) => (b.value || 0) - (a.value || 0))
        .slice(0, 3);

      for (const node of largerNodes) {
        animateNode(node);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
      const mediumNodes = nodes
        .sort((a, b) => (b.value || 0) - (a.value || 0))
        .slice(3, 8);

      for (const node of mediumNodes) {
        animateNode(node);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      await new Promise((resolve) => setTimeout(resolve, 500));
      const smallerNodes = nodes
        .sort((a, b) => (a.value || 0) - (b.value || 0))
        .slice(0, 5);

      for (const node of smallerNodes) {
        animateNode(node);
        await new Promise((resolve) => setTimeout(resolve, 150));
      }

      setIsInitialAnimationComplete(true);
    };

    animateInitialNodes();
  }, [nodes]);

  useEffect(() => {
    if (!isInitialAnimationComplete || nodes.length === 0) return;

    const animateRandomNode = () => {
      const numNodesToAnimate = 2;
      const randomIndices = Array.from({ length: numNodesToAnimate }, () =>
        Math.floor(Math.random() * nodes.length)
      );

      randomIndices.forEach((randomIndex) => {
        animateNode(nodes[randomIndex]);
      });
    };

    const intervalId = setInterval(animateRandomNode, 1000);
    return () => clearInterval(intervalId);
  }, [nodes, isInitialAnimationComplete]);

  return <svg ref={svgRef} width="100%" height="100%" />;
}
