import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Suspense, lazy } from 'react';

const RoutesApp =lazy(() => import('./routes/index.routes'))

const App = () => {
  return (
    <Suspense>
        <RoutesApp />
    </Suspense>
  )
}

export default App
