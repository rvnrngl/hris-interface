import { ClipLoader } from "react-spinners";
import { useLoadingStore } from "../store/loadingStore";

export const LoadingOverlay = () => {
  const loading = useLoadingStore((state) => state.loading);

  return loading ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30">
      <ClipLoader size={50} color="#4299E1" />
    </div>
  ) : null;
};
