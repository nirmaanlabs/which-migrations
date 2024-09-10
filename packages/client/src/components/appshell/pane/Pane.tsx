import React, { useState } from "react";
import { FilePlus } from "lucide-react";

import { cn } from "@/lib/utils";

import styles from "./pane.module.css";
import { Box } from "@/components/ui/box";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type PaneProps = {
  children: React.ReactNode;
  title: string;
};

export const Pane = ({ children, title }: PaneProps) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Box className={styles.pane}>
      <Box className={styles.paneHeader}>
        <Box className="flex" onClick={() => setExpanded(!expanded)}>
          <Box
            className={cn(
              styles.twistyContainer,
              "codicon",
              expanded ? "codicon-chevron-down" : "codicon-chevron-up"
            )}
          ></Box>
          <h3 className={styles.title}>{title}</h3>
        </Box>

        <Box className="db-actions">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <FilePlus size={16} strokeWidth={1.5} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect New Database</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Box>
      </Box>
      {expanded && <div className={styles.paneBody}>{children}</div>}
    </Box>
  );
};
