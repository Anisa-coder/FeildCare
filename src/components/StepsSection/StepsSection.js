import { ChevronRight } from 'lucide-react';
import UploadCard from '../UploadCard/UploadCard';
import DetectCard from '../DetectCard/DetectCard';
import ResultsCard from '../ResultsCard/ResultsCard';

export default function StepsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-8 items-stretch">
      {/* Step 1 */}
      <div className="relative pr-0 lg:pr-4">
        <UploadCard />
        {/* Arrow between step 1 and 2 */}
        <div className="absolute -right-0 top-1/2 -translate-y-1/2 hidden lg:flex w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 shadow-md z-20">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="relative px-0 lg:px-2">
        <DetectCard />
        {/* Arrow between step 2 and 3 */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden lg:flex w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 shadow-md z-20">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="pl-0 lg:pl-4">
        <ResultsCard />
      </div>
    </div>
  );
}
