import { Skeleton } from "@/components/ui/skeleton";

export default function PopularStoryGridLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col space-y-2">
        <div className="relative">
          <Skeleton className="aspect-square w-full h-full rounded-xl" />
          <p className="absolute top-5 right-5 font-semibold text-6xl text-gray-300">
            1
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <Skeleton className="text-xs h-4 w-16 rounded" />
            <Skeleton className="font-semibold text-xl h-6 w-3/4 rounded mt-2" />
            <Skeleton className="text-sm h-4 w-1/2 rounded mt-1" />
          </div>
          <Skeleton className="line-clamp-2 text-ellipsis text-sm h-8 rounded mt-2" />
        </div>
      </div>
    </div>
  );
}
