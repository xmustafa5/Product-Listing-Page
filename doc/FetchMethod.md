# Server-Client Hybrid Data Management Architecture

This document explains the hybrid architecture used for efficient data management and rendering in our Next.js application. This approach combines server-side rendering (SSR) with client-side updates using React Query.

## Overview

We utilize a combination of server components for initial data fetching and client wrapper components for dynamic updates. This strategy is necessary because React Query is not compatible with server components in Next.js.

## Key Components

1. Server Component: Handles initial data fetching
2. Client Wrapper Component: Manages React Query for data updates and UI interactions

## Benefits of this structure

1. Server-Side Rendering (SSR) with Client-Side Updates:

   - Server component fetches initial data.
   - Client wrapper receives this data and uses it as initialData for useQuery.

2. Separation of Concerns:

   - Server component handles the initial data fetch.
   - Client component manages subsequent data updates and UI interactions.

3. Performance Optimization:

   - Initial render uses server-fetched data for fast page loads.
   - Subsequent updates handled client-side for responsive UI.

4. Compatibility:
   - Allows use of React Query features in a Next.js app with server components.

## Why This Approach?

This structure enables us to leverage both server-side rendering for initial fast loads and client-side updates for dynamic interactions, working around the limitation of useQuery in server components.

## Implementation

- Server components fetch initial data and pass it to client wrapper components.
- Client wrappers use this data as `initialData` for React Query, enabling seamless transitions from SSR to CSR.

## Sample Code Example

Here's a simplified example demonstrating the core concepts of this architecture:

```typescript:app/components/DataComponent.tsx
// Server Component
import { fetchData } from '@/lib/api';
import DataWrapper from './DataWrapper';

export async function DataComponent() {
  const initialData = await fetchData();

  return <DataWrapper initialData={initialData} />;
}
```

```typescript:app/components/DataWrapper.tsx
// Client Component
'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/lib/api';

export default function DataWrapper({ initialData }) {
  const { data } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
    initialData: initialData,
  });

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

```typescript:lib/api.ts
// API functions
export async function fetchData() {
  // Fetch data on the client
  const res = await fetch('https://api.example.com/data');
  return res.json();
}
```

### POST Request Example

```typescript:app/components/CreateDataForm.tsx
'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createData } from '@/lib/api';

export default function CreateDataForm() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createData,
    onSuccess: (data) => {
      console.log("Data created successfully", data);
      queryClient.invalidateQueries({ queryKey: ['data'] }); // Refetch data after success
      // Additional success handling (e.g., close form, show notification)
    },
    onError: (error) => {
      console.log("Error creating data", error);
      // Error handling (e.g., show error message)
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    mutation.mutate(Object.fromEntries(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
}
```

```typescript:lib/api.ts
// Add this function to the existing api.ts file

export async function createData(data: any) {
  const response = await fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create data');
  }

  return response.json();
}
```

This example demonstrates:

- Server-side initial data fetching (`fetchInitialData` in `DataComponent`)
- Passing data to a client wrapper (`DataWrapper`)
- Using React Query for client-side data management and updates
- Seamless integration of server-rendered data with client-side interactivity

## Conclusion

By leveraging this hybrid approach, we achieve optimal performance, SEO benefits, and a smooth user experience across our Next.js application. The sample code provided illustrates how to implement this architecture, showcasing the separation of server and client responsibilities while maintaining efficient data flow and updates.
