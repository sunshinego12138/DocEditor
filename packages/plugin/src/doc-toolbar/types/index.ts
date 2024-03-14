import type { TriggerProps } from "@arco-design/web-react/es/Trigger/interface";
import type { EditorCommands, EditorSuite } from "doc-editor-core";
import type { EditorSchema } from "doc-editor-core";
import type { Path } from "doc-editor-delta";
import type { RenderElementProps } from "doc-editor-delta";

export const DOC_TOOLBAR_KEY = "doc-toolbar";

export type DocToolBarState = {
  path: Path;
  editor: EditorSuite;
  schema: EditorSchema;
  commands: EditorCommands;
  element: RenderElementProps["element"];
  status: {
    isBlock: boolean;
    isEmptyLine: boolean;
    isNextLine: boolean;
    isInCodeBlock: boolean;
    isInReactLive: boolean;
    isInHighLightBlock: boolean;
  };
  close: () => void;
};

export type DocToolbarPlugin = {
  renderIcon: (
    state: DocToolBarState
  ) => null | { element: JSX.Element; config?: Partial<TriggerProps> };
  renderSignal: (state: DocToolBarState) => JSX.Element | null;
  renderBanner: (state: DocToolBarState) => JSX.Element | null;
};
