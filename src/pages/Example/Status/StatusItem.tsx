import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useTeamEventMean } from "../../../shared/api";
import { Emotion } from "../../../shared/types";
import styles from "./StatusItem.module.css";

const MIN_SCALE = 0.2;
const MAX_SCALE = 1.0;

const useEmotionScale = (emotionId: string) => {
  const [scale, setScale] = useState(MIN_SCALE);
  const teamEventMean = useTeamEventMean();
  const eventValue = _.round(
    teamEventMean?.find((m) => m.type === emotionId)?.value ?? 0,
    2
  );

  // Update scale when emotion event value is changed
  useEffect(() => {
    const newScale = eventValue / (1 + eventValue); // [0, inf] -> [0, 1]
    setScale(_.clamp(newScale, MIN_SCALE, MAX_SCALE));
  }, [eventValue]);

  return scale;
};

interface StatusItemProps {
  emotion: Emotion;
}
export const StatusItem = ({ emotion }: StatusItemProps) => {
  const scale = useEmotionScale(emotion.id);

  return (
    <div className={styles.container}>
      <span className={styles.content} style={{ transform: `scale(${scale})` }}>
        {emotion.emoji}
      </span>
    </div>
  );
};