import LazyYoutube from "./ui/lazy-youtube";

export default function WatchDemo() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/2 h-1/2">
        <LazyYoutube videoId="EFJsghRYfjY" />
      </div>
    </div>
  );
}
