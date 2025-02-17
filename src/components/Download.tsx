import { useConfigDownloads } from '@/hooks/useConfigDownloads';
import Image from 'next/image';
import { CodeComponent } from './CodeComponent';
import { StepTitle } from './StepTitle';

export function Download() {
  const { rollupConfigDownloadData, rollupConfigDisplayData, l3Config } = useConfigDownloads();

  return (
    <>
      <StepTitle>Download Config</StepTitle>
      <p className="my-1">Configuration files are required to deploy locally.</p>
      <div className="mx-0 my-2 grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-bold">Rollup Config</h4>
          {!rollupConfigDownloadData ? (
            <div>No rollup data found.</div>
          ) : (
            <CodeComponent
              fileName="nodeConfig.json"
              dataToDownload={rollupConfigDownloadData}
              dataToDisplay={rollupConfigDisplayData}
            />
          )}
        </div>
        <div>
          <h4 className="font-bold">L3 Config</h4>
          {!l3Config ? (
            <div>No L3 configuration data found.</div>
          ) : (
            <CodeComponent
              fileName="orbitSetupScriptConfig.json"
              dataToDownload={l3Config}
              dataToDisplay={l3Config}
            />
          )}
        </div>
      </div>
    </>
  );
}
