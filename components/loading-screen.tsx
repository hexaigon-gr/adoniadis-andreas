import { Loader2 } from "lucide-react";
import Image from "next/image";

/** Full-screen branded loading state, matched to the site theme. */
export const LoadingScreen = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-5 bg-background">
      <Image
        src="/logo.png"
        alt="Ανδρέας Αντωνιάδης Auto Service"
        width={648}
        height={648}
        className="size-16 animate-pulse"
        priority
      />
      <Loader2 className="size-5 animate-spin text-brand" />
    </div>
  );
};

export default LoadingScreen;
