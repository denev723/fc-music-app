import useMixMakers from "@/hooks/useGetMixMakers";
import MixMakerPanel from "@/presentionals/home/MixMakerPanel";
import { useAppStore } from "@/store";

export default function MixMakerContainer() {
  const { data } = useMixMakers();
  const { addToPlaylist } = useAppStore();

  return data ? (
    <MixMakerPanel
      mixMakers={data}
      title="패캠을 위한 믹스메이커"
      onItemClick={addToPlaylist}
    />
  ) : null;
}
