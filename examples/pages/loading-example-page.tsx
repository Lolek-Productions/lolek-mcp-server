import React, { useState, useEffect } from 'react';
import PageContainer from '@/components/page-container';
import { Loading } from '@/components/loading';
import { Button } from '@/components/ui/button';

export default function LoadingExamplePage() {
  const [loadingType, setLoadingType] = useState<'spinner' | 'skeleton-cards' | 'skeleton-list'>('spinner');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setData([
        { id: 1, title: 'Sample Item 1', description: 'Description for item 1' },
        { id: 2, title: 'Sample Item 2', description: 'Description for item 2' },
        { id: 3, title: 'Sample Item 3', description: 'Description for item 3' },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loadingType]);

  const handleLoadingTypeChange = (type: 'spinner' | 'skeleton-cards' | 'skeleton-list') => {
    setLoadingType(type);
    setIsLoading(true);
    setData([]);
  };

  return (
    <PageContainer 
      title="Loading States Example" 
      description="Demonstration of different loading variants within PageContainer"
    >
      <div className="space-y-6">
        {/* Loading Type Controls */}
        <div className="flex gap-2 flex-wrap">
          <Button 
            variant={loadingType === 'spinner' ? 'default' : 'outline'}
            onClick={() => handleLoadingTypeChange('spinner')}
          >
            Spinner Loading
          </Button>
          <Button 
            variant={loadingType === 'skeleton-cards' ? 'default' : 'outline'}
            onClick={() => handleLoadingTypeChange('skeleton-cards')}
          >
            Skeleton Cards
          </Button>
          <Button 
            variant={loadingType === 'skeleton-list' ? 'default' : 'outline'}
            onClick={() => handleLoadingTypeChange('skeleton-list')}
          >
            Skeleton List
          </Button>
        </div>

        {/* Loading Content Area */}
        <div className="min-h-[400px]">
          {isLoading ? (
            // CORRECT: Loading component WITHIN PageContainer, centered={false}
            <Loading 
              variant={loadingType} 
              centered={false}
              message={
                loadingType === 'spinner' ? 'Loading data...' :
                loadingType === 'skeleton-cards' ? undefined :
                undefined
              }
            />
          ) : (
            // Actual content after loading
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Loaded Content</h2>
              {loadingType === 'skeleton-cards' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 space-y-2">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {data.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 border rounded-lg p-4">
                      <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center">
                        {item.id}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Usage Notes */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
          <h3 className="font-medium">Loading Pattern Guidelines:</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Always use Loading components WITHIN PageContainer, not as replacement</li>
            <li>• Set centered={false} to avoid double-centering when inside PageContainer</li>
            <li>• Choose variant based on expected content layout</li>
            <li>• Use 'spinner' for general loading states</li>
            <li>• Use 'skeleton-cards' when loading card-based layouts</li>
            <li>• Use 'skeleton-list' when loading list-based layouts</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}