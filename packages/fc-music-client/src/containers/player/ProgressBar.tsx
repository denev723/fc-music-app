import Slider from "@/presentionals/player/Slider";
import { formatTime } from "@/utils/player/time";
import { ChangeEvent } from "react";

interface Props {
  currentTime: number;
  duration: number;
  onChange: (seconds: number) => void;
}

export default function ProgressBar({
  currentTime,
  duration,
  onChange,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const seconds = Number(e.currentTarget.value);
    onChange(seconds);
  };

  return (
    <div className="flex items-center gap-x-17">
      <span>{formatTime(currentTime)}</span>
      <Slider min={0} max={duration} onChange={handleChange} />
      <span>{formatTime(duration)}</span>
    </div>
  );
}
