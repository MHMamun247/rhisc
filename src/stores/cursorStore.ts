import { create } from 'zustand';

interface CursorState {
  isHovering: boolean;
  hoverScale: number;
  cursorText: string;
  setHovering: (hovering: boolean) => void;
  setHoverScale: (scale: number) => void;
  setCursorText: (text: string) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  isHovering: false,
  hoverScale: 1,
  cursorText: '',
  setHovering: (hovering) => set({ isHovering: hovering }),
  setHoverScale: (scale) => set({ hoverScale: scale }),
  setCursorText: (text) => set({ cursorText: text }),
}));
