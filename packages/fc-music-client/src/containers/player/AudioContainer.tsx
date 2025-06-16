import ProgressBar from "@/containers/player/ProgressBar";
import VolumeController from "@/containers/player/VolumeController";
import useAudioPlayer from "@/hooks/player/useAudioPlayer";
import PlayButton from "@/presentionals/player/PlayButton";

interface Props {
  src?: string;
}

export default function AudioContainer({ src }: Props) {
  const {
    audioRef,
    play,
    pause,
    duration,
    currentTime,
    volume,
    status,
    changeCurrentTime,
    changeVolume,
  } = useAudioPlayer();

  return (
    <div className="flex justify-center items-end pt-18 pb-22">
      <div className="flex flex-col w-[464px] gap-y-16">
        <div className="flex gap-x-20 justify-center">
          <button>shuffle</button>
          <button>prev</button>
          <PlayButton
            status={status}
            onToggle={status === "playing" ? pause : play}
          />
          <button>next</button>
          <button>repeat</button>
        </div>
        <ProgressBar
          onChange={(seconds) => changeCurrentTime(seconds)}
          currentTime={currentTime}
          duration={duration}
        />
      </div>
      <div className="ml-61">
        <VolumeController volume={volume} onChange={(v) => changeVolume(v)} />
      </div>
      <audio ref={audioRef} src={src} />
    </div>
  );
}
