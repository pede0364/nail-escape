import Button from "@mui/material/Button";
import dynamic from "next/dynamic";
import {FC, memo} from 'react';

import Page from '../components/layout/Page';
import {homePageMeta} from '../data/data';

const Header = dynamic(() => import('../components/Header'), {ssr: false});

const App: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <>
        <h1>Welcome!</h1>
        <Button variant="contained">Book Now</Button>
      </>
    </Page>
  );
});

App.displayName = 'App';
export default App;
