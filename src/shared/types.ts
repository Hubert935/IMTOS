export interface Emotion {
    id: string;
    emoji: string;
  }
  
  export const emotions: Emotion[] = [
    { id: "emotion-1", emoji: "😍" },
    { id: "emotion-2", emoji: "🤡" },
    { id: "emotion-3", emoji: "🥴" },
  ];
  
  export interface TeamState {
    state: { key: string; value: string }[];
  }
  
  export interface TeamEventMean {
    type: string;
    value: number;
  }