export interface Emotion {
    id: string;
    emoji: string;
  }
  
  export interface TeamState {
    state: { key: string; value: string }[];
  }
  
  export interface TeamEventMean {
    type: string;
    value: number;
  }

  export interface EventType{
    id: string;
    data: string;
  }

  export const working: EventType[] = [
    {id:"working", data:"true"},
    {id:"working", data:"false"},
  ]

  export const emotions: EventType[] = [
    { id: "emotion-1", data: "happy" },
    { id: "emotion-2", data: "sad" },
  ];